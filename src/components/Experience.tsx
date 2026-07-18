import { experience, education } from "../data";
import { Reveal, SectionHead } from "./Section";

export default function Experience() {
  return (
    <section id="experience" className="shell py-20 md:py-28">
      <SectionHead
        no="04"
        kicker="Track Record"
        title="Where I've worked."
        count={String(experience.length).padStart(2, "0")}
      />

      {/* compact editorial ledger */}
      <div style={{ borderBottom: "2px solid var(--color-ink)" }}>
        {experience.map((item, i) => (
          <Reveal key={item.role + i} delay={i * 0.05}>
            <div
              className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 py-6 transition-colors duration-500 hover:bg-ink hover:text-on-ink md:py-7"
              style={{ borderTop: "2px solid var(--color-ink)" }}
            >
              {/* period */}
              <div className="meta tnum col-span-12 text-ink-3 group-hover:text-on-ink/60 md:col-span-3 md:pl-2">
                {"{ "}
                {item.period}
                {" }"}
              </div>

              {/* role + org */}
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-display text-2xl leading-none md:text-3xl">
                  {item.role}
                </h3>
                <div className="meta mt-2 flex flex-wrap gap-x-2 gap-y-0.5">
                  <span className="flare">{item.org}</span>
                  <span aria-hidden className="text-ink-3 group-hover:text-on-ink/50">
                    · {item.place}
                  </span>
                </div>
              </div>

              {/* short + metric tags */}
              <div className="col-span-12 md:col-span-5 md:pr-2">
                <p className="max-w-md leading-snug text-ink-2 group-hover:text-on-ink/80">
                  {item.short}
                </p>
                <ul className="meta mt-3 flex flex-wrap gap-x-4 gap-y-1 text-ink-3 group-hover:text-on-ink/60">
                  {item.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* education — compact two-up footer */}
      <Reveal>
        <div className="mt-8 flex flex-wrap items-center gap-3 pb-2 md:mt-10">
          <span className="meta text-ink-3">{"{ Education }"}</span>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          {education.map((e) => (
            <div
              key={e.org}
              className="grid grid-cols-1 gap-1 pt-4 sm:grid-cols-[7rem_1fr]"
              style={{ borderTop: "1px solid var(--rule)" }}
            >
              <div className="meta tnum text-ink-3">{e.period}</div>
              <div>
                <h4 className="font-display text-lg leading-tight">{e.org}</h4>
                <p className="mt-0.5 text-sm text-ink-2">{e.detail}</p>
                {e.note && (
                  <p className="meta mt-1 text-ink-3">{e.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
