---
description: Never create placeholder or monogram logos for real products/brands
paths:
  - public/assets/**/*.svg
  - public/assets/**/*.png
---

Never fabricate a logo, icon, or brand asset. If the real logo cannot be found through web search, favicon APIs, or brand pages, report it as missing and ask Igor for help. A missing logo is better than a wrong one.

Acceptable sources: official brand pages, simpleicons.org, Google Favicon API (128px+), Apple touch icons. Monogram-on-colored-square is NOT acceptable for real products.

**Why:** Session 2026-04-10. Created fake monogram SVGs for Pipedrive, Woodpecker, Zight, Wispr, Paste, Reclaim, and Fathom. Igor caught them all and had to request a redo. Wasted significant iteration time.

**Verify:** Visual inspection. If a logo is a colored rounded rectangle with a single letter, it's probably fake.
