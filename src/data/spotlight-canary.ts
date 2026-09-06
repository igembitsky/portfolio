import type { Visual } from './site';
import type { CompareRow } from './spotlight';

export interface GalleryGroup { cols: 1 | 2 | 3; items: Visual[] }

export const canary = {
  id: 'find-product',
  number: '02',
  category: 'Find the Product',
  title: 'Turning AI and hardware into a safety product',
  org: 'Canary',
  role: 'Head of Product',
  note: 'Computer vision, edge hardware, cloud software',
  visual: <Visual>{ src: 'assets/canary/hardware/mounted.jpg', alt: 'Canary mounted on a forklift: two cameras, the nest, and the driver display' },
  compare: <CompareRow[]>[
    { label: 'Detection', before: 'Pedestrians only', after: 'Driving behavior, collisions, violations', delta: 'Broader' },
    { label: 'Deployment', before: 'On-site install', after: 'Self-install kit', delta: 'Under 2 hours' },
    { label: 'Model quality', before: 'No feedback', after: 'Human review trains detection', delta: 'Loop closed' },
    { label: 'Pilots', before: '0', after: '6 signed', delta: '~25% of meetings' },
  ],
  mark: 'assets/logos/brand/canary-mark.png',
  caseTitle: 'A case study in finding the product',
  thesis: 'From an early prototype to the right safety product: finding product-market fit with the people who prevent accidents.',
  hero: <Visual[]>[
    { src: 'assets/canary/hardware/mounted.jpg', alt: 'Canary mounted on a forklift in a warehouse' },
    { src: 'assets/canary/hardware/mounted-annotated.jpg', alt: 'The same forklift with the two cameras, the nest, and the display marked' },
  ],
  company: [
    '**Canary is an AI safety system for forklifts.** Two cameras and an edge unit, the nest, mount on the truck. It sees pedestrians in the blind spots and warns the driver on a display in the cab.',
    '**Every near miss is logged with video.** Safety managers review, tag, and resolve events in a cloud dashboard with heat maps by shift, day, and hour.',
    '**Plug and play.** No vehicle modifications, installed in under two hours, offered as a no-cost four-week pilot. Built by Bonsai Technology in the Washington, D.C. area.',
  ],
  problem: [
    '**Forklifts hurt people.** Pedestrians in blind spots, hard stops, and unsafe driving cause injuries, damage, and OSHA violations.',
    '**Safety managers cannot see the floor.** They learn about incidents from reports after the fact, if at all.',
    '**Existing systems are expensive and invasive.** Competing units cost eleven to twenty-two thousand dollars per truck and need vehicle modifications.',
    '**Pedestrian alerts alone were not enough.** Customers told us the real risk was in how trucks were driven, not only who was near them.',
  ],
  icp: ['EHS managers', 'Safety managers', 'Operations leaders', 'Forklift operators'],
  did: [
    '**Interviewed EHS managers** to find the safety problems worth solving beyond pedestrian detection.',
    '**Expanded detection** toward collisions and unsafe driving, using IMU signals such as hard braking and cornering, and video-based identification of safety and OSHA violations.',
    '**Built the customer-facing software:** safety analytics, event review, and data visualization that turn detections into decisions.',
    '**Closed the feedback loop.** Severity ranking surfaces about one serious incident a day per facility, and human review feeds the model.',
    '**Made deployment repeatable.** Self-install kits, a playbook, training, and health dashboards, so a customer can go live without us on site.',
    '**Ran the outbound funnel end to end.** About a thousand leads a month, demos, and pilot agreements.',
  ],
  impact: [
    { value: 'Broader', label: 'detection: from pedestrians to driving behavior, collisions, and violations' },
    { value: '< 2 hours', label: 'to install, by the customer, with the self-install kit' },
    { value: '1 a day', label: 'serious incident surfaced per facility by severity ranking' },
    { value: '~25%', label: 'of sales meetings converted to a paid pilot' },
    { value: '6', label: 'pilots signed, from zero' },
    { value: 'Loop closed', label: 'human review improves detection quality' },
  ],
  gallery: <GalleryGroup[]>[
    { cols: 1, items: [{ src: 'assets/canary/hardware/schematic.jpg', alt: 'How Canary mounts on a forklift: camera 1, nest, camera 2, and the driver display' }] },
    { cols: 3, items: [
      { src: 'assets/canary/hardware/pos-cameras.jpg', alt: 'Recommended camera positions' },
      { src: 'assets/canary/hardware/pos-nest.jpg', alt: 'Recommended nest position' },
      { src: 'assets/canary/hardware/pos-display.jpg', alt: 'Recommended display position' },
    ] },
    { cols: 3, items: [
      { src: 'assets/canary/gallery/proto-webcam.jpg', alt: 'Early prototype: a webcam on a mount' },
      { src: 'assets/canary/gallery/proto-alarm-light.jpg', alt: 'Early prototype: the alarm light' },
      { src: 'assets/canary/gallery/proto-wall-unit.jpg', alt: 'Early prototype: the all-in-one unit with display' },
    ] },
    { cols: 3, items: [
      { src: 'assets/canary/gallery/hw-camera-mount.jpg', alt: 'Camera mount on the overhead guard' },
      { src: 'assets/canary/gallery/hw-nest-pole.jpg', alt: 'The nest mounted on the post' },
      { src: 'assets/canary/gallery/hw-display-cab.jpg', alt: 'Driver display in the cab' },
    ] },
    { cols: 2, items: [
      { src: 'assets/canary/gallery/proto-dashboard-1.jpg', alt: 'Early dashboard prototype: near misses by time of day' },
      { src: 'assets/canary/gallery/proto-dashboard-2.jpg', alt: 'Early dashboard prototype: key safety indicators' },
    ] },
    { cols: 1, items: [{ src: 'assets/canary/gallery/dash-heatmaps.jpg', alt: 'Incidents per hour, minutes of operation, and near-miss risk score' }] },
    { cols: 2, items: [
      { src: 'assets/canary/gallery/dash-near-miss-score.jpg', alt: 'Near-miss score and weekly trend' },
      { src: 'assets/canary/gallery/dash-brake-table.jpg', alt: 'Hard braking events with severity and pedestrians detected' },
    ] },
    { cols: 2, items: [
      { src: 'assets/canary/review.png', alt: 'Event review: confirm, tag, and resolve' },
      { src: 'assets/canary/dashboard-triple.png', alt: 'Safety analytics dashboard' },
    ] },
    { cols: 1, items: [{ src: 'assets/canary/gallery/warehouse-forklift.jpg', alt: 'A pilot site: forklift with Canary in a warehouse' }] },
  ],
};
