import { profile, socials } from "../data";
import { Reveal } from "./Section";

export default function Contact() {
  return (
    <footer id="contact" className="on-ink">
      <div className="shell py-20 md:py-28">
        <div className="meta hair-b flex items-center justify-between pb-4">
          <span>
            <span className="text-acid">(06)</span> Contact
          </span>
          <span>{profile.coords}</span>
        </div>

        <Reveal>
          <p className="meta mt-12 mb-5 text-on-ink/60">Let's build something.</p>
          <a
            href={`mailto:${profile.email}`}
            className="font-display link-u inline-block max-w-full break-words leading-none"
            style={{ fontSize: "clamp(1.75rem, 6vw, 4.5rem)" }}
          >
            {profile.email}
          </a>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div
              className="grid grid-cols-2 sm:grid-cols-4"
              style={{ borderTop: "2px solid var(--color-on-ink)", borderLeft: "2px solid var(--color-on-ink)" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 transition-colors duration-400 hover:bg-acid hover:text-ink"
                  style={{
                    borderRight: "2px solid var(--color-on-ink)",
                    borderBottom: "2px solid var(--color-on-ink)",
                  }}
                >
                  <span className="meta">{s.label}</span>
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-1.5 text-on-ink/70">
                <p className="meta text-on-ink/50">Based in</p>
                <p className="font-display text-2xl text-on-ink">
                  {profile.location}
                </p>
              </div>
              <div className="meta mt-8 flex justify-between text-on-ink/50">
                <span>{profile.connections} connections</span>
                <span>{profile.followers} followers</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          className="meta mt-20 flex flex-col gap-2 pt-6 text-on-ink/50 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid var(--rule-on-ink)" }}
        >
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Designed & built in Kathmandu — Editorial × Brutalist</span>
        </div>
      </div>
    </footer>
  );
}
