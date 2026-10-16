import { useEffect, useState } from "react";
import { Link, useRouter } from "../lib/router";
import { profile, projects, type Project } from "../data";

/* Case study, re-skinned from the `Case Study` design into the v8 palette so
   it reads as the same site: each project keeps the colour it already wears
   on the home page, and the wipe between projects uses the next one's. */

const WIPE_MS = 650;

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Case({ project }: { project: Project }) {
  const { navigate } = useRouter();
  const i = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(i + 1) % projects.length];
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.title = `${project.name} — ${profile.name}`;
    const meta = document.querySelector('meta[name="description"]');
    const previous = meta?.getAttribute("content") ?? null;
    meta?.setAttribute("content", project.summary.slice(0, 300));
    return () => {
      if (previous !== null) meta?.setAttribute("content", previous);
    };
  }, [project]);

  // Reset the leave-wipe if the user comes back via the browser's Back button.
  useEffect(() => setLeaving(false), [project.slug]);

  const goNext = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    if (reduceMotion()) {
      navigate(`/work/${next.slug}`);
      return;
    }
    setLeaving(true);
    setTimeout(() => navigate(`/work/${next.slug}`), WIPE_MS);
  };

  return (
    <div className="min-h-screen bg-paper text-ink" style={{ overflowX: "clip" }}>
      <Wipe key={project.slug} leaving={leaving} color={leaving ? next.bg : project.bg} />

      <header
        className="t-mono sticky top-0 z-30 grid items-center gap-4 bg-paper"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
          padding: "14px var(--gutter)",
          letterSpacing: ".04em",
        }}
      >
        <Link to="/#work" className="whitespace-nowrap">
          ← All work
        </Link>
        <Link
          to="/"
          className="text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 22,
            letterSpacing: "-.04em",
            lineHeight: 0.8,
            textTransform: "none",
          }}
        >
          shubham
          <br />
          neupane
        </Link>
        <span className="whitespace-nowrap text-right">
          Case {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </header>

      {/* Hero */}
      <section
        className="flex flex-col"
        style={{
          background: project.bg,
          color: project.ink,
          padding: "clamp(48px,8vw,120px) var(--gutter) clamp(32px,4vw,56px)",
          gap: "clamp(32px,5vw,72px)",
        }}
      >
        <span className="t-mono" style={{ letterSpacing: ".05em" }}>
          {project.verb} · {project.caseKind}
        </span>
        <h1
          className="m-0 uppercase"
          style={{
            fontWeight: 800,
            fontSize: "clamp(56px,11vw,210px)",
            lineHeight: 0.84,
            letterSpacing: "-.055em",
            textWrap: "balance",
          }}
        >
          {project.name}
        </h1>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))",
            gap: 18,
            borderTop: "1.5px solid currentColor",
            paddingTop: 18,
          }}
        >
          {[
            { k: "Role", v: "Founder & full-stack engineer" },
            { k: "Client", v: project.client },
            { k: "Status", v: project.status },
            { k: "Year", v: "2026" },
          ].map((m) => (
            <div key={m.k} className="flex flex-col" style={{ gap: 6 }}>
              <span className="t-mono" style={{ fontSize: 11, opacity: 0.75 }}>
                {m.k}
              </span>
              <span style={{ fontSize: 17, lineHeight: 1.35 }}>{m.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Cover */}
      <section style={{ padding: "var(--gutter)" }}>
        {project.img ? (
          <img
            src={project.img}
            alt={`${project.name} screenshot`}
            className="block w-full object-cover"
            style={{
              aspectRatio: "16/9",
              objectPosition: "top",
              borderRadius: "clamp(16px,2vw,28px)",
            }}
          />
        ) : (
          <div
            className="t-mono flex items-center justify-center text-center"
            style={{
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "clamp(16px,2vw,28px)",
              background:
                "repeating-linear-gradient(135deg,rgba(30,58,43,.07) 0 2px,transparent 2px 14px),#F2F4F0",
              fontSize: 13,
              letterSpacing: ".05em",
              padding: 16,
            }}
          >
            [ {project.name} · screenshot to come ]
          </div>
        )}
      </section>

      {/* Overview */}
      <section
        className="grid"
        style={{
          padding: "clamp(48px,7vw,104px) var(--gutter)",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))",
          gap: "40px clamp(32px,5vw,80px)",
        }}
      >
        <div className="flex flex-col" style={{ gap: 14 }}>
          <span className="t-mono" style={{ opacity: 0.6 }}>
            Overview
          </span>
          <span
            className="t-hand inline-block"
            style={{
              color: "#2F5A3F",
              fontSize: 24,
              transform: "rotate(-3deg)",
              transformOrigin: "left",
            }}
          >
            {project.note}
          </span>
        </div>
        <p
          className="m-0"
          style={{
            fontWeight: 500,
            fontSize: "clamp(24px,2.6vw,40px)",
            lineHeight: 1.15,
            letterSpacing: "-.03em",
            textWrap: "pretty",
          }}
        >
          {project.summary}
        </p>
      </section>

      {/* What I built */}
      <section
        className="grid"
        style={{
          padding: "0 var(--gutter) clamp(48px,7vw,104px)",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))",
          gap: "40px clamp(32px,5vw,80px)",
        }}
      >
        <span className="t-mono" style={{ opacity: 0.6 }}>
          What I built
        </span>
        <div className="flex flex-col">
          {project.facts.map((f) => (
            <div
              key={f.k}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(100px,160px) minmax(0,1fr)",
                gap: 16,
                borderTop: "1.5px solid #1E3A2B",
                padding: "16px 0",
                fontSize: 18,
                lineHeight: 1.45,
              }}
            >
              <span className="t-mono" style={{ paddingTop: 4, opacity: 0.65 }}>
                {f.k}
              </span>
              <span>{f.v}</span>
            </div>
          ))}

          <div className="flex flex-wrap" style={{ gap: 12, marginTop: 20 }}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start"
                style={{
                  border: "1.5px solid #1E3A2B",
                  borderRadius: 999,
                  padding: "12px 20px",
                  fontSize: 16,
                }}
              >
                Visit {project.liveLabel} ↗
              </a>
            )}
            {project.behance && (
              <a
                href={project.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start"
                style={{
                  border: "1.5px solid #1E3A2B",
                  borderRadius: 999,
                  padding: "12px 20px",
                  fontSize: 16,
                  background: "#EFD97A",
                }}
              >
                Full case study on Behance ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Next */}
      <a
        href={`/work/${next.slug}`}
        onClick={goNext}
        className="flex flex-col"
        style={{
          background: next.bg,
          color: next.ink,
          padding: "clamp(56px,9vw,140px) var(--gutter)",
          gap: 18,
        }}
      >
        <span className="t-mono">Next project →</span>
        <span
          className="uppercase"
          style={{
            fontWeight: 800,
            fontSize: "clamp(52px,10vw,190px)",
            lineHeight: 0.84,
            letterSpacing: "-.055em",
          }}
        >
          {next.name}
        </span>
      </a>

      <footer
        className="t-mono flex flex-wrap justify-between gap-3"
        style={{ padding: "20px var(--gutter)", fontSize: 11, letterSpacing: ".04em" }}
      >
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span>©2026 {profile.name}</span>
        <Link to="/" className="whitespace-nowrap">
          Home ↑
        </Link>
      </footer>
    </div>
  );
}

