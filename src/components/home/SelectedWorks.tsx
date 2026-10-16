import { Link } from "../../lib/router";
import { projects } from "../../data";

export default function SelectedWorks() {
  return (
    <section
      className="bg-butter"
      style={{
        padding: "clamp(72px,10vw,150px) var(--gutter) clamp(40px,6vw,80px)",
      }}
    >
      <div
        className="flex items-center justify-between gap-4"
        style={{ marginBottom: "clamp(20px,2.4vw,32px)" }}
      >
        <h2 className="t-h2">
          Selected <span className="t-serif">works</span>
        </h2>
        <span
          className="t-mono whitespace-nowrap"
          style={{
            border: "1.5px solid #1E3A2B",
            borderRadius: 999,
            padding: "10px 18px",
          }}
        >
          All live ({String(projects.length).padStart(2, "0")})
        </span>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,340px),1fr))",
          gap: "clamp(28px,3vw,44px) 16px",
        }}
      >
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/work/${p.slug}`}
            className="group flex flex-col text-ink"
            style={{ gap: 10 }}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "1", borderRadius: 18, background: p.bg }}
            >
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  style={{ objectPosition: "top", transitionTimingFunction: "var(--ease-out)" }}
                />
              ) : (
                <span
                  className="t-cond absolute uppercase"
                  style={{
                    left: 20,
                    right: 20,
                    bottom: 18,
                    fontWeight: 800,
                    fontSize: "clamp(44px,5vw,84px)",
                    lineHeight: 0.84,
                    color: p.ink,
                  }}
                >
                  {p.name}
                </span>
              )}
            </div>

            <span
              className="uppercase"
              style={{
                fontWeight: 800,
                fontSize: "clamp(20px,1.9vw,28px)",
                letterSpacing: "-.03em",
                lineHeight: 1,
              }}
            >
              {p.name}
            </span>
            <span
              className="t-mono"
              style={{ fontSize: 11, letterSpacing: ".04em", opacity: 0.65 }}
            >
              {p.kind} · 2026
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
