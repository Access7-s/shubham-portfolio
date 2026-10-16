# Shubham Neupane — Portfolio

Personal portfolio of **Shubham Neupane** — Full-Stack Engineer and founder of
Aurora Studios, from Kathmandu, Nepal.

**Design direction:** "Paper Garden" — white paper, deep forest-green ink and a
butter-yellow accent, ported from the Claude Design file
`Portfolio v8 White.dc.html`. See [`TOKENS.md`](./TOKENS.md) for the full token
system (color, type, structure, motion).

## Stack

- [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) — build tooling
- [Tailwind CSS v4](https://tailwindcss.com) — styling (tokens in `@theme`)
- [Lenis](https://lenis.darkroom.engineering) — smooth scrolling
- Type: **Bricolage Grotesque** (variable grotesk, `wdth` 75–100), **Instrument
  Serif** (italic accents), **IBM Plex Mono** (meta), **Kalam** (handwriting)

## Structure

```
src/
  pages/      Home and Case (the six case studies)
  components/ Header, Footer, Doodles + home/ sections
  lib/        router, Lenis-aware scrolling, Kathmandu clock
  data.ts     all content — projects, process, wall, timeline, skills
```

Routing is a ~60-line path router (`lib/router.tsx`) over the History API;
`public/_redirects` gives static hosts the SPA fallback that `/work/:slug`
needs.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy

The site is a fully static SPA — `dist/` can be dropped onto any static host
(Cloudflare Pages, Netlify, Vercel, GitHub Pages).

For Cloudflare Pages: build command `npm run build`, output directory `dist`.
