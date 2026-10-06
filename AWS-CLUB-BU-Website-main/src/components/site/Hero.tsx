import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, Cloud, ArrowRight } from "lucide-react";
import { stats } from "@/data/site";
import { CountUp } from "./primitives";

const nodes = [
  { id: "EC2", x: 14, y: 30 },
  { id: "S3", x: 30, y: 70 },
  { id: "Lambda", x: 52, y: 22 },
  { id: "DynamoDB", x: 70, y: 64 },
  { id: "CloudFront", x: 86, y: 28 },
  { id: "API Gateway", x: 60, y: 86 },
];
const edges: [number, number][] = [
  [0, 2],
  [2, 4],
  [2, 3],
  [0, 1],
  [1, 3],
  [3, 5],
  [4, 3],
  [1, 5],
];

function Network() {
  return (
    <div className="absolute inset-0">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-[-4%]">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-60"
        >
          {edges.map(([a, b], i) => {
            const A = nodes[a]!,
              B = nodes[b]!;
            return (
              <line
                key={i}
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                className="flow-line stroke-primary/70"
                strokeWidth="0.15"
                vectorEffect="non-scaling-stroke"
                style={{ strokeWidth: 1, animationDelay: `${i * 0.2}s` }}
              />
            );
          })}
        </svg>
        {nodes.map((n, i) => (
          <div
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <div className="flex items-center gap-2 border border-border-strong bg-surface/80 px-2.5 py-1.5 font-mono text-[0.65rem] tracking-wider text-muted-foreground backdrop-blur rounded">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {n.id}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_75%)]" />
    </div>
  );
}

export function Hero() {
  const words = ["BUILD.", "DEPLOY.", "SCALE."];
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // GSAP entrance sequence for hero
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(heroTitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
      })
        .from(
          ".hero-word",
          {
            y: 35,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          subTextRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-auto absolute inset-0 opacity-70 md:opacity-100">
        <Network />
      </div>

      <div className="pointer-events-none relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="mb-4">
          <span className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Student Cloud Technology Community, Bennett University
          </span>
        </div>

        {/* MAIN HERO HEADING: AWS BENNETT with Wave Shine Effect */}
        <div className="mb-3 overflow-hidden">
          <h1
            ref={heroTitleRef}
            className="aws-bennett-shine font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-none text-foreground"
          >
            AWS BENNETT
          </h1>
        </div>

        {/* Action words */}
        <h2 className="font-display text-[clamp(2.5rem,8.5vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-foreground/90">
          {words.map((w, i) => (
            <span key={w} className="hero-word inline-block mr-3 sm:mr-5">
              <span className={i === 2 ? "text-gradient" : ""}>{w}</span>
            </span>
          ))}
        </h2>

        {/* Rebalanced Hero Info Block (No Join buttons) */}
        <div className="pointer-events-auto mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p
            ref={subTextRef}
            className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            We are Bennett University's student-led AWS cloud community.
            Together, we explore serverless architectures, build real-world
            software, and launch cloud careers.
          </p>

          <div className="flex items-center gap-3">
            <a href="#about" className="btn-ghost text-xs">
              Explore Our Work <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* Community Metrics */}
        <div className="pointer-events-auto mt-16 grid grid-cols-2 border-t border-border md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 ${i > 0 ? "md:border-l md:border-border md:pl-6" : ""} ${
                i % 2 ? "border-l border-border pl-6 md:pl-6" : ""
              }`}
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
