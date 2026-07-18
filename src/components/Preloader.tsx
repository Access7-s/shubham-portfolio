import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(100);
      const t = setTimeout(() => setDone(true), 200);
      return () => clearTimeout(t);
    }
    const DURATION = 2000;
    let startTs = 0;
    let raf = 0;
    const tick = (t: number) => {
      if (!startTs) startTs = t;
      const p = Math.min(1, (t - startTs) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else raf = window.setTimeout(() => setDone(true), 350) as unknown as number;
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(raf);
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

          {/* bottom: giant counter + progress rule */}
          <div>
            <div
              className="mb-4 h-[2px] w-full origin-left bg-on-ink/20"
              aria-hidden
            >
              <div
                className="h-full bg-flare"
                style={{ width: `${count}%` }}
              />
            </div>
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
