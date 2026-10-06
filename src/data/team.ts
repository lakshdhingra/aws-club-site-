// Add/remove members here. Set `image` to a URL to replace the placeholder.
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Amit Kumar",
    role: "Chairperson",
    bio: "Building the next generation of cloud developers.",
  },
  {
    name: "[Member Name]",
    role: "Vice Chairperson",
    bio: "Driving the club's vision and partnerships.",
  },
  {
    name: "[Member Name]",
    role: "Technical Lead",
    bio: "Architecting hands-on cloud workshops.",
  },
  {
    name: "[Member Name]",
    role: "Cloud Lead",
    bio: "Turning AWS services into real projects.",
  },
  {
    name: "[Member Name]",
    role: "DevOps Lead",
    bio: "Pipelines, containers and automation.",
  },
  {
    name: "[Member Name]",
    role: "AI/ML Lead",
    bio: "Shipping models on managed infrastructure.",
  },
  {
    name: "[Member Name]",
    role: "Web Lead",
    bio: "Frontends that deploy in minutes.",
  },
  {
    name: "[Member Name]",
    role: "Events Lead",
    bio: "Workshops, hack nights and bootcamps.",
  },
  {
    name: "[Member Name]",
    role: "Design Lead",
    bio: "Visual identity for the community.",
  },
  {
    name: "[Member Name]",
    role: "Content Lead",
    bio: "Stories, docs and social presence.",
  },
  {
    name: "[Member Name]",
    role: "Outreach Lead",
    bio: "Connecting students with industry.",
  },
  {
    name: "[Member Name]",
    role: "Operations Lead",
    bio: "Keeping everything running smoothly.",
  },
].map((m) => ({ ...m, linkedin: "#", instagram: "#", github: "#" }));
