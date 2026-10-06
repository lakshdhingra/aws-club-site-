import { useEffect, useRef } from "react";
import gsap from "gsap";
import { teamMembers, type TeamMember } from "@/data/team";
import { BrandIcon, SectionHeader } from "./primitives";

function MemberCard({ m, index }: { m: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const initials = m.name.startsWith("[")
    ? "BU"
    : m.name
        .split(" ")
        .map((p) => p[0])
        .join("");

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    // Mouse tilt / parallax movement
    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotationY: x * 12,
        rotationX: -y * 12,
        transformPerspective: 800,
        duration: 0.4,
        ease: "power1.out",
      });

      if (imgRef.current) {
        gsap.to(imgRef.current, {
          x: x * 10,
          y: y * 10,
          scale: 1.04,
          duration: 0.4,
          ease: "power1.out",
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative border border-border bg-surface p-4 transition-all duration-300 hover:border-primary/60 hover:shadow-lg rounded-sm overflow-hidden"
    >
      {/* Harajuku / Japanese Minimalist Index Stamp */}
      <div className="absolute top-2 right-3 z-10 pointer-events-none font-mono text-[0.6rem] tracking-[0.2em] text-primary/70 uppercase">
        {String(index + 1).padStart(2, "0")} // BUILDER
      </div>

      <div
        ref={imgRef}
        className="relative aspect-[4/5] overflow-hidden bg-surface-2 border border-border/50 rounded-sm"
      >
        {m.image ? (
          <img
            src={m.image}
            alt={m.name}
            loading="lazy"
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
        ) : (
          <div className="grid-bg flex h-full w-full flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <span className="font-display text-4xl font-extrabold text-muted-foreground/60 tracking-wider">
              {initials}
            </span>
            <span className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-primary/80">
              AWS Builder
            </span>
          </div>
        )}

        {/* Social Overlay */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-background/90 p-3 transition-transform duration-300 group-hover:translate-y-0">
          {(["linkedin", "instagram", "github"] as const).map((s) => (
            <a
              key={s}
              href={m[s]}
              aria-label={`${m.name} ${s}`}
              className="flex h-8 w-8 items-center justify-center border border-border-strong text-muted-foreground transition-colors hover:border-primary hover:text-primary rounded-sm"
            >
              <BrandIcon name={s} />
            </a>
          ))}
        </div>
      </div>

      <div className="px-1 pb-1 pt-4">
        <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary font-semibold">
          {m.role}
        </div>
        <h3 className="mt-1 text-lg font-bold text-foreground">{m.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
          "{m.bio}"
        </p>
      </div>
    </div>
  );
}

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".builder-card", {
        opacity: 0,
        y: 35,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={containerRef}
      className="border-t border-border py-24 lg:py-32 bg-background"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          index="04"
          eyebrow="Meet the builders"
          title="The core team."
          intro="Student developers, architects, and designers leading cloud workshops, projects, and events."
        />

        {/* Japanese Editorial Style Gallery Grid (NO drag functionality) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((m, i) => (
            <div key={i} className="builder-card">
              <MemberCard m={m} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
