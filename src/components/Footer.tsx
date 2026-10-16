import { Blob } from "./Doodles";
import { Link } from "../lib/router";
import { useKathmanduClock } from "../lib/useKathmanduClock";
import { profile, socials } from "../data";

const colLabel: React.CSSProperties = { fontSize: 11, opacity: 0.55 };

export default function Footer() {
  const clock = useKathmanduClock();
  const [user, domain] = profile.email.split("@");

  return (
    <footer
      id="contact"
      className="flex flex-col bg-ink text-white"
      style={{
        padding: "clamp(56px,8vw,120px) var(--gutter) 20px",
        gap: "clamp(40px,6vw,80px)",
      }}
    >
      <div
        className="grid items-end gap-6"
        style={{ gridTemplateColumns: "minmax(0,1fr) auto" }}
      >
        <div className="flex flex-col" style={{ gap: 12 }}>
          <span style={{ fontSize: 18 }}>Have a project? Write to me.</span>
          <a
            href={`mailto:${profile.email}`}
            className="flex flex-wrap text-butter hover:text-white"
            style={{
              fontWeight: 500,
              fontSize: "clamp(30px,5.6vw,100px)",
              lineHeight: 0.95,
              letterSpacing: "-.04em",
            }}
          >
            <span className="whitespace-nowrap">{user}</span>
            <span className="whitespace-nowrap">@{domain}</span>
          </a>
        </div>
        <Blob width="clamp(70px,8vw,120px)" legStroke="#EFD97A" />
      </div>

      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))",
          fontSize: 16,
        }}
      >
        <div className="flex flex-col" style={{ gap: 6 }}>
          <span className="t-mono" style={colLabel}>
            Contact
          </span>
          <a href={`mailto:${profile.email}`} className="hover:text-butter">
            Email
          </a>
          <a href={profile.phoneHref} className="hover:text-butter">
            {profile.phone}
          </a>
        </div>

        <div className="flex flex-col" style={{ gap: 6 }}>
          <span className="t-mono" style={colLabel}>
            Elsewhere
          </span>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-butter"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col" style={{ gap: 6 }}>
          <span className="t-mono" style={colLabel}>
            Studio
          </span>
          <span>{profile.studio}</span>
          <span>Kathmandu, Nepal</span>
        </div>

        <div className="flex flex-col" style={{ gap: 6 }}>
          <span className="t-mono" style={colLabel}>
            Open to
          </span>
          <span>Full-time</span>
          <span>Contract &amp; freelance</span>
        </div>
      </div>

      <div
        className="t-mono flex flex-wrap justify-between gap-3"
        style={{ fontSize: 11, opacity: 0.65 }}
      >
        <span className="whitespace-nowrap">©2026 {profile.name}</span>
        <span className="whitespace-nowrap">Kathmandu {clock}</span>
        <Link to="#top" className="whitespace-nowrap hover:text-butter">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
