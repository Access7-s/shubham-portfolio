import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data";

const skipIntro =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("nointro");

export default function Preloader() {
  const [count, setCount] = useState(skipIntro ? 100 : 0);
  const [done, setDone] = useState(skipIntro);

  useEffect(() => {
    if (skipIntro) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(100);
      const t = setTimeout(() => setDone(true), 200);
      return () => clearTimeout(t);
    }
    const DURATION = 2000;
    const STEP = 20;
    let elapsed = 0;
    // Interval-based (keeps advancing on backgrounded tabs where rAF pauses)
    const id = setInterval(() => {
      elapsed += STEP;
      const p = Math.min(1, elapsed / DURATION);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setCount(Math.round(eased * 100));
      if (p >= 1) {
        clearInterval(id);
        setTimeout(() => setDone(true), 350);
      }
    }, STEP);
    // Hard safety net: always dismiss, even if the tab throttles timers
    const hard = setTimeout(() => setDone(true), DURATION + 1500);
    return () => {
      clearInterval(id);
      clearTimeout(hard);
    };
  }, []);

  // Lock scroll while the loader is up
  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  const pad = count.toString().padStart(3, "0");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="on-ink fixed inset-0 z-[100] flex flex-col justify-between"
          style={{ padding: "var(--gutter)" }}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
          aria-hidden
        >
          {/* top row */}
          <div className="meta flex items-center justify-between pt-1">
            <span className="text-acid">{"{ LOADING }"}</span>
            <span className="tnum">{profile.name}</span>
          </div>

          {/* center statement */}
          <div className="meta mx-auto max-w-md text-center text-on-ink/50">
            Technical Product Manager · Product Owner · Co-Founder of Aurora
            Studios
          </div>

          {/* bottom: sprite (centered, above the progress line) + counter */}
          <div>
            <div className="mb-5 flex justify-center">
              <img
                src="/img/sprite.png"
                alt="Shubham — 16-bit"
                className="pixelated animate-sprite"
                style={{
                  width: "clamp(120px, 22vw, 188px)",
                  border: "2px solid var(--color-on-ink)",
                }}
              />
            </div>
            {/* progress line */}
            <div
              className="mb-4 h-[2px] w-full origin-left bg-on-ink/20"
              aria-hidden
            >
              <div className="h-full bg-flare" style={{ width: `${count}%` }} />
            </div>
            {/* counter + % */}
            <div className="flex items-end justify-between">
              <span
                className="font-display leading-[0.8]"
                style={{ fontSize: "clamp(4.5rem, 20vw, 18rem)" }}
              >
                {count}
              </span>
              <span className="meta tnum mb-3 hidden text-on-ink/50 sm:block">
                {pad} %
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
