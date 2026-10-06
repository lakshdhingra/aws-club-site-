import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { BrandIcon, Reveal, SectionHeader } from "./primitives";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

// Connect your backend/API here.
async function sendMessage(_d: z.infer<typeof schema>) {
  await new Promise((r) => setTimeout(r, 800));
}

export function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) {
      const o: Record<string, string> = {};
      r.error.issues.forEach((i) => (o[String(i.path[0])] ??= i.message));
      setErr(o);
      return;
    }
    setErr({});
    setStatus("loading");
    try {
      await sendMessage(r.data);
      setStatus("sent");
      setF({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const socials = [
    {
      k: "instagram" as const,
      label: "Instagram",
      href: site.socials.instagram,
      v: "[INSTAGRAM URL]",
    },
    {
      k: "linkedin" as const,
      label: "LinkedIn",
      href: site.socials.linkedin,
      v: "[LINKEDIN URL]",
    },
    {
      k: "github" as const,
      label: "GitHub",
      href: site.socials.github,
      v: "[GITHUB URL]",
    },
  ];

  return (
    <section
      id="contact"
      className="border-t border-border bg-surface py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader index="09" eyebrow="Contact" title="Let's connect." />
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-px bg-border">
              <div className="flex gap-4 bg-surface p-6">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  {site.address.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
              </div>
              <a
                href={site.socials.email}
                className="flex items-center gap-4 bg-surface p-6 transition-colors hover:bg-background"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-mono text-sm">{site.email}</span>
              </a>
              {socials.map((s) => (
                <a
                  key={s.k}
                  href={s.href}
                  className="group flex items-center justify-between bg-surface p-6 transition-colors hover:bg-background"
                >
                  <span className="flex items-center gap-4">
                    <BrandIcon name={s.k} className="h-5 w-5 text-primary" />
                    <span className="font-display text-lg font-semibold uppercase">
                      {s.label}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
                    {s.v}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              noValidate
              className="space-y-5 border border-border bg-background p-6 sm:p-8"
            >
              {(["name", "email"] as const).map((k) => (
                <label key={k} className="block">
                  <span className="mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {k}
                  </span>
                  <input
                    type={k === "email" ? "email" : "text"}
                    className="field"
                    value={f[k]}
                    onChange={(e) => setF({ ...f, [k]: e.target.value })}
                  />
                  {err[k] && (
                    <p className="mt-1 text-xs text-destructive">{err[k]}</p>
                  )}
                </label>
              ))}
              <label className="block">
                <span className="mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Message
                </span>
                <textarea
                  rows={5}
                  className="field resize-none"
                  value={f.message}
                  onChange={(e) => setF({ ...f, message: e.target.value })}
                />
                {err["message"] && (
                  <p className="mt-1 text-xs text-destructive">
                    {err["message"]}
                  </p>
                )}
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
              {status === "sent" && (
                <p className="text-sm text-success">
                  Message sent. We will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Couldn't send. Please try again.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
