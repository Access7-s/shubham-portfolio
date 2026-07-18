import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data";
import { Reveal, SectionHead } from "./Section";

function Row({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const Wrapper = project.href ? "a" : "div";

  return (
    <Reveal>
      <Wrapper
        {...(project.href
          ? { href: project.href, target: "_blank", rel: "noreferrer" }
          : {})}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="group block cursor-pointer py-6 transition-colors duration-400 hover:bg-ink hover:text-on-ink md:py-8"
        style={{ borderTop: "2px solid var(--color-ink)" }}
      >
        <div className="shell grid grid-cols-12 items-baseline gap-4">
          <span className="font-display col-span-2 text-2xl md:col-span-1 md:text-3xl">
            {project.index}
          </span>
          <h3 className="font-display col-span-10 text-3xl leading-none md:col-span-6 md:text-5xl">
            {project.title}
            <ArrowUpRight
              className="ml-2 inline-block -translate-y-1 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
              size={28}
            />
          </h3>
          <span className="meta col-span-6 col-start-3 text-ink-3 group-hover:text-on-ink/70 md:col-span-3 md:col-start-8">
            {project.role}
          </span>
          <span className="meta col-span-4 col-start-9 text-right tnum text-ink-3 group-hover:text-on-ink/70 md:col-span-2">
            {project.year}
          </span>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="shell grid grid-cols-12 gap-4 pt-6">
                <p className="col-span-12 col-start-1 max-w-2xl leading-relaxed text-on-ink/85 md:col-span-6 md:col-start-2">
                  {project.description}
                </p>
                <ul className="meta col-span-12 flex flex-wrap gap-x-4 gap-y-1 text-acid md:col-span-3 md:col-start-8">
                  {project.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Wrapper>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="shell">
        <SectionHead no="03" kicker="Selected Work" title="Things I've led & built." />
      </div>
      <div style={{ borderBottom: "2px solid var(--color-ink)" }}>
        {projects.map((p) => (
          <Row key={p.index} project={p} />
        ))}
      </div>
      <div className="shell pt-6">
        <a
          href="https://github.com/Access7-s"
          target="_blank"
          rel="noreferrer"
          className="meta link-u flare"
        >
          More on GitHub →
        </a>
      </div>
    </section>
  );
}
