/* Hand-drawn marks: a wobbling blob creature, a four-point sparkle and a
   little monitor with a face. All butter-filled, ink-outlined, and they
   overflow their box on purpose so the stroke never clips. */

type DoodleProps = {
  /** CSS width, e.g. "clamp(70px,8vw,140px)". */
  width: string;
  /** Stagger for the shared wobble. */
  delay?: string;
  className?: string;
  style?: React.CSSProperties;
};

const svgStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  height: "auto",
  overflow: "visible",
};

const stroke = {
  fill: "#EFD97A",
  stroke: "#1E3A2B",
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Wrap({ width, delay, className, style, children }: DoodleProps & { children: React.ReactNode }) {
  return (
    <span
      className={`animate-wob ${className ?? ""}`}
      style={{ width, animationDelay: delay, ...style }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

/** The mascot: a lumpy blob with two eyes and a pair of legs. */
export function Blob(props: DoodleProps & { legStroke?: string }) {
  const { legStroke, ...rest } = props;
  return (
    <Wrap {...rest}>
      <svg viewBox="0 0 120 120" {...stroke} style={svgStyle}>
        <path d="M30 62 C18 58 16 42 28 38 C24 24 40 16 50 24 C54 12 72 12 76 24 C88 18 102 30 94 42 C106 46 106 62 94 66 C100 78 88 90 76 84 C72 96 52 96 48 86 C36 92 24 80 30 62 Z" />
        <ellipse cx="52" cy="56" rx="7" ry="10" />
        <ellipse cx="68" cy="56" rx="7" ry="10" />
        <path d="M59 54 L61 54" />
        <path d="M56 90 L54 106 M63 90 L65 106" stroke={legStroke} />
      </svg>
    </Wrap>
  );
}

/** Four-point sparkle with concave sides. */
export function Sparkle(props: DoodleProps) {
  return (
    <Wrap {...props}>
      <svg viewBox="0 0 120 120" {...stroke} strokeWidth={3.5} style={svgStyle}>
        <path d="M60 16 C63 44 70 54 104 60 C70 66 63 76 60 104 C57 76 50 66 16 60 C50 54 57 44 60 16 Z" />
      </svg>
    </Wrap>
  );
}

/** A boxy monitor on a stand, smiling. */
export function Monitor(props: DoodleProps) {
  return (
    <Wrap {...props}>
      <svg viewBox="0 0 120 120" {...stroke} strokeWidth={3.5} style={svgStyle}>
        <path d="M28 34 L92 34 L92 78 L28 78 Z" />
        <path d="M14 90 L106 90 L96 78 L24 78 Z" />
        <circle cx="50" cy="54" r="2.4" fill="#1E3A2B" />
        <circle cx="70" cy="54" r="2.4" fill="#1E3A2B" />
        <path d="M52 64 Q60 70 68 64" />
      </svg>
    </Wrap>
  );
}
