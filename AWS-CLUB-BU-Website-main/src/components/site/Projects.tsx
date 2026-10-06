import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projectFilters, projects } from "@/data/projects";
import { BrandIcon, SectionHeader } from "./primitives";

export function Projects() {
  const [f, setF] = useState<(typeof projectFilters)[number]>("ALL");
  const list = projects.filter((p) => f === "ALL" || p.category === f);
  return (
    <section id="projects" className="border-t border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          index="07"
          eyebrow="Projects"
          title="Built by the community."
          intro="Real applications, designed and deployed by members on AWS infrastructure."
        />
        <div className="mb-10 flex flex-wrap gap-2">
          {projectFilters.map((x) => (
            <button
              key={x}
              onClick={() => setF(x)}
              className={`border px-4 py-2 font-mono text-xs tracking-[0.14em] transition-colors ${f === x ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"}`}
            >
              {x}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col border border-border bg-surface transition-colors hover:border-primary/50"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border bg-surface-2">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid-bg flex h-full items-center justify-center transition-transform duration-700 group-hover:scale-105">
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                        Project screenshot
                      </span>
                    </div>
                  )}
                  <span className="absolute left-3 top-3 bg-background px-2 py-1 font-mono text-[0.6rem] tracking-[0.16em] text-primary">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-border px-2 py-0.5 font-mono text-[0.65rem]"
                      >
                        {t}
                      </span>
                    ))}
                    {p.aws.map((t) => (
                      <span
                        key={t}
                        className="bg-accent px-2 py-0.5 font-mono text-[0.65rem] text-accent-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4 border-t border-border pt-4 font-mono text-xs uppercase tracking-[0.14em]">
                    <a
                      href={p.github}
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-primary"
                    >
                      <BrandIcon name="github" className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                    <a
                      href={p.demo}
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
