# Retro Log

## 2026-04-11 | Diagnostic | Books/podcasts curation and link verification

**What happened:** Continuation session focused on content curation and quality assurance. Swapped book list to Igor's curated 12 (added Conscious Business, Leading with Questions, On Writing Well, Atomic Habits; removed Creative Confidence, Elements of Style, Power of Habit). Added 5 new podcasts. Major issue: book cover sourcing from Open Library was unreliable. Multiple ISBNs mapped to completely wrong books (Conscious Business returned "Receiving God", Leading with Questions returned "Words of Jesus"). Google Books API was the reliable fallback. Also fixed Design Better podcast artwork (was showing wrong podcast entirely). All 12 Goodreads links and 10 podcast homepage links systematically verified by a dedicated agent, which caught 2 bad Goodreads URLs before they shipped.

**Classification:** Diagnostic

**Key insight:** Open Library's ISBN-to-cover mapping is unreliable. The same ISBN can return different books depending on the edition. Google Books API (`googleapis.com/books/v1/volumes`) and Penguin Random House (`images3.penguinrandomhouse.com/cover/{ISBN}`) are more reliable sources. Always visually verify downloaded covers before using them.

**Tags:** book-covers, open-library, isbn-mapping, link-verification, goodreads, podcasts

**Patterns:** Second instance of asset sourcing problems (see 2026-04-10 entry about logo sourcing). Pattern: external asset APIs are unreliable and need visual verification. The dedicated verification agent approach (launching an agent specifically to test every link) worked well and caught 2 bugs.

**Artifacts created:** None (existing rules sufficient; the no-fake-logos rule already covers the spirit of "verify visual assets")

### Agent self-assessment

**Behavior to reinforce:** Using a dedicated agent to systematically verify every link before shipping. This caught the Conscious Business and Leading with Questions Goodreads URLs pointing to wrong books. Would have been embarrassing live.

**Behavior to reduce:** Trusting ISBN-based cover APIs without visual verification. Downloaded 4 wrong book covers before switching to visual checks after each download. Should have been checking from the first download.

---

## 2026-04-10 | High-iteration | Portfolio v2: redesign from resume to product showcase

**What happened:** Major portfolio redesign across two versions in a single long session. v1 was a premium visual redesign (brutalist terminal to refined dark theme). v2 was a structural rethink: card-based case studies, narrative timeline blocks, books/podcasts/toolbox sections. Multiple rounds of copy feedback from Igor to remove AI tropes, reframe from "solo builder" to "generative engineering workflow leader," and make the tone human and approachable. Logo sourcing was a significant pain point with multiple failed attempts before getting real brand assets.

**Classification:** High-iteration

**Key insight:** Placeholder/monogram logos are immediately obvious to the user and damage credibility. Never fabricate visual assets. If you can't find the real logo, say so and ask for help. The time spent creating fake SVG monograms was entirely wasted.

**Tags:** portfolio, copy-tone, logo-sourcing, asset-management, base-path, astro

**Patterns:** First retro, no prior patterns.

**Artifacts created:**
- `.claude/rules/no-fake-logos.md`
- `.claude/rules/copy-tone.md`

### Agent self-assessment

**Behavior to reinforce:** The adversarial review before v2 execution caught real problems (bookshelf scope bloat, logo grid corporate feel, max-height fragility) and saved significant rework.

**Behavior to reduce:** Creating monogram placeholder SVGs instead of admitting the real logo wasn't found. This happened 3 times (Pipedrive, Woodpecker, Zight, then Wispr, Paste, Reclaim, Fathom) and Igor had to call it out. Should have flagged missing logos immediately and asked for guidance.
