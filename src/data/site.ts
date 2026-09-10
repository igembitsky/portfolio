export const links = {
  linkedin: 'https://www.linkedin.com/in/gembitsky',
  github: 'https://github.com/igembitsky',
  chess: 'https://www.chess.com/member/gembitsky',
};

export const hero = {
  name: 'Igor Gembitsky',
  eyebrow: 'Product leader & builder',
  domains: ['B2B SaaS', 'Marketplaces', 'Applied AI', 'Industrial IoT'],
  headline: 'I build and scale products in complex, ambiguous environments.',
};

export interface Logo { key: string; name: string; file?: string; mark?: string; text?: string }
export const logos: Logo[] = [
  { key: 'canary', name: 'Canary', file: 'canary-logo.png' },
  { key: 'vdb', name: 'Virtual Diamond Boutique', mark: 'vdb-mark.svg', text: 'Virtual Diamond Boutique' },
  { key: 'brooklyn-museum', name: 'Brooklyn Museum', file: 'brooklyn-museum.svg' },
  { key: 'harvard-law', name: 'Harvard Law School', file: 'harvard-law.svg' },
  { key: 'hbs', name: 'Harvard Business School', file: 'hbs-lockup.svg' },
  { key: 'ihs', name: 'Institute for Humane Studies', file: 'ihs.svg' },
  { key: 'mru', name: 'Marginal Revolution University', file: 'mru-lockup.png' },
];

export interface Metric { value: string; label: string }
export interface Visual { src?: string; video?: string; alt: string; caption?: string }

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
    key: { video: 'assets/vdb/marketplace.mp4', src: 'assets/vdb/marketplace-poster.jpg', alt: 'Virtual Diamond Boutique marketplace app in use' },
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
      { value: 'Millions in ARR', label: 'white-label platform' },
      { value: '15', label: 'product and design team' },
    ],
    support: [
      { video: 'assets/vdb/ring-creator.mp4', src: 'assets/vdb/ring-poster.jpg', alt: 'Ring Creator walkthrough on a white-label store' },
      { src: 'assets/vdb/white-label-stores.jpg', alt: 'White-label storefront on desktop, tablet, and phone' },
      { src: 'assets/vdb/ecosystem.jpg', alt: 'VDB ecosystem: inventory into VDB Cloud, out to B2B apps, white-label tools, and B2C stores' },
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
    category: 'Own the Lifecycle',
    title: 'Owning the customer lifecycle end to end',
    org: 'Virtual Diamond Boutique',
    summary:
      'Integrated every customer touchpoint, from first sales call to renewal, into one system with feedback flowing back into product.',
    tags: ['Customer Lifecycle', 'GTM', 'Systems Thinking', 'Product Leadership'],
    key: { alt: 'Customer lifecycle: sales, implementation, adoption, use and success, relationship' },
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
  points: { label: string; text: string }[];
  detail: string;
  status: string;
  links: { label: string; url: string }[];
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
      tagline: 'Job matching and tailored applications.',
      description: 'Built for my own search. Matches roles, checks claims, and prepares applications. Now in private beta as a boutique service.',
      points: [
        { label: 'Find the fit.', text: 'Roles matched to your experience and ambitions.' },
        { label: 'Make your case.', text: 'Tailored applications with verified claims.' },
        { label: 'Apply with care.', text: 'Human judgment, supported by evaluated models.' },
      ],
      detail: 'I built and shipped the platform with Claude Code. It combines LLMs, deterministic matching, and claims verification. Using it for my own applications taught me how to evaluate models, control costs, and make the complete workflow reliable. I’m now using those tools to help others find strong matches and prepare thoughtful applications.',
      status: 'In production · Private beta',
      links: [],
      visual: { src: 'assets/ai/prophase.jpg', alt: 'Prophase shortlist with match analysis' },
    },
    {
      name: 'VibeOps',
      tagline: 'An issue tracker for coding agents.',
      description: 'Capture ideas, bugs, and questions. Assign work to agents, review changes, and keep users informed through email and Slack.',
      points: [
        { label: 'Capture in context.', text: 'Ideas, bugs, questions, and what to do next.' },
        { label: 'Work with any agent.', text: 'Triage, assign, and review through MCP.' },
        { label: 'Keep people involved.', text: 'User conversations, email, and Slack updates.' },
      ],
      detail: 'Part of the productivity toolkit I use across local and production projects. Capture an idea for later or send it straight to Claude, Codex, or another MCP-connected agent, then review the work. The shared backlog keeps production issues visible to everyone on the project. Email replies and Slack updates connect the work back to the people who raised it.',
      status: 'Open source · Daily use',
      links: [{ label: 'GitHub', url: 'https://github.com/igembitsky/vibeops-tracker' }],
      visual: { src: 'assets/ai/vibeops.jpg', alt: 'VibeOps board' },
    },
    {
      name: 'Virtual Patient Simulator',
      tagline: 'An offline AI patient for medical training.',
      description: 'Practice consultations with local, open-source models. No cloud required. I’m demonstrating it at a Global Health Conference.',
      points: [
        { label: 'Practice a consultation.', text: 'Interview an AI patient in a clinical scenario.' },
        { label: 'Run it locally.', text: 'Open-source models. Offline. On your hardware.' },
        { label: 'Take it home.', text: 'Install it in the workshop and bring it back.' },
      ],
      detail: 'Invited to speak at the 2026 Global Health Conference, I’m coordinating and hosting the AI in medicine plenary, leading the AI in medical education panel, and running the closing hands-on workshop. Delegates will install the patient simulator on their own systems and learn how to bring it back to their home countries. Local models keep conversations on the device and avoid recurring cloud inference charges.',
      status: 'Open source · Conference 2026',
      links: [{ label: 'GitHub', url: 'https://github.com/igembitsky/virtual-standardized-patient' }, { label: 'Conference', url: 'https://www.theglobalhealthacademy.org/global-health-academy/global-health-conferences/2026-home' }],
      visual: { src: 'assets/ai/vsp.jpg', alt: 'Virtual Patient Simulator consultation with Jerry Graham, 55' },
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
    visual: { src: 'assets/other/ask-in-use.jpg', alt: 'A visitor using ASK Brooklyn Museum in the gallery' },
  },
  {
    name: 'Learn Liberty Academy',
    tagline: 'Experimenting with how people learn online',
    description:
      'An online education platform built from scratch with more than twenty professors. It taught thousands of students and connected them to programs, seminars, and career opportunities.',
    role:
      'Led product development and ran experiments with students and educators to improve how people learn online.',
    tags: ['EdTech', 'Experimentation', '0 to 1'],
    results: [
      { value: '1,000+', label: 'students' },
      { value: '20+', label: 'professors' },
      { value: '30+', label: 'experiments' },
    ],
    visual: { src: 'assets/other/learn-liberty.jpg', alt: 'Learn Liberty programs page, 2017' },
  },
];

