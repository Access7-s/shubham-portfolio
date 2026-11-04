/* ============================================================
   CONTENT
   Sourced from `uploads/portfolio-design-brief.md` plus the
   `Portfolio v8 White` and `Case Study` design files.
   Every claim here is one Shubham can defend in an interview.
   ============================================================ */

export const profile = {
  name: "Shubham Neupane",
  role: "Co-Founder & Full-Stack Engineer",
  studio: "Aurora Studios",
  location: "Kathmandu, NP",
  coords: "27.7172° N, 85.3240° E",
  email: "shubhamneupane07@gmail.com",
  phone: "+977 9868767171",
  phoneHref: "tel:+9779868767171",
  photo: "/img/shubham.png",

  /* Hero — deliberately short; the design caps the line box at 20ch. */
  statement:
    "Full-stack engineer and product owner. I build web apps for businesses in Nepal.",

  bio: "Full-stack engineer and co-founder of Aurora Studios in Kathmandu. I build production web apps end to end, from React front ends and edge APIs to databases, auth and deployment. Before that I was a Product Owner and Project Manager, so I scope and spec work as comfortably as I write the code.",

  quote: "Grow where others can’t.",
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-neupane-9a937b217/" },
  { label: "GitHub", href: "https://github.com/Access7-s" },
  { label: "X", href: "https://x.com/Access_7s" },
  { label: "Instagram", href: "https://www.instagram.com/_shubhamneupane_/" },
];

/* ------------------------------------------------------------
   PROJECTS — strongest first. Drives the hero fan, the ticker,
   the Selected works grid and the six case-study pages.
   ------------------------------------------------------------ */

export type Fact = { k: string; v: string };

export type Project = {
  slug: string;
  name: string;
  /** Short label under the cards and beside the fan counter. */
  kind: string;
  /** Longer descriptor for the case-study header. */
  caseKind: string;
  /** One-word imperative that opens the case study. */
  verb: string;
  /** Handwritten aside in the case-study overview. */
  note: string;
  status: string;
  client: string;
  summary: string;
  facts: Fact[];
  bg: string;
  ink: string;
  img?: string;
  live?: string;
  liveLabel?: string;
  /** Long-form case study on the Aurora Studios Behance. */
  behance?: string;
};

