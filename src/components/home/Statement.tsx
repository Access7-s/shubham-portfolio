import { useEffect, useRef, useState } from "react";
import { profile, stickers } from "../../data";

type Dropped = { id: number; x: number; y: number; rot: number; k: number };

/* Stickers fall out of the pointer as it crosses the statement — one every
   120px of travel, eight on screen at most, swept away shortly after the
   pointer leaves. */

const MIN_TRAVEL = 120;
const MAX_ON_SCREEN = 8;

export default function Statement() {
  const [dropped, setDropped] = useState<Dropped[]>([]);
  const seq = useRef(0);
  const last = useRef<[number, number] | null>(null);
  const sweep = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(sweep.current), []);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    if (last.current && Math.hypot(x - last.current[0], y - last.current[1]) < MIN_TRAVEL) return;

    last.current = [x, y];
    clearTimeout(sweep.current);
    const id = ++seq.current;
    const next: Dropped = {
      id,
      x,
      y,
      rot: Math.round(Math.random() * 28 - 14),
      k: id % stickers.length,
    };
    setDropped((s) => [...s, next].slice(-MAX_ON_SCREEN));
  };

  const onLeave = () => {
    last.current = null;
    clearTimeout(sweep.current);
    sweep.current = setTimeout(() => setDropped([]), 700);
  };

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex items-center justify-center overflow-hidden text-center"
      style={{
        minHeight: "clamp(560px,78vw,1000px)",
        padding: "clamp(48px,6vw,96px) var(--gutter)",
      }}
    >
      <div
        className="pointer-events-none relative z-[1] uppercase"
        style={{
          fontWeight: 800,
          fontSize: "clamp(60px,12.4vw,230px)",
          lineHeight: 0.84,
          letterSpacing: "-.05em",
        }}
      >
        One person
        <br />
        <span className="t-serif">spec to</span>
        <br />
        shipped
      </div>

      <a
        href={`mailto:${profile.email}`}
        aria-label="Start a project"
        className="absolute z-[3]"
        style={{
          right: "clamp(16px,3vw,48px)",
          bottom: "clamp(16px,3vw,48px)",
          width: "clamp(100px,10vw,150px)",
          height: "clamp(100px,10vw,150px)",
        }}
      >
        <Badge />
      </a>

      <div className="pointer-events-none absolute inset-0 z-[2]">
        {dropped.map((s) => {
          const d = stickers[s.k];
          const base: React.CSSProperties = {
            position: "absolute",
            left: s.x,
            top: s.y,
            transform: `translate(-50%,-50%) rotate(${s.rot}deg)`,
            animation: "pop .32s cubic-bezier(.2,1.5,.4,1) both",
            ["--r" as string]: `${s.rot}deg`,
          };

          if (d.img) {
            return (
              <img
                key={s.id}
                src={d.img}
                alt=""
                style={{
                  ...base,
                  width: d.w,
                  height: d.h,
                  objectFit: "cover",
                  objectPosition: "top",
                  border: "6px solid #fff",
                  boxShadow: "0 10px 24px rgba(0,0,0,.18)",
                }}
              />
            );
          }

          return (
            <div
              key={s.id}
              style={{
                ...base,
                background: d.bg,
                color: d.ink ?? "#1E3A2B",
                padding: "14px 22px",
                borderRadius: 999,
                fontWeight: 800,
                fontSize: 26,
                letterSpacing: "-.02em",
                whiteSpace: "nowrap",
                boxShadow: "0 10px 24px rgba(0,0,0,.14)",
              }}
            >
              {d.t}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/** Butter disc with type running round the rim and a winking face inside. */
function Badge() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center bg-butter text-ink"
      style={{ borderRadius: "50%" }}
    >
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 h-full w-full"
        style={{ animation: "spin 14s linear infinite" }}
        aria-hidden
      >
        <defs>
          <path id="badge-rim" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
        </defs>
        <text
          fill="#1E3A2B"
          style={{
            fontFamily: "'Bricolage Grotesque',sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: 2.2,
            textTransform: "uppercase",
          }}
        >
          <textPath href="#badge-rim">Let’s work · Start a project · </textPath>
        </text>
      </svg>
      <svg
        viewBox="0 0 40 40"
        width="38%"
        fill="none"
        stroke="#1E3A2B"
        strokeWidth={2.4}
        strokeLinecap="round"
        aria-hidden
      >
        <circle cx={20} cy={20} r={17} />
        <path d="M14 15 L15 19 M24 14 L25 18 M12 25 Q20 32 28 24" />
      </svg>
    </div>
  );
}
