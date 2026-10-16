import { Blob } from "../Doodles";
import { Link } from "../../lib/router";
import { profile } from "../../data";

export default function Hero() {
  return (
    <section
      id="top"
      style={{ padding: "clamp(20px,3vw,40px) var(--gutter) clamp(40px,5vw,72px)" }}
    >
      <h1
        className="m-0 uppercase"
        style={{
          fontWeight: 500,
          fontSize: "clamp(28px,8.4vw,168px)",
          lineHeight: 0.9,
          letterSpacing: "-.04em",
          whiteSpace: "nowrap",
        }}
      >
        Shubham <span className="t-serif">Neupane</span>
      </h1>

      <div
        className="mx-auto grid grid-cols-3 justify-items-center"
        style={{
          padding: "clamp(20px,3vw,44px) 0 clamp(28px,4vw,56px)",
          maxWidth: 960,
        }}
      >
        <Blob width="clamp(70px,8vw,140px)" />
        <Blob width="clamp(70px,8vw,140px)" delay="0.4s" />
        <Blob width="clamp(70px,8vw,140px)" delay="0.8s" />
      </div>

      <p
        className="m-0"
        style={{
          fontWeight: 400,
          fontSize: "clamp(28px,4.1vw,64px)",
          lineHeight: 1.02,
          letterSpacing: "-.03em",
          maxWidth: "20ch",
        }}
      >
        {profile.statement}
      </p>

      <div
        className="flex items-end justify-between"
        style={{ marginTop: "clamp(28px,4vw,56px)", fontSize: 17 }}
      >
        <span className="flex flex-wrap items-baseline" style={{ gap: 18 }}>
          <Link
            to="#work"
            className="whitespace-nowrap"
            style={{ borderBottom: "1.5px solid currentColor", paddingBottom: 2 }}
          >
            See the work
          </Link>
          <span
            className="t-hand inline-block whitespace-nowrap bg-butter text-ink"
            style={{
              padding: "0 10px",
              borderRadius: 6,
              fontSize: 22,
              transform: "rotate(-3deg)",
            }}
          >
            six things, all live
          </span>
        </span>

        <Link to="#work" aria-label="Scroll to work" style={{ fontSize: 40, lineHeight: 0.8 }}>
          ↓
        </Link>
      </div>
    </section>
  );
}
