import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 400 && y > last);
      last = y;
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper/90 backdrop-blur-sm transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ borderBottom: "2px solid var(--color-ink)" }}
    >
      <div className="shell flex items-center justify-between py-3.5">
        <a href="#top" className="font-display text-2xl leading-none">
          SN<span className="flare">.</span>
        </a>
        <nav className="meta hidden items-center gap-7 md:flex">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="link-u">
              <span className="flare mr-1.5">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn hidden sm:inline-block">
          Get in touch
        </a>
        <a href="#contact" className="meta flare sm:hidden">
          Contact →
        </a>
      </div>
    </header>
  );
}
