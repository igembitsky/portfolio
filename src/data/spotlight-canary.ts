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
  note: 'Applied AI · Computer vision · Industrial IoT · 0 to 1',
  visual: <Visual>{ src: 'assets/canary/hardware/mounted-annotated.jpg', alt: 'The Canary system mounted on a forklift: two cameras, the nest, and the driver display outlined' },
  caption: 'The Canary system mounted on a forklift. Cameras, nest, and driver display outlined.',
  how: [
    '**Started with a hypothesis and a prototype.** Computer vision on a forklift can save lives.',
    '**Found the customer.** EHS managers, interviewed one by one, until the real problem was clear.',
    '**Shaped the product with them.** Pilots, analytics reviews, and feedback, iteration after iteration.',
    '**Shipped the safety analytics dashboard to production with Claude Code.** The screens safety managers use every day.',
  ],
  mark: 'assets/logos/brand/canary-mark.png',
  caseTitle: 'A case study in finding the product',
  thesis: 'The founder had a working prototype and a hypothesis: computer vision on a forklift can save lives. My job was to find out what the market needed, and shape the product until it fit.',
  hero: <Visual>{ src: 'assets/canary/cover.jpg', alt: 'Canary: an AI camera platform that reduces forklift near misses and prevents life-threatening incidents' },
  start: [
    '**A functional prototype.** Two cameras and an edge unit on a forklift, detecting pedestrians and warning the driver.',
    '**A strong hypothesis, unvalidated.** The team knew the technology worked. Nobody yet knew who would buy it, or what they would need it to do.',
    '**My brief as Head of Product:** validate the idea with real customers and turn the prototype into a product.',
  ],
  learned: [
    '**EHS managers are stretched thin.** They cannot watch footage. Capturing everything is not enough. The system has to find the dangerous moments, show only those, and recommend what to do.',
    '**They lack visibility.** Most contacts go unreported. Trucks come back with a small ding, and nobody knows where it happened. Managers walk the aisles and find damage on shelves and product.',
    '**Pedestrians are only part of the risk.** Hard braking, hard cornering, collisions with racking, and OSHA violations matter as much as a person in a blind spot.',
    '**Noise kills trust.** A forklift moving forward while people walk away should not trigger an alarm. Every false positive costs attention the manager does not have.',
    '**It has to fit their systems.** Findings must flow into the tools and reports they already use, so they can go up the chain and change behavior.',
  ],
  icp: ['EHS managers', 'Safety managers', 'Operations leaders', 'Forklift operators'],
  did: [
    '**Ran discovery.** Found and interviewed EHS managers, mapped their current process, pain points, and what visibility they lacked.',
    '**Shaped the detection scope with our industrial engineer.** From pedestrians only to unsafe driving, collisions, and violations, using IMU signals and video.',
    '**Simplified installation.** Worked from mounting schematics to a self-install kit with recommended positions, so a customer can go live without us on site.',
    '**Pitched, converted, and ran pilots.** Met customers regularly, walked them through their analytics, and turned their feedback into the next iteration.',
    '**Tuned signal against noise.** Severity ranking and motion awareness, so managers see about one serious event a day instead of a feed of alarms.',
    '**Shipped the safety analytics dashboard to production with Claude Code.** Data visualization, event review, and the workflows managers use to confirm incidents, tag them, and feed the model.',
  ],
  changed: [
    { before: 'Pedestrians in blind spots', after: 'Driving behavior, collisions, and violations' },
    { before: 'An alarm on every detection', after: 'Severity-ranked events, about one serious a day' },
    { before: 'Raw footage', after: 'Curated events with recommendations' },
    { before: 'Installed by us, on site', after: 'Self-install kit, under two hours' },
    { before: 'Real-time alerts for the driver only', after: 'Every incident logged, so safety managers can review it and find systemic risk' },
  ],
  gallery: <GalleryGroup[]>[
    { cols: 2, items: [
      { src: 'assets/canary/hardware/mounted.jpg', alt: 'Canary mounted on a forklift in a warehouse' },
      { src: 'assets/canary/hardware/mounted-annotated.jpg', alt: 'The same forklift with the two cameras, the nest, and the display outlined' },
    ] },
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
