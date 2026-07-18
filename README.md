# Shubham Neupane — Portfolio

Personal portfolio of **Shubham Neupane** — Artificial Intelligence · Product Owner · Project Manager from Kathmandu, Nepal.

**Design direction:** "Broadsheet" — an editorial × brutalist system
reverse-engineered from [jensbosman.nl](https://jensbosman.nl),
[olhalazarieva.com](https://www.olhalazarieva.com) and
[109ichiki.com](https://109ichiki.com). See [`TOKENS.md`](./TOKENS.md) for the
full token system (color, type, structure, motion).

## Stack

- [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) — build tooling
- [Tailwind CSS v4](https://tailwindcss.com) — styling (tokens in `@theme`)
- [Framer Motion](https://motion.dev) — animations
- [Lenis](https://lenis.darkroom.engineering) — smooth scrolling
- [Lucide](https://lucide.dev) — icons
- Type: **Fraunces** (display serif), **Archivo** (grotesk), **Spline Sans Mono** (mono)

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
