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
  headline: ["Artificial Intelligence", "Product Owner", "Project Manager"],
  location: "Kathmandu, Nepal",
  coords: "27.7172° N, 85.3240° E",
  email: "shubhamneuane07@gmail.com",
  photo: "/img/shubham.png",
  connections: "500+",
  followers: "1,662",
  lede: "I lead product and ship it too. Artificial Intelligence undergraduate, product owner, and project manager who has run teams of 20–30 building software people actually use.",
  about: [
    "I'm an Artificial Intelligence undergraduate (First Class Honors) who spends most of my time where product strategy meets execution. As a Product Owner and Project Manager, I've defined roadmaps, run Scrum, and led cross-functional teams of 20 to 30 people to ship real applications — from a college's mobile platform to a coding-education product.",
    "I care about the whole arc: understanding what users need, breaking it into something a team can build, and keeping everyone moving until it ships. AI is the lens; product is the craft; getting things shipped is the point.",
  ],
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-neupane-9a937b217/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Access7-s", icon: Github },
  { label: "X", href: "https://x.com/Access_7s", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/_shubhamneupane_/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/shubham.neupane.3979/", icon: Facebook },
  { label: "Linktree", href: "https://linktr.ee/shubhamneupane", icon: LinkIcon },
  { label: "Email", href: "mailto:shubhamneuane07@gmail.com", icon: Mail },
];

export const stats = [
  { value: "30", label: "People led on a single team" },
  { value: "3", label: "Products shipped as owner / PM" },
  { value: "1st", label: "Class Honors — BSc AI" },
  { value: "2+", label: "Years running Scrum teams" },
];

export const capabilities = [
  {
    no: "01",
    title: "Product Ownership",
    body: "Defining requirements, roadmaps, and priorities so what gets built is what users actually need.",
    tags: ["Roadmapping", "User Stories", "Prioritization", "Stakeholders"],
  },
  {
    no: "02",
    title: "Project Management",
    body: "Running Scrum end to end — stand-ups, sprint reviews, retrospectives — and keeping teams of 20–30 on track.",
    tags: ["Scrum", "Agile", "Sprint Planning", "Delivery"],
  },
  {
    no: "03",
    title: "Artificial Intelligence",
    body: "An AI undergraduate foundation in machine learning and creative problem solving, applied to real products.",
    tags: ["Machine Learning", "Problem Solving", "Research"],
  },
  {
    no: "04",
    title: "Build & Design",
    body: "Hands-on across the stack and in Figma — enough to speak fluently with engineers and designers, and to ship myself.",
    tags: ["React", "TypeScript", "Python", "Figma", "Git"],
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
    title: "Herald College Mobile App",
    role: "Product Manager",
    year: "2023–24",
    description:
      "Owned the product for Herald College Kathmandu's mobile platform. Defined requirements and roadmap, ran Scrum, and led a team of 20 core members and team leads. Shipped alongside an Intra-College Calendar and the Herald Journey initiative.",
    tags: ["Product Ownership", "Scrum", "Team of 20", "Roadmap"],
  },
  {
    index: "02",
    title: "Codynn — Coding Platform",
    role: "Project Manager @ Void Nepal",
    year: "2023–24",
    description:
      "Managed a 30-person team building Codynn, a coding-education platform: web application, an online compiler, a challenges section, and a suite of mobile apps for Python, JavaScript, Golang, Java and QBasic.",
    tags: ["Project Management", "Team of 30", "Compiler", "EdTech"],
    href: "https://github.com/Access7-s/codynn",
  },
  {
    index: "03",
    title: "Vitra Bahira ERP",
    role: "Founder & Builder",
    year: "2025–",
    description:
      "A multi-tenant finance + inventory ERP for small businesses in Nepal — retail POS first, then wholesale and factory workflows. Piloted on three real businesses from day one, on the Cloudflare edge stack.",
    tags: ["React", "Hono", "Cloudflare", "Postgres"],
  },
  {
    index: "04",
    title: "GMC Job Portal",
    role: "Full-Stack Developer",
    year: "2024",
    description:
      "A verified student ↔ employer hiring platform for Ghodaghodi Multiple Campus — document verification, applications, and admin review, end to end on Cloudflare with Next.js.",
    tags: ["Next.js", "Cloudflare", "D1", "Better Auth"],
  },
  {
    index: "05",
    title: "Masto Coffee",
    role: "Full-Stack Developer",
    year: "2024",
    description:
      "A complete e-commerce storefront and order pipeline for a specialty coffee roastery — catalog, cart, checkout, and transactional email — running entirely on Cloudflare's edge.",
    tags: ["Cloudflare Workers", "D1", "R2", "React"],
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
    period: "Oct 2023 — Oct 2024",
    org: "Development Platform, HCK",
    role: "Product Manager",
    place: "Kathmandu · Hybrid",
    body: "Defined product requirements and roadmap for the Herald College application, implemented Scrum with stand-ups, sprint reviews and retrospectives, and led a team of 20 core members — acting as the bridge between departments.",
  },
  {
    period: "Jun 2023 — Dec 2023",
    org: "Development Platform, HCK",
    role: "Research & Analysis — Core",
    place: "Kathmandu · Hybrid",
    body: "Project planning and product research, working in Figma to shape early requirements and analysis for the platform's roadmap.",
  },
  {
    period: "Aug 2023 — Jan 2024",
    org: "Void Nepal (Codynn)",
    role: "Project Manager",
    place: "Kathmandu · Full-time",
    body: "Led a 30-person team through the Codynn web app, compiler and challenges section. Defined scope and deliverables, ran Scrum, owned documentation and QA, and kept every department informed.",
  },
  {
    period: "Oct 2023 — Present",
    org: "IOTinnovators",
    role: "Steering Leader (Volunteer)",
    place: "Education",
    body: "Steering leadership for a student technology community — guiding direction and helping others build.",
  },
];

export const education = [
  {
    period: "2023 — 2025",
    org: "University of Wolverhampton",
    detail: "BSc (Hons) Artificial Intelligence · First Class Honors",
    note: "Machine Learning · Creative Problem Solving",
  },
  {
    period: "2019 — 2022",
    org: "Prasadi Academy",
    detail: "Higher Secondary · Physical Science · Grade A+",
    note: "",
  },
];

export const skills = [
  "Project Management",
  "Product Ownership",
  "Scrum",
  "Agile",
  "Cross-functional Collaboration",
  "Roadmapping",
  "Sprint Planning",
  "Machine Learning",
  "Creative Problem Solving",
  "Project Planning",
  "Figma",
  "React",
  "TypeScript",
  "Python",
  "Git",
  "Teamwork",
  "Leadership",
  "Documentation",
];
