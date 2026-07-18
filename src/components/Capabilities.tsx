import { capabilities } from "../data";
import { Reveal, SectionHead } from "./Section";

export default function Capabilities() {
  return (
    <section className="shell py-20 md:py-28">
      <SectionHead no="02" kicker="How I work" title="What I bring." />

      <div
        className="grid grid-cols-1 sm:grid-cols-2"
        style={{ borderTop: "2px solid var(--color-ink)", borderLeft: "2px solid var(--color-ink)" }}
      >
        {capabilities.map((c, i) => (
          <Reveal key={c.no} delay={(i % 2) * 0.08}>
            <article
              className="group h-full p-6 transition-colors duration-500 hover:bg-ink hover:text-on-ink md:p-8"
              style={{
                borderRight: "2px solid var(--color-ink)",
                borderBottom: "2px solid var(--color-ink)",
              }}
            >
              <div className="meta mb-8 flex items-center justify-between">
                <span className="flare text-lg tnum group-hover:text-acid">
                  {c.no}
                </span>
                <span className="text-ink-3 group-hover:text-on-ink">✳</span>
              </div>
              <h3 className="font-display mb-3 text-2xl md:text-3xl">
                {c.title}
              </h3>
              <p className="mb-6 max-w-md leading-relaxed text-ink-2 group-hover:text-on-ink/80">
                {c.body}
              </p>
              <ul className="meta flex flex-wrap gap-x-4 gap-y-1 text-ink-3 group-hover:text-on-ink/70">
                {c.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
