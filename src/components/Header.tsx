import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  /* CSS already hides the panel above the breakpoint, but the state would
     stay open behind it — so the button and aria-expanded would disagree
     with what is on screen if the viewport came back down. */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 720px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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

      <button
        type="button"
        className="site-header__menu"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((o) => !o)}
        style={{
          font: "inherit",
          color: "inherit",
          background: open ? "var(--color-butter)" : "transparent",
        }}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        /* Any link in here both navigates and closes the panel — the click
           bubbles up after Link's own handler has run. */
        <nav
          id="site-menu"
          className="site-header__panel"
          onClick={() => setOpen(false)}
        >
          {links.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
              {l.sup && <sup style={{ fontSize: 14 }}>({l.sup})</sup>}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
