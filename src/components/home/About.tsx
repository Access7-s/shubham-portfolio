import { profile, skills, timeline } from "../../data";

const rowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(96px,130px) minmax(0,1fr)",
  gap: 16,
  borderTop: "1px solid #1E3A2B",
  fontSize: 15,
  lineHeight: 1.45,
};

const keyStyle: React.CSSProperties = {
  fontSize: 11,
  paddingTop: 3,
  opacity: 0.65,
};

export default function About() {
  return (
    <section
      id="about"
      className="grid"
      style={{
        padding: "clamp(72px,10vw,150px) var(--gutter)",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
        gap: "48px clamp(32px,6vw,110px)",
        borderTop: "1.5px solid #1E3A2B",
      }}
    >
      <div className="flex flex-col" style={{ gap: 14 }}>
        <div className="overflow-hidden bg-ink" style={{ aspectRatio: "4/5" }}>
          <img
            src={profile.photo}
            alt={`${profile.name}, Kathmandu`}
            className="block h-full w-full object-cover"
          />
        </div>
        <span className="t-mono" style={{ fontSize: 11, opacity: 0.65 }}>
          Kathmandu · {profile.coords}
        </span>
      </div>

      <div className="flex flex-col" style={{ gap: 32 }}>
        <p
          className="m-0"
          style={{
            fontSize: "clamp(22px,2.2vw,32px)",
            lineHeight: 1.22,
            letterSpacing: "-.02em",
            textWrap: "pretty",
          }}
        >
          {profile.bio}
        </p>

        <div className="flex flex-col">
          {timeline.map((x) => (
            <div key={x.role} style={{ ...rowStyle, padding: "14px 0" }}>
              <span className="t-mono" style={keyStyle}>
                {x.when}
              </span>
              <span>
                <strong style={{ fontWeight: 600 }}>{x.role}</strong>
                <br />
                <span style={{ opacity: 0.7 }}>{x.note}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          {skills.map((g) => (
            <div key={g.group} style={{ ...rowStyle, padding: "12px 0" }}>
              <span className="t-mono" style={keyStyle}>
                {g.group}
              </span>
              <span>{g.items}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
