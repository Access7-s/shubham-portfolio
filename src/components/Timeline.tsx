import { Fragment } from "react";
import { motion } from "framer-motion";
import { milestones, type Milestone } from "../data";
import { SectionHead } from "./Section";

const LABEL_H = 104; // reserved space below the baseline for year + labels
const TICK_PATTERN = [10, 18, 13, 27, 15, 21, 11, 31, 14, 23, 12, 17, 9, 25];

/** Decorative seismograph ticks that sit on the baseline. */
function Ticks({ seed }: { seed: number }) {
  const count = 7;
  return (
    <div className="flex items-end gap-[5px]" style={{ paddingBottom: LABEL_H }}>
      {Array.from({ length: count }).map((_, i) => {
        const h = TICK_PATTERN[(seed * 5 + i * 3) % TICK_PATTERN.length];
        return (
          <span
            key={i}
            style={{ width: 2, height: h, background: "rgba(12,11,9,0.16)" }}
          />
        );
      })}
    </div>
  );
}

function Node({ m, index }: { m: Milestone; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.7, 0, 0.2, 1] }}
      className="group flex shrink-0 flex-col items-center"
      style={{ width: 214 }}
    >
      {/* CARD — photo or stat */}
      {m.img ? (
        <div
          className="relative w-full overflow-hidden"
          style={{ height: 156, border: "2px solid var(--color-ink)" }}
        >
          <img
            src={m.img}
            alt={m.title}
            className="h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 group-hover:grayscale-0"
          />
          {m.tag && (
            <span className="meta absolute left-0 top-0 bg-ink px-2 py-1 text-on-ink">
              {m.tag}
            </span>
          )}
        </div>
      ) : (
        <div
          className="flex w-full flex-col items-center justify-center gap-1 transition-colors duration-500 group-hover:bg-ink group-hover:text-on-ink"
          style={{ height: 156, border: "2px solid var(--color-ink)" }}
        >
          <span className="font-display text-5xl leading-none">{m.stat}</span>
          <span className="meta text-ink-3 group-hover:text-on-ink/70">
            {m.statLabel}
          </span>
        </div>
      )}

      {/* connector spike */}
      <div
        style={{ width: 2, height: 56, background: "var(--color-ink)" }}
        className="origin-bottom transition-transform"
      />

      {/* below-baseline labels */}
      <div
        className="flex w-full flex-col items-center pt-3 text-center"
        style={{ height: LABEL_H }}
      >
        {/* node marker straddling the baseline */}
        <div
          className="-mt-[calc(0.75rem+5px)] mb-2 group-hover:bg-flare"
          style={{ width: 9, height: 9, background: "var(--color-ink)" }}
        />
        <div className="font-display text-2xl leading-none">{m.year}</div>
        <div className="meta mt-1.5">{m.title}</div>
        <div className="mt-1 max-w-[13rem] text-xs leading-snug text-ink-3">
          {m.sub}
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="journey" className="py-20 md:py-28">
      <div className="shell">
        <SectionHead
          no="05"
          kicker="The Journey"
          title="Milestones."
          count={String(milestones.length).padStart(2, "0")}
        />
        <div className="meta mb-4 flex items-center gap-2 text-ink-3">
          <span>{"{ 2020 — 2026 }"}</span>
          <span aria-hidden>· scroll / drag →</span>
        </div>
      </div>

      {/* full-bleed seismograph strip */}
      <div className="relative overflow-x-auto pb-2" style={{ scrollbarWidth: "thin" }}>
        <div
          className="relative flex min-w-max items-end px-[var(--gutter)]"
        >
          {/* baseline */}
          <div
            className="pointer-events-none absolute inset-x-0"
            style={{ bottom: LABEL_H, height: 2, background: "var(--color-ink)" }}
          />
          <Ticks seed={0} />
          {milestones.map((m, i) => (
            <Fragment key={i}>
              <Node m={m} index={i} />
              <Ticks seed={i + 1} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
