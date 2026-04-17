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
      'Scrapes invoices from provider portals, generates client invoices from Toggl hours, routes both through a Telegram approval gate, and emails them out. Two Cloud Run jobs on a schedule, zero manual steps on billing day.',
    stack: ['Python', 'Flask', 'Cloud Run', 'Playwright', 'Telegram Bot', 'Gmail API'],
    url: '#',
    category: 'automation',
    diagram: 'invoice',
  },
  {
    name: 'Tax Bot',
    headline: 'Multi-agent US expat tax filing',
    description:
      'Filing system for Americans living abroad. An orchestrator reads source documents and dispatches them to specialist agents for wages, FBAR, GILTI, capital gains, and foreign earned income. A reviewer validates each output before form assembly composes 10+ IRS forms.',
    stack: ['Next.js', 'Claude API', 'Drizzle ORM', 'Python', 'pdf-lib'],
    url: '#',
    category: 'automation',
    diagram: 'taxbot',
  },
  {
    name: 'Client Invoice Automation',
    headline: 'Toggl hours to client inbox, hands-free',
    description:
      'Pulls tracked hours from Toggl, writes them into a templated Google Sheet, exports a branded PDF invoice, and emails it to the client. Runs every month on its own via Cloud Scheduler.',
    stack: ['Python', 'Toggl API', 'Google Sheets API', 'Gmail API', 'Cloud Run'],
    url: '#',
    category: 'automation',
    diagram: 'invoicing',
  },
  {
    name: 'NYC Walking Guide',
    headline: '5 curated routes through the real New York',
    description:
      'Interactive city guide with hand-picked walking routes, points of interest, and local tips. Built with Leaflet.js for the maps.',
    stack: ['TypeScript', 'Astro', 'Leaflet.js'],
    url: 'https://github.com/igembitsky/nyc-guide',
    category: 'creative',
    image: 'assets/personal/nyc-map.png',
    imageLayout: 'mobile',
    galleryImages: [
      { src: 'assets/personal/nyc-map.png', layout: 'mobile', alt: 'NYC walking guide map view' },
      { src: 'assets/personal/nyc-list.png', layout: 'mobile', alt: 'NYC walking guide routes list' },
    ],
  },
  {
    name: 'Legend of Nikita',
    headline: '2D browser game with full CI/CD',
    description:
      'Phaser 3 game with physics, animations, and input handling. Includes a Playwright E2E test suite and automated build pipeline. Because games should have tests too.',
    stack: ['JavaScript', 'Phaser 3', 'Playwright', 'Vite'],
    url: 'https://github.com/igembitsky/legend-of-nikita',
    category: 'creative',
    image: 'assets/personal/nikita.png',
    imageLayout: 'desktop',
    galleryImages: [
      { src: 'assets/personal/nikita.png', layout: 'desktop', alt: 'Legend of Nikita gameplay' },
    ],
  },
];
