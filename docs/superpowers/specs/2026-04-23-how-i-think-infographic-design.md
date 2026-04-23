# How I Think — Section Redesign

Replace the current "How I Think" intro paragraph and 5-column framework grid with an Apple-style editorial layout: layered typographic lede, three principle pillars, and a numbered stage infographic.

## Why

The current section has two problems:

1. The intro paragraph and the framework grid cover overlapping ground. Both list frameworks, both talk about how Igor works. The paragraph's unique contribution — systems as outcome-driven, self-healing through reflection, run by empowered people — gets buried.
2. The 5-column grid doesn't communicate the system's structure. It looks like a flat feature list. Nothing about the visual says "this is a loop" or "this is how I think."

The redesign separates philosophy (what the system is for) from mechanics (the frameworks I reach for) so they complement rather than duplicate.

## Design

Apple product-page voice. Restrained, typographic, confident. Three layers stacked vertically within the section:

### 1. Layered lede

```
[eyebrow — mono, gold, uppercase] How I Think

[display — large, bold, tight tracking] The [purpose] of a system is what it [does].
  ^ "purpose" and "does" rendered in gold accent color

[support — medium, muted] I build systems that move toward the outcome,
self-heal through reflection, and run on empowered people. The frameworks
below are how I do that work.
```

### 2. Three principle pillars (triptych)

Three columns, each with a mono gold label and short body.

| Label | Body |
|---|---|
| PURPOSE | Systems are judged by what they produce. That's the one metric that matters. Everything else serves it. |
| REFLECTION | Tight loops. Plan, ship, retro, question. How a system learns, self-corrects, and outlasts any individual. |
| PEOPLE | Empowered teams run the system. They need clarity of direction, real autonomy, and authority to act. |

Line count is balanced across the three. Bottom border closes the triptych.

### 3. Transition label + stage infographic

Mono small-caps label: "How I do the work"

Five numbered stage rows. Each row: large ghosted mono numeral, stage name with period, inline framework list separated by middle dots.

```
01   Discover.    JTBD · Mom Test · Design Thinking · Double Diamond
02   Prioritize.  RICE · Pareto 80/20 · Hypothesis-driven dev
03   Execute.     Agile sprints · Design Sprints · Blameless retros
04   Scale.       Automate · Delegate · Document · PR/FAQ · Pre-mortems
05   Lead.        Servant leadership · Psychological safety
```

Numeric column is ghosted (very dim) so it reads as rhythm, not data. Stage name is bright white, 600 weight, with a period for Apple-style punctuation. Framework list is dim and small. Thin divider between rows. Stage 05 "Lead." rendered in gold to mark the closing posture.

## Visual tokens

All tokens already exist in `src/styles/global.css`. No new color values needed.

| Role | Token |
|---|---|
| Display/lede body text | `--color-fg` (#ece8e1) |
| Support/muted text | `--color-fg-muted` (#b4afbe) |
| Frameworks list | `--color-fg-dim` (#807c8d) |
| Gold accents (eyebrow, highlighted words, pillar labels, Lead) | `--color-accent` (#c8a55a) |
| Ghosted numerals | custom dim `#2a2a3a` (between `--color-border` and `--color-fg-dim`) |
| Dividers | `--color-border` (#1e1e2e) |
| Mono | `--font-mono` |

## Scope

### In scope
- Replace the entire "How I Think" section in `src/pages/index.astro` (currently lines 208–245, the intro paragraph and the 5-column framework grid)
- Any new utility classes in `src/styles/global.css` if inline styles won't cover it
- Stagger-reveal animation on the triptych pillars (matches existing site pattern)

### Not in scope
- Changes to the Books or Podcasts subsections below the frameworks (they stay as-is)
- Changes to any other section
- Icon/illustration additions
- Animations beyond the existing scroll-reveal

## Copy rules enforced

- No emdashes anywhere in new copy (verified)
- No "not X, but Y" formulations (verified)
- No "defined by" trope (display line uses "is what it does" instead)
- Frameworks list content preserved verbatim from current site (no content changes, only presentation)

## Responsive behavior

- Triptych: 3 columns on desktop, 1 column stacked on mobile (`sm:` breakpoint)
- Stage rows: same structure across breakpoints. On narrow widths, the framework list wraps below the stage name rather than crowding the numeral column. Numeral stays fixed-width.
- Display line wraps naturally; max-width ~680px on desktop keeps it from running too wide

## Acceptance

The section should read as one continuous editorial thought:
1. Eyebrow introduces the topic
2. Display line states the philosophical claim
3. Support sentence previews the three pillars
4. Pillars deliver the "why" (purpose, reflection, people)
5. Transition bridges to "how"
6. Stage rows deliver the concrete toolkit

Nothing in the intro should repeat what's in the infographic. Nothing in the infographic should repeat what's in the intro.
