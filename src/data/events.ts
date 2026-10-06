// Featured event drives the countdown. Use ISO date with timezone.
export const featuredEvent = {
  title: "AWS Cloud Workshop",
  tagline: "Learn. Build. Deploy.",
  dateISO: "2026-10-15T14:00:00+05:30",
  dateLabel: "[DD MONTH YYYY]",
  timeLabel: "[00:00 PM]",
  venue: "[BENNETT UNIVERSITY / VENUE]",
  description:
    "A hands-on session exploring cloud computing, AWS services and real-world deployment.",
  registerUrl: "#register",
};

export type UpcomingEvent = {
  title: string;
  date: string;
  venue: string;
  type: string;
  description: string;
  registerUrl: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: "AWS Cloud Workshop",
    date: "15 OCT 2026",
    venue: "PHL-101",
    type: "Workshop",
    description: "Launch your first EC2 instance and host a site on S3.",
    registerUrl: "#",
  },
  {
    title: "Cloud Computing Bootcamp",
    date: "22 OCT 2026",
    venue: "Bennett University",
    type: "Bootcamp",
    description: "Three days of serverless, databases and IAM fundamentals.",
    registerUrl: "#",
  },
  {
    title: "AWS Hack Night",
    date: "05 NOV 2026",
    venue: "Innovation Lab",
    type: "Hackathon",
    description: "Overnight build sprint. Ship something on AWS by sunrise.",
    registerUrl: "#",
  },
  {
    title: "Certification Prep Session",
    date: "19 NOV 2026",
    venue: "[VENUE]",
    type: "Session",
    description: "A guided walkthrough of the Cloud Practitioner exam.",
    registerUrl: "#",
  },
];

export type PastEvent = {
  title: string;
  date: string;
  description: string;
  participants: number;
  photos: number;
  image?: string;
};

export const pastEvents: PastEvent[] = [
  {
    title: "[Past Event Title]",
    date: "[MON YYYY]",
    description: "Replace with a short recap of what happened.",
    participants: 120,
    photos: 48,
  },
  {
    title: "[Past Event Title]",
    date: "[MON YYYY]",
    description: "Replace with a short recap of what happened.",
    participants: 80,
    photos: 32,
  },
  {
    title: "[Past Event Title]",
    date: "[MON YYYY]",
    description: "Replace with a short recap of what happened.",
    participants: 200,
    photos: 76,
  },
];
