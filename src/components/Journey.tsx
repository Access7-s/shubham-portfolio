import { journey } from "../data";
import { Reveal, SectionHeading } from "./Section";

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading kicker="04 — Journey" title="How I got here" />
      <div className="relative ml-3 border-l border-white/10 pl-8 sm:ml-6">
        {journey.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 ring-4 ring-void" />
            <p className="mb-1 font-mono text-xs uppercase tracking-widest text-violet-300/70">
              {item.period}
            </p>
            <h3 className="font-display text-xl font-bold">{item.title}</h3>
            <p className="mb-2 text-sm font-medium text-white/70">
              {item.subtitle}
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-mist">
              {item.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