const ENTER_MS = 800; // .7s animation + .1s delay

/** Full-bleed colour panel: wipes away on arrival, slides up on departure. */
function Wipe({ leaving, color }: { leaving: boolean; color: string }) {
  // The panel is torn down on a timer rather than left to the animation's
  // fill mode: under `prefers-reduced-motion` the keyframes are disabled
  // outright, and a panel that only moves via animation would sit there
  // covering the whole page.
  const [gone, setGone] = useState(reduceMotion);

  const [up, setUp] = useState(false);

  useEffect(() => {
    if (leaving) return;
    const id = setTimeout(() => setGone(true), ENTER_MS);
    return () => clearTimeout(id);
  }, [leaving]);

  // The leave transition needs a frame at translateY(100%) before it can
  // animate to 0 — committing both in one paint would just snap.
  useEffect(() => {
    if (!leaving) return;
    const id = requestAnimationFrame(() => setUp(true));
    return () => cancelAnimationFrame(id);
  }, [leaving]);

  if (gone && !leaving) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100]"
      style={
        leaving
          ? {
              background: color,
              transform: up ? "translateY(0)" : "translateY(100%)",
              transition: `transform ${WIPE_MS}ms var(--ease-sharp)`,
            }
          : {
              background: color,
              animation: "wipeOut .7s var(--ease-sharp) .1s both",
            }
      }
    />
  );
}
