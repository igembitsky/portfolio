export type ImageLayout = 'desktop' | 'mobile';

export interface GalleryImage {
  src: string;
  layout: ImageLayout;
  alt?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  outcome?: string;
  highlights: string[];
  tags: string[];
  image?: string;
  imageLayout?: ImageLayout;
  galleryImages?: GalleryImage[];
  sections?: {
    context?: string;
    built?: string;
    decisions?: string;
    outcomes?: string;
    tech?: string[];
  };
}

export const canaryCards: PortfolioItem[] = [
  {
    id: 'canary-dashboard',
    title: 'Safety Analytics Dashboard & AI Agent',
    subtitle: 'Intelligence system for industrial safety teams',
    outcome: 'Production deployment with paying pilot customers',
    highlights: [
      'Pattern analysis engine that turns raw camera events into actionable trends',
      'AI-drafted response messages with human review and approval before sending',
      'Configurable safety rules and thresholds per customer environment',
    ],
    tags: ['AI', 'SaaS', 'Computer Vision', 'Product'],
    image: 'assets/canary/dashboard.png',
    imageLayout: 'mobile',
    galleryImages: [
      { src: 'assets/canary/dashboard.png', layout: 'mobile', alt: 'Safety analytics dashboard with pattern analysis' },
    ],
    sections: {
      context: 'Factory floors generate hundreds of camera events daily. Safety teams were drowning in noise and missing the signals that mattered. We needed a system that could surface the critical incidents and help teams act on them quickly.',
      built: 'A full analytics dashboard with pattern analysis across time periods, severity scoring, and trend visualization. Integrated an AI messaging layer where the system drafts responses that humans review, edit, and approve before sending. Built a learning loop that tracks which suggestions get used and which get rewritten.',
      decisions: 'Chose human-in-the-loop over full automation. Safety is high-stakes and customers need to trust the system before they trust the AI. The approval step builds that trust while the learning loop gradually improves draft quality.',
      outcomes: 'Deployed to production with paying pilot customers. Safety teams can now focus review time on high-signal events instead of scanning everything manually.',
      tech: ['React', 'AWS Lambda', 'DynamoDB', 'IoT Core', 'S3', 'Claude API'],
    },
  },
  {
    id: 'canary-tagging',
    title: 'Incident Tagging & Annotation',
    subtitle: 'Training data pipeline for the safety AI',
    outcome: 'Structured taxonomy feeding continuous model improvement',
    highlights: [
      'Labeling system for classifying incidents by type, severity, and environment',
      'Ontology design that operators actually understand and use consistently',
      'Training data pipeline that feeds directly into model improvement cycles',
    ],
    tags: ['ML Infrastructure', 'Data', 'Operations'],
    image: 'assets/canary/tagging.png',
    imageLayout: 'mobile',
    galleryImages: [
      { src: 'assets/canary/tagging.png', layout: 'mobile', alt: 'Incident tagging and annotation interface' },
    ],
    sections: {
      context: 'The computer vision model needs structured, labeled data to get better at classification. Raw camera events come in unlabeled. Without a good taxonomy and consistent labeling workflow, the model trains on garbage.',
      built: 'A structured annotation workflow where safety teams label incidents by type, severity, and environment. Designed the ontology to be intuitive for non-technical operators so labels are consistent across different users and sites.',
      decisions: 'Invested in taxonomy design before any ML training. Spent time with safety teams understanding how they naturally categorize incidents, then built the labeling system around their mental model instead of imposing an engineering-driven schema.',
      outcomes: 'Clean, consistently labeled training data flowing into model improvement. The taxonomy is extensible as we encounter new incident types across different industrial environments.',
      tech: ['React', 'DynamoDB', 'S3'],
    },
  },
  {
    id: 'canary-review',
    title: 'Critical Incident Review Workflow',
    subtitle: 'Triage system for high-severity safety events',
    outcome: 'Compressed time from detection to action for safety teams',
    highlights: [
      'Three-action triage: confirm, dismiss, or escalate with full context',
      'Video playback with timeline scrubbing, timestamps, and metadata overlays',
      'Decision audit trail for compliance and accountability',
    ],
    tags: ['UX', 'Safety', 'Workflow Design'],
    image: 'assets/canary/review.png',
    imageLayout: 'mobile',
    galleryImages: [
      { src: 'assets/canary/review.png', layout: 'mobile', alt: 'Critical incident review workflow' },
    ],
    sections: {
      context: 'When a high-severity event happens on a factory floor, the safety team needs to review it fast, decide what to do, and document that decision. The old process was manual review of raw footage with no structure.',
      built: 'A triage interface with three clear actions (confirm, dismiss, escalate), rich video playback with timeline scrubbing and metadata overlays, and a complete decision audit trail. Every action is logged with who, when, and why.',
      decisions: 'Kept the action model to three options instead of a complex state machine. Speed matters in safety. Operators need to make a call in seconds, not navigate a workflow diagram.',
      outcomes: 'Review-to-action time compressed significantly. Compliance teams get a clean audit trail. Operators report the interface feels natural rather than bureaucratic.',
      tech: ['React', 'AWS Lambda', 'DynamoDB', 'S3 Video'],
    },
  },
  {
    id: 'canary-pilots',
    title: 'Pilot Management System',
    subtitle: 'End-to-end pipeline from lead to live deployment',
    outcome: 'Repeatable pilot playbook across customer segments',
    highlights: [
      'Tracking from lead qualification through install, training, evaluation, and conversion',
      'Self-install packages with setup guides for customer engineering teams',
      'Health dashboards for monitoring active pilot performance and engagement',
    ],
    tags: ['Operations', 'GTM', 'Infrastructure'],
    image: 'assets/canary/pilots.png',
    imageLayout: 'desktop',
    galleryImages: [
      { src: 'assets/canary/pilots.png', layout: 'desktop', alt: 'Pilot management dashboard' },
      { src: 'assets/canary/pilots-install.png', layout: 'mobile', alt: 'Self-install instructions for customer engineering teams' },
    ],
    sections: {
      context: 'Enterprise pilots are complex. Each one involves hardware installation, software configuration, team training, an evaluation period, and a conversion decision. Without structure, every pilot is a custom project.',
      built: 'An internal system tracking the full pilot lifecycle. Lead qualification criteria, install checklists, self-install packages with step-by-step guides, training materials, evaluation metrics, and conversion triggers. Health dashboards that surface which pilots are engaged and which are going cold.',
      decisions: 'Built internal tooling before trying to force this into a CRM. The pilot lifecycle has too many hardware and operational steps that Salesforce or Pipedrive can not model well. Clean internal tooling first, CRM integration later.',
      outcomes: 'Repeatable playbook that works across different customer segments and industrial environments. New pilots follow the same structured path instead of being improvised each time.',
      tech: ['React', 'DynamoDB', 'Internal Tooling'],
    },
  },
];
