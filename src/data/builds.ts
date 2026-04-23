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
    name: 'Invoice Agent',
    headline: 'Hands-free monthly invoicing',
    description:
      'Scrapes provider invoices, generates client invoices from Toggl hours, routes both through a Telegram approval gate, sends them out. Two scheduled Cloud Run jobs. Zero manual steps on billing day.',
    stack: ['Python', 'Flask', 'Cloud Run', 'Playwright', 'Telegram Bot', 'Gmail API'],
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
    name: 'Client Invoice Automation',
    headline: 'Toggl hours to client inbox, hands-free',
    description:
      'Pulls tracked hours from Toggl into a templated Google Sheet, exports a branded PDF, emails it to the client. Runs monthly on Cloud Scheduler.',
    stack: ['Python', 'Toggl API', 'Google Sheets API', 'Gmail API', 'Cloud Run'],
    url: '#',
    category: 'automation',
    diagram: 'invoicing',
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
