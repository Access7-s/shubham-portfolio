import { Monitor, Sparkle } from "../Doodles";
import { profile } from "../../data";

export default function Quote() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "clamp(72px,11vw,170px) var(--gutter)",
        borderTop: "1.5px solid #1E3A2B",
      }}
    >
      <Sparkle
        width="clamp(48px,6vw,90px)"
        style={{
          position: "absolute",
          top: "clamp(20px,4vw,56px)",
          right: "clamp(16px,6vw,110px)",
        }}
      />
      <Monitor
        width="clamp(80px,9vw,140px)"
        delay="0.5s"
        style={{
          position: "absolute",
          bottom: "clamp(20px,4vw,56px)",
          right: "clamp(16px,3vw,48px)",
        }}
      />

      <figure
        className="relative mx-auto flex flex-col"
        style={{ margin: "0 auto", maxWidth: 1100, gap: "clamp(24px,3vw,40px)" }}
      >
        <span
          aria-hidden
          style={{
            fontWeight: 800,
            fontSize: "clamp(80px,9vw,150px)",
            lineHeight: 0.5,
            height: ".45em",
          }}
        >
          “
        </span>
        <blockquote
          className="m-0 uppercase"
          style={{
            fontWeight: 500,
            fontSize: "clamp(34px,5vw,84px)",
            lineHeight: 1,
            letterSpacing: "-.045em",
            textWrap: "balance",
          }}
        >
          {profile.quote}
        </blockquote>
        <figcaption className="flex items-center" style={{ gap: 14, fontSize: 16 }}>
          <img
            src={profile.photo}
            alt=""
            style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover" }}
          />
          <span className="flex flex-col">
            <strong style={{ fontWeight: 700 }}>{profile.name}</strong>
            <span
              className="t-mono whitespace-nowrap"
              style={{ fontSize: 11, opacity: 0.6 }}
            >
              Co-Founder, {profile.studio}
            </span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
