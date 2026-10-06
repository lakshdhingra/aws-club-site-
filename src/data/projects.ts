export type ProjectCategory = "WEB" | "MOBILE" | "AI/ML" | "CLOUD";

export type Project = {
  name: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  aws: string[];
  github: string;
  demo: string;
  image?: string;
};

export const projectFilters = [
  "ALL",
  "WEB",
  "MOBILE",
  "AI/ML",
  "CLOUD",
] as const;

export const projects: Project[] = [
  {
    name: "[Campus Events Portal]",
    description: "Serverless event registration with real-time seat counts.",
    category: "WEB",
    tech: ["React", "Node.js"],
    aws: ["Lambda", "DynamoDB", "S3"],
    github: "#",
    demo: "#",
  },
  {
    name: "[Attendance App]",
    description: "Mobile check-ins with QR codes and cloud sync.",
    category: "MOBILE",
    tech: ["Flutter"],
    aws: ["API Gateway", "DynamoDB"],
    github: "#",
    demo: "#",
  },
  {
    name: "[Notes Summarizer]",
    description: "Upload lecture notes, get AI summaries in seconds.",
    category: "AI/ML",
    tech: ["Python"],
    aws: ["S3", "Lambda"],
    github: "#",
    demo: "#",
  },
  {
    name: "[Infra Templates]",
    description: "Reusable IaC templates for student deployments.",
    category: "CLOUD",
    tech: ["Python"],
    aws: ["EC2", "RDS", "S3"],
    github: "#",
    demo: "#",
  },
  {
    name: "[Club Website]",
    description: "This site, deployed globally on a CDN.",
    category: "WEB",
    tech: ["React"],
    aws: ["CloudFront", "S3"],
    github: "#",
    demo: "#",
  },
  {
    name: "[Cost Monitor]",
    description: "Dashboard that alerts students before free-tier limits.",
    category: "CLOUD",
    tech: ["Node.js"],
    aws: ["Lambda", "EC2"],
    github: "#",
    demo: "#",
  },
];
