import type { GalleryImage, ImageLayout } from './portfolio';

export interface BuildItem {
  name: string;
  headline: string;
  description: string;
  stack: string[];
  url: string;
  featured?: boolean;
  category: 'production' | 'automation' | 'creative';
  diagram?: 'invoice' | 'taxbot' | 'invoicing' | 'vibeops';
  image?: string;
  imageLayout?: ImageLayout;
  galleryImages?: GalleryImage[];
}

export const builds: BuildItem[] = [
  {
    name: 'Canary SaaS Platform',
    headline: 'Production safety ops for industrial sites',
    description:
      'Serverless platform: incident triage, video review, pattern analytics, configurable safety rules, human-in-the-loop AI messaging. Live with paying customers.',
    stack: ['React', 'AWS SAM', 'Lambda', 'DynamoDB', 'IoT Core', 'S3'],
    url: 'https://canaryaware.com',
    featured: true,
    category: 'production',
  },
  {
    name: 'VibeOps Tracker',
    headline: 'Local-first issue tracker with an AI agent backend',
    description:
      'When you build several things at once, bugs and stray ideas pile up faster than you can act on them, and stopping mid-flow to fix each one wrecks your focus. So they land here instead: a one-line widget captures issues from any web app, a Kanban board sets priority, and an MCP server lets AI coding agents pick up and clear the backlog while you keep building. Everything runs locally, nothing in the cloud.',
    stack: ['Node.js', 'MCP', 'Vanilla JS', 'Markdown'],
    url: 'https://github.com/igembitsky/vibeops-tracker',
    category: 'automation',
    diagram: 'vibeops',
  },
  {
    name: 'Invoicing Pipeline',
    headline: 'Provider invoices in, client invoices out, hands-free',
    description:
      'Monthly billing used to be a manual slog: download each provider invoice, turn tracked hours into a client invoice, double-check it, and send everything out. Now it runs itself. A headless browser scrapes the provider invoices, Toggl hours flow into a templated Google Sheet and a branded PDF, and a Telegram approval gate gives a one-tap sign-off before Gmail delivers it all. Two scheduled Cloud Run jobs, zero manual steps on billing day.',
    stack: ['Python', 'Cloud Run', 'Playwright', 'Toggl API', 'Google Sheets API', 'Telegram Bot', 'Gmail API'],
    url: '#',
    category: 'automation',
    diagram: 'invoice',
  },
  {
    name: 'Tax Orchestrator',
    headline: 'Organizes and analyzes your whole tax picture',
    description:
      'My taxes used to be a black box I handed to accountants. Now I drop in any document as it arrives, and an orchestrator of specialist agents organizes it, analyzes it against my profile and prior years, and flags what is still missing. I get year-over-year comparisons, tax-strategy models, and a second opinion on what my accountant files, turning a process I outsourced into one I understand and can push back on.',
    stack: ['Next.js', 'Claude API', 'Drizzle ORM', 'Python', 'pdf-lib'],
    url: '#',
    category: 'automation',
    diagram: 'taxbot',
  },
  {
    name: 'NYC Walking Guide',
    headline: '5 curated routes through the real New York',
    description:
      'Interactive city guide: hand-picked routes, points of interest, local tips. Leaflet.js for the maps.',
    stack: ['TypeScript', 'Astro', 'Leaflet.js'],
    url: 'https://github.com/igembitsky/nyc-guide',
    category: 'creative',
    image: 'assets/personal/nyc-map.png',
    imageLayout: 'poster',
    galleryImages: [
      { src: 'assets/personal/nyc-map.png', layout: 'poster', alt: 'NYC walking guide map view' },
      { src: 'assets/personal/nyc-list.png', layout: 'poster', alt: 'NYC walking guide routes list' },
    ],
  },
  {
    name: 'Legend of Nikita',
    headline: '2D browser game with full CI/CD',
    description:
      'Phaser 3 game with physics, animations, input handling. Playwright E2E suite and automated build pipeline. Because games should have tests too.',
    stack: ['JavaScript', 'Phaser 3', 'Playwright', 'Vite'],
    url: 'https://github.com/igembitsky/legend-of-nikita',
    category: 'creative',
    image: 'assets/personal/nikita.png',
    imageLayout: 'poster',
    galleryImages: [
      { src: 'assets/personal/nikita.png', layout: 'poster', alt: 'Legend of Nikita gameplay' },
    ],
  },
];
