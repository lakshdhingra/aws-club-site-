import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BookOpen, Code2, Rocket, TrendingUp, UserCheck } from "lucide-react";
import { Reveal } from "./primitives";

const steps = [
  {
    label: "Join Us",
    icon: UserCheck,
    desc: "Step into a community of curious builders and cloud enthusiasts.",
  },
  {
    label: "Learn",
    icon: BookOpen,
    desc: "Master AWS fundamentals, DevOps, and cloud architecture hands-on.",
  },
  {
    label: "Build",
    icon: Code2,
    desc: "Collaborate on real campus projects using modern tech stacks.",
  },
  {
    label: "Deploy",
    icon: Rocket,
    desc: "Launch applications to production on AWS infrastructure.",
  },
  {
    label: "Scale",
    icon: TrendingUp,
    desc: "Earn certifications and stand out to top engineering teams.",
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".pipeline-step", {
        opacity: 0,
        x: -20,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative border-t border-border py-24 lg:py-32 bg-background"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8 lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="text-muted-foreground">01 /</span> About us
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-4xl font-bold uppercase leading-[0.95] sm:text-6xl text-foreground">
              More than <br />
              <span className="text-gradient">a student club.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-base sm:text-lg text-foreground/90 leading-relaxed">
              We are a team of student builders at Bennett University passionate
              about cloud computing and modern software engineering. We turn raw
              ideas into live, scalable cloud applications.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Whether you are writing your first line of code or deploying
              complex microservices on AWS, our community provides the
              mentorship, hackathons, and resources to help you succeed.
            </p>
          </Reveal>
        </div>

        {/* Student Learning Pipeline Visual */}
        <div className="relative border border-border bg-surface p-6 sm:p-8 rounded-sm shadow-sm">
          <div className="mb-6 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground border-b border-border pb-3">
            <span>PIPELINE: STUDENT JOURNEY</span>
            <span className="text-success flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-ping" />
              ACTIVE
            </span>
          </div>

          <div className="space-y-4">
            {steps.map((s, i) => (
              <div
                key={s.label}
                className="pipeline-step flex items-start gap-4 p-3 rounded border border-transparent hover:border-border hover:bg-background transition-colors"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border-strong bg-background text-primary">
                  <s.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary font-semibold">
                      0{i + 1}
                    </span>
                    <span className="font-display text-lg font-semibold uppercase text-foreground">
                      {s.label}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
