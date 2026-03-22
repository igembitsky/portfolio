export interface BuildItem {
  name: string;
  description: string;
  stack: string;
  url: string;
}

export const builds: BuildItem[] = [
  {
    name: 'canaryview',
    description: 'Full-stack AWS serverless platform. Lambda functions, DynamoDB, IoT Core, S3 video, WebSocket chat.',
    stack: 'aws sam / node.js / react',
    url: 'https://github.com/igembitsky/canaryview',
  },
  {
    name: 'legend-of-nikita',
    description: '2D game built with Phaser 3. CI/CD pipeline, Playwright E2E tests, Vite bundling.',
    stack: 'javascript / phaser / playwright',
    url: 'https://github.com/igembitsky/legend-of-nikita',
  },
  {
    name: 'invoice-agent',
    description: 'Automated invoice generation. Python backend deployed on Google Cloud Run.',
    stack: 'python / cloud run',
    url: 'https://github.com/igembitsky/invoice-agent',
  },
  {
    name: 'resprout-us',
    description: 'Collaborative form-filling platform. React + TypeScript with Firebase backend.',
    stack: 'typescript / react / firebase',
    url: 'https://github.com/igembitsky/resprout-us',
  },
];
