import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Camera, MapPin, Users } from "lucide-react";
import { pastEvents, upcomingEvents } from "@/data/events";
import { SectionHeader } from "./primitives";

export function Events() {
  const [tab, setTab] = useState<"up" | "past">("up");
  return (
    <section
      id="events"
      className="border-t border-border bg-surface py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader index="06" eyebrow="Events" title="On the calendar." />
        <div className="mb-10 inline-flex border border-border">
          {(
            [
              ["up", "Upcoming"],
              ["past", "Past Events"],
            ] as const
          ).map(([k, l]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className="relative px-5 py-3 font-mono text-xs uppercase tracking-[0.16em]"
            >
              {tab === k && (
                <motion.span
                  layoutId="tab"
                  className="absolute inset-0 bg-primary"
                />
              )}
              <span
                className={`relative ${tab === k ? "text-primary-foreground" : "text-muted-foreground"}`}
              >
                {l}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "up" ? (
            <motion.div
              key="up"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="divide-y divide-border border-y border-border"
            >
              {upcomingEvents.map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="group grid items-center gap-4 py-6 transition-colors hover:bg-background md:grid-cols-[140px_1fr_200px_auto] md:px-4"
                >
                  <div className="font-mono text-sm text-primary">{e.date}</div>
                  <div>
                    <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {e.type}
                    </div>
                    <h3 className="mt-1 text-2xl font-semibold uppercase transition-transform duration-300 group-hover:translate-x-2">
                      {e.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {e.venue}
                  </div>
                  <a href={e.registerUrl} className="btn-ghost !py-2.5">
                    Register <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="past"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {pastEvents.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative aspect-[4/5] overflow-hidden border border-border bg-background"
                >
                  {e.image ? (
                    <img
                      src={e.image}
                      alt={e.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="grid-bg absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                        Event photo placeholder
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="font-mono text-xs text-primary">
                      {e.date}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
                    <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="mt-3 text-sm text-muted-foreground">
                          {e.description}
                        </p>
                        <div className="mt-3 flex gap-4 font-mono text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Users className="h-3.5 w-3.5" />
                            {e.participants}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Camera className="h-3.5 w-3.5" />
                            {e.photos} photos
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
