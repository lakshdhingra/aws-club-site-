import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const runExitAnimation = () => {
      if (prefersReducedMotion) {
        setLoading(false);
        return;
      }

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => setLoading(false),
        });

        // 1. Fade out preloader content
        tl.to(logoRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.35,
          ease: "power2.inOut",
        });

        // 2. Staircase panel reveal using GSAP stagger
        const panels = panelsRef.current?.children;
        if (panels && panels.length > 0) {
          tl.to(
            panels,
            {
              yPercent: -100,
              duration: 0.65,
              stagger: 0.07,
              ease: "power3.inOut",
            },
            "-=0.1",
          );
        }
      }, containerRef);

      return () => ctx.revert();
    };

    let timer: NodeJS.Timeout;
    if (document.readyState === "complete") {
      timer = setTimeout(runExitAnimation, 500);
    } else {
      const handleLoad = () => {
        timer = setTimeout(runExitAnimation, 400);
      };
      window.addEventListener("load", handleLoad);
      const fallbackTimer = setTimeout(runExitAnimation, 1000);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
        clearTimeout(fallbackTimer);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-auto overflow-hidden"
    >
      {/* Preloader Branding Content */}
      <div
        ref={logoRef}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <div className="relative mb-5 flex items-center justify-center">
          <img
            src="/aws-bennett-logo.jpg"
            alt="AWS Bennett University Logo"
            className="h-16 sm:h-20 w-auto object-contain shadow-glow rounded-md"
          />
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-foreground">
          AWS BENNETT
        </h2>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-primary">
          BUILD · DEPLOY · SCALE
        </p>

        {/* Loading Bar */}
        <div className="mt-8 h-1 w-44 overflow-hidden rounded-full bg-surface-2 border border-border">
          <div className="h-full w-full bg-primary animate-pulse" />
        </div>
      </div>

      {/* GSAP Staircase Transition Panels */}
      <div
        ref={panelsRef}
        className="absolute inset-0 pointer-events-none flex z-20"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-full flex-1 bg-surface-2 border-r border-border/20 last:border-r-0"
          />
        ))}
      </div>
    </div>
  );
}
