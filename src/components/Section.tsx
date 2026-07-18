import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.7, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  no,
  kicker,
  title,
  count,
}: {
  no: string;
  kicker: string;
  title: string;
  count?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="meta mb-6 flex items-center justify-between pb-3 hair-b">
        <span className="flex items-center gap-3">
          <span className="flare tnum">({no})</span>
          <span>
            {"{ "}
            {kicker}
            {" }"}
          </span>
        </span>
        <span className="tnum" aria-hidden>
          {count ? `{ ${count} }` : "{ * }"}
        </span>
      </div>
      <Reveal>
        <h2 className="font-display" style={{ fontSize: "var(--fs-display)" }}>
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
