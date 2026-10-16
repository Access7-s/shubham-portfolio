# Design Tokens — "Paper Garden" (v8 White)

Ported from the Claude Design file `Portfolio v8 White.dc.html`. The case-study
pages were re-skinned from `Case Study.dc.html`, which was drawn against an
earlier cream-and-multicolour palette, into the tokens below so the whole site
reads as one system.

The direction: **warm editorial, not brutalist**. White paper, deep forest-green
ink and a butter-yellow accent; generous rounded corners; one oversized
condensed grotesk doing the shouting, an italic serif doing the talking back,
and a monospace keeping the notes. Hand-drawn doodles and stickers stop it
feeling corporate.

---

## 1. Color

Forest ink on white, butter accent, and a set of pale card tints that each
project wears consistently across the fan, the grid and its case study.

| Token | Value | Role |
|---|---|---|
| `--color-paper` | `#FFFFFF` | Page background |
| `--color-ink` | `#1E3A2B` | Deep forest green — all body text, rules, dark blocks |
| `--color-ink-hover` | `#2F5A3F` | Link hover; the lighter green on dark tiles |
| `--color-butter` | `#EFD97A` | **Primary accent** — Selected works block, badges, stickers, footer mail |
| `--color-cream` | `#F7EFC4` | Pale tint — Sahara Ghar, wall tiles |
| `--color-sky` | `#DCE6F0` | Pale blue — GMC Job Portal |
| `--color-sage` | `#DDE8D9` | Pale green — Aurora OS, "Spec it" |
| `--color-cocoa` | `#3B2A1E` | Dark brown — Masto Coffee |
| `--color-muted` | `#D3DCCF` | Inactive ticker names only |

**Rules of use:** `--color-ink` is the default text colour everywhere, not black.
`--color-butter` is the only loud colour; one block of it per screenful. The pale
tints are card backgrounds, never text colours. White text appears only on
`--color-ink` and `--color-cocoa`.

## 2. Typography

Four families, each with exactly one job.

| Token | Stack | Role |
|---|---|---|
| `--font-display` | `"Bricolage Grotesque", "Kalam", system-ui` | Everything structural — headings, body, nav, buttons |
| `--font-serif` | `"Instrument Serif", Georgia, serif` | Italic second word of every heading |
| `--font-mono` | `"IBM Plex Mono", ui-monospace` | Meta labels, captions, table keys |
| `--font-hand` | `"Kalam", cursive` | Handwritten asides and stickers |

**The width axis.** Bricolage Grotesque is variable on `opsz`, `wdth` and `wght`.
Its `wdth` axis runs **75%–100%**, so the font URL requests that axis explicitly
and `.t-cond` (`font-stretch: 75%`) gives genuinely condensed type. The source
design asked for `font-stretch: 112%` in places; 112 is out of range and clamps
to 100, so those places simply use the normal width.

**The heading formula.** Every section heading is two words: the first set in
Bricolage 800 uppercase, the second in Instrument Serif italic, lower-case, with
`letter-spacing: -.02em`. "Selected *works*", "How I *work*", "The *wall*",
"One person *spec to* shipped". Do not break this pattern.

**Kalam** also sits in the display fallback chain purely to cover Devanagari —
Bricolage has no Devanagari glyphs, and नमस्कार appears on the wall.

| Class | Rule |
|---|---|
| `.t-h2` | `clamp(40px,6.6vw,120px)`, wght 800, `lh .86`, `ls -.045em`, uppercase |
| `.t-cond` | `font-stretch: 75%` |
| `.t-serif` | Instrument Serif, italic, 400, normal case |
| `.t-mono` | IBM Plex Mono, 12px, uppercase |
| `.t-hand` | Kalam |

## 3. Structure

| Token | Value | Role |
|---|---|---|
| `--gutter` | `clamp(16px, 2.4vw, 32px)` | Page side padding |
| `--r-card` | `18px` | Project cards, cover images |
| `--r-panel` | `28px` | Process cards, the wall panel |

Rounded corners are part of the look — unlike the previous Broadsheet system,
nothing here is square. Pills use `border-radius: 999px`. Hairlines are
`1.5px solid #1E3A2B`; the ruler bands around the ticker are a 1px-on-9px
repeating gradient at 40% opacity.

Sections are separated by `border-top: 1.5px solid` — except the butter
Selected works block, which separates itself by colour.

## 4. Motion

| Token | Value | Role |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Fan cards, ticker, image hover |
| `--ease-sharp` | `cubic-bezier(0.7, 0, 0.2, 1)` | Case-study wipes |

| Keyframes | Use |
|---|---|
| `spin` | The "Let's work" badge (14s) and the wall ring (70s, with each card counter-spinning to stay upright) |
| `wob` | Doodles rocking ±3° (3.4s, staggered) |
| `pop` | Stickers landing along the pointer trail |
| `wipeOut` | Colour panel clearing on case-study entry |

Scrolling is smoothed by Lenis, which owns the scroll position — anchor jumps
and route changes go through `lib/smooth.ts`, never `window.scrollTo`.

**Reduced motion.** `prefers-reduced-motion: reduce` disables every animation and
transition outright. Anything that *moves into place* must therefore also work
when it cannot move: the case-study wipe panel unmounts on a timer rather than
relying on its animation's fill mode, and Lenis is not started at all.
