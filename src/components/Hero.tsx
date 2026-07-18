import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { profile, socials } from "../data";

const wipe = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.7, 0, 0.2, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-28">
      <div className="shell">
        {/* FRAMED HERO CARD */}
        <div
          className="relative overflow-hidden"
          style={{ border: "2px solid var(--color-ink)" }}
        >
          <div className="p-5 sm:p-7 md:p-10">
            {/* top meta row */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={wipe}
              className="meta hair-b flex flex-wrap items-center justify-between gap-2 pb-4"
            >
              <span>Portfolio — {new Date().getFullYear()}</span>
              <span className="hidden sm:inline">{profile.coords}</span>
              <span className="flare">{"{ AVAILABLE FOR WORK }"}</span>
            </motion.div>

            {/* MEGA NAME */}
            <div className="relative pt-6 md:pt-10">
              <motion.h1
                custom={1}
                initial="hidden"
                animate="show"
                variants={wipe}
                className="font-display"
                style={{ fontSize: "var(--fs-mega)" }}
              >
                SHUBHAM
              </motion.h1>
              <motion.h1
                custom={2}
                initial="hidden"
                animate="show"
                variants={wipe}
                className="font-display -mt-[0.12em] flex flex-wrap items-end gap-x-6"
                style={{ fontSize: "var(--fs-mega)" }}
              >
                <span className="outline-text">NEUPANE</span>
              </motion.h1>
            </div>

            {/* lower grid: headline + photo + lede */}
            <div className="mt-10 grid grid-cols-1 gap-8 rule-t pt-8 md:mt-14 md:grid-cols-12">
              <motion.div
                custom={3}
                initial="hidden"
                animate="show"
                variants={wipe}
                className="md:col-span-5"
              >
                <div className="meta mb-4 text-ink-3">{"{ Currently }"}</div>
                <ul className="space-y-1.5">
                  {profile.headline.map((h) => (
                    <li
                      key={h}
                      className="font-display text-3xl leading-none sm:text-4xl"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="meta mt-5 flex flex-wrap items-center gap-2">
                  <span>Co-Founder</span>
                  <span className="flare">
                    {"{ "}
                    {profile.studio}
                    {" }"}
                  </span>
                </div>
              </motion.div>

              <motion.figure
                custom={4}
                initial="hidden"
                animate="show"
                variants={wipe}
                className="order-first md:order-none md:col-span-3"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ border: "2px solid var(--color-ink)" }}
                >
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="aspect-square w-full object-cover grayscale contrast-[1.05] transition-all duration-700 hover:grayscale-0"
                  />
                </div>
                <figcaption className="meta mt-2 flex flex-wrap justify-between gap-x-3 gap-y-0.5 text-ink-3">
                  <span className="shrink-0">Fig.01</span>
                  <span className="text-right">{profile.location}</span>
                </figcaption>
              </motion.figure>

              <motion.div
                custom={5}
                initial="hidden"
                animate="show"
                variants={wipe}
                className="flex flex-col justify-between md:col-span-4"
              >
                <p className="text-lg leading-relaxed text-ink-2">
                  {profile.lede}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#work" className="btn">
                    See the work
                  </a>
                  <a href="#contact" className="btn btn-ghost">
                    Say hello
                  </a>
                </div>
                <div className="meta mt-6 flex gap-5">
                  {socials.slice(0, 4).map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-u"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="meta mt-6 flex items-center gap-2 pb-8 text-ink-3"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ArrowDownRight size={16} />
          </motion.span>
          Scroll to read
        </motion.a>
      </div>
    </section>
  );
}
