import type { GalleryImage, ImageLayout } from './portfolio';

export interface BuildItem {
  name: string;
  headline: string;
  description: string;
  stack: string[];
  url: string;
  featured?: boolean;
  category: 'production' | 'automation' | 'creative';
  diagram?: 'invoice' | 'taxbot' | 'invoicing';
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
      'An issue tracker that runs entirely on your machine. A one-line widget captures bugs from any web app, a Kanban board sets priority, and an MCP server lets AI coding agents pick up and clear the backlog. Issues are plain markdown, so nothing leaves your laptop. Open source on npm, with 69 passing tests and CI.',
    stack: ['Node.js', 'MCP', 'Vanilla JS', 'Markdown'],
    url: 'https://github.com/igembitsky/vibeops-tracker',
    category: 'automation',
    image: 'assets/tools/vibeops-board.png',
    imageLayout: 'desktop',
    galleryImages: [
      { src: 'assets/tools/vibeops-board.png', layout: 'desktop', alt: 'VibeOps Tracker Kanban board with issues across four columns' },
      { src: 'assets/tools/vibeops-widget.png', layout: 'desktop', alt: 'Capturing an issue with the floating widget on a demo app' },
    ],
  },
  {
    name: 'Invoicing Pipeline',
    headline: 'Provider invoices in, client invoices out, hands-free',
    description:
      'A billing pipeline that handles both sides of invoicing every month. It scrapes provider invoices with a headless browser, pulls tracked hours from Toggl into a templated Google Sheet and exports a branded PDF, then routes everything through a Telegram approval gate before sending it out by email. Two scheduled Cloud Run jobs. Zero manual steps on billing day.',
    stack: ['Python', 'Cloud Run', 'Playwright', 'Toggl API', 'Google Sheets API', 'Telegram Bot', 'Gmail API'],
    url: '#',
    category: 'automation',
    diagram: 'invoice',
  },
  {
    name: 'Tax Bot',
    headline: 'Multi-agent US expat tax filing',
    description:
      'Filing for Americans abroad. An orchestrator reads source documents, dispatches to specialist agents for wages, FBAR, GILTI, capital gains, and foreign earned income. A reviewer validates each output. Form assembly composes 10+ IRS forms.',
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
