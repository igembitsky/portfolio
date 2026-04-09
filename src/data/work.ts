export interface WorkItem {
  company: string;
  period: string;
  role: string;
  subrole?: string;
  description: string;
  metrics?: Array<{ value: string; label: string }>;
  tags: Array<{ label: string; highlight?: boolean }>;
}

export const work: WorkItem[] = [
  {
    company: 'Canary',
    period: '2025 \u2014 present',
    role: 'Head of Product & Operations',
    description:
      'AI-powered safety camera system for industrial environments. I run product, sales, and customer success alongside a team of engineers, data scientists, and ML consultants. Built the full go-to-market engine, the customer-facing SaaS, compliance documentation, install guides, and the pilot management system. We\'re training the AI to classify safety incidents through annotation and teaching it to surface the must-see items autonomously.',
    metrics: [
      { value: '3', label: 'orgs built (Sales, CS, Product)' },
      { value: 'End-to-end', label: 'lead gen through pilot delivery' },
    ],
    tags: [
      { label: 'generative engineering', highlight: true },
      { label: 'product + GTM', highlight: true },
      { label: 'React' },
      { label: 'AWS Lambda' },
      { label: 'DynamoDB' },
      { label: 'IoT Core' },
      { label: 'Claude Code' },
    ],
  },
  {
    company: 'Virtual Diamond Boutique',
    period: '2017 \u2014 2024',
    role: 'Director of PM \u2192 VP CS \u2192 VP Strategic Ops',
    subrole: '7 years \u00b7 3 promotions \u00b7 3 orgs built from scratch',
    description:
      'B2B/B2C marketplace for the diamond and jewelry industry. Joined as the first PM hire and built the product and design team, all the processes, and the design system. Shipped 20+ features across 5 platforms. Created the white-label framework that became the core revenue driver. Then built Customer Success from zero with the full playbook: onboarding, retention, QBRs, upselling. Then redesigned Sales Operations: BANT process, outbound campaigns, cold call scripts, pipeline tracking, and enablement infrastructure.',
    metrics: [
      { value: '100x', label: 'user growth' },
      { value: '5', label: 'platforms shipped' },
      { value: '20+', label: 'features delivered' },
    ],
    tags: [
      { label: 'first PM hire', highlight: true },
      { label: '3 orgs built', highlight: true },
      { label: '0 \u2192 VP', highlight: true },
      { label: 'Salesforce' },
      { label: 'Knowi' },
    ],
  },
  {
    company: 'HappyFunCorp',
    period: '2015 \u2014 2017',
    role: 'Product Manager',
    description:
      'Agency PM working with entrepreneurs and major institutions to validate ideas, define product strategy, and lead agile sprints with designers and developers. Clients ranged from Harvard (3 schools), Brooklyn Museum, and Brooklyn Heights Association to fintech startups, social apps, and maker communities.',
    tags: [
      { label: 'Brooklyn Museum' },
      { label: 'Harvard University' },
      { label: 'MakersFinders' },
      { label: 'fintech' },
      { label: 'iOS' },
      { label: 'Android' },
    ],
  },
  {
    company: 'Institute for Humane Studies',
    period: '2012 \u2014 2014',
    role: 'Product Manager, Online Education',
    subrole: 'First tech hire',
    description:
      'Built an online education platform from the ground up. First product manager of online education at the organization. Defined the strategy, the program types, the full funnel, and the KPIs for reaching organizational goals. Ran 30+ experimental programs with 20+ university professors using Lean Startup methods: prototype, test, measure, iterate.',
    metrics: [
      { value: '1K+', label: 'students reached' },
      { value: '30+', label: 'programs launched' },
    ],
    tags: [
      { label: '0 to 1 platform', highlight: true },
      { label: 'first tech hire', highlight: true },
      { label: 'edtech' },
      { label: 'Lean Startup' },
      { label: 'A/B testing' },
    ],
  },
];
