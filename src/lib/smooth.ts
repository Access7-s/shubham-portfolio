import type Lenis from "lenis";

/* Lenis owns the scroll position, so anchor jumps and route changes have to
   go through it rather than `window.scrollTo` — otherwise Lenis immediately
   animates back to where it thought it was. */

let instance: Lenis | null = null;

export function setLenis(next: Lenis | null) {
  instance = next;
}

/** Header is sticky; leave room for it when landing on a section. */
const HEADER_OFFSET = -72;

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (instance) instance.scrollTo(el, { offset: HEADER_OFFSET });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function scrollToTop(immediate = false) {
  if (instance) instance.scrollTo(0, { immediate });
  else window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
}
