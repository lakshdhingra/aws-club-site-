import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { z } from "zod";
import {
  CheckCircle2,
  Loader2,
  X,
  AlertCircle,
  ChevronDown,
} from "lucide-react";

const branches = [
  "Computer Science & Engineering (CSE)",
  "CSE - Artificial Intelligence",
  "CSE - Data Science",
  "Electronics & Communication (ECE)",
  "Biotechnology",
  "Mechanical Engineering",
  "Civil Engineering",
  "BCA / MCA",
  "Other Branch",
];

const schema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "University email is required")
    .email("Enter a valid email address")
    .max(255)
    .refine(
      (v) => /@bennett\.edu\.in$/i.test(v),
      "Please enter your official Bennett University email (@bennett.edu.in)",
    ),
  enrollment: z
    .string()
    .trim()
    .min(1, "Enrollment number is required")
    .min(4, "Enter a valid enrollment number")
    .max(30),
  year: z.string().min(1, "Please select your year of study"),
  branch: z.string().min(1, "Please select your branch"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid 10-digit phone number"),
});

type Form = z.infer<typeof schema>;

const empty: Form = {
  fullName: "",
  email: "",
  enrollment: "",
  year: "",
  branch: "",
  phone: "",
};

function getStoredRegistrations(): Array<{
  email: string;
  enrollment: string;
}> {
  try {
    const raw = localStorage.getItem("aws_bennett_registrations");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveRegistration(data: Form): boolean {
  try {
    const list = getStoredRegistrations();
    const isDup = list.some(
      (r) =>
        r.email.toLowerCase() === data.email.toLowerCase() ||
        r.enrollment.toLowerCase() === data.enrollment.toLowerCase(),
    );
    if (isDup) return false;
    list.push({
      email: data.email.toLowerCase(),
      enrollment: data.enrollment.toLowerCase(),
    });
    localStorage.setItem("aws_bennett_registrations", JSON.stringify(list));
    return true;
  } catch {
    return true;
  }
}

async function submitRegistrationApi(
  data: Form,
): Promise<{ success: boolean; duplicate?: boolean; message?: string }> {
  const env = import.meta.env as Record<string, string | undefined>;
  const apiUrl = env["VITE_REGISTRATION_API_URL"];

  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return {
          success: false,
          message:
            errorData.message || "Failed to submit registration to server.",
        };
      }
      return { success: true };
    } catch {
      return {
        success: false,
        message: "Network error connecting to registration backend.",
      };
    }
  }

  // Local storage simulation with duplicate validation
  await new Promise((r) => setTimeout(r, 700));
  const isUnique = saveRegistration(data);
  if (!isUnique) {
    return {
      success: false,
      duplicate: true,
      message: "This email or enrollment number is already registered.",
    };
  }
  return { success: true };
}

export function JoinModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Form, boolean>>>(
    {},
  );
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", k);
    };
  }, [open, onClose]);

  const updateField = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setTouched((t) => ({ ...t, [k]: true }));
    if (errors[k]) {
      setErrors((errs) => {
        const copy = { ...errs };
        delete copy[k];
        return copy;
      });
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: typeof errors = {};
      const allTouched: typeof touched = {};
      r.error.issues.forEach((i) => {
        const key = i.path[0] as keyof Form;
        errs[key] ??= i.message;
        allTouched[key] = true;
      });
      setErrors(errs);
      setTouched(allTouched);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await submitRegistrationApi(r.data);
      if (res.success) {
        setStatus("success");
        setForm(empty);
        setTouched({});
      } else {
        setStatus("error");
        setErrorMessage(res.message || "An error occurred during submission.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please check your connection and try again.",
      );
    }
  };

  const close = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setErrors({});
      setTouched({});
      setErrorMessage("");
    }, 300);
  };

  const Err = ({ k }: { k: keyof Form }) =>
    errors[k] && touched[k] ? (
      <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
        <AlertCircle className="h-3 w-3 shrink-0" />
        <span>{errors[k]}</span>
      </p>
    ) : null;

  const Label = ({ children }: { children: React.ReactNode }) => (
    <span className="mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
      {children} <span className="text-primary">*</span>
    </span>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
            className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto border border-border-strong bg-popover shadow-2xl rounded-sm"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
            <button
              onClick={close}
              aria-label="Close registration modal"
              className="absolute right-4 top-4 z-10 p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <X className="h-5 w-5" />
            </button>

            {status === "success" ? (
              <div className="p-8 text-center sm:p-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircle2
                    className="mx-auto h-14 w-14 text-success"
                    strokeWidth={1.5}
                  />
                  <h2 className="mt-5 text-2xl sm:text-3xl font-bold uppercase text-foreground">
                    REGISTRATION SUCCESSFUL
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    Thank you for registering. We'll reach out to your
                    university email with event schedules and updates.
                  </p>
                  <button
                    onClick={close}
                    className="btn-primary mt-8 min-w-[130px]"
                  >
                    Done
                  </button>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="p-6 sm:p-10">
                <p className="eyebrow mb-1">Student Community</p>
                <h2
                  id="registration-title"
                  className="mb-2 text-2xl font-bold uppercase sm:text-3xl text-foreground"
                >
                  REGISTRATION
                </h2>
                <p className="mb-6 text-xs text-muted-foreground font-mono">
                  Please fill out your university details below.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="sm:col-span-2">
                    <Label>Full name</Label>
                    <input
                      className="field"
                      placeholder="e.g. Rahul Sharma"
                      disabled={status === "loading"}
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                    />
                    <Err k="fullName" />
                  </label>

                  <label className="sm:col-span-2">
                    <Label>University email</Label>
                    <input
                      type="email"
                      className="field"
                      placeholder="name@bennett.edu.in"
                      disabled={status === "loading"}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                    <Err k="email" />
                  </label>

                  <label>
                    <Label>Enrollment number</Label>
                    <input
                      className="field"
                      placeholder="e.g. E22CSE001"
                      disabled={status === "loading"}
                      value={form.enrollment}
                      onChange={(e) =>
                        updateField("enrollment", e.target.value)
                      }
                    />
                    <Err k="enrollment" />
                  </label>

                  <label>
                    <Label>Year of study</Label>
                    <div className="relative">
                      <select
                        className="field appearance-none pr-8 cursor-pointer"
                        disabled={status === "loading"}
                        value={form.year}
                        onChange={(e) => updateField("year", e.target.value)}
                      >
                        <option value="">Select year…</option>
                        {[
                          "1st Year",
                          "2nd Year",
                          "3rd Year",
                          "4th Year",
                          "5th Year",
                        ].map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                    <Err k="year" />
                  </label>

                  <label className="sm:col-span-2">
                    <Label>Branch</Label>
                    <div className="relative">
                      <select
                        className="field appearance-none pr-8 cursor-pointer"
                        disabled={status === "loading"}
                        value={form.branch}
                        onChange={(e) => updateField("branch", e.target.value)}
                      >
                        <option value="">Select your branch…</option>
                        {branches.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                    <Err k="branch" />
                  </label>

                  <label className="sm:col-span-2">
                    <Label>Phone number</Label>
                    <input
                      type="tel"
                      className="field"
                      placeholder="e.g. 9876543210"
                      disabled={status === "loading"}
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                    <Err k="phone" />
                  </label>
                </div>

                {status === "error" && (
                  <div className="mt-6 flex items-start gap-3 border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive rounded-sm">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Submission failed</p>
                      <p className="mt-0.5 text-xs opacity-90">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary mt-8 w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Submitting Registration…
                    </>
                  ) : (
                    "SUBMIT REGISTRATION"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
