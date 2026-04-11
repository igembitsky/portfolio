---
description: Writing rules for all portfolio copy and content
paths:
  - src/**/*.astro
  - src/data/**/*.ts
---

Igor's portfolio copy must be human, approachable, and specific. Follow these rules:

1. No emdashes. Rewrite the sentence to not need one.
2. No AI tropes: "force multiplier," "defined by," "not just X but Y," motivational-poster phrasing.
3. No "solo builder" or "solo engineer" framing. No "orchestrate agentic/generative workflows" jargon. Emphasize leadership, vision, team building, and concrete outcomes.
4. No self-congratulatory lines like "not as buzzwords but as daily tools."
5. Focus on systems built, decisions made, outcomes achieved. Not responsibilities.
6. Write like a person describing their work to a friend who's also a hiring manager.
7. Don't remove specific numbers that aren't sensitive (100x growth, 20+ features). Do remove dollar amounts and ARR figures.

**Why:** Session 2026-04-10. Multiple rounds of copy feedback. Igor flagged emdashes, "solo builder" framing, corporate-speak, and AI-sounding prose across every section.

**Verify:** `grep -r '—' src/` should return zero matches in content (OK in HTML entities for layout). Read any new copy aloud; if it sounds like a LinkedIn post, rewrite it.
