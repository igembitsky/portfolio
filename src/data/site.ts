export const links = {
  linkedin: 'https://www.linkedin.com/in/gembitsky',
  github: 'https://github.com/igembitsky',
  chess: 'https://www.chess.com/member/gembitsky',
};

export const hero = {
  eyebrow: 'Product leader & builder',
  headline: 'I build and scale products in complex, ambiguous environments.',
  bullets: [
    'Take products from idea to production',
    'Grow them into platforms and businesses',
    'Build the teams and systems around them',
  ],
  now: 'Today I lead product at an industrial AI startup and ship production software myself with coding agents.',
};

export interface Logo { key: string; name: string; file?: string; mark?: string; text?: string }
export const logos: Logo[] = [
  { key: 'canary', name: 'Canary', file: 'canary-logo.png' },
  { key: 'vdb', name: 'Virtual Diamond Boutique', mark: 'vdb-mark.svg', text: 'Virtual Diamond Boutique' },
  { key: 'brooklyn-museum', name: 'Brooklyn Museum', file: 'brooklyn-museum.svg' },
  { key: 'harvard-law', name: 'Harvard Law School', file: 'harvard-law.svg' },
  { key: 'hbs', name: 'Harvard Business School', file: 'hbs-lockup.svg' },
  { key: 'ihs', name: 'Institute for Humane Studies', file: 'ihs.svg' },
  { key: 'mru', name: 'Marginal Revolution University', mark: 'mru.svg', text: 'Marginal Revolution University' },
];

export interface Metric { value: string; label: string }
export interface Visual { src?: string; alt: string; caption?: string }

export interface Flagship {
  id: string;
  number: string;
  category: string;
  title: string;
  org: string;
  summary: string;
  tags: string[];
  key: Visual;
  goal: string;
  users: string;
  did: string[];
  impact: Metric[];
  support: Visual[];
  diagram?: 'platform' | 'system';
}

export const flagships: Flagship[] = [
  {
    id: 'build-scale',
    number: '01',
    category: 'Build & Scale',
    title: 'From B2B marketplace to a multi-tenant SaaS platform and white-label factory',
    org: 'Virtual Diamond Boutique',
    summary:
      'Joined as the first product hire and helped grow an early B2B marketplace into a multi-product SaaS platform and business.',
    tags: ['B2B SaaS', 'Marketplace', 'Platform', 'Product Leadership'],
    key: { src: 'assets/vdb/phones.png', alt: 'Virtual Diamond Boutique marketplace apps' },
    goal:
      "Find the marketplace's most valuable users and workflows, build products they would pay for, and create a scalable business around them.",
    users:
      'B2B buyers, sellers, and businesses that wanted to bring digital trading experiences to their own customers.',
    did: [
      'Used product data to identify power users, interviewed them, and tested monetization ideas through design sprints and prototypes.',
      'Built deeper trading workflows, including bidding, then developed a white-label platform that could power custom applications for customers.',
      'Built the product and design organization as the platform scaled.',
    ],
    impact: [
      { value: '~30K MAU', label: '60x growth' },
      { value: '135+', label: 'branded apps' },
      { value: '~$3.5M ARR', label: 'white-label platform' },
      { value: '15', label: 'product and design team' },
    ],
    support: [
      { alt: 'Trading and bidding workflow', caption: 'Trading and bidding workflow' },
      { alt: 'White-label application examples', caption: 'White-label app examples' },
    ],
    diagram: 'platform',
  },
  {
    id: 'find-product',
    number: '02',
    category: 'Find the Product',
    title: 'Turning AI + hardware into a safety product',
    org: 'Canary',
    summary:
      'Built an industrial safety product across computer vision, edge hardware, and cloud software: safety analytics, event review, and data visualization, shaped directly with the safety managers responsible for preventing accidents.',
    tags: ['Applied AI', 'Industrial IoT', '0 to 1', 'Product Discovery'],
    key: { alt: 'Canary installed on a forklift', caption: 'Canary installed on a forklift' },
    goal:
      "Help EHS teams identify unsafe behavior and safety events they otherwise wouldn't know were happening.",
    users:
      'EHS and safety managers responsible for preventing warehouse accidents, equipment damage, and OSHA violations.',
    did: [
      'Interviewed EHS managers to identify high-value safety problems beyond pedestrian detection.',
      'Expanded the product toward collision and unsafe-driving detection using IMU signals such as hard braking and cornering, alongside video-based identification of safety and OSHA violations.',
      'Built the customer-facing software: safety analytics, event review, and data visualization that turn detections into decisions.',
      'Created feedback loops around AI detections and made deployment repeatable through self-installation.',
    ],
    impact: [
      { value: 'Broader detection', label: 'Pedestrians to driving behavior, collisions, and violations' },
      { value: 'Self-install', label: 'Repeatable customer deployment' },
      { value: 'Feedback loop', label: 'Human review improves detection quality' },
      { value: '~25%', label: 'Sales meeting to paid pilot conversion' },
    ],
    support: [
      { src: 'assets/canary/review.png', alt: 'Event review interface' },
      { src: 'assets/canary/dashboard-triple.png', alt: 'Safety analytics dashboard' },
      { src: 'assets/canary/pilots-install.png', alt: 'Self-install pilot flow' },
    ],
  },
  {
    id: 'scale-system',
    number: '03',
    category: 'Scale the System',
    title: 'Owning the customer lifecycle end to end',
    org: 'Virtual Diamond Boutique',
    summary:
      'Integrated every customer touchpoint, from first sales call to renewal, into one system with feedback flowing back into product.',
    tags: ['Customer Lifecycle', 'GTM', 'Systems Thinking', 'Product Leadership'],
    key: { alt: 'Customer lifecycle system diagram', caption: 'Sales to onboarding to adoption to health to retention' },
    goal:
      'Manage the whole customer experience as one system: reach value faster, keep customers longer, and feed what we learn back into product.',
    users:
      'Customers implementing the white-label platform, plus the internal customer success, implementation, product, and sales teams supporting them.',
    did: [
      'Designed a phased onboarding system with standardized requirements collection.',
      'Built internal setup and administration tools so customer success could implement customers more independently.',
      'Automated recurring implementation work and improved customization workflows.',
      'Connected onboarding and customer-health insights directly to product prioritization.',
      'Applied the same systems approach to the sales funnel and Salesforce.',
    ],
    impact: [
      { value: '166 to 60 days', label: 'time to value' },
      { value: '25% to 10%', label: 'churn' },
      { value: '3 weeks to 5 days', label: 'inventory setup' },
      { value: '1 month to 2 weeks', label: 'homepage setup' },
    ],
    support: [
      { alt: 'Onboarding workflow', caption: 'Onboarding workflow' },
      { alt: 'Admin tooling', caption: 'Admin tooling' },
      { alt: 'Customer health visualization', caption: 'Customer health view' },
    ],
    diagram: 'system',
  },
];

