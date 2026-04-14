#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '../src/data/github-stats.json');
const USER = 'igembitsky';
const DAYS = 90;
const PAGE_LIMIT = 10;

const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const since = new Date(Date.now() - DAYS * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'portfolio-fetch-stats',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`GitHub ${res.status} ${res.statusText} for ${path}`);
  return res.json();
}

function writeOutput(obj) {
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(obj, null, 2) + '\n');
  console.log(`wrote ${OUT_PATH}`);
  console.log(JSON.stringify(obj, null, 2));
}

if (!token) {
  console.warn('[fetch-github-stats] no GH_TOKEN/GITHUB_TOKEN; writing stale fallback');
  writeOutput({
    commits: 0,
    repos: 0,
    prs: 0,
    lastActivityISO: null,
    fetchedAt: new Date().toISOString(),
    stale: true,
  });
  process.exit(0);
}

const result = {
  commits: 0,
  repos: 0,
  prs: 0,
  lastActivityISO: null,
  fetchedAt: new Date().toISOString(),
  stale: false,
};

async function fetchCommitsAndRepos() {
  const repoSet = new Set();
  let totalCount = 0;
  for (let page = 1; page <= PAGE_LIMIT; page++) {
    const data = await gh(
      `/search/commits?q=author:${USER}+author-date:>=${since}&per_page=100&page=${page}`
    );
    if (page === 1) totalCount = data.total_count;
    for (const item of data.items || []) {
      if (item.repository?.full_name) repoSet.add(item.repository.full_name);
    }
    if ((data.items || []).length < 100) break;
  }
  result.commits = totalCount;
  result.repos = repoSet.size;
}

async function fetchMergedPRs() {
  const data = await gh(
    `/search/issues?q=type:pr+author:${USER}+is:merged+merged:>=${since}`
  );
  result.prs = data.total_count;
}

async function fetchLastActivity() {
  const data = await gh(`/users/${USER}/events/public?per_page=1`);
  if (Array.isArray(data) && data[0]?.created_at) {
    result.lastActivityISO = data[0].created_at;
  }
}

const jobs = [
  ['commits/repos', fetchCommitsAndRepos],
  ['merged PRs', fetchMergedPRs],
  ['last activity', fetchLastActivity],
];

for (const [name, job] of jobs) {
  try {
    await job();
  } catch (err) {
    console.warn(`[fetch-github-stats] ${name} failed: ${err.message}`);
    result.stale = true;
  }
}

writeOutput(result);
