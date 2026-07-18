import { skills } from "../data";
import { SectionHeading } from "./Section";

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="animate-marquee flex shrink-0 gap-3"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="glass whitespace-nowrap rounded-full px-5 py-2 font-mono text-sm text-white/80"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const half = Math.ceil(skills.length / 2);
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading kicker="02 — Skills" title="Tools of the trade" />
      </div>
      <div className="space-y-3">
        <Row items={skills.slice(0, half)} />
        <Row items={skills.slice(half)} reverse />
      </div>
    </section>
  );
}
