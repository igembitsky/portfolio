// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://igembitsky.github.io',
  base: '/portfolio/',
  output: 'static',
  build: {
    assets: '_assets',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});