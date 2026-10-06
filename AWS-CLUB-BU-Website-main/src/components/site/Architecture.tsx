import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./primitives";

type Node = { id: string; x: number; y: number; desc: string; tag: string };
const N: Node[] = [
  {
    id: "User",
    x: 8,
    y: 50,
    desc: "Requests originate from browsers and mobile apps.",
    tag: "Client",
  },
  {
    id: "CloudFront",
    x: 26,
    y: 50,
    desc: "Global content delivery with low latency at the edge.",
    tag: "Networking",
  },
  {
    id: "S3",
    x: 26,
    y: 15,
    desc: "Object storage designed for scalability and durability.",
    tag: "Storage",
  },
  {
    id: "API Gateway",
    x: 46,
    y: 50,
    desc: "Create, publish and secure APIs at any scale.",
    tag: "Networking",
  },
  {
    id: "Lambda",
    x: 66,
    y: 50,
    desc: "Run code without managing servers.",
    tag: "Compute",
  },
  {
    id: "EC2",
    x: 66,
    y: 85,
    desc: "Scalable virtual servers in the cloud.",
    tag: "Compute",
  },
  {
    id: "DynamoDB",
    x: 88,
    y: 50,
    desc: "Fast, flexible NoSQL database at any scale.",
    tag: "Database",
  },
];
const E: [string, string][] = [
  ["User", "CloudFront"],
  ["CloudFront", "S3"],
  ["CloudFront", "API Gateway"],
  ["API Gateway", "Lambda"],
  ["API Gateway", "EC2"],
  ["Lambda", "DynamoDB"],
  ["EC2", "DynamoDB"],
];
const get = (id: string) => N.find((n) => n.id === id)!;

export function Architecture() {
  const [hover, setHover] = useState<string>("Lambda");
  const linked = (a: string, b: string) => hover === a || hover === b;
  const active = get(hover);

  return (
    <section className="relative border-t border-border bg-surface py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          index="03"
          eyebrow="Architecture"
          title="See the cloud in action."
          intro="Hover any service to trace how a request travels through a real serverless stack."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="relative hidden aspect-[16/8] border border-border bg-background md:block">
            <div className="grid-bg absolute inset-0" />
            <span className="absolute left-4 top-3 font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground">
              REGION: ap-south-1
            </span>
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              {E.map(([a, b]) => {
                const A = get(a),
                  B = get(b),
                  on = linked(a, b);
                const mid = `M${A.x} ${A.y} L${A.x + (B.x - A.x) / 2} ${A.y} L${A.x + (B.x - A.x) / 2} ${B.y} L${B.x} ${B.y}`;
                return (
                  <path
                    key={a + b}
                    d={
                      A.y === B.y || A.x === B.x
                        ? `M${A.x} ${A.y} L${B.x} ${B.y}`
                        : mid
                    }
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    className={`flow-line transition-all duration-300 ${on ? "stroke-primary" : "stroke-border-strong"}`}
                    style={{ strokeWidth: on ? 2 : 1 }}
                  />
                );
              })}
            </svg>
            {N.map((n) => {
              const on =
                hover === n.id ||
                E.some(
                  ([a, b]) =>
                    (a === hover && b === n.id) || (b === hover && a === n.id),
                );
              return (
                <button
                  key={n.id}
                  onMouseEnter={() => setHover(n.id)}
                  onFocus={() => setHover(n.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <motion.div
                    animate={{ scale: hover === n.id ? 1.08 : 1 }}
                    className={`border px-3 py-2.5 text-left transition-colors duration-300 ${
                      hover === n.id
                        ? "border-primary bg-accent shadow-glow"
                        : on
                          ? "border-primary/50 bg-surface"
                          : "border-border-strong bg-surface"
                    }`}
                  >
                    <div className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {n.tag}
                    </div>
                    <div className="font-display text-sm font-semibold">
                      {n.id}
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* Mobile: vertical stack */}
          <div className="flex flex-col gap-2 md:hidden">
            {[
              "User",
              "CloudFront",
              "API Gateway",
              "Lambda",
              "DynamoDB",
              "S3",
              "EC2",
            ].map((id, i) => (
              <button
                key={id}
                onClick={() => setHover(id)}
                className={`flex items-center justify-between border px-4 py-3 text-left ${hover === id ? "border-primary bg-accent" : "border-border bg-background"}`}
              >
                <span className="font-display font-semibold">{id}</span>
                <span className="font-mono text-[0.6rem] text-muted-foreground">
                  {i < 4 ? "↓" : "◆"} {get(id).tag}
                </span>
              </button>
            ))}
          </div>

          <div className="border border-border bg-background p-6">
            <p className="eyebrow mb-6">Service inspector</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {active.tag}
                </div>
                <h3 className="mt-2 text-3xl font-bold">{active.id}</h3>
                <p className="mt-4 text-foreground/80">“{active.desc}”</p>
                <div className="mt-8 border-t border-border pt-4 font-mono text-[0.7rem] text-muted-foreground">
                  <div className="mb-2 uppercase tracking-[0.2em]">
                    Connections
                  </div>
                  {E.filter(([a, b]) => a === active.id || b === active.id).map(
                    ([a, b]) => (
                      <div key={a + b} className="py-1">
                        <span className="text-primary">→</span>{" "}
                        {a === active.id ? b : a}
                      </div>
                    ),
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
