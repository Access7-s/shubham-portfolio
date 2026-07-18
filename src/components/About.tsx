import { profile, stats } from "../data";
import { Reveal, SectionHead } from "./Section";

export default function About() {
  return (
    <section id="about" className="shell py-20 md:py-28">
      <SectionHead no="01" kicker="Who / What" title="A short profile." />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="space-y-5 md:col-span-7">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-xl leading-relaxed text-ink-2 md:text-2xl">
                {i === 0 ? (
                  <>
                    <span className="mark-acid font-medium text-ink">
                      Product strategy meets execution.
                    </span>{" "}
                    {p.replace(
                      "I'm an Artificial Intelligence undergraduate (First Class Honors) who spends most of my time where product strategy meets execution. ",
                      "",
                    )}
                  </>
                ) : (
                  p
                )}
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
