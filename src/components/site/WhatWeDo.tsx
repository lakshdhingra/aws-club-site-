import { motion } from "framer-motion";
import { Award, Cloud, FolderGit2, Mic, Trophy, Users } from "lucide-react";
import { SectionHeader } from "./primitives";

const items = [
  {
    title: "Cloud Workshops",
    desc: "Hands-on sessions covering AWS and cloud technologies.",
    icon: Cloud,
  },
  {
    title: "Hackathons",
    desc: "Build real-world solutions with technology and teamwork.",
    icon: Trophy,
  },
  {
    title: "Projects",
    desc: "Develop and deploy practical applications using cloud infrastructure.",
    icon: FolderGit2,
  },
  {
    title: "Certifications",
    desc: "Help students explore AWS certifications and cloud careers.",
    icon: Award,
  },
  {
    title: "Technical Sessions",
    desc: "Learn from students, professionals and industry experts.",
    icon: Mic,
  },
  {
    title: "Community",
    desc: "Meet builders, developers and cloud enthusiasts.",
    icon: Users,
  },
];

export function WhatWeDo() {
  return (
    <section className="border-t border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          index="02"
          eyebrow="What we do"
          title="Six ways to ship."
          intro="From your first EC2 instance to your first production deploy, every track is hands-on."
        />
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden bg-background p-8 sm:p-10"
            >
              <div className="grid-bg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              <div className="relative">
                <div className="mb-14 flex items-start justify-between">
                  <it.icon
                    className="h-7 w-7 text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold uppercase">{it.title}</h3>
                <p className="mt-3 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
