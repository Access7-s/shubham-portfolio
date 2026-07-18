const items = [
  "TECHNICAL PRODUCT MANAGER",
  "PRODUCT OWNER",
  "SCRUM & AGILE",
  "TEAMS OF 30–60",
  "AI / ML",
  "1000+ USERS SERVED",
  "KATHMANDU, NPL",
];

export default function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="on-ink overflow-hidden py-4" style={{ borderBlock: "2px solid var(--color-ink)" }}>
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl md:text-3xl">{t}</span>
            <span className="text-acid text-xl">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
