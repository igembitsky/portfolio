import type { Visual } from './site';

export interface CompareRow { label: string; before: string; after: string }

export const spotlight = {
  id: 'build-scale',
  number: '01',
  category: 'Build & Scale',
  title: 'From B2B marketplace to a multi-tenant SaaS platform and white-label factory',
  org: 'Virtual Diamond Boutique',
  role: 'Director of Product',
  note: 'Joined as the first product hire',
  summary:
    'Joined as the first product hire and grew a pre-revenue B2B marketplace into a multi-product SaaS platform and business with 30,000+ MAU and millions in ARR.',
  tags: ['B2B SaaS', 'Marketplace', 'Platform', 'Product Leadership'],
  compare: <CompareRow[]>[
    { label: 'Product', before: 'Freemium B2B marketplace', after: 'Multi-tenant SaaS platform and white-label factory' },
    { label: 'Monthly active users', before: '~500', after: '30,000+' },
    { label: 'Revenue', before: 'Pre-revenue', after: 'Millions in ARR' },
    { label: 'Product managers', before: '0', after: '5' },
  ],
  caseTitle: 'Virtual Diamond Boutique: a case study in building and scaling',
  thesis:
    'From a pre-revenue B2B marketplace to a multi-tenant SaaS platform and white-label factory generating millions in ARR.',
  hero: <Visual>{ src: 'assets/vdb/embedded-search.jpg', alt: 'VDB embedded product search inside a retailer website' },
  company: [
    'Virtual Diamond Boutique is a trading platform for the jewelry industry. Wholesalers, manufacturers, and designers list diamonds, gemstones, and finished jewelry. Retailers source from them and show the goods to their own customers.',
    'Every item comes with rich media and multiple ways to view it, so a retailer can present goods they do not physically hold as if they were in the case.',
  ],
  problem: [
    'Retailers want to offer more than they can afford to stock. Wholesalers want a convenient way to sell into their retailer networks. Both want to sell to their own networks and customers online.',
    'Before VDB, that ran on phone calls, spreadsheets, JPG files, and other people’s catalogs. Fragmented, slow, impossible to show to a customer, and awkward to mark up. The platforms that existed were ugly, hard to use, or expensive.',
  ],
  icp: ['Jewelry wholesalers', 'Retailers', 'Manufacturers', 'Designers'],
  did: [
    'Built the analytics framework from scratch: instrumentation, metrics and KPIs, user journeys. Used it to find the power users, interviewed them, and tested monetization ideas through design sprints and prototypes.',
    'Shipped the core trading experience: search, filtering, saving, sharing, comparing, matching, and communications between buyers and sellers.',
    'Built the deeper trading workflows: bidding, multi-currency support, and the full checkout flow.',
    'Ran the customer-facing lifecycle features: onboarding, reminders, and everything an e-commerce app needs to keep people coming back.',
    'Designed the white-label platform with feature switches, so one codebase could power 135+ branded apps and storefronts for customers.',
  ],
  team: [
    'Hired and onboarded a product and design team of seven.',
    'Set the prioritization framework and the templates for specs, research, and releases.',
    'Ran the agile process: planning, reviews, and retrospectives.',
    'Coached product managers into owning their areas end to end.',
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
