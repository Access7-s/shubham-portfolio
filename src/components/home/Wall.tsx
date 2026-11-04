import { ring, wall } from "../../data";

/* Sizes live in index.css (.ring) so the mobile step stays a media query. */
const SPIN = "spin 70s linear infinite";

export default function Wall() {
  return (
    <section
      id="wall"
      className="flex flex-col"
      style={{
        padding: "clamp(72px,10vw,140px) var(--gutter)",
        gap: "clamp(24px,3vw,40px)",
        borderTop: "1.5px solid #1E3A2B",
      }}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2
          className="m-0 uppercase"
          style={{
            fontWeight: 800,
            fontSize: "clamp(52px,9vw,160px)",
            lineHeight: 0.82,
            letterSpacing: "-.05em",
          }}
        >
          The <span className="t-serif">wall</span>
        </h2>
        <span className="t-mono">Bits &amp; pieces, 2023–26</span>
      </div>

      <Ring />

      <div style={{ columns: "4 240px", columnGap: 14 }}>
        {wall.map((w) => (
          <figure
            key={w.cap}
            className="flex flex-col"
            style={{ margin: "0 0 14px", breakInside: "avoid", gap: 8 }}
          >
            <div
              className="relative overflow-hidden"
              style={{ background: w.bg, color: w.ink, aspectRatio: w.ar }}
            >
              {w.img && (
                <img
                  src={w.img}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: w.pos ?? "center" }}
                />
              )}
              {w.big && (
                <div
                  className="absolute inset-0 flex flex-col justify-between"
                  style={{ padding: 18 }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(44px,4.4vw,72px)",
                      lineHeight: 0.84,
                      letterSpacing: "-.05em",
                    }}
                  >
                    {w.big}
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.3 }}>{w.small}</span>
                </div>
              )}
              {w.hand && (
                <div
                  className="t-cond absolute inset-0 flex items-center justify-center text-center uppercase"
                  style={{
                    padding: 18,
                    fontWeight: 800,
                    fontSize: "clamp(30px,2.8vw,44px)",
                    lineHeight: 0.95,
                  }}
                >
                  {w.hand}
                </div>
              )}
            </div>
            <figcaption
              className="t-mono"
              style={{ fontSize: 10, letterSpacing: ".04em", opacity: 0.7 }}
            >
              {w.cap}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* A carousel of proof orbiting the headline. The ring rotates; each card
   counter-rotates at the same rate so it never turns upside down. */
function Ring() {
  return (
    <div
      className="ring relative flex items-center justify-center overflow-hidden bg-ink text-white"
      style={{ borderRadius: 28, minHeight: "clamp(620px,62vw,820px)" }}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{ width: 0, height: 0, animation: SPIN }}
        aria-hidden
      >
        {ring.map((w, i) => {
          const ang = (360 / ring.length) * i;
          return (
            <div
              key={i}
              className="absolute left-0 top-0"
              style={{
                transform: `rotate(${ang}deg) translateY(calc(-1 * var(--ring-orbit))) rotate(${-ang}deg)`,
              }}
            >
              <div style={{ width: 0, height: 0, animation: `${SPIN} reverse` }}>
                <div
                  className="overflow-hidden"
                  style={{
                    width: "var(--ring-card-w)",
                    height: "var(--ring-card-h)",
                    transform: `translate(-50%,-50%) rotate(${(i % 2 ? 1 : -1) * 6}deg)`,
                    boxShadow: "0 16px 30px rgba(0,0,0,.35)",
                  }}
                >
                  {w.img ? (
                    <img
                      src={w.img}
                      alt=""
                      className="block h-full w-full object-cover"
                      style={{ objectPosition: "top" }}
                    />
                  ) : (
                    <div
                      className="flex h-full w-full flex-col justify-between"
                      style={{ background: w.bg, color: w.ink ?? "#1E3A2B", padding: "var(--ring-pad)" }}
                    >
                      <span
                        className="whitespace-nowrap"
                        style={{
                          fontWeight: 800,
                          fontSize: "var(--ring-value)",
                          letterSpacing: "-.05em",
                          lineHeight: 0.9,
                        }}
                      >
                        {w.a}
                      </span>
                      <span style={{ fontSize: "var(--ring-label)", lineHeight: 1.3 }}>{w.b}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none relative z-[1] flex flex-col text-center" style={{ gap: 10 }}>
        <span
          className="uppercase"
          style={{
            fontWeight: 800,
            fontSize: "clamp(26px,2.6vw,40px)",
            letterSpacing: "-.03em",
            lineHeight: 1,
          }}
        >
          The numbers
        </span>
        <span className="t-mono text-butter">2023–26</span>
      </div>
    </div>
  );
}
