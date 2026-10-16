# Open Graph card generator

`card.html` is the source for `public/img/og.png` — the 1200x630 social card
referenced by `og:image`, `og:image:secure_url`, `twitter:image` in
`index.html` and by `public/sitemap.xml`. The path and size are fixed.

Regenerate after any change to the card:

```
node tools/og/render.mjs
```

The card is built from the Paper Garden tokens in `TOKENS.md` — white paper,
forest ink `#1E3A2B`, butter `#EFD97A`; Bricolage Grotesque with the second
word of the name in Instrument Serif italic, IBM Plex Mono meta labels, a
Kalam sticker, and the blob and sparkle doodles from
`src/components/Doodles.tsx`. The fonts load from the same Google Fonts URL as
`index.html`, so rendering needs a network connection.

Nothing here is bundled — `tools/` is outside `src/` and the Vite build never
touches it.
