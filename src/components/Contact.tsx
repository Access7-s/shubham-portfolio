import { profile, socials } from "../data";
import { Reveal, SectionHeading } from "./Section";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <div className="blob absolute -bottom-40 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/20" />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading kicker="05 — Contact" title="Let's build something" />
        <Reveal>
          <p className="max-w-xl text-mist">
            Whether it's a product idea, a collaboration, or just a good
            conversation about software — my inbox is open.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="text-gradient mt-6 inline-block font-display text-2xl font-bold tracking-tight sm:text-4xl"
          >
            {profile.email}
          </a>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-white/80 transition-all hover:-translate-y-0.5 hover:border-violet-400/30 hover:text-white"
            >
              <s.icon size={16} />
              {s.label}
            </a>
          ))}
        </Reveal>
        <footer className="mt-24 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 font-mono text-xs text-white/30 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            Kathmandu, Nepal <span className="text-violet-400/50">·</span> built
            with React + Tailwind
          </p>
        </footer>
      </div>
    </section>
  );
}
