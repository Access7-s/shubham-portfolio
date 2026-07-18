import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Link as LinkIcon,
  Twitter,
} from "lucide-react";

export const profile = {
  name: "Shubham Neupane",
  alias: "Paradox 🐉",
  roles: [
    "Full-Stack Developer",
    "AI Undergraduate",
    "Builder @ Aurora Studios",
    "Problem Solver",
  ],
  location: "Kathmandu, Nepal",
  email: "shubhamneuane07@gmail.com",
  about: [
    "I'm an Artificial Intelligence undergraduate at Herald College Kathmandu who would rather ship real products than collect certificates. Under Aurora Studios, I design and build software that actual businesses in Nepal run on every day — from e-commerce to ERP.",
    "My happy place is the full stack: React on the front, TypeScript everywhere, and serverless infrastructure on Cloudflare's edge. I care about software that is fast, boring to operate, and genuinely useful.",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Access7-s", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shubham-neupane-9a937b217/",
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/Access_7s",
    icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_shubhamneupane_/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/shubham.neupane.3979/",
    icon: Facebook,
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/shubhamneupane",
    icon: LinkIcon,
  },
  { label: "Email", href: "mailto:shubhamneuane07@gmail.com", icon: Mail },
];

export const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Hono",
  "Cloudflare Workers",
  "Cloudflare D1",
  "PostgreSQL",
  "Tailwind CSS",
  "AI / ML",
  "Jupyter",
  "Git & GitHub",
  "REST APIs",
  "Serverless",
  "SQL",
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  status: "Live" | "In Development" | "Shipped";
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Vitra Bahira ERP",
    tagline: "Finance + inventory SaaS for Nepali SMBs",
    description:
      "A multi-tenant ERP built for how small businesses in Nepal actually operate — retail POS first, then wholesale and factory workflows. Piloted on three real businesses from day one.",
    tech: ["React", "Hono", "Cloudflare Workers", "Neon Postgres"],
    status: "In Development",
    accent: "from-violet-500/30 to-fuchsia-500/10",
  },
  {
    title: "GMC Job Portal",
    tagline: "Verified student ↔ employer hiring platform",
    description:
      "A job portal for Ghodaghodi Multiple Campus connecting verified students with vetted employers — document verification, applications, and admin review flows end to end.",
    tech: ["Next.js", "Cloudflare", "D1", "R2", "Better Auth"],
    status: "Shipped",
    accent: "from-cyan-500/30 to-blue-500/10",
  },
  {
    title: "Masto Coffee",
    tagline: "E-commerce for a specialty coffee roastery",
    description:
      "Full storefront and order pipeline for a coffee roastery — product catalog, cart, checkout, and transactional email — running entirely on Cloudflare's edge.",
    tech: ["Cloudflare Workers", "D1", "R2", "React", "Resend"],
    status: "Shipped",
    accent: "from-amber-500/25 to-orange-500/10",
  },
  {
    title: "GatherWay",
    tagline: "Mobile app + backend, TypeScript end to end",
    description:
      "A mobile-first product with a dedicated REST backend — designed, built, and iterated as a complete system rather than a demo.",
    tech: ["React Native", "TypeScript", "Node.js"],
    status: "Shipped",
    accent: "from-emerald-500/25 to-teal-500/10",
  },
  {
    title: "One-Bite Foods",
    tagline: "Restaurant dine-in booking system",
    description:
      "Dine-in booking and staff management platform for a Kathmandu restaurant, built with a team during the Collaborative Development module.",
    tech: ["JavaScript", "Node.js", "MySQL"],
    status: "Shipped",
    accent: "from-pink-500/25 to-rose-500/10",
  },
];

export const journey = [
  {
    period: "Now",
    title: "Aurora Studios",
    subtitle: "Founder & Developer",
    body: "Building and running production software for real businesses in Nepal — ERP, e-commerce, and platforms, mostly on the Cloudflare edge stack.",
  },
  {
    period: "Ongoing",
    title: "Herald College Kathmandu",
    subtitle: "BSc (Hons) — Artificial Intelligence",
    body: "Studying AI & machine learning while applying it to real projects. Interested in the intersection of intelligent systems and product engineering.",
  },
  {
    period: "Earlier",
    title: "The foundation years",
    subtitle: "Web tech, embedded systems & Python",
    body: "From weekly web workshops to embedded systems programming — the reps that made shipping full products feel natural.",
  },
];
