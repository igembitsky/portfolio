export type ImageLayout = 'desktop' | 'mobile' | 'poster' | 'gallery';

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
    built?: string | string[];
    decisions?: string;
    outcomes?: string;
    tech?: string[];
  };
}

export const canaryCards: PortfolioItem[] = [
  {
    id: 'canary-pipeline',
    title: 'From cold outreach to signed pilots',
    subtitle: 'Built the outbound system that turned targeted outreach into real pilots. Defined the ICP, ran the campaigns, qualified the leads, and closed the pilot agreements.',
    highlights: [],
    tags: ['GTM', 'Outbound', 'Pilot Sales'],
    image: 'assets/canary/pipeline-funnel.svg',
    imageLayout: 'poster',
    galleryImages: [
      { src: 'assets/canary/pipeline-campaign-flow.svg', layout: 'poster', alt: 'Outreach campaign sequence with reply branch to discovery call' },
    ],
    sections: {
      built: [
        'Defined the ICP across industries and EHS and operations roles',
        'Built the outreach system on LinkedIn plus campaign automation',
        'Designed the messaging and iteration loops that lifted response rates',
        'Set qualification criteria so discovery time went to real buyers',
        'Ran discovery, pitch, objection handling, and pilot agreements end to end',
        'Tracked and followed up across the whole pipeline',
      ],
      outcomes: '5 pilots launched across the country.',
      tech: ['LinkedIn Sales Navigator', 'Woodpecker', 'Notion'],
    },
  },
  {
    id: 'canary-onboarding',
    title: 'Designed the onboarding experience',
    subtitle: 'Created the full onboarding system so customers could install and activate Canary on their own, while we managed every pilot in one place.',
    highlights: [],
    tags: ['Onboarding', 'Customer Success', 'Pilot Ops'],
    image: 'assets/canary/pilots.png',
    imageLayout: 'desktop',
    galleryImages: [
      { src: 'assets/canary/pilots-install.png', layout: 'mobile', alt: 'QR-driven setup site used during self-install' },
    ],
    sections: {
      built: [
        'Built marketing and onboarding as one system at canaryaware.com',
        'Designed and produced the physical welcome kit',
        'Wrote every instruction and customer-facing piece of material',
        'Created a QR-based setup site for guided self-installation',
        'Made self-install the default so we did not have to fly out',
        'Managed every pilot centrally through the pilot dashboard',
      ],
      decisions: 'Keep day-one friction as close to zero as possible.',
      outcomes: 'Pilots went live without on-site support, so the team could focus on outcomes instead of setup calls.',
      tech: ['Astro', 'Auth0', 'DynamoDB'],
    },
  },
  {
    id: 'canary-review',
    title: 'Built the system behind the system',
    subtitle: 'Created the workflow that turns raw footage into usable signal, combining human review with AI so customers only see what matters.',
    highlights: [],
    tags: ['Human-in-the-Loop', 'AI Ops', 'Workflow'],
    image: 'assets/canary/review-flow.svg',
    imageLayout: 'poster',
    galleryImages: [
      { src: 'assets/canary/tagging.png', layout: 'mobile', alt: 'Internal tagging and annotation interface' },
    ],
    sections: {
      built: [
        'Designed the manual review and tagging system from scratch',
        'Structured how incidents are labeled, filtered, and understood',
        'Added AI for detection, tagging suggestions, and prioritization',
        'Built human-in-the-loop validation before anything reaches a customer',
        'Added AI-assisted customer messages that still require human approval before sending',
      ],
      decisions: 'Raise signal-to-noise before anything reaches the customer.',
      outcomes: 'Internal review is faster and cleaner, and customers only see the incidents worth their attention.',
      tech: ['React', 'AWS Lambda', 'DynamoDB', 'Claude API', 'Auth0'],
    },
  },
  {
    id: 'canary-dashboard',
    title: 'Turned video into safety decisions',
    subtitle: 'Built the dashboard that helps safety teams review incidents, confirm risk, and track actions across their facilities.',
    highlights: [],
    tags: ['Product', 'Dashboard', 'Workflow'],
    image: 'assets/canary/dashboard-triple.png',
    imageLayout: 'gallery',
    galleryImages: [
      { src: 'assets/canary/review.png', layout: 'mobile', alt: 'Safety dashboard surfacing incidents that need a decision' },
    ],
    sections: {
      built: [
        'Surface only the incidents that need attention',
        'Let teams confirm or dismiss in a single motion',
        'Track follow-up actions like coaching and interventions',
        'Keep a record of every incident and every outcome',
        'Spot patterns across locations with heatmaps and trends',
      ],
      decisions: 'Move from detection to decision to action to record.',
      outcomes: 'Safety teams spend their review time on what matters, and every decision is logged and searchable.',
      tech: ['React', 'AWS Lambda', 'DynamoDB', 'IoT Core', 'S3', 'Claude API'],
    },
  },
];
