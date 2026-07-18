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

      <div className="grid grid-cols-1 gap-x-12 md:grid-cols-12">
        {/* Experience */}
        <div className="md:col-span-8">
          {experience.map((item, i) => (
            <Reveal key={item.role + i} delay={i * 0.05}>
              <div
                className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-[10rem_1fr]"
                style={{ borderTop: "2px solid var(--color-ink)" }}
              >
                <div className="meta tnum text-ink-3">
                  {"{ "}
                  {item.period}
                  {" }"}
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-tight md:text-3xl">
                    {item.role}
                  </h3>
                  <div className="meta mt-1.5 mb-3 flex flex-wrap gap-x-3 text-ink-2">
                    <span className="flare">{item.org}</span>
                    <span aria-hidden>/</span>
                    <span>{item.place}</span>
                  </div>
                  <p className="max-w-xl leading-relaxed text-ink-2">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education */}
        <div className="mt-12 md:col-span-4 md:mt-0">
          <Reveal>
            <div className="meta hair-b mb-6 pb-3 text-ink-3">
              {"{ Education }"}
            </div>
            <div className="space-y-8">
              {education.map((e) => (
                <div key={e.org}>
                  <div className="meta tnum mb-1 text-ink-3">
                    {"{ "}
                    {e.period}
                    {" }"}
                  </div>
                  <h4 className="font-display text-xl leading-tight">
                    {e.org}
                  </h4>
                  <p className="mt-1 text-ink-2">{e.detail}</p>
                  {e.note && <p className="meta mt-1 text-ink-3">{e.note}</p>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
