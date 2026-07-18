import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  Flame,
  Twitter,
} from "lucide-react";

export const profile = {
  name: "Shubham Neupane",
  headline: ["Technical Product Manager", "Product Owner", "Project Manager"],
  location: "Kathmandu, Nepal",
  coords: "27.7172° N, 85.3240° E",
  email: "shubhamneupane07@gmail.com",
  phone: "+977 9868767171",
  photo: "/img/shubham.png",
  connections: "500+",
  followers: "1,662",
  studio: "Aurora Studios",
  lede: "Technical Product Manager and co-founder of Aurora Studios, with a software-development foundation and an AI/ML specialization. I've shipped 4+ production apps for 1000+ users while leading cross-functional teams of 30–60.",
  about: [
    "I sit where engineering meets the business. With a Computer Science (AI) background and hands-on technical grounding in distributed systems, OOP and cloud architecture, I can go deep with engineers on API design and infrastructure — then zoom out to own strategy, backlog and roadmap.",
    "I've defined product strategy for a college platform serving 500+ students, led a 30-person team to ship an EdTech product across web and mobile, and cut a deployment cycle by 35% by tightening how the team runs Scrum. I translate messy requirements into things people actually use.",
  ],
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-neupane-9a937b217/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Access7-s", icon: Github },
  { label: "X", href: "https://x.com/Access_7s", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/_shubhamneupane_/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/shubham.neupane.3979/", icon: Facebook },
  { label: "Tinder", href: "https://tinder.com/@shubhamneupane", icon: Flame },
  { label: "Phone", href: "tel:+9779868767171", icon: Phone },
  { label: "Email", href: "mailto:shubhamneupane07@gmail.com", icon: Mail },
];

export const stats = [
  { value: "4+", label: "Production apps shipped" },
  { value: "1000+", label: "Users served" },
  { value: "60", label: "Largest team led" },
  { value: "85%", label: "User satisfaction reached" },
];

export const capabilities = [
  {
    no: "01",
    title: "Product Ownership",
    body: "Owning strategy, backlog and roadmap. Turning market and customer requirements into prioritized, buildable work — measured against adoption, retention and OKRs.",
    tags: ["Roadmapping", "Requirement Analysis", "Prioritization", "OKRs"],
  },
  {
    no: "02",
    title: "Project Management",
    body: "Running Scrum end to end — sprint planning, standups, retrospectives — for cross-functional teams of 30–60. Writing the SRS and keeping engineering and business aligned.",
    tags: ["Scrum", "Agile", "Jira", "SRS & Docs"],
  },
  {
    no: "03",
    title: "Technical Foundation",
    body: "A real software-development base: distributed systems, OOP and cloud architecture. Enough to guide decisions on API design, database schemas, Docker and CI/CD.",
    tags: ["Distributed Systems", "OOP", "Cloud", "Docker", "CI/CD"],
  },
  {
    no: "04",
    title: "AI / ML",
    body: "A Computer Science (AI) specialization — the lens I bring to product, and the direction I'm building toward.",
    tags: ["Machine Learning", "Research", "Problem Solving"],
  },
];

export type Project = {
  index: string;
  title: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Vitra Bahira ERP",
    role: "Co-Founder & Product Lead",
    year: "2026",
    description:
      "An all-in-one finance + inventory SaaS for Nepali small businesses — retail, wholesale and small factories. Real double-entry accounting under the hood, plus khata (credit), stock, Nepal-native VAT and the Bikram Sambat calendar. Piloted on three real businesses from day one.",
    tags: ["React", "Hono", "Double-Entry", "Cloudflare"],
  },
  {
    index: "02",
    title: "GMC Job Portal",
    role: "Product & Engineering",
    year: "2026",
    description:
      "A verified student ↔ employer hiring platform for Ghodaghodi Multiple Campus — document verification, applications and admin review. Built as Next.js 16 on Cloudflare Workers via Aurora IDP, with Better Auth and Drizzle.",
    tags: ["Next.js 16", "Cloudflare", "D1", "Better Auth"],
  },
  {
    index: "03",
    title: "Masto Coffee",
    role: "Product & Engineering",
    year: "2026",
    description:
      "Storefront and admin CMS for the Masto Artisan Roastery, migrated from a Supabase app to Cloudflare Workers. A React / Vite / shadcn UI served as static assets, with a Worker API backed by D1 and R2.",
    tags: ["React", "Cloudflare Workers", "D1", "R2"],
  },
  {
    index: "04",
    title: "Aurora IDP",
    role: "Product Advisor",
    year: "2026",
    description:
      "Aurora Studios' internal developer platform — one command ships a project to Cloudflare Workers with a D1 database, R2 bucket, Better Auth and rate limiting bound. Here I advised on direction rather than building it hands-on: which features to prioritize and what the deploy experience should feel like.",
    tags: ["Advisory", "Feature Strategy", "Platform / DX", "Cloudflare"],
  },
  {
    index: "05",
    title: "Codynn Compiler",
    role: "Project Manager @ Void Nepal",
    year: "2023–24",
    description:
      "A cloud-based online compiler supporting 5+ programming languages. Gathered requirements and researched market need, then worked with backend engineers on a Docker containerization strategy for secure code execution and a CI/CD pipeline for deploys.",
    tags: ["Cloud Compiler", "Docker", "5+ Languages", "CI/CD"],
  },
  {
    index: "06",
    title: "Intra College Calendar",
    role: "Product Owner & Research Head",
    year: "2023",
    description:
      "An internal calendar and events system built for Herald College under the Development Platform. Acted as Product Owner and Research Head — scoping requirements and building the system with a tight closed team of five.",
    tags: ["Product Ownership", "Research", "Team of 5"],
  },
];