export const projects: Project[] = [
  {
    slug: "vitra-bahira-erp",
    name: "Vitra Bahira ERP",
    kind: "SaaS · piloting with 3 businesses",
    caseKind: "Finance & inventory SaaS",
    verb: "Balance",
    note: "1,000+ tests, all green",
    status: "Piloting with 3 businesses",
    client: "Nepali SMBs",
    summary:
      "Finance and inventory SaaS for Nepali SMBs, piloting with 3 businesses. Covers billing, stock, khata (credit), real double-entry accounting, Nepal VAT and the Bikram Sambat calendar. Installable PWA with offline point-of-sale. Money is stored as integer paisa. 1,000+ tests.",
    facts: [
      { k: "modules", v: "Billing, stock, khata (credit), double-entry accounting" },
      { k: "nepal", v: "Nepal VAT and the Bikram Sambat calendar" },
      { k: "offline", v: "Installable PWA with offline point-of-sale" },
      { k: "money", v: "Stored as integer paisa" },
      { k: "quality", v: "1,000+ automated tests" },
    ],
    bg: "#1E3A2B",
    ink: "#FFFFFF",
    img: "/img/work/vitra.png",
    live: "https://vitrabahira.com",
    liveLabel: "vitrabahira.com",
  },
  {
    slug: "gmc-job-portal",
    name: "GMC Job Portal",
    kind: "Platform · live, used daily",
    caseKind: "Job platform",
    verb: "Match",
    note: "used every day on campus",
    status: "Live, used daily",
    client: "Ghodaghodi Multiple Campus",
    summary:
      "A verified bridge between the students of Ghodaghodi Multiple Campus and the businesses hiring around them, across Kailali and Sudurpaschim. Built in six weeks, launched in 2026 and now run by the campus itself.",
    facts: [
      { k: "trust", v: "Manual ID verification — an admin checks every college ID by hand" },
      { k: "languages", v: "Written in Nepali and English, dated in Bikram Sambat" },
      { k: "cost", v: "Free for students, no fees for employers" },
      { k: "build", v: "Six weeks, 61% of the cost carried as a community initiative" },
      { k: "launch", v: "Presented at the public launch event" },
    ],
    bg: "#DCE6F0",
    ink: "#1E3A2B",
    img: "/img/work/gmc.png",
    live: "https://jobs.ghodaghodicampus.edu.np",
    liveLabel: "jobs.ghodaghodicampus.edu.np",
    behance: "https://www.behance.net/gallery/255240767/GMC-Job-Portal",
  },
  {
    slug: "board-games-nepal",
    name: "Board Games Nepal",
    kind: "Commerce · zero-JS storefront",
    caseKind: "Storefront & back office",
    verb: "Play",
    note: "0 kb of client-side JS",
    status: "Live",
    client: "Board Game Nepal",
    summary:
      "Brand, website and shop for Board Game Nepal, started by two brothers who wanted more people to play with. Designed and built in one month. The storefront runs zero client-side JavaScript; the back office handles multi-currency landed-cost procurement (USD/EUR/CNY → NPR).",
    facts: [
      { k: "storefront", v: "Zero client-side JavaScript" },
      { k: "back office", v: "Multi-currency landed-cost procurement" },
      { k: "currencies", v: "USD / EUR / CNY → NPR" },
      { k: "sector", v: "Retail & community" },
      { k: "timeline", v: "One month, brand through to shop" },
    ],
    bg: "#EFD97A",
    ink: "#1E3A2B",
    img: "/img/work/bgn.png",
    live: "https://boardgamenepal.com",
    liveLabel: "boardgamenepal.com",
    behance: "https://www.behance.net/gallery/256387979/Board-Game-Nepal-Brand-Website-Shop",
  },
  {
    slug: "sahara-ghar",
    name: "Sahara Ghar",
    kind: "Non-profit · Kailali",
    caseKind: "Website & admin",
    verb: "Shelter",
    note: "for a care home in Kailali",
    status: "Live",
    client: "Helping Hands Nepal",
    summary:
      "A website for the people no one counted. Sahara Ghar shelters around 100 abandoned and forgotten people in Kailali, and its whole public record lived on a Facebook page. This gives the home its own address on the internet, somewhere to document its story and an easier way for people to give.",
    facts: [
      { k: "scope", v: "Research, design, build" },
      { k: "intake", v: "Volunteer and event intake" },
      { k: "stories", v: "Block-based story editor" },
      { k: "admin", v: "Admin for the shelter team" },
      { k: "reach", v: "~100 residents, a decade of work, one public record" },
    ],
    bg: "#F7EFC4",
    ink: "#1E3A2B",
    img: "/img/work/sahara.png",
    live: "https://saharaghar.org",
    liveLabel: "saharaghar.org",
    behance: "https://www.behance.net/gallery/255129331/Sahara-Ghar-Official-Website",
  },
  {
    slug: "masto-coffee",
    name: "Masto Coffee",
    kind: "Migration · Supabase → Workers",
    caseKind: "Platform migration",
    verb: "Brew",
    note: "moved to the edge",
    status: "Live",
    client: "Coffee roastery",
    summary:
      "Moved a roastery’s online store from Supabase to Cloudflare Workers.",
    facts: [
      { k: "from", v: "Supabase" },
      { k: "to", v: "Cloudflare Workers" },
    ],
    bg: "#3B2A1E",
    ink: "#FFFFFF",
    img: "/img/work/masto.png",
  },
  {
    slug: "aurora-os",
    name: "Aurora OS",
    kind: "Internal · studio operations",
    caseKind: "Internal operations app",
    verb: "Run",
    note: "the studio runs on it",
    status: "In daily use",
    client: "Aurora Studios",
    summary:
      "The studio’s internal operations app: CRM, projects, deliverables, staff and finance.",
    facts: [
      { k: "modules", v: "CRM, projects, deliverables, staff and finance" },
      { k: "user", v: "Aurora Studios" },
    ],
    bg: "#DDE8D9",
    ink: "#1E3A2B",
  },
];

