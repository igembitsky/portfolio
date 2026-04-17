# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page brutalist portfolio site for Igor Gembitsky using Astro + TypeScript + Tailwind CSS.

**Architecture:** Static single-page site with Astro components for each section. Content data stored in TypeScript files for type safety and easy editing. Google Fonts for JetBrains Mono. No client-side JS except a small typing animation script.

**Tech Stack:** Astro 5, TypeScript, Tailwind CSS 4, JetBrains Mono (Google Fonts)

**Spec:** `docs/superpowers/specs/2026-03-22-portfolio-site-design.md`

---

## File Structure

```
portfolio/
├── astro.config.mjs          # Astro config with Tailwind integration
├── package.json
├── tsconfig.json
├── .gitignore
├── public/
│   └── favicon.svg            # Simple monospace-style favicon
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML shell, fonts, meta tags, global styles
│   ├── components/
│   │   ├── Nav.astro          # Fixed top nav bar
│   │   ├── Hero.astro         # Name, typing subtitle, bio, CTA
│   │   ├── SectionHeader.astro # Reusable "// label ———" divider
│   │   ├── WorkCard.astro     # Single work experience card
│   │   ├── BuildCard.astro    # Single GitHub project card
│   │   ├── Contact.astro      # Terminal-prompt contact section
│   │   └── Footer.astro       # Footer with attribution
│   ├── data/
│   │   ├── work.ts            # Case study content array
│   │   └── builds.ts          # GitHub project content array
│   ├── pages/
│   │   └── index.astro        # Homepage assembling all components
│   └── styles/
│       └── global.css         # Tailwind directives + custom utilities
├── tests/
│   └── smoke.spec.ts          # Playwright smoke test
└── playwright.config.ts
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `src/pages/index.astro`, `src/styles/global.css`

- [ ] **Step 1: Initialize Astro project**

```bash
cd /Users/igor/projects/portfolio
npm create astro@latest . -- --template minimal --typescript strict --install --no-git
```

- [ ] **Step 2: Install Tailwind CSS**

```bash
npx astro add tailwind --yes
```

- [ ] **Step 3: Add JetBrains Mono via Google Fonts in global.css**

In `src/styles/global.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap');

@import "tailwindcss";

@theme {
  --color-bg: #0c0c0c;
  --color-fg: #e0e0e0;
  --color-dim: #555;
  --color-accent: #00ff00;
  --color-accent2: #44aaff;
  --color-border: #222;
  --color-surface: #111;
  --font-family-mono: 'JetBrains Mono', 'Courier New', monospace;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family-mono);
  background-color: var(--color-bg);
  color: var(--color-fg);
}

