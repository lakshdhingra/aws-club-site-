import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { featuredEvent as ev } from "@/data/events";
import { Reveal } from "./primitives";

function useCountdown(iso: string) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = now === null ? 0 : Math.max(0, new Date(iso).getTime() - now);
  return [
    ["Days", Math.floor(diff / 864e5)],
    ["Hours", Math.floor(diff / 36e5) % 24],
    ["Min", Math.floor(diff / 6e4) % 60],
    ["Sec", Math.floor(diff / 1e3) % 60],
  ] as const;
}

export function FeaturedEvent() {
  const parts = useCountdown(ev.dateISO);
  return (
    <section className="relative overflow-hidden border-t border-border py-28 lg:py-36">
      <div className="absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="text-muted-foreground">05 /</span> Next on the
            cloud
          </p>
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <Reveal delay={0.05}>
              <h2 className="text-5xl font-bold uppercase leading-[0.9] sm:text-7xl lg:text-8xl">
                {ev.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 font-display text-2xl text-primary">
                {ev.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-lg text-muted-foreground">
                {ev.description}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {ev.dateLabel}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  {ev.timeLabel}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {ev.venue}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <a href={ev.registerUrl} className="btn-primary mt-10">
                Register Now
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-4 border border-border bg-surface">
              {parts.map(([l, v], i) => (
                <div
                  key={l}
                  className={`p-4 text-center sm:p-6 ${i ? "border-l border-border" : ""}`}
                >
                  <div className="font-display text-3xl font-bold tabular-nums sm:text-5xl">
                    {String(v).padStart(2, "0")}
                  </div>
                  <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