/* ------------------------------------------------------------
   HOW I WORK — four sticky cards that stack up as you scroll.
   ------------------------------------------------------------ */

export const steps = [
  {
    n: "01 / spec",
    t: "Spec it",
    d: "I sit with the client, work out what we are building and who it is for, and write it down, down to an SRS when the project needs one.",
    proof: "2 years as product owner & project manager",
    bg: "#DDE8D9",
    ink: "#1E3A2B",
    top: "90px",
  },
  {
    n: "02 / build",
    t: "Build it",
    d: "React front ends, edge APIs, databases and auth, built by the same person who wrote the spec.",
    proof: "React 19 · Hono · Postgres · Better Auth",
    bg: "#FFFFFF",
    ink: "#1E3A2B",
    top: "110px",
  },
  {
    n: "03 / test",
    t: "Test it",
    d: "Money stored as integer paisa, double-entry that balances, and tests that prove it.",
    proof: "1,000+ automated tests on Vitra Bahira ERP",
    bg: "#EFD97A",
    ink: "#1E3A2B",
    top: "130px",
  },
  {
    n: "04 / ship",
    t: "Ship it",
    d: "Deployed on Cloudflare with CI/CD, so the thing is live and in real people’s hands.",
    proof: "6 systems live in 2026",
    bg: "#1E3A2B",
    ink: "#EFD97A",
    top: "150px",
  },
];

/* ------------------------------------------------------------
   STATEMENT — stickers that pop along the mouse trail.
   ------------------------------------------------------------ */

export type Sticker = {
  img?: string;
  w?: number;
  h?: number;
  t?: string;
  bg?: string;
  ink?: string;
};

export const stickers: Sticker[] = [
  { img: "/img/work/gmc.png", w: 200, h: 136 },
  { t: "Bikram Sambat", bg: "#EFD97A" },
  { t: "Nepal VAT", bg: "#DDE8D9" },
  { img: "/img/shubham.png", w: 140, h: 176 },
  { t: "1,000+ tests", bg: "#EFD97A" },
  { t: "0 kb JS", bg: "#1E3A2B", ink: "#EFD97A" },
  { img: "/img/work/masto.png", w: 200, h: 136 },
  { t: "khata", bg: "#F7EFC4" },
  { t: "offline POS", bg: "#FFFFFF", ink: "#1E3A2B" },
];

/* ------------------------------------------------------------
   THE WALL — a slow rotating ring, then a masonry of figures.
   ------------------------------------------------------------ */

export type RingItem = {
  img?: string;
  a?: string;
  b?: string;
  bg?: string;
  ink?: string;
};

export const ring: RingItem[] = [
  { a: "6", b: "systems live in 2026", bg: "#EFD97A" },
  { img: "/img/work/gmc.png" },
  { a: "3", b: "businesses piloting the ERP", bg: "#1E3A2B", ink: "#FFFFFF" },
  { a: "1,000+", b: "automated tests", bg: "#F7EFC4" },
  { img: "/img/shubham.png" },
  { a: "500+", b: "students on a platform I product-owned", bg: "#DCE6F0" },
  { a: "30", b: "people on the largest team I led", bg: "#EFD97A" },
  { img: "/img/work/masto.png" },
  { a: "−35%", b: "deployment cycle time", bg: "#2F5A3F", ink: "#FFFFFF" },
  { a: "1st", b: "Class Honours, BSc CS (AI)", bg: "#FFFFFF" },
];

export type WallItem = {
  img?: string;
  big?: string;
  small?: string;
  hand?: string;
  bg: string;
  ink: string;
  ar: string;
  pos?: string;
  cap: string;
};

