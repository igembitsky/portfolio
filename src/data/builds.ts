export interface BuildItem {
  name: string;
  headline: string;
  description: string;
  stack: string[];
  url: string;
  featured?: boolean;
  category: 'production' | 'automation' | 'creative';
}

export const builds: BuildItem[] = [
  {
    name: 'Canary SaaS Platform',
    headline: 'Production safety ops for industrial sites',
    description:
      'Full-stack serverless platform with incident triage, video review, pattern analytics, configurable safety rules, and human-in-the-loop AI messaging. Shipped to production with real paying customers.',
    stack: ['React', 'AWS SAM', 'Lambda', 'DynamoDB', 'IoT Core', 'S3'],
    url: 'https://canaryaware.com',
    featured: true,
    category: 'production',
  },
  {
    name: 'Invoice Agent',
    headline: 'Hands-free monthly invoicing',
    description:
      'Collects invoices from providers, generates client invoices from Toggl time tracking, gets human approval via Telegram, and emails everything out. Two scheduled Cloud Run jobs, zero manual steps on billing day.',
    stack: ['Python', 'Flask', 'Cloud Run', 'Playwright', 'Telegram Bot', 'Gmail API'],
    url: 'https://github.com/igembitsky/invoice-agent',
    category: 'automation',
  },
  {
    name: 'Tax Bot',
    headline: 'Multi-agent US expat tax filing',
    description:
      'Filing system for Americans living abroad. Handles 10+ IRS forms including FBAR, GILTI, and foreign earned income exclusion. Replaces a $3K/year tax preparer with a modular agent pipeline.',
    stack: ['Next.js', 'Claude API', 'Drizzle ORM', 'Python', 'pdf-lib'],
    url: '#',
    category: 'automation',
  },
  {
    name: 'Toggl Timesheet Sync',
    headline: 'Automated time tracking pipeline',
    description:
      'Syncs Toggl entries into Google Sheets, detects last sync point, transforms data, and injects Apps Script. Solved real browser automation constraints like clipboard API restrictions and OAuth quirks.',
    stack: ['Python', 'Toggl API', 'Google Apps Script'],
    url: '#',
    category: 'automation',
  },
  {
    name: 'NYC Walking Guide',
    headline: '5 curated routes through the real New York',
    description:
      'Interactive city guide with hand-picked walking routes, points of interest, and local tips. Built with Leaflet.js for the maps.',
    stack: ['TypeScript', 'Astro', 'Leaflet.js'],
    url: 'https://github.com/igembitsky/nyc-guide',
    category: 'creative',
  },
  {
    name: 'Legend of Nikita',
    headline: '2D browser game with full CI/CD',
    description:
      'Phaser 3 game with physics, animations, and input handling. Includes a Playwright E2E test suite and automated build pipeline. Because games should have tests too.',
    stack: ['JavaScript', 'Phaser 3', 'Playwright', 'Vite'],
    url: 'https://github.com/igembitsky/legend-of-nikita',
    category: 'creative',
  },
];
