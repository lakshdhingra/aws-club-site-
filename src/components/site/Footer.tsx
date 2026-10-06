import { navLinks, site } from "@/data/site";
import { BrandIcon, Logo } from "./primitives";

export function Footer() {
  const links = navLinks.filter((l) => l.id !== "achievements");
  return (
    <footer className="relative overflow-hidden border-t border-border pt-16 pb-8 bg-surface">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 font-display text-2xl font-semibold text-foreground">
              {site.tagline}
            </p>
            <p className="mt-3 max-w-sm text-xs text-muted-foreground leading-relaxed">
              Student-led technology community at Bennett University, Greater
              Noida.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Quick links</p>
            <ul className="space-y-2 text-xs font-mono">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Connect with us</p>
            <div className="flex gap-2">
              {(["instagram", "linkedin", "github"] as const).map((s) => (
                <a
                  key={s}
                  href={site.socials[s]}
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary rounded-sm"
                >
                  <BrandIcon name={s} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 AWS Bennett University. All rights reserved.</span>
          <span>Bennett University, Greater Noida, UP, India</span>
        </div>
      </div>
    </footer>
  );
}