@keyframes blink {
  50% { opacity: 0; }
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
```

- [ ] **Step 4: Set up a placeholder index page**

In `src/pages/index.astro`:
```astro
---
import '../styles/global.css';
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Igor Gembitsky</title>
</head>
<body>
  <h1 class="text-white text-4xl p-8 font-mono">Igor Gembitsky</h1>
</body>
</html>
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```
Expected: Site loads at localhost:4321 with "Igor Gembitsky" in white on black.

- [ ] **Step 6: Init git and commit**

```bash
git init
echo "node_modules\ndist\n.astro\n.superpowers\n.DS_Store" > .gitignore
git add -A
git commit -m "feat: scaffold astro project with tailwind and brutalist theme tokens"
```

---

### Task 2: Base Layout + Navigation

**Files:**
- Create: `src/layouts/BaseLayout.astro`, `src/components/Nav.astro`, `public/favicon.svg`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create favicon**

`public/favicon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#0c0c0c"/>
  <text x="4" y="24" font-family="monospace" font-size="22" font-weight="bold" fill="#00ff00">IG</text>
</svg>
```

- [ ] **Step 2: Create BaseLayout**

`src/layouts/BaseLayout.astro`:
```astro
---
import '../styles/global.css';

interface Props {
  title?: string;
  description?: string;
}

const {
  title = 'Igor Gembitsky — Leader & Builder',
  description = 'Product leader and builder. I lead teams, ship software, and use AI tools to build faster than teams twice my size.'
} = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content={description}>
  <meta property="og:title" content={title}>
  <meta property="og:description" content={description}>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <title>{title}</title>
</head>
<body class="min-h-screen">
  <slot />
</body>
</html>
```

- [ ] **Step 3: Create Nav component**

`src/components/Nav.astro`:
```astro
---
const links = [
  { label: 'work', href: '#work' },
  { label: 'builds', href: '#builds' },
  { label: 'about', href: '#about' },
  { label: 'connect', href: '#connect' },
];
---
<nav class="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center border-b border-border bg-bg/90 backdrop-blur-sm">
  <span class="font-bold text-sm tracking-widest uppercase text-white">igor gembitsky</span>
  <div class="flex gap-1">
    {links.map(link => (
      <a
        href={link.href}
        class="text-dim text-xs px-3 py-1 border border-transparent hover:border-border hover:bg-surface hover:text-fg transition-all duration-150"
      >
        [{link.label}]
      </a>
    ))}
  </div>
</nav>
```

- [ ] **Step 4: Wire up layout and nav in index.astro**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Nav from '../components/Nav.astro';
---
<BaseLayout>
  <Nav />
  <main class="pt-16">
    <div class="p-8 text-white">Sections go here</div>
  </main>
</BaseLayout>
```

- [ ] **Step 5: Verify nav renders and scrolls**

Check dev server: nav is fixed, links visible, backdrop blur works.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add base layout with meta tags and fixed nav"
```

---

### Task 3: Hero Section

**Files:**
- Create: `src/components/Hero.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create Hero component**

`src/components/Hero.astro`:
```astro
---
const linkedinUrl = 'https://www.linkedin.com/in/gembitsky';
---
<section id="about" class="min-h-screen flex flex-col justify-center px-8 py-20 max-w-4xl relative">
  <span class="absolute top-20 left-8 text-dim text-xs opacity-40">// igor-gembitsky.dev</span>

  <h1 class="text-5xl font-bold text-white tracking-tight leading-none">
    Igor Gembitsky
  </h1>

  <div class="mt-4 text-lg text-accent font-normal flex items-center">
    <span class="typing-text overflow-hidden whitespace-nowrap border-r-2 border-accent" style="animation: typing 1.2s steps(16) 0.5s forwards, blink 1s step-end 1.7s infinite; width: 0;">
      Leader. Builder.
    </span>
  </div>

  <p class="mt-8 text-dim text-sm max-w-xl leading-relaxed">
    I lead product teams and ship software.
    <span class="text-fg">From first PM hire to VP</span> at a 26K-member marketplace.
    <span class="text-fg">Built an AI safety platform from zero</span> —
    product, code, sales, ops. I use AI tools to build faster than teams twice my size.
  </p>

  <a
    href={linkedinUrl}
    target="_blank"
    rel="noopener noreferrer"
    class="mt-8 inline-flex items-center gap-2 text-accent2 text-sm border border-accent2 px-5 py-2 hover:bg-accent2 hover:text-black transition-all duration-150 w-fit"
  >
    &rarr; connect on linkedin
  </a>
</section>
```

- [ ] **Step 2: Add Hero to index.astro**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Nav from '../components/Nav.astro';
import Hero from '../components/Hero.astro';
---
<BaseLayout>
  <Nav />
  <main>
    <Hero />
  </main>
</BaseLayout>
```

- [ ] **Step 3: Verify hero renders**

Check: name renders large, typing animation plays once then cursor blinks, bio text has emphasis spans, CTA button hovers correctly.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add hero section with typing animation and linkedin CTA"
```

---

### Task 4: Content Data Files

**Files:**
- Create: `src/data/work.ts`, `src/data/builds.ts`

- [ ] **Step 1: Create work data**

`src/data/work.ts`:
```typescript
export interface WorkItem {
  company: string;
  period: string;
  role: string;
  description: string;
  tags: Array<{ label: string; highlight?: boolean }>;
}

export const work: WorkItem[] = [
  {
    company: 'Canary',
    period: '2025 — present',
    role: 'Head of Product & Operations',
    description:
      'AI-powered industrial safety cameras. Built the customer-facing SaaS as primary developer using Claude Code and Codex. Ran pitch meetings, converted to paid pilots. Set up the full GTM engine.',
    tags: [
      { label: 'built it', highlight: true },
      { label: 'sold it', highlight: true },
      { label: 'React' },
      { label: 'AWS Lambda' },
      { label: 'DynamoDB' },
      { label: 'IoT Core' },
    ],
  },
  {
    company: 'Virtual Diamond Boutique',
    period: '2017 — 2024',
    role: 'Director of PM → VP Strategic Operations',
    description:
      'B2B/B2C diamond marketplace. First PM hire. Built a cross-functional team of 15+. Created the white-label framework that became a core revenue driver. Later built Customer Success from zero to $3.5M ARR.',
    tags: [
      { label: 'first PM hire', highlight: true },
      { label: '0 → VP', highlight: true },
      { label: '26K members' },
      { label: '5 platforms' },
    ],
  },
  {
    company: 'HappyFunCorp',
    period: '2015 — 2017',
    role: 'Product Manager',
    description:
      'Shipped products for Brooklyn Museum (NYT coverage), Harvard University, and MakersFinders. iOS, Android, and web apps with bluetooth beacons and real-time chat.',
    tags: [
      { label: 'Brooklyn Museum' },
      { label: 'Harvard' },
      { label: 'MakersFinders' },
    ],
  },
];
```

- [ ] **Step 2: Create builds data**

`src/data/builds.ts`:
```typescript
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
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add typed content data for work and builds sections"
```

---

### Task 5: Work Section Components

**Files:**
- Create: `src/components/SectionHeader.astro`, `src/components/WorkCard.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create SectionHeader component**

`src/components/SectionHeader.astro`:
```astro
---
interface Props {
  label: string;
}
const { label } = Astro.props;
---
<div class="px-8 pt-12 pb-6 flex items-baseline gap-3 max-w-4xl">
  <span class="text-xs uppercase tracking-widest text-accent">// {label}</span>
  <span class="flex-1 h-px bg-border"></span>
</div>
```

- [ ] **Step 2: Create WorkCard component**

`src/components/WorkCard.astro`:
```astro
---
import type { WorkItem } from '../data/work';

interface Props {
  item: WorkItem;
}

const { item } = Astro.props;
---
<div class="border border-border hover:border-zinc-600 transition-colors duration-150 mb-4">
  <div class="flex justify-between items-baseline px-6 py-5 border-b border-border">
    <span class="font-bold text-base text-white">{item.company}</span>
    <span class="text-xs text-dim">{item.period}</span>
  </div>
  <div class="px-6 py-5">
    <div class="text-xs text-accent2 uppercase tracking-wider mb-2">{item.role}</div>
    <p class="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
    <div class="mt-3 flex flex-wrap gap-1.5">
      {item.tags.map(tag => (
        <span
          class:list={[
            'text-[10px] px-2 py-0.5 border',
            tag.highlight
              ? 'border-accent text-accent'
              : 'border-border text-dim',
          ]}
        >
          {tag.label}
        </span>
      ))}
    </div>
  </div>
</div>
```

- [ ] **Step 3: Add work section to index.astro**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Nav from '../components/Nav.astro';
import Hero from '../components/Hero.astro';
import SectionHeader from '../components/SectionHeader.astro';
import WorkCard from '../components/WorkCard.astro';
import { work } from '../data/work';
---
<BaseLayout>
  <Nav />
  <main>
    <Hero />
    <hr class="border-t border-border mx-8" id="work">
    <SectionHeader label="work" />
    <section class="px-8 pb-16 max-w-4xl">
      {work.map(item => <WorkCard item={item} />)}
    </section>
  </main>
</BaseLayout>
```

- [ ] **Step 4: Verify work section renders**

Check: three cards with company names, roles in blue, tags with green highlights, hover border effect.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add work section with case study cards"
```

---

### Task 6: Builds Section

**Files:**
- Create: `src/components/BuildCard.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create BuildCard component**

`src/components/BuildCard.astro`:
```astro
---
import type { BuildItem } from '../data/builds';

interface Props {
  item: BuildItem;
}

const { item } = Astro.props;
---
<a
  href={item.url}
  target="_blank"
  rel="noopener noreferrer"
  class="block border border-border p-5 hover:border-zinc-600 transition-colors duration-150"
>
  <div class="font-medium text-sm text-white mb-1">
    <span class="text-accent">&gt; </span>{item.name}
  </div>
  <p class="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
  <div class="mt-2.5 text-[10px] text-dim">{item.stack}</div>
</a>
```

- [ ] **Step 2: Add builds section to index.astro**

Add after the work section:
```astro
import BuildCard from '../components/BuildCard.astro';
import { builds } from '../data/builds';

<!-- in the template -->
<hr class="border-t border-border mx-8" id="builds">
<SectionHeader label="builds" />
<section class="px-8 pb-16 max-w-4xl">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {builds.map(item => <BuildCard item={item} />)}
  </div>
</section>
```

- [ ] **Step 3: Verify builds grid renders**

Check: 2x2 grid on desktop, 1-column on mobile, green `> ` prefix, links open GitHub.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add builds section with github project grid"
```

---

### Task 7: Contact + Footer

**Files:**
- Create: `src/components/Contact.astro`, `src/components/Footer.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create Contact component**

`src/components/Contact.astro`:
```astro
---
const links = [
  { label: 'linkedin', url: 'https://www.linkedin.com/in/gembitsky' },
  { label: 'github', url: 'https://github.com/igembitsky' },
  { label: 'email', url: 'mailto:igor.gembitsky@gmail.com' },
];
---
<section id="connect" class="px-8 py-12 max-w-4xl border-t border-border mx-8">
  <div class="text-dim text-sm mb-4 flex items-center">
    $ connect<span class="inline-block w-2 h-3.5 bg-accent ml-1 align-text-bottom" style="animation: blink 1s step-end infinite;"></span>
  </div>
  <div class="flex gap-4">
    {links.map(link => (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-accent2 text-sm border-b border-transparent hover:border-accent2 transition-colors duration-150"
      >
        {link.label}
      </a>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Create Footer component**

`src/components/Footer.astro`:
```astro
<footer class="px-8 py-6 border-t border-border flex justify-between text-xs text-zinc-700">
  <span>built with astro + claude code</span>
  <span>{new Date().getFullYear()}</span>
</footer>
```

- [ ] **Step 3: Add to index.astro**

Add Contact and Footer after builds section.

- [ ] **Step 4: Verify contact and footer render**

Check: terminal prompt with blinking cursor, links work, footer shows year.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add contact section and footer"
```

---

### Task 8: Mobile Responsiveness

**Files:**
- Modify: `src/components/Nav.astro`, `src/components/Hero.astro`, various components

- [ ] **Step 1: Make nav responsive**

Update Nav.astro: on small screens, reduce padding and font sizes. Consider hiding bracket links behind a menu or stacking them.

```astro
<!-- Update nav classes -->
<nav class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center border-b border-border bg-bg/90 backdrop-blur-sm">
  <span class="font-bold text-xs sm:text-sm tracking-widest uppercase text-white">igor gembitsky</span>
  <div class="flex gap-0.5 sm:gap-1">
    {links.map(link => (
      <a href={link.href} class="text-dim text-[10px] sm:text-xs px-1.5 sm:px-3 py-1 border border-transparent hover:border-border hover:bg-surface hover:text-fg transition-all duration-150">
        [{link.label}]
      </a>
    ))}
  </div>
</nav>
```

- [ ] **Step 2: Make hero responsive**

Update Hero: smaller text on mobile.
```
h1: text-3xl sm:text-5xl
subtitle: text-base sm:text-lg
```

- [ ] **Step 3: Test on mobile viewport**

Use browser dev tools to check 375px and 768px breakpoints. Verify no horizontal scroll, readable text, tappable links.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add mobile responsiveness across all sections"
```

---

### Task 9: Scroll Animations

**Files:**
- Modify: `src/styles/global.css`, `src/pages/index.astro`

- [ ] **Step 1: Add scroll reveal with CSS**

In `global.css`:
```css
.reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 2: Add minimal IntersectionObserver script**

In `BaseLayout.astro`, add before `</body>`:
```html
<script>
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
</script>
```

- [ ] **Step 3: Add `reveal` class to work cards and build cards**

Add `class="reveal"` wrapper or add to existing card root elements. Use staggered delays via inline styles: `style="transition-delay: 0.1s"`, `0.2s`, etc.

- [ ] **Step 4: Verify scroll reveals work**

Scroll through page — sections should fade in as they enter viewport.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add scroll reveal animations with intersection observer"
```

---

### Task 10: Smoke Test + Deploy Prep

**Files:**
- Create: `tests/smoke.spec.ts`, `playwright.config.ts`
- Modify: `package.json`

- [ ] **Step 1: Install Playwright**

```bash
npm install -D @playwright/test
npx playwright install chromium
```

- [ ] **Step 2: Create Playwright config**

`playwright.config.ts`:
```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run preview',
    port: 4321,
    reuseExistingServer: true,
  },
});
```

- [ ] **Step 3: Write smoke test**

`tests/smoke.spec.ts`:
```typescript
import { test, expect } from '@playwright/test';

