#!/usr/bin/env node
import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '../src/data/github-stats.json');
const USER = 'igembitsky';
const DAYS = 90;
const PAGE_LIMIT = 10; // GitHub Search caps results at 1000 (10 pages of 100); page 11+ returns 422
const PAGE_DELAY_MS = 2000; // gentle pacing between Search API pages to dodge the secondary rate limit

const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const since = new Date(Date.now() - DAYS * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Last-good snapshot. On any failure we keep these numbers instead of zeroing
// out, so a transient API hiccup never makes the widget disappear.
let previous = {};
try {
  previous = JSON.parse(readFileSync(OUT_PATH, 'utf8'));
} catch {
  // first run, no prior data
}

const result = {
  commits: typeof previous.commits === 'number' ? previous.commits : 0,
  repos: typeof previous.repos === 'number' ? previous.repos : 0,
  prs: typeof previous.prs === 'number' ? previous.prs : 0,
  lastActivityISO: previous.lastActivityISO ?? null,
  fetchedAt: new Date().toISOString(),
  stale: false,
};

const ALLOWED_KEYS = ['commits', 'repos', 'prs', 'lastActivityISO', 'fetchedAt', 'stale'];

function writeOutput(obj) {
  const extras = Object.keys(obj).filter((k) => !ALLOWED_KEYS.includes(k));
  if (extras.length) {
    console.error(`[fetch-github-stats] refusing to write disallowed keys: ${extras.join(', ')}`);
    process.exit(1);
  }
  for (const [k, v] of Object.entries(obj)) {
    if (k === 'lastActivityISO') continue;
    if (v !== null && typeof v !== 'number' && typeof v !== 'boolean' && typeof v !== 'string') {
      console.error(`[fetch-github-stats] refusing to write non-primitive value for ${k}`);
      process.exit(1);
    }
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(obj, null, 2) + '\n');
  console.log(`wrote ${OUT_PATH}`);
  console.log(JSON.stringify(obj, null, 2));
}

if (!token) {
  console.warn('[fetch-github-stats] no GH_TOKEN/GITHUB_TOKEN; keeping last-good data, marking stale');
  writeOutput({ ...result, stale: true });
  process.exit(0);
}

const baseHeaders = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'portfolio-fetch-stats',
  Authorization: `Bearer ${token}`,
};

// GET with resilient handling of GitHub's primary + secondary (burst) rate limits.
async function gh(path, { accept } = {}, attempt = 0) {
  const headers = accept ? { ...baseHeaders, Accept: accept } : baseHeaders;
  const res = await fetch(`https://api.github.com${path}`, { headers });

  if ((res.status === 403 || res.status === 429) && attempt < 4) {
    const retryAfter = Number(res.headers.get('retry-after'));
    const reset = Number(res.headers.get('x-ratelimit-reset'));
    const remaining = Number(res.headers.get('x-ratelimit-remaining'));
    let waitMs;
    if (Number.isFinite(retryAfter) && retryAfter > 0) {
      waitMs = retryAfter * 1000;
    } else if (Number.isFinite(reset) && remaining === 0) {
      waitMs = reset * 1000 - Date.now() + 1000;
    } else {
      waitMs = 2000 * (attempt + 1);
    }
    waitMs = Math.min(Math.max(waitMs, 1000), 60000);
    console.warn(`[fetch-github-stats] ${res.status} on ${path}; waiting ${Math.round(waitMs / 1000)}s then retrying (attempt ${attempt + 1})`);
    await sleep(waitMs);
    return gh(path, { accept }, attempt + 1);
  }

  if (!res.ok) throw new Error(`GitHub ${res.status} ${res.statusText} for ${path}`);
  return res.json();
}

// Commit count is free from page 1's total_count. We then walk pages gently
// (only to dedupe the repo set), pacing requests so we don't trip the Search
// API's secondary rate limit. Commit count is committed early so a mid-walk
// failure still keeps the fresh number.
async function fetchCommitsAndRepos() {
  const repoSet = new Set();
  for (let page = 1; page <= PAGE_LIMIT; page++) {
    let data;
    try {
      data = await gh(
        `/search/commits?q=author:${USER}+author-date:>=${since}&sort=author-date&order=desc&per_page=100&page=${page}`,
        { accept: 'application/vnd.github.cloak-preview+json' }
      );
    } catch (err) {
      // Search caps at 1000 results; walking past that returns 422. Stop paging
      // and keep the repos collected so far rather than failing the whole fetch.
      if (page > 1 && /\b422\b/.test(err.message)) break;
      throw err;
    }
    if (page === 1) result.commits = data.total_count;
    for (const item of data.items || []) {
      if (item.repository?.full_name) repoSet.add(item.repository.full_name);
    }
    if ((data.items || []).length < 100) break;
    if (page < PAGE_LIMIT) await sleep(PAGE_DELAY_MS);
  }
  result.repos = repoSet.size;
}

async function fetchMergedPRs() {
  const data = await gh(`/search/issues?q=type:pr+author:${USER}+is:merged+merged:>=${since}`);
  result.prs = data.total_count;
}

async function fetchLastActivity() {
  const data = await gh(`/users/${USER}/events/public?per_page=1`);
  if (Array.isArray(data) && data[0]?.created_at) {
    result.lastActivityISO = data[0].created_at;
  }
}

for (const [name, job] of [
  ['commits/repos', fetchCommitsAndRepos],
  ['merged PRs', fetchMergedPRs],
  ['last activity', fetchLastActivity],
]) {
  try {
    await job();
  } catch (err) {
    console.warn(`[fetch-github-stats] ${name} failed: ${err.message} (keeping last-good)`);
    result.stale = true;
  }
}

writeOutput(result);
