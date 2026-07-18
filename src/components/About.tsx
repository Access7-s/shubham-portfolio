import { profile, stats } from "../data";
import { Reveal, SectionHead } from "./Section";

export default function About() {
  return (
    <section id="about" className="shell py-20 md:py-28">
      <SectionHead no="01" kicker="Who / What" title="A short profile." />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="space-y-5 md:col-span-7">
          <Reveal>
            <p className="text-xl leading-relaxed text-ink md:text-2xl">
              <span className="mark-acid font-medium">
                Where engineering meets the business.
              </span>
            </p>
          </Reveal>
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={0.06 + i * 0.06}>
              <p className="text-xl leading-relaxed text-ink-2 md:text-2xl">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <div style={{ border: "2px solid var(--color-ink)" }}>
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-baseline justify-between gap-4 p-5 ${
                    i !== 0 ? "hair-b" : ""
                  }`}
                  style={
                    i !== 0
                      ? { borderTop: "1px solid var(--rule)" }
                      : undefined
                  }
                >
                  <span className="font-display text-5xl leading-none md:text-6xl">
                    {s.value}
                  </span>
                  <span className="meta max-w-[9rem] text-right text-ink-3">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
