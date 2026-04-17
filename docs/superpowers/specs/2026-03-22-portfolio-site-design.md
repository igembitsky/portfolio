# Portfolio Site Design Spec

## Context

Igor Gembitsky needs a personal portfolio website that positions him as a **Leader and Builder** — someone who leads with vision and strategy, builds teams and products, and uses AI tools to amplify his output. This is not a resume clone or LinkedIn rewrite. It centers case studies and built artifacts.

## Core Identity

- **Tagline:** Leader. Builder.
- **GitHub bio:** "Product guy turned agentic engineer"
- **Primary CTA:** LinkedIn profile
- **Audience:** Hiring managers, potential collaborators, and partners evaluating senior product leadership

## Tech Stack

- **Framework:** Astro with TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown/MDX files (content collections)
- **Deployment:** Vercel or Cloudflare Pages
- **No CMS** — edit in VS Code, content lives in repo

## Aesthetic Direction: Brutalist / Raw

- **Typography:** JetBrains Mono (monospace everywhere)
- **Palette:** Near-black background (#0c0c0c), light gray text (#e0e0e0), green accent (#0f0) for emphasis/prompts, blue accent (#4af) for links/CTAs, dim gray (#555) for secondary text
- **Borders:** 1px solid #222 — visible structure, no rounded corners
- **Motion:** Typing animation on hero subtitle (plays once), blinking cursor, subtle border-color transitions on hover, staggered reveal on scroll (not over-animated)
- **Nav:** Fixed top bar with bracket-style links: `[work] [builds] [about] [connect]`
- **Overall feel:** Terminal-adjacent, no pretense, substance-first

## Site Structure (v1: Single Page)

### 1. Navigation (fixed)
- Logo: `igor gembitsky` (lowercase, monospace, bold)
- Links: `[work]` `[builds]` `[about]` `[connect]` — anchor scroll

### 2. Hero
- Name: large, white, 48px
- Subtitle: "Leader. Builder." with typing animation + blinking cursor
- Bio: 2 sentences max. Emphasize the arc: first PM hire to VP, built an AI platform from zero, uses AI tools to build faster than teams twice his size
- CTA: `→ connect on linkedin` (bordered button, blue accent)

### 3. // work (Case Studies)
Three cards, each with:
- **Header row:** Company name (bold, white) + date range (dim)
- **Body:** Role title (blue, uppercase), 2-3 sentence description, tag pills
- **Tags:** Highlight tags (`built it`, `sold it`, `first PM hire`, `0 → VP`) in green; tech/context tags in default dim

**Content:**

**Canary** (2025–present) — Head of Product & Operations
AI-powered industrial safety cameras. Built the customer-facing SaaS as primary developer using Claude Code and Codex. Ran pitch meetings, converted to paid pilots. Set up the full GTM engine.
Tags: `built it` `sold it` `React` `AWS Lambda` `DynamoDB` `IoT Core`

**Virtual Diamond Boutique** (2017–2024) — Director of PM → VP Strategic Operations
B2B/B2C diamond marketplace. First PM hire. Built a cross-functional team of 15+. Created the white-label framework that became a core revenue driver. Later built Customer Success from zero to $3.5M ARR.
Tags: `first PM hire` `0 → VP` `26K members` `5 platforms`

**HappyFunCorp** (2015–2017) — Product Manager
Shipped products for Brooklyn Museum (NYT coverage), Harvard University, and MakersFinders. iOS, Android, and web apps with bluetooth beacons and real-time chat.
Tags: `Brooklyn Museum` `Harvard` `MakersFinders`

### 4. // builds (GitHub Projects)
2x2 grid of cards, each with:
- Project name with `> ` green prefix
- 1-sentence description
- Tech stack line (dim, small)
- Links to GitHub repo

**Projects:**
- **canaryview** — Full-stack AWS serverless platform (aws sam / node.js / react)
- **legend-of-nikita** — 2D Phaser game with CI/CD and E2E tests (javascript / phaser / playwright)
- **invoice-agent** — Automated invoice generation on Cloud Run (python / cloud run)
- **resprout-us** — Collaborative form-filling platform (typescript / react / firebase)

### 5. $ connect (Contact)
- Terminal prompt styling: `$ connect` with blinking cursor
- Link row: `linkedin` (primary) `github` `email`

### 6. Footer
- Left: `built with astro + claude code`
- Right: year

## Expansion Path (v2+)

- Individual case study pages (MDX) with deeper narrative
- Blog/writing section using Astro content collections
- About page with fuller bio
- All achievable by adding files to existing Astro structure — no architectural changes needed

## Verification

- Lighthouse: aim for 95+ performance, 100 accessibility
- Mobile responsive (single column on mobile)
- Test in Chrome, Safari, Firefox
- Validate all external links work
- Deploy to Vercel/Cloudflare and confirm production build
