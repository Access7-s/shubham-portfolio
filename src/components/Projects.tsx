import { motion } from "framer-motion";
import { projects, type Project } from "../data";
import { Reveal, SectionHeading } from "./Section";

function StatusPill({ status }: { status: Project["status"] }) {
  const styles =
    status === "In Development"
      ? "bg-amber-400/10 text-amber-300 border-amber-400/20"
      : "bg-emerald-400/10 text-emerald-300 border-emerald-400/20";
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${styles}`}
    >
      {status}
    </span>
  );
}

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.1}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="glow-border glass group relative h-full overflow-hidden rounded-3xl p-7"
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${project.accent}`}
        />
        <div className="relative">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              {project.title}
            </h3>
            <StatusPill status={project.status} />
          </div>
          <p className="mb-1 font-medium text-white/85">{project.tagline}</p>
          <p className="mb-6 text-sm leading-relaxed text-mist">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading kicker="03 — Work" title="Things I've built" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.title} project={p} index={i} />
        ))}
      </div>
      <Reveal delay={0.15} className="mt-8 text-center">
        <a
          href="https://github.com/Access7-s"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm text-mist underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          more on github →
        </a>
      </Reveal>
    </section>
  );
}
