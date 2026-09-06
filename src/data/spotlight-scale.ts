import type { Visual } from './site';
import type { CompareRow } from './spotlight';
import type { GalleryGroup } from './spotlight-canary';

export const scale = {
  id: 'scale-system',
  number: '03',
  category: 'Scale the System',
  title: 'Owning the customer lifecycle end to end',
  org: 'Virtual Diamond Boutique',
  role: 'VP of Customer Success',
  note: 'Then VP of Strategic Operations',
  compare: <CompareRow[]>[
    { label: 'Time to value', before: '~166 days', after: '~60 days', delta: '2.8x faster' },
    { label: 'Churn', before: '~25%', after: '~10%', delta: 'Retention' },
    { label: 'Inventory setup', before: '~3 weeks', after: '~5 days' },
    { label: 'Homepage setup', before: '~1 month', after: '~2 weeks' },
  ],
  caseTitle: 'A case study in scaling the system',
  thesis:
    'Having built the core product and the team to run it, I expanded my ownership to customer success and the pre-sale journey. The product was ready. Getting customers to value was the bottleneck.',
  where: [
    '**The platform had scaled.** 30,000+ monthly active users, a white-label factory, and 135+ branded apps on the way.',
    '**The constraint moved from building to delivering.** It took about four months to take a customer live and about three months before they saw a beta.',
    '**Requirements collection cost customers 6 to 12 hours** of their own time, and churn sat around 25 percent.',
  ],
  problem: [
    '**Customers waited months for value** while implementation, design, and app-store setup ran through engineering.',
    '**Every implementation was custom.** Inventory files, branding, app-store accounts, domains, and design approvals arrived in a different order for every customer.',
    '**Nobody had one view of the customer.** Usage, requests, support tickets, and health lived in different tools.',
    '**Churn was found late.** Risk showed up at renewal, not when it started.',
  ],
  icp: ['Customers implementing their apps', 'Customer success managers', 'Implementation and support', 'Sales', 'Product'],
  did: [
    '**Designed the five-phase onboarding pipeline.** Sales, Discovery, Implementation, Beta Testing, Launch. Each phase with a defined outcome and standardized requirements collection, so customers knew what to bring and when.',
    '**Built the internal setup and admin tools** so customer success could configure organizations, inventory, apps, and custom designs without waiting on engineering.',
    '**Automated the recurring implementation work** and moved design approval into comments instead of meetings.',
    '**Built the customer portal and help bot.** Customers submit and track requests, get answers, and configure their own apps.',
    '**Integrated the support infrastructure into one view of the customer.** Rocketlane for delivery, Salesforce Service for omnichannel support and a knowledge base, health scores and early-warning alerts on top.',
    '**Ran quarterly business reviews** and turned onboarding friction and health signals into product priorities.',
    '**Applied the same system to the pre-sale journey.** A structured Salesforce funnel, a dedicated SDR role, and automated outreach that gave reps back a day a week.',
  ],
  impact: [
    { value: '166 to 60', label: 'days from signed contract to value' },
    { value: '25% to 10%', label: 'churn, with risk caught early' },
    { value: '21 to 5 days', label: 'to set up a customer inventory' },
    { value: '4 to 2 weeks', label: 'to design and approve a homepage' },
    { value: 'One view', label: 'of the customer: usage, requests, support, health' },
    { value: '5 phases', label: 'from first sales call to launch, each with an outcome' },
  ],
  gallery: <GalleryGroup[]>[
    { cols: 1, items: [{ src: 'assets/vdb/cs/slide-9.jpg', alt: 'The onboarding pipeline: Sales, Discovery, Implementation, Beta Testing, Launch, each with its outcome' }] },
    { cols: 2, items: [
      { src: 'assets/vdb/cs/slide-19.jpg', alt: 'The starting point: about four months to go live, 6 to 12 hours of customer time to collect requirements' },
      { src: 'assets/vdb/cs/slide-12.jpg', alt: 'What Discovery collects before implementation starts' },
    ] },
    { cols: 2, items: [
      { src: 'assets/vdb/cs/slide-8.jpg', alt: 'The customer success pipeline as a flow' },
      { src: 'assets/vdb/cs/slide-17.jpg', alt: 'Accounts in each onboarding phase, 2022 Q3' },
    ] },
    { cols: 3, items: [
      { src: 'assets/vdb/cs/slide-24.jpg', alt: 'How to reduce churn: one view of the customer, early warning, business reviews' },
      { src: 'assets/vdb/cs/slide-25.jpg', alt: 'Customer health score inputs' },
      { src: 'assets/vdb/cs/slide-26.jpg', alt: 'Customer health score bands and the action for each' },
    ] },
  ],
  visualsNote: 'Slides from the Customer Success town hall, 2022 Q3. Customer data removed.',
};
