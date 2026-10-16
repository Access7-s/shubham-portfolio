import { useCallback, useEffect, useState } from "react";
import { Link } from "../../lib/router";
import { projects } from "../../data";

const CARD_W = "clamp(190px,25vw,360px)";
const CARD_H = "clamp(250px,33vw,480px)";
const STEP = "clamp(110px,15vw,230px)";
const TICKER_W = "clamp(360px,44vw,680px)";

/* A fanned deck: cards splay out from the middle one, tilt with the pointer,
   and the ruler ticker underneath slides the active name to centre. */

export default function Featured() {
  const n = projects.length;
  const [idx, setIdx] = useState(1);
  const [tilt, setTilt] = useState(0);

  const move = useCallback((d: number) => setIdx((i) => (i + d + n) % n), [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move]);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const next = Math.round(((e.clientX - r.left) / r.width - 0.5) * 20) / 10;
    if (next !== tilt) setTilt(next);
  };

  const active = projects[idx];

  return (
    <section
      id="work"
      onMouseMove={onMove}
      onMouseLeave={() => setTilt(0)}
      className="relative overflow-hidden"
      style={{ padding: "clamp(16px,2vw,24px) 0 clamp(24px,3vw,40px)" }}
    >
      <div
        className="t-cond relative z-10 flex justify-between gap-4 uppercase"
        style={{
          padding: "0 var(--gutter)",
          fontSize: "clamp(22px,2.6vw,40px)",
          lineHeight: 0.95,
        }}
      >
        <span>
          <strong style={{ fontWeight: 800 }}>Spec first.</strong>
          <br />
          <span style={{ fontWeight: 400 }}>Code second.</span>
        </span>
        <span className="text-right">
          <span style={{ fontWeight: 400 }}>Tested properly.</span>
          <br />
          <strong style={{ fontWeight: 800 }}>Shipped live.</strong>
        </span>
      </div>

      {/* The deck */}
      <div
        className="relative"
        style={{
          height: "clamp(360px,42vw,600px)",
          perspective: "1400px",
          marginTop: "clamp(-60px,-3vw,-16px)",
        }}
      >
        {projects.map((p, i) => {
          let d = i - idx;
          if (d > n / 2) d -= n;
          if (d < -n / 2) d += n;
          const ad = Math.abs(d);
          const centred = d === 0;

          return (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              aria-label={p.name}
              aria-hidden={ad > 2}
              tabIndex={centred ? undefined : -1}
              onClick={centred ? undefined : (e) => {
                e.preventDefault();
                setIdx(i);
              }}
              className="absolute left-1/2 top-1/2 overflow-hidden"
              style={{
                width: CARD_W,
                height: CARD_H,
                marginLeft: `calc(${CARD_W} / -2)`,
                marginTop: `calc(${CARD_H} / -2)`,
                borderRadius: 18,
                background: p.bg,
                color: p.ink,
                transform: `translateX(calc(${d} * ${STEP})) translateY(${ad * 22}px) rotate(${d * 10}deg) rotateY(${tilt * 8}deg) scale(${1 - ad * 0.08})`,
                opacity: ad > 2 ? 0 : 1,
                zIndex: 10 - ad,
                transition: "transform .9s var(--ease-out), opacity .6s",
              }}
            >
              {p.img ? (
                <img
                  src={p.img}
                  alt=""
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "top" }}
                />
              ) : (
                <span
                  className="t-cond absolute uppercase"
                  style={{
                    left: 18,
                    right: 18,
                    bottom: 16,
                    fontWeight: 800,
                    fontSize: "clamp(34px,4vw,60px)",
                    lineHeight: 0.86,
                  }}
                >
                  {p.name}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Ruler ticker */}
      <div className="relative">
        <Rule />
        <div
          className="relative overflow-hidden"
          style={{ height: "clamp(56px,6.4vw,96px)" }}
        >
          <div
            className="absolute left-1/2 top-0 flex"
            style={{
              transform: `translateX(calc(-1 * (${idx} + 0.5) * ${TICKER_W}))`,
              transition: "transform .9s var(--ease-out)",
            }}
          >
            {projects.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => setIdx(i)}
                className="t-cond flex-none cursor-pointer whitespace-nowrap border-0 bg-transparent uppercase"
                style={{
                  width: TICKER_W,
                  padding: "0 12px",
                  fontWeight: 800,
                  fontSize: "clamp(28px,3.8vw,64px)",
                  lineHeight: "clamp(56px,6.4vw,96px)",
                  color: i === idx ? "#1E3A2B" : "#D3DCCF",
                  transition: "color .5s",
                }}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
        <Rule />
      </div>

      <div
        className="t-cond grid items-center gap-4 uppercase"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
          padding: "12px var(--gutter) 0",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        <span>©2026</span>
        <span className="flex items-center" style={{ gap: 22 }}>
          <button
            onClick={() => move(-1)}
            aria-label="Previous project"
            className="cursor-pointer border-0 bg-transparent"
            style={{ fontSize: 14, fontWeight: 700 }}
          >
            ◂◂
          </button>
          <span className="whitespace-nowrap">
            {idx + 1} // {n}
          </span>
          <button
            onClick={() => move(1)}
            aria-label="Next project"
            className="cursor-pointer border-0 bg-transparent"
            style={{ fontSize: 14, fontWeight: 700 }}
          >
            ▸▸
          </button>
        </span>
        <span className="whitespace-nowrap text-right">{active.kind}</span>
      </div>
    </section>
  );
}

/** Dashed measuring-rule band above and below the ticker. */
function Rule() {
  return (
    <div
      style={{
        height: 14,
        opacity: 0.4,
        background:
          "repeating-linear-gradient(90deg,#1E3A2B 0 1px,transparent 1px 9px)",
      }}
    />
  );
}
