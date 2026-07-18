import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  Link as LinkIcon,
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
  lede: "Technical Product Manager with a software-development foundation and an AI/ML specialization. I've shipped 4+ production apps for 1000+ users while leading cross-functional teams of 30–60.",
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
  { label: "Linktree", href: "https://linktr.ee/shubhamneupane", icon: LinkIcon },
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
    title: "Herald College App",
    role: "Product Owner",
    year: "2023–24",
    description:
      "Built for Herald College under the Development Platform. Started as a Research & Development core member and was promoted to Product Owner, managing a team of 60+ learners with the team leads and shipping the app all the way to a live Play Store release.",
    tags: ["Product Ownership", "Team of 60+", "Play Store", "Scrum"],
  },
  {
    index: "02",
    title: "Codynn — EdTech Platform",
    role: "Project Manager @ Void Nepal",
    year: "2023–24",
    description:
      "A website and mobile app to learn programming through interactive courses, videos, questions and challenges. Led a 30-person cross-functional team across 8 sprints, wrote the SRS, and delivered 20+ features — improving team velocity from 20 to 32 story points.",
    tags: ["Project Management", "Team of 30", "EdTech", "SRS"],
  },
  {
    index: "03",
    title: "Codynn Compiler",
    role: "Project Manager",
    year: "2023–24",
    description:
      "A cloud-based online compiler supporting 5+ programming languages. Gathered requirements and researched market need, then worked with backend engineers on a Docker containerization strategy for secure code execution and a CI/CD pipeline for deploys.",
    tags: ["Cloud Compiler", "Docker", "5+ Languages", "CI/CD"],
  },
  {
    index: "04",
    title: "Intra College Calendar",
    role: "Product Owner & Research Head",
    year: "2023",
    description:
      "An internal calendar and events system built for the college under the Development Platform. Acted as Product Owner and Research Head — scoping requirements and building the system with a tight closed team of five.",
    tags: ["Product Ownership", "Research", "Team of 5"],
  },
  {
    index: "05",
    title: "Vitra Bahira ERP",
    role: "Founder & Builder",
    year: "2025–",
    description:
      "A multi-tenant finance + inventory ERP for small businesses in Nepal — retail POS first, then wholesale and factory workflows. Piloted on three real businesses from day one, on the Cloudflare edge stack.",
    tags: ["React", "Hono", "Cloudflare", "Postgres"],
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
