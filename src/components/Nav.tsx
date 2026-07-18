import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-3xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-violet-950/30" : "bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">SN</span>
          <span className="ml-1.5 font-mono text-[10px] text-mist">
            /paradox/
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-mist sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="glow-border rounded-xl px-4 py-1.5 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          Say hi
        </a>
      </nav>
    </motion.header>
  );
}
