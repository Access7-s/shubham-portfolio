import { steps } from "../../data";

/* Four cards that stick at staggered offsets, so each one parks on top of the
   last as you scroll and the stack reads like a deck being dealt. */

export default function HowIWork() {
  return (
    <section
      id="how"
      className="flex flex-col"
      style={{
        padding: "clamp(72px,10vw,140px) var(--gutter)",
        gap: "clamp(24px,3vw,40px)",
        borderTop: "1.5px solid #1E3A2B",
      }}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="t-h2">
          How I <span className="t-serif">work</span>
        </h2>
        <span className="t-mono" style={{ maxWidth: "30ch" }}>
          One person from the first meeting to the live site
        </span>
      </div>

      <div className="flex flex-col" style={{ gap: 20 }}>
        {steps.map((s) => (
          <div
            key={s.n}
            className="sticky grid content-between"
            style={{
              top: s.top,
              borderRadius: 28,
              minHeight: "clamp(300px,38vw,440px)",
              background: s.bg,
              color: s.ink,
              padding: "clamp(24px,3vw,44px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
              gap: "24px 48px",
              boxShadow: "0 -10px 30px rgba(0,0,0,.08)",
            }}
          >
            <div className="flex flex-col" style={{ gap: 14 }}>
              <span className="t-mono">{s.n}</span>
              <span
                className="uppercase"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(56px,8vw,140px)",
                  lineHeight: 0.82,
                  letterSpacing: "-.05em",
                }}
              >
                {s.t}
              </span>
            </div>
            <div className="flex flex-col self-end" style={{ gap: 14 }}>
              <span
                style={{
                  fontSize: "clamp(18px,1.6vw,24px)",
                  lineHeight: 1.35,
                  maxWidth: "36ch",
                }}
              >
                {s.d}
              </span>
              <span className="t-mono" style={{ fontSize: 11, opacity: 0.75 }}>
                {s.proof}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
