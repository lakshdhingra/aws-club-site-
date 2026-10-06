import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { SectionHeader } from "./primitives";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="border-t border-border bg-surface py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          index="08"
          eyebrow="Achievements"
          title="Building impact."
        />

        {/* Desktop / Responsive Timeline Grid without internal scrollbars */}
        <div className="relative mt-8">
          {/* Horizontal connecting line on large screens */}
          <div className="absolute left-0 right-0 top-3 hidden h-px bg-border lg:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative flex flex-col"
              >
                {/* Timeline node marker for large screens */}
                <span className="relative hidden h-6 w-6 items-center justify-center lg:flex mb-4">
                  <span className="h-3.5 w-3.5 border border-primary bg-background" />
                  <span className="absolute h-1.5 w-1.5 bg-primary" />
                </span>

                <div className="flex-1 border border-border bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-sm">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-primary font-semibold">{a.year}</span>
                    <span className="uppercase tracking-[0.16em] text-muted-foreground text-[0.65rem]">
                      {a.category}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