export type TimelineItem = {
  period: string;
  org: string;
  role: string;
  place: string;
  body: string;
};

export const experience: TimelineItem[] = [
  {
    period: "Jun 2026 — Present",
    org: "Aurora Studios",
    role: "Co-Founder",
    place: "Kathmandu · Product Studio",
    body: "Co-founded a product studio building software for small businesses and communities — a multi-tenant finance & inventory ERP, a verified hiring platform, and e-commerce, all shipped on the Cloudflare edge. I set product direction and stay hands-on across the stack.",
  },
  {
    period: "Apr 2023 — Oct 2024",
    org: "Development Platform, HCK",
    role: "Product Owner",
    place: "Kathmandu · Internship",
    body: "Defined product strategy and maintained the feature backlog for a college management system serving 500+ students, reaching 85% user satisfaction through iterative feedback and data-driven prioritization. Collaborated with an engineering team of 15+ on technical design reviews and sprint planning, and established a metrics framework tracking adoption, retention and performance against quarterly OKRs.",
  },
  {
    period: "Jun 2023 — Jan 2024",
    org: "Void Nepal Pvt. Ltd",
    role: "Project Manager",
    place: "Kathmandu · Internship",
    body: "Led a cross-functional team of 30 developers, designers and QA engineers to ship the Codynn web and mobile apps across 8 sprint cycles. Implemented Scrum that cut deployment cycle time by 35% and lifted velocity from 20 to 32 story points, authored the SRS, and architected an online compiler for 5+ languages using Docker for secure execution.",
  },
  {
    period: "Ongoing",
    org: "IoT Innovators Community",
    role: "Steering Leader (Volunteer)",
    place: "Kathmandu",
    body: "Steering leadership for a student technology community — planning and running events, handling administration and documentation, and moderating a Discord community of 1200+ members.",
  },
];

export const education = [
  {
    period: "2023 — 2025",
    org: "University of Wolverhampton",
    detail: "Bachelor (Hons) Computer Science (AI) · First Class Honors",
    note: "Distributed Systems & Cloud Computing · OOP · Collaborative Development",
  },
  {
    period: "2020 — 2022",
    org: "Prasadi Academy",
    detail: "Higher Secondary Education",
    note: "",
  },
];

export const skills = [
  "Scrum",
  "Agile",
  "Jira",
  "Roadmapping",
  "Requirement Analysis",
  "Competitive Research",
  "Stakeholder Communication",
  "Project Planning",
  "Documentation",
  "Leadership",
  "Collaboration",
  "Problem-Solving",
  "Distributed Systems",
  "OOP",
  "Cloud Architecture",
  "Docker",
  "CI/CD",
  "GitHub",
  "AI / ML",
];