export const wall: WallItem[] = [
  {
    img: "/img/shubham.png",
    bg: "#FFFFFF",
    ink: "#1E3A2B",
    ar: "3/4",
    cap: "fig. 01 — me, Kathmandu, at night",
  },
  {
    big: "6",
    small: "systems live in 2026",
    bg: "#EFD97A",
    ink: "#1E3A2B",
    ar: "1/1",
    cap: "fig. 02 — Aurora Studios",
  },
  {
    img: "/img/work/gmc.png",
    bg: "#FFFFFF",
    ink: "#1E3A2B",
    ar: "4/3",
    pos: "top",
    cap: "fig. 03 — GMC Job Portal, used daily",
  },
  {
    hand: "spec first, code second",
    bg: "#FFFFFF",
    ink: "#2F5A3F",
    ar: "1/1",
    cap: "fig. 04 — product owner habit",
  },
  {
    big: "1,000+",
    small: "automated tests on Vitra Bahira ERP",
    bg: "#1E3A2B",
    ink: "#FFFFFF",
    ar: "4/5",
    cap: "fig. 05 — tests",
  },
  {
    big: "500+",
    small: "students on a platform I product-owned at HCK",
    bg: "#DCE6F0",
    ink: "#1E3A2B",
    ar: "1/1",
    cap: "fig. 06 — 2023–24",
  },
  {
    img: "/img/work/masto.png",
    bg: "#FFFFFF",
    ink: "#1E3A2B",
    ar: "4/3",
    pos: "top",
    cap: "fig. 07 — Masto Coffee on Workers",
  },
  {
    big: "−35%",
    small: "deployment cycle time after introducing Scrum at Void Nepal",
    bg: "#2F5A3F",
    ink: "#FFFFFF",
    ar: "4/5",
    cap: "fig. 08 — process",
  },
  {
    big: "30",
    small: "people on the largest team I led (Codynn)",
    bg: "#EFD97A",
    ink: "#1E3A2B",
    ar: "1/1",
    cap: "fig. 09 — team",
  },
  {
    hand: "नमस्कार from Kathmandu :)",
    bg: "#1E3A2B",
    ink: "#EFD97A",
    ar: "4/3",
    cap: "fig. 10 — hello",
  },
  {
    big: "1st",
    small: "Class Honours, BSc (Hons) CS (AI), Wolverhampton",
    bg: "#FFFFFF",
    ink: "#1E3A2B",
    ar: "1/1",
    cap: "fig. 11 — 2023–25",
  },
  {
    big: "1,200+",
    small: "members in the Codynn & Sekuwa Discords I admin",
    bg: "#F7EFC4",
    ink: "#1E3A2B",
    ar: "4/5",
    cap: "fig. 12 — community",
  },
];

/* ------------------------------------------------------------
   ABOUT
   ------------------------------------------------------------ */

export const timeline = [
  {
    when: "2026 – now",
    role: "Co-Founder & Full-Stack Engineer, Aurora Studios",
    note: "Production web apps for businesses and communities in Nepal.",
  },
  {
    when: "Apr 23 – Oct 24",
    role: "Product Owner (intern), Development Platform HCK",
    note: "College system for 500+ students, 85% satisfaction, 15-person engineering team.",
  },
  {
    when: "Jun 23 – Jan 24",
    role: "Project Manager (intern), Void Nepal / Codynn",
    note: "Team of 30, 20+ features across 8 sprints, deployment cycle cut 35%.",
  },
  {
    when: "Ongoing",
    role: "Steering Leader, IoT Innovators",
    note: "Discord admin for Codynn and Sekuwa (1,200+ members).",
  },
  {
    when: "2023 – 2025",
    role: "BSc (Hons) CS (AI), University of Wolverhampton",
    note: "First Class Honours.",
  },
];

export const skills = [
  { group: "Frontend", items: "React 19, Next.js App Router, Vite, TanStack, Tailwind, PWA" },
  { group: "Backend", items: "Node, Hono, Better Auth (passkeys, roles), Zod, Drizzle" },
  { group: "Data", items: "Postgres (Neon), SQLite (D1), double-entry and inventory modelling" },
  {
    group: "Edge / DevOps",
    items: "Cloudflare Workers, D1, R2, Hyperdrive, OpenNext, Docker, CI/CD, CSP",
  },
  { group: "Product", items: "Scrum, Jira, SRS writing, roadmapping, stakeholder communication" },
];
