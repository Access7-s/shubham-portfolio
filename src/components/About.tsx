import { GraduationCap, Rocket, Cpu, Sparkles } from "lucide-react";
import { profile } from "../data";
import { Reveal, SectionHeading } from "./Section";

const cards = [
  {
    icon: Rocket,
    title: "Ships real products",
    body: "ERP, e-commerce, job platforms — software with actual users, not just demos.",
  },
  {
    icon: GraduationCap,
    title: "AI undergraduate",
    body: "Herald College Kathmandu — studying machine learning and intelligent systems.",
  },
  {
    icon: Cpu,
    title: "Edge-first stack",
    body: "TypeScript everywhere, React up front, Cloudflare Workers underneath.",
  },
  {
    icon: Sparkles,
    title: "Product mindset",
    body: "Fast, boring to operate, genuinely useful — in that order.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading kicker="01 — About" title="The short version" />
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-4 text-mist leading-relaxed">
          {profile.about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <p className="font-mono text-sm text-white/40">
            alias: <span className="text-violet-300">{profile.alias}</span>
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-5 transition-colors hover:border-violet-400/30">
                <c.icon size={20} className="mb-3 text-violet-300" />
                <h3 className="mb-1.5 font-display font-semibold">{c.title}</h3>
                <p className="text-sm text-mist">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