export interface AiProduct {
  name: string;
  tagline: string;
  description: string;
  status: string;
  focus: string[];
  url?: string;
  urlLabel?: string;
  visual: Visual;
}

export const ai = {
  number: '04',
  category: 'Build with AI',
  title: 'Building products with AI',
  org: 'Independent work',
  summary: '',
  tags: ['Agentic Engineering', 'AI Product', 'Rapid Prototyping'],
  products: <AiProduct[]>[
    {
      name: 'Prophase',
      tagline: 'Job matching built around fit, not keywords',
      description: 'Scores every opening against your experience and goals, then drafts the application.',
      status: '~12 beta users',
      focus: ['LLM evaluation', 'Recommendations', 'Agentic development'],
      visual: { src: 'assets/ai/prophase.jpg', alt: 'Prophase shortlist with match analysis' },
    },
    {
      name: 'VibeOps',
      tagline: 'Issue tracking designed for coding agents',
      description: 'Open-source tracker where agents and humans share one board.',
      status: 'Open source, in daily use',
      focus: ['Agent coordination', 'Persistent context', 'Human oversight'],
      url: 'https://github.com/igembitsky/vibeops-tracker',
      urlLabel: 'GitHub',
      visual: { src: 'assets/ai/vibeops.jpg', alt: 'VibeOps board' },
    },
    {
      name: 'Virtual Standardized Patient',
      tagline: 'AI patient simulation designed for local deployment',
      description: 'Medical students practice consultations with an AI patient that runs offline.',
      status: 'Built for a global-health conference talk',
      focus: ['Local LLMs', 'Medical education', 'Offline'],
      url: 'https://github.com/igembitsky/virtual-standardized-patient',
      urlLabel: 'GitHub',
      visual: { src: 'assets/ai/vsp.jpg', alt: 'Virtual Standardized Patient' },
    },
  ],
};

export interface OtherProject {
  name: string;
  tagline: string;
  description: string;
  role?: string;
  tags: string[];
  results: Metric[];
  resultsNote?: string;
  visual: Visual;
}

export const others: OtherProject[] = [
  {
    name: 'Brooklyn Museum ASK',
    tagline: 'Connecting museum visitors with curators through physical context',
    description:
      'A location-aware mobile experience where visitors could photograph artwork and talk with real museum curators while exploring the galleries.',
    role:
      'As Product Manager and Solutions Architect at HappyFunCorp, I worked on-site with engineering and QA on Android development, beacon positioning, chat reliability, and diagnostic tooling for testing the experience throughout the museum.',
    tags: ['Mobile', 'IoT', 'Service Design', 'Real-world Testing'],
    results: [
      { value: '19,409', label: 'chats in the first three months' },
      { value: '2,401', label: 'objects discussed' },
      { value: '13', label: 'messages per conversation on average' },
    ],
    resultsNote: 'Overall product results, not individually attributed.',
    visual: { src: 'assets/other/ask.jpg', alt: 'ASK Brooklyn Museum app, a visitor chatting with a curator about an artwork' },
  },
  {
    name: 'Learn Liberty Academy',
    tagline: 'Experimenting with how people learn online',
    description:
      'Led the development of an online learning product and used experimentation with students and educators to improve the experience.',
    tags: ['EdTech', 'Experimentation', '0 to 1'],
    results: [
      { value: '1,000+', label: 'students' },
      { value: '20+', label: 'professors' },
      { value: '30+', label: 'experiments' },
    ],
    visual: { src: 'assets/other/learn-liberty.jpg', alt: 'Learn Liberty on-demand course page, 2017' },
  },
];

export const about = {
  headline: 'I tend to think in systems.',
  paragraphs: [
    'I started in biochemistry and neuroscience, publishing three peer-reviewed papers before moving into product.',
    'That background still shapes how I work: understand the system, make its behavior visible, build feedback loops, and keep improving it.',
    "Since then I've built products, led product teams, owned customer and commercial systems, and increasingly build production software directly with AI.",
    "I'm most useful when the problem matters and the path isn't obvious yet.",
  ],
};

export const sections = [
  { id: 'top', label: 'Start' },
  { id: 'build-scale', label: '01 Build & Scale' },
  { id: 'find-product', label: '02 Find the Product' },
  { id: 'scale-system', label: '03 Scale the System' },
  { id: 'build-ai', label: '04 Build with AI' },
  { id: 'other', label: 'Other things' },
  { id: 'about', label: 'About' },
];
