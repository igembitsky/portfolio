export interface WorkItem {
  company: string;
  period: string;
  role: string;
  description: string;
  tags: Array<{ label: string; highlight?: boolean }>;
}

export const work: WorkItem[] = [
  {
    company: 'Canary',
    period: '2025 — present',
    role: 'Head of Product & Operations',
    description:
      'AI-powered industrial safety cameras. Built the customer-facing SaaS as primary developer using Claude Code and Codex. Ran pitch meetings, converted to paid pilots. Set up the full GTM engine.',
    tags: [
      { label: 'built it', highlight: true },
      { label: 'sold it', highlight: true },
      { label: 'React' },
      { label: 'AWS Lambda' },
      { label: 'DynamoDB' },
      { label: 'IoT Core' },
    ],
  },
  {
    company: 'Virtual Diamond Boutique',
    period: '2017 — 2024',
    role: 'Director of PM → VP Strategic Operations',
    description:
      'B2B/B2C diamond marketplace. First PM hire. Built a cross-functional team of 15+. Created the white-label framework that became a core revenue driver. Later built Customer Success from zero to $3.5M ARR.',
    tags: [
      { label: 'first PM hire', highlight: true },
      { label: '0 → VP', highlight: true },
      { label: '26K members' },
      { label: '5 platforms' },
    ],
  },
  {
    company: 'HappyFunCorp',
    period: '2015 — 2017',
    role: 'Product Manager',
    description:
      'Shipped products for Brooklyn Museum (NYT coverage), Harvard University, and MakersFinders. iOS, Android, and web apps with bluetooth beacons and real-time chat.',
    tags: [
      { label: 'Brooklyn Museum' },
      { label: 'Harvard' },
      { label: 'MakersFinders' },
    ],
  },
];