export const about = {
  headline: 'Senior product leader who ships with AI.',
  sub: 'Hire me to own a product area end to end, or to build the products, processes, and infrastructure a product team runs on.',
  bullets: [
    'Take products from idea to production',
    'Grow them into platforms and businesses',
    'Build the teams and systems around them',
  ],
  now: 'Today I lead product at an industrial AI startup and ship production software myself with coding agents.',
  science: 'I started in biochemistry and neuroscience and published three peer-reviewed papers. That training still shapes how I work:',
  method: [
    'Start with research and understanding',
    'Build experimental frameworks and feedback loops',
    'Collect and analyze the data',
    'Keep improving',
  ],
  papers: [
    { title: 'Inhibition of System xc Transporter Attenuates Autoimmune Inflammatory Demyelination', journal: 'The Journal of Immunology', date: 'July 2015', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4490999/' },
    { title: 'A Possible Connection Between Antidiabetic and Antilipemic Properties of Psoralea corylifolia Seeds: A LIBS-Based Study', journal: 'Food Biophysics', date: 'June 2013', url: 'https://link.springer.com/article/10.1007/s11483-012-9280-1' },
    { title: 'Comparative Toxicological Studies of Heracleum maximum and Psoralea corylifolia on Brine Shrimp and Wistar Rats', journal: 'Annals of Phytomedicine', date: 'July 2024', url: 'https://www.semanticscholar.org/paper/11e0a4979a0184226c061c8dbeb803dddca28f7f' },
  ],
};

export const sections = [
  { id: 'top', label: 'Start' },
  { id: 'build-scale', label: '01 Build & Scale' },
  { id: 'find-product', label: '02 Find the Product' },
  { id: 'scale-system', label: '03 Own the Lifecycle' },
  { id: 'build-ai', label: '04 Build with AI' },
  { id: 'other', label: 'Other things' },
  { id: 'about', label: 'About' },
];
