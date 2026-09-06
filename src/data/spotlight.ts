import type { Visual } from './site';

export interface CompareRow { label: string; before: string; after: string; delta?: string }

export const spotlight = {
  id: 'build-scale',
  number: '01',
  category: 'Build & Scale',
  title: 'From B2B marketplace to a multi-tenant SaaS platform and white-label factory',
  org: 'Virtual Diamond Boutique',
  role: 'Director of Product',
  domain: 'B2B SaaS · Marketplace · Platform · Integrations',
  note: 'First product hire',
  shots: <Visual[]>[
    { src: 'assets/vdb/appstore/shot-01.jpg', alt: 'VDB app: search diamonds, gemstones, and jewelry' },
    { src: 'assets/vdb/appstore/shot-02.jpg', alt: 'VDB app: results with media and pricing' },
    { src: 'assets/vdb/appstore/shot-03.jpg', alt: 'VDB app: product details' },
    { src: 'assets/vdb/appstore/shot-04.jpg', alt: 'VDB app: filters and saved searches' },
  ],
  compare: <CompareRow[]>[
    { label: 'Product', before: 'Freemium marketplace', after: 'Multi-tenant SaaS platform', delta: '+ white-label factory' },
    { label: 'Monthly active users', before: '~500', after: '30,000+', delta: '60x' },
    { label: 'Revenue', before: 'Pre-revenue', after: 'Millions in ARR', delta: 'From zero' },
    { label: 'Product managers', before: '0', after: '5', delta: 'Team built' },
  ],
  caseTitle: 'A case study in building and scaling',
  thesis: 'From a pre-revenue B2B marketplace to a multi-tenant SaaS platform generating millions in ARR.',
  hero: <Visual>{ src: 'assets/vdb/embedded-search.jpg', alt: 'VDB product search on laptop and screens' },
  company: [
    '**A trading platform for the jewelry industry.** Wholesalers, manufacturers, and designers list diamonds, gemstones, and finished jewelry.',
    '**Retailers source from them** and show the goods to their own customers, with rich media and multiple ways to view every item.',
  ],
  problem: [
    '**Retailers** want to offer more than they can afford to stock.',
    '**Wholesalers** want a convenient way to sell into their retailer networks.',
    '**Both** want to sell to their networks and customers online, including goods they do not hold.',
    'Before VDB this ran on **phone calls, spreadsheets, JPG files, and other people\'s catalogs.** Fragmented, slow, impossible to show a customer, awkward to mark up.',
    'The platforms that existed were **ugly, hard to use, or expensive.**',
  ],
  icp: ['Wholesalers', 'Retailers', 'Manufacturers', 'Designers', 'Brokers'],
  did: [
    '**Built the analytics framework from scratch.** Instrumentation, metrics and KPIs, user journeys. Used it to find the power users, interviewed them, and tested monetization ideas through design sprints and prototypes.',
    '**Shipped the core trading experience.** Search, filtering, saving, sharing, comparing, matching, and buyer-to-seller communications.',
    '**Built the deeper trading workflows.** Bidding, multi-currency support, and the full checkout flow.',
    '**Ran the customer lifecycle features.** Onboarding, reminders, and everything an e-commerce app needs to keep people coming back.',
    '**Designed the white-label platform** with feature switches, so one codebase powers 135+ branded apps and storefronts.',
  ],
  team: [
    '**Hired and onboarded** a product and design team of seven.',
    '**Set the prioritization framework** and the templates for specs, research, and releases.',
    '**Ran the agile process.** Planning, reviews, and retrospectives.',
    '**Coached product managers** to own their areas end to end.',
  ],
  impact: [
    { value: '30,000+', label: 'monthly active users, from about 500' },
    { value: '60x', label: 'growth in active usage' },
    { value: '135+', label: 'branded apps and storefronts on the platform' },
    { value: 'Millions', label: 'in ARR, from pre-revenue' },
    { value: '5', label: 'product managers hired, from none' },
    { value: '7', label: 'people on the product and design team' },
  ],
  gallery: <Visual[]>[
    { video: 'assets/vdb/marketplace.mp4', src: 'assets/vdb/marketplace-poster.jpg', alt: 'The VDB marketplace app in use' },
    { src: 'assets/vdb/marketplace-buyers.jpg', alt: 'VDB marketplace for buyers on phone and tablet' },
    { video: 'assets/vdb/ring-creator.mp4', src: 'assets/vdb/ring-poster.jpg', alt: 'Ring Creator walkthrough on a white-label store' },
    { src: 'assets/vdb/white-label-stores.jpg', alt: 'White-label storefront on desktop, tablet, and phone' },
    { src: 'assets/vdb/ecosystem.jpg', alt: 'VDB ecosystem: inventory into VDB Cloud, out to B2B apps, white-label tools, and B2C stores' },
  ],
};
