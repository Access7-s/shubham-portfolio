import { Link } from "../lib/router";
import { useKathmanduClock } from "../lib/useKathmanduClock";
import { profile, projects } from "../data";

const links = [
  { to: "#work", label: "Work", sup: String(projects.length).padStart(2, "0") },
  { to: "#how", label: "Process" },
  { to: "#wall", label: "Wall" },
  { to: "#about", label: "About" },
  { to: "#contact", label: "Contact" },
];

export default function Header() {
  const clock = useKathmanduClock();

  return (
    <header
      className="site-header t-cond sticky top-0 z-30 bg-paper"
      style={{
        padding: "16px var(--gutter)",
        fontWeight: 600,
        fontSize: 13,
        textTransform: "uppercase",
      }}
    >
      <span className="site-header__meta">
        <span>{profile.location}</span>
        <span aria-hidden>//</span>
        <span>{clock}</span>
      </span>

      <span className="site-header__spacer" aria-hidden />

      <nav className="site-header__nav">
        {links.map((l) => (
          <Link key={l.to} to={l.to}>
            {l.label}
            {l.sup && <sup style={{ fontSize: 9 }}>({l.sup})</sup>}
          </Link>
        ))}
      </nav>
    </header>
  );
}
