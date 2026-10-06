import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navLinks } from "@/data/site";
import { Logo } from "./primitives";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navbar({ onJoin }: { onJoin?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -50% 0px" },
    );

    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });

    // GSAP Entrance animation for Navbar
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!prefersReduced && headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      );
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  // GSAP animation for mobile menu open/close
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (open) {
      if (prefersReduced) {
        gsap.set(mobileMenuRef.current, { opacity: 1, display: "flex" });
      } else {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -15, display: "flex" },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
        );
      }
    } else {
      if (prefersReduced) {
        gsap.set(mobileMenuRef.current, { opacity: 0, display: "none" });
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -15,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            if (mobileMenuRef.current)
              mobileMenuRef.current.style.display = "none";
          },
        });
      }
    }
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT: ONLY official AWS + BENNETT UNIVERSITY logo asset */}
        <a
          href="#home"
          aria-label="AWS Bennett University home page"
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          <Logo />
        </a>

        {/* RIGHT: Navigation Links & Theme Toggle */}
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    active === l.id
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        ref={mobileMenuRef}
        style={{ display: "none" }}
        className="fixed inset-x-0 top-16 bottom-0 z-40 flex-col bg-background/95 backdrop-blur-xl px-6 pt-6 pb-12 lg:hidden overflow-y-auto border-t border-border"
      >
        <div className="flex flex-col space-y-1">
          {navLinks.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/60 py-3.5 font-display text-xl font-semibold uppercase text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>{l.label}</span>
              <span className="font-mono text-xs text-primary font-normal">
                0{i + 1}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-border flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span>THEME</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