test('homepage loads with key sections', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toContainText('Igor Gembitsky');
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('#work')).toBeVisible();
  await expect(page.locator('#builds')).toBeVisible();
  await expect(page.locator('#connect')).toBeVisible();

  const linkedinLink = page.locator('a[href*="linkedin.com/in/gembitsky"]');
  await expect(linkedinLink).toBeVisible();
});

test('navigation links scroll to sections', async ({ page }) => {
  await page.goto('/');

  await page.click('a[href="#work"]');
  await expect(page.locator('#work')).toBeInViewport();
});
```

- [ ] **Step 4: Build and run tests**

```bash
npm run build && npx playwright test
```

Expected: 2 tests pass.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "test: add playwright smoke tests for homepage"
```

- [ ] **Step 6: Verify production build**

```bash
npm run build
ls dist/
```

Expected: `dist/` contains `index.html` and assets. Static output, ready for Vercel/Cloudflare.

---

## Verification Checklist

After all tasks:

- [ ] `npm run build` succeeds with no errors
- [ ] `npx playwright test` — all tests pass
- [ ] Lighthouse: Performance 95+, Accessibility 100
- [ ] Mobile: no horizontal scroll at 375px
- [ ] All links (LinkedIn, GitHub, email) work correctly
- [ ] Typing animation plays once, cursor blinks after
- [ ] Scroll reveals trigger correctly
- [ ] Nav anchor links scroll to correct sections
