import { skills } from "../data";

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className="animate-marquee flex w-max shrink-0 items-center"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((s, i) => (
          <span key={`${s}-${i}`} className="flex items-center whitespace-nowrap">
            <span className="font-display px-6 py-3 text-3xl md:text-5xl">
              {s}
            </span>
            <span className="flare text-xl">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const half = Math.ceil(skills.length / 2);
  return (
    <section
      className="py-14 md:py-20"
      style={{ borderBlock: "2px solid var(--color-ink)" }}
    >
      <div className="shell">
        <div className="meta mb-8 flex items-center justify-between text-ink-3">
          <span>
            <span className="flare">(05)</span> {"{ Capabilities Index }"}
          </span>
          <span className="tnum" aria-hidden>{`{ ${skills.length} }`}</span>
        </div>
      </div>
      <div className="space-y-1">
        <Row items={skills.slice(0, half)} />
        <Row items={skills.slice(half)} reverse />
      </div>
    </section>
  );
}
