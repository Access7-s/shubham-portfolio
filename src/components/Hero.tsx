import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { profile, socials } from "../data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* aurora blobs */}
      <div className="blob absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-violet-600/25" />
      <div
        className="blob absolute right-1/4 top-1/3 h-[360px] w-[360px] rounded-full bg-cyan-500/15"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="blob absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-pink-500/10"
        style={{ animationDelay: "-12s" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="glass mb-6 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-mist">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for interesting work
          <span className="mx-1 text-white/20">·</span>
          <MapPin size={12} /> {profile.location}
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          Shubham
          <br />
          <span className="text-gradient">Neupane</span>
        </h1>

        <div className="mt-6 h-8 font-mono text-sm text-mist sm:text-base">
          <span className="text-white/40">{"// "}</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="inline-block text-white/90"
            >
              {profile.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="mt-6 max-w-xl text-balance text-mist">
          I build software that real businesses run on — from edge-deployed
          e-commerce to ERP systems — while studying Artificial Intelligence in
          Kathmandu.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="glow-border glass rounded-xl px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4">
          {socials.slice(0, 4).map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-mist transition-all hover:-translate-y-1 hover:text-white"
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-mist/60"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
