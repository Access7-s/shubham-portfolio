# Design Tokens — "Broadsheet" (Editorial × Brutalist)

Reverse-engineered and synthesized from three references:

| Reference | What we took |
|---|---|
| **jensbosman.nl** | Mono-chrome ink/paper base, oversized display type, a single loud accent, wide letter-spacing on labels |
| **olhalazarieva.com** | Condensed heavy display + monospace meta pairing, warm off-white paper, hairline rules |
| **109ichiki.com** | Fluorescent accent, crisp lines, whitespace-forward brutalist grid, monospace numerals |

The direction: a **brutalist avant-garde broadsheet** — raw 12-column grid, hard black rules, oversized editorial serif headlines in tension with monospace meta-labels, and a duotone fluorescent accent pair. No rounded corners, no soft shadows, no glassmorphism.

---

## 1. Color

Paper + ink monochrome base, two spot accents (one warm/loud for paper, one neon for dark blocks).

| Token | Value | Role |
|---|---|---|
| `--paper` | `#FFFFFF` | White background (primary) |
| `--paper-2` | `#F4F4F1` | Recessed panel / alternate row |
| `--ink` | `#0C0B09` | Near-black text, rules, dark blocks |
| `--ink-2` | `#2A2822` | Secondary text on paper |
| `--ink-3` | `#6B6B66` | Muted meta text |
| `--flare` | `#FF3B1E` | **Primary accent** — vermilion, works on paper & ink |
| `--acid` | `#CBFF1D` | **Neon accent** — acid lime, for dark blocks & highlight marks |
| `--rule` | `rgba(12,11,9,.18)` | Hairline dividers on paper |
| `--rule-strong` | `#0C0B09` | Heavy structural borders |
| `--on-ink` | `#F5F5F2` | Near-white text on ink blocks |

**Rules of use:** one accent per block. `--flare` is the default interactive/emphasis color on paper. `--acid` only appears on `--ink` blocks or as a highlighter mark behind ink text. Never place `--acid` text directly on `--paper` (low contrast).

## 2. Typography

Three families — editorial serif × brutalist mono × structural grotesk.

| Token | Stack | Role |
|---|---|---|
| `--font-display` | `"Fraunces", Georgia, serif` | Oversized editorial headlines (wght 900, high optical size, slight slant) |
| `--font-grotesk` | `"Archivo", system-ui, sans-serif` | Body, buttons, structural labels |
| `--font-mono` | `"Spline Sans Mono", ui-monospace, monospace` | Meta-labels, tags, numerals, coordinates |

**Type scale** (fluid, brutalist big-jumps):

| Token | clamp() | Use |
|---|---|---|
| `--fs-mega` | `clamp(3.25rem, 13vw, 13rem)` | Hero name |
| `--fs-display` | `clamp(2.5rem, 7vw, 6rem)` | Section openers |
| `--fs-h2` | `clamp(1.75rem, 4vw, 3.25rem)` | Sub-heads |
| `--fs-h3` | `clamp(1.15rem, 2vw, 1.6rem)` | Card titles |
| `--fs-body` | `1.0625rem` | Paragraphs |
| `--fs-meta` | `0.75rem` | Mono labels (uppercase, `tracking .18em`) |

**Treatments:** display uses `letter-spacing: -0.03em`, `line-height: 0.92`. Meta labels are `text-transform: uppercase; letter-spacing: 0.18em`. Numerals use tabular mono.

## 3. Structure

| Token | Value | Role |
|---|---|---|
| `--maxw` | `1440px` | Page max width |
| `--gutter` | `clamp(1rem, 4vw, 3.5rem)` | Page side padding |
| `--radius` | `0` | Brutalist — no rounded corners anywhere |
| `--bd-hair` | `1px` | Hairline rule |
| `--bd` | `2px` | Standard border |
| `--bd-heavy` | `4px` | Heavy structural border |

**Spacing scale** (8px base): `--s-1: .5rem`, `--s-2: 1rem`, `--s-3: 1.5rem`, `--s-4: 2.5rem`, `--s-5: 4rem`, `--s-6: 6.5rem`, `--s-7: 10rem`.

## 4. Motion

| Token | Value | Role |
|---|---|---|
| `--ease` | `cubic-bezier(0.7, 0, 0.2, 1)` | Sharp editorial easing |
| `--dur` | `0.5s` | Standard transition |
| Reveal | translateY(28px) + clip-path wipe | Section entrance |
| Hover | invert (ink↔paper), no scale on brutalist blocks | Buttons, links, cards |

All motion respects `prefers-reduced-motion`.
