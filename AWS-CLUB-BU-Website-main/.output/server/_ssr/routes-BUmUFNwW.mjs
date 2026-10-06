import { n as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, n as animate, r as motion, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as gsapWithCSS } from "../_libs/gsap.mjs";
import { C as Calendar, D as ArrowRight, E as ArrowUpRight, S as Camera, T as Award, _ as Cloud, a as TrendingUp, b as CircleAlert, c as Moon, d as MapPin, f as Mail, g as CodeXml, h as ExternalLink, i as Trophy, l as Mic, m as FolderGit2, n as Users, o as Sun, p as LoaderCircle, r as UserCheck, s as Rocket, t as X, u as Menu, v as Clock, w as BookOpen, x as ChevronDown, y as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BUmUFNwW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var site = {
	name: "AWS Bennett University",
	tagline: "Learn. Build. Deploy. Scale.",
	email: "[CLUB EMAIL]",
	address: [
		"AWS Bennett University",
		"Bennett University",
		"Greater Noida, Uttar Pradesh, India"
	],
	socials: {
		instagram: "#replace-instagram-url",
		linkedin: "#replace-linkedin-url",
		github: "#replace-github-url",
		email: "mailto:replace@example.com"
	}
};
var stats = [
	{
		value: 100,
		suffix: "+",
		label: "Members"
	},
	{
		value: 20,
		suffix: "+",
		label: "Events"
	},
	{
		value: 15,
		suffix: "+",
		label: "Projects"
	},
	{
		value: 500,
		suffix: "+",
		label: "Students reached"
	}
];
var navLinks = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "team",
		label: "Team"
	},
	{
		id: "events",
		label: "Events"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "achievements",
		label: "Achievements"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function SectionHeader({ index, eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-14 grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "eyebrow mb-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground",
					children: [index, " /"]
				}),
				" ",
				eyebrow
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
			initial: {
				opacity: 0,
				y: 30,
				filter: "blur(6px)"
			},
			whileInView: {
				opacity: 1,
				y: 0,
				filter: "blur(0px)"
			},
			viewport: { once: true },
			transition: {
				duration: .8,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "text-4xl font-bold uppercase leading-[0.95] sm:text-5xl lg:text-6xl text-foreground",
			children: title
		})] }), intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .15,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-lg text-muted-foreground md:ml-auto",
				children: intro
			})
		})]
	});
}
function CountUp({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	const [v, setV] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const c = animate(0, to, {
			duration: 1.8,
			ease: "easeOut",
			onUpdate: (n) => setV(Math.round(n))
		});
		return () => c.stop();
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [v, suffix]
	});
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/aws-bennett-logo.jpg",
			alt: "AWS Bennett University",
			className: "h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
		})
	});
}
var paths = {
	linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z",
	github: "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z",
	instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
};
function BrandIcon({ name, className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: paths[name] })
	});
}
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const stored = localStorage.getItem("theme");
		if (stored === "light" || stored === "dark") {
			setTheme(stored);
			applyTheme(stored);
		} else {
			const initial = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
			setTheme(initial);
			applyTheme(initial);
		}
	}, []);
	const applyTheme = (t) => {
		const root = document.documentElement;
		if (t === "light") {
			root.classList.add("light");
			root.classList.remove("dark");
		} else {
			root.classList.add("dark");
			root.classList.remove("light");
		}
	};
	const toggleTheme = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		localStorage.setItem("theme", next);
		applyTheme(next);
	};
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-9 w-9 rounded-md border border-border bg-surface opacity-50",
		"aria-hidden": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggleTheme,
		"aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
		title: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
		className: "relative flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4 transition-transform duration-300 hover:rotate-45" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4 transition-transform duration-300 hover:-rotate-12" })
	});
}
function Navbar({ onJoin }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	const [open, setOpen] = (0, import_react.useState)(false);
	const headerRef = (0, import_react.useRef)(null);
	const mobileMenuRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -50% 0px" });
		navLinks.forEach((l) => {
			const el = document.getElementById(l.id);
			if (el) io.observe(el);
		});
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && headerRef.current) gsapWithCSS.fromTo(headerRef.current, {
			y: -60,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .6,
			ease: "power2.out"
		});
		return () => {
			window.removeEventListener("scroll", onScroll);
			io.disconnect();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!mobileMenuRef.current) return;
		const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (open) if (prefersReduced) gsapWithCSS.set(mobileMenuRef.current, {
			opacity: 1,
			display: "flex"
		});
		else gsapWithCSS.fromTo(mobileMenuRef.current, {
			opacity: 0,
			y: -15,
			display: "flex"
		}, {
			opacity: 1,
			y: 0,
			duration: .35,
			ease: "power2.out"
		});
		else if (prefersReduced) gsapWithCSS.set(mobileMenuRef.current, {
			opacity: 0,
			display: "none"
		});
		else gsapWithCSS.to(mobileMenuRef.current, {
			opacity: 0,
			y: -15,
			duration: .25,
			ease: "power2.in",
			onComplete: () => {
				if (mobileMenuRef.current) mobileMenuRef.current.style.display = "none";
			}
		});
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		ref: headerRef,
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-md shadow-sm" : "border-b border-transparent bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#home",
				"aria-label": "AWS Bennett University home page",
				className: "flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `#${l.id}`,
							className: `relative px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${active === l.id ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
							children: [l.label, active === l.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary rounded-full" })]
						}) }, l.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open navigation menu",
						"aria-expanded": open,
						onClick: () => setOpen((o) => !o),
						className: "flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: mobileMenuRef,
			style: { display: "none" },
			className: "fixed inset-x-0 top-16 bottom-0 z-40 flex-col bg-background/95 backdrop-blur-xl px-6 pt-6 pb-12 lg:hidden overflow-y-auto border-t border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col space-y-1",
				children: navLinks.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${l.id}`,
					onClick: () => setOpen(false),
					className: "flex items-center justify-between border-b border-border/60 py-3.5 font-display text-xl font-semibold uppercase text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs text-primary font-normal",
						children: ["0", i + 1]
					})]
				}, l.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 pt-4 border-t border-border flex flex-col gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-xs font-mono text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THEME" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
				})
			})]
		})]
	});
}
var nodes = [
	{
		id: "EC2",
		x: 14,
		y: 30
	},
	{
		id: "S3",
		x: 30,
		y: 70
	},
	{
		id: "Lambda",
		x: 52,
		y: 22
	},
	{
		id: "DynamoDB",
		x: 70,
		y: 64
	},
	{
		id: "CloudFront",
		x: 86,
		y: 28
	},
	{
		id: "API Gateway",
		x: 60,
		y: 86
	}
];
var edges = [
	[0, 2],
	[2, 4],
	[2, 3],
	[0, 1],
	[1, 3],
	[3, 5],
	[4, 3],
	[1, 5]
];
function Network() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-[-4%]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 100 100",
					preserveAspectRatio: "none",
					className: "absolute inset-0 h-full w-full opacity-60",
					children: edges.map(([a, b], i) => {
						const A = nodes[a], B = nodes[b];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: A.x,
							y1: A.y,
							x2: B.x,
							y2: B.y,
							className: "flow-line stroke-primary/70",
							strokeWidth: "0.15",
							vectorEffect: "non-scaling-stroke",
							style: {
								strokeWidth: 1,
								animationDelay: `${i * .2}s`
							}
						}, i);
					})
				}), nodes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -translate-x-1/2 -translate-y-1/2",
					style: {
						left: `${n.x}%`,
						top: `${n.y}%`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border border-border-strong bg-surface/80 px-2.5 py-1.5 font-mono text-[0.65rem] tracking-wider text-muted-foreground backdrop-blur rounded",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-1.5 w-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative h-1.5 w-1.5 rounded-full bg-primary" })]
						}), n.id]
					})
				}, n.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_75%)]" })
		]
	});
}
function Hero() {
	const words = [
		"BUILD.",
		"DEPLOY.",
		"SCALE."
	];
	const containerRef = (0, import_react.useRef)(null);
	const heroTitleRef = (0, import_react.useRef)(null);
	const subTextRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).from(heroTitleRef.current, {
				y: 40,
				opacity: 0,
				duration: .9,
				delay: .2
			}).from(".hero-word", {
				y: 35,
				opacity: 0,
				stagger: .12,
				duration: .8
			}, "-=0.5").from(subTextRef.current, {
				y: 20,
				opacity: 0,
				duration: .6
			}, "-=0.4");
		}, containerRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref: containerRef,
		className: "relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-auto absolute inset-0 opacity-70 md:opacity-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none relative mx-auto w-full max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), "Student Cloud Technology Community, Bennett University"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						ref: heroTitleRef,
						className: "aws-bennett-shine font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-none text-foreground",
						children: "AWS BENNETT"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-[clamp(2.5rem,8.5vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-foreground/90",
					children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hero-word inline-block mr-3 sm:mr-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: i === 2 ? "text-gradient" : "",
							children: w
						})
					}, w))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						ref: subTextRef,
						className: "max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed",
						children: "We are Bennett University's student-led AWS cloud community. Together, we explore serverless architectures, build real-world software, and launch cloud careers."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#about",
							className: "btn-ghost text-xs",
							children: ["Explore Our Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 ml-1" })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-auto mt-16 grid grid-cols-2 border-t border-border md:grid-cols-4",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `py-6 ${i > 0 ? "md:border-l md:border-border md:pl-6" : ""} ${i % 2 ? "border-l border-border pl-6 md:pl-6" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
								to: s.value,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				})
			]
		})]
	});
}
var steps = [
	{
		label: "Join Us",
		icon: UserCheck,
		desc: "Step into a community of curious builders and cloud enthusiasts."
	},
	{
		label: "Learn",
		icon: BookOpen,
		desc: "Master AWS fundamentals, DevOps, and cloud architecture hands-on."
	},
	{
		label: "Build",
		icon: CodeXml,
		desc: "Collaborate on real campus projects using modern tech stacks."
	},
	{
		label: "Deploy",
		icon: Rocket,
		desc: "Launch applications to production on AWS infrastructure."
	},
	{
		label: "Scale",
		icon: TrendingUp,
		desc: "Earn certifications and stand out to top engineering teams."
	}
];
function About() {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".pipeline-step", {
				opacity: 0,
				x: -20,
				stagger: .12,
				duration: .6,
				ease: "power2.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%"
				}
			});
		}, containerRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		ref: containerRef,
		className: "relative border-t border-border py-24 lg:py-32 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "01 /"
					}), " About us"]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl font-bold uppercase leading-[0.95] sm:text-6xl text-foreground",
						children: [
							"More than ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "a student club."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base sm:text-lg text-foreground/90 leading-relaxed",
						children: "We are a team of student builders at Bennett University passionate about cloud computing and modern software engineering. We turn raw ideas into live, scalable cloud applications."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "Whether you are writing your first line of code or deploying complex microservices on AWS, our community provides the mentorship, hackathons, and resources to help you succeed."
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative border border-border bg-surface p-6 sm:p-8 rounded-sm shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground border-b border-border pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PIPELINE: STUDENT JOURNEY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-success flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-success animate-ping" }), "ACTIVE"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pipeline-step flex items-start gap-4 p-3 rounded border border-transparent hover:border-border hover:bg-background transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border-strong bg-background text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-primary font-semibold",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-semibold uppercase text-foreground",
								children: s.label
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground leading-normal",
							children: s.desc
						})] })]
					}, s.label))
				})]
			})]
		})
	});
}
var items = [
	{
		title: "Cloud Workshops",
		desc: "Hands-on sessions covering AWS and cloud technologies.",
		icon: Cloud
	},
	{
		title: "Hackathons",
		desc: "Build real-world solutions with technology and teamwork.",
		icon: Trophy
	},
	{
		title: "Projects",
		desc: "Develop and deploy practical applications using cloud infrastructure.",
		icon: FolderGit2
	},
	{
		title: "Certifications",
		desc: "Help students explore AWS certifications and cloud careers.",
		icon: Award
	},
	{
		title: "Technical Sessions",
		desc: "Learn from students, professionals and industry experts.",
		icon: Mic
	},
	{
		title: "Community",
		desc: "Meet builders, developers and cloud enthusiasts.",
		icon: Users
	}
];
function WhatWeDo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border py-28 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "02",
				eyebrow: "What we do",
				title: "Six ways to ship.",
				intro: "From your first EC2 instance to your first production deploy, every track is hands-on."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						delay: i * .07,
						duration: .6
					},
					whileHover: { y: -4 },
					className: "group relative overflow-hidden bg-background p-8 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-bg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-14 flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
										className: "h-7 w-7 text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110",
										strokeWidth: 1.5
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-muted-foreground",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold uppercase",
									children: it.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground transition-colors duration-300 group-hover:text-foreground",
									children: it.desc
								})
							]
						})
					]
				}, it.title))
			})]
		})
	});
}
var N = [
	{
		id: "User",
		x: 8,
		y: 50,
		desc: "Requests originate from browsers and mobile apps.",
		tag: "Client"
	},
	{
		id: "CloudFront",
		x: 26,
		y: 50,
		desc: "Global content delivery with low latency at the edge.",
		tag: "Networking"
	},
	{
		id: "S3",
		x: 26,
		y: 15,
		desc: "Object storage designed for scalability and durability.",
		tag: "Storage"
	},
	{
		id: "API Gateway",
		x: 46,
		y: 50,
		desc: "Create, publish and secure APIs at any scale.",
		tag: "Networking"
	},
	{
		id: "Lambda",
		x: 66,
		y: 50,
		desc: "Run code without managing servers.",
		tag: "Compute"
	},
	{
		id: "EC2",
		x: 66,
		y: 85,
		desc: "Scalable virtual servers in the cloud.",
		tag: "Compute"
	},
	{
		id: "DynamoDB",
		x: 88,
		y: 50,
		desc: "Fast, flexible NoSQL database at any scale.",
		tag: "Database"
	}
];
var E = [
	["User", "CloudFront"],
	["CloudFront", "S3"],
	["CloudFront", "API Gateway"],
	["API Gateway", "Lambda"],
	["API Gateway", "EC2"],
	["Lambda", "DynamoDB"],
	["EC2", "DynamoDB"]
];
var get = (id) => N.find((n) => n.id === id);
function Architecture() {
	const [hover, setHover] = (0, import_react.useState)("Lambda");
	const linked = (a, b) => hover === a || hover === b;
	const active = get(hover);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t border-border bg-surface py-28 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "03",
				eyebrow: "Architecture",
				title: "See the cloud in action.",
				intro: "Hover any service to trace how a request travels through a real serverless stack."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_300px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative hidden aspect-[16/8] border border-border bg-background md:block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-bg absolute inset-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-4 top-3 font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground",
								children: "REGION: ap-south-1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 100 100",
								preserveAspectRatio: "none",
								className: "absolute inset-0 h-full w-full",
								children: E.map(([a, b]) => {
									const A = get(a), B = get(b), on = linked(a, b);
									const mid = `M${A.x} ${A.y} L${A.x + (B.x - A.x) / 2} ${A.y} L${A.x + (B.x - A.x) / 2} ${B.y} L${B.x} ${B.y}`;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: A.y === B.y || A.x === B.x ? `M${A.x} ${A.y} L${B.x} ${B.y}` : mid,
										fill: "none",
										vectorEffect: "non-scaling-stroke",
										className: `flow-line transition-all duration-300 ${on ? "stroke-primary" : "stroke-border-strong"}`,
										style: { strokeWidth: on ? 2 : 1 }
									}, a + b);
								})
							}),
							N.map((n) => {
								const on = hover === n.id || E.some(([a, b]) => a === hover && b === n.id || b === hover && a === n.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onMouseEnter: () => setHover(n.id),
									onFocus: () => setHover(n.id),
									className: "absolute -translate-x-1/2 -translate-y-1/2",
									style: {
										left: `${n.x}%`,
										top: `${n.y}%`
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										animate: { scale: hover === n.id ? 1.08 : 1 },
										className: `border px-3 py-2.5 text-left transition-colors duration-300 ${hover === n.id ? "border-primary bg-accent shadow-glow" : on ? "border-primary/50 bg-surface" : "border-border-strong bg-surface"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground",
											children: n.tag
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-sm font-semibold",
											children: n.id
										})]
									})
								}, n.id);
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-2 md:hidden",
						children: [
							"User",
							"CloudFront",
							"API Gateway",
							"Lambda",
							"DynamoDB",
							"S3",
							"EC2"
						].map((id, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setHover(id),
							className: `flex items-center justify-between border px-4 py-3 text-left ${hover === id ? "border-primary bg-accent" : "border-border bg-background"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-semibold",
								children: id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[0.6rem] text-muted-foreground",
								children: [
									i < 4 ? "↓" : "◆",
									" ",
									get(id).tag
								]
							})]
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border bg-background p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-6",
							children: "Service inspector"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -10
								},
								transition: { duration: .25 },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: active.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-3xl font-bold",
										children: active.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-foreground/80",
										children: [
											"“",
											active.desc,
											"”"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 border-t border-border pt-4 font-mono text-[0.7rem] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-2 uppercase tracking-[0.2em]",
											children: "Connections"
										}), E.filter(([a, b]) => a === active.id || b === active.id).map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "py-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary",
													children: "→"
												}),
												" ",
												a === active.id ? b : a
											]
										}, a + b))]
									})
								]
							}, active.id)
						})]
					})
				]
			})]
		})
	});
}
var teamMembers = [
	{
		name: "Amit Kumar",
		role: "Chairperson",
		bio: "Building the next generation of cloud developers."
	},
	{
		name: "[Member Name]",
		role: "Vice Chairperson",
		bio: "Driving the club's vision and partnerships."
	},
	{
		name: "[Member Name]",
		role: "Technical Lead",
		bio: "Architecting hands-on cloud workshops."
	},
	{
		name: "[Member Name]",
		role: "Cloud Lead",
		bio: "Turning AWS services into real projects."
	},
	{
		name: "[Member Name]",
		role: "DevOps Lead",
		bio: "Pipelines, containers and automation."
	},
	{
		name: "[Member Name]",
		role: "AI/ML Lead",
		bio: "Shipping models on managed infrastructure."
	},
	{
		name: "[Member Name]",
		role: "Web Lead",
		bio: "Frontends that deploy in minutes."
	},
	{
		name: "[Member Name]",
		role: "Events Lead",
		bio: "Workshops, hack nights and bootcamps."
	},
	{
		name: "[Member Name]",
		role: "Design Lead",
		bio: "Visual identity for the community."
	},
	{
		name: "[Member Name]",
		role: "Content Lead",
		bio: "Stories, docs and social presence."
	},
	{
		name: "[Member Name]",
		role: "Outreach Lead",
		bio: "Connecting students with industry."
	},
	{
		name: "[Member Name]",
		role: "Operations Lead",
		bio: "Keeping everything running smoothly."
	}
].map((m) => ({
	...m,
	linkedin: "#",
	instagram: "#",
	github: "#"
}));
function MemberCard({ m, index }) {
	const cardRef = (0, import_react.useRef)(null);
	const imgRef = (0, import_react.useRef)(null);
	const initials = m.name.startsWith("[") ? "BU" : m.name.split(" ").map((p) => p[0]).join("");
	(0, import_react.useEffect)(() => {
		const card = cardRef.current;
		if (!card) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const onMouseMove = (e) => {
			const rect = card.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width - .5;
			const y = (e.clientY - rect.top) / rect.height - .5;
			gsapWithCSS.to(card, {
				rotationY: x * 12,
				rotationX: -y * 12,
				transformPerspective: 800,
				duration: .4,
				ease: "power1.out"
			});
			if (imgRef.current) gsapWithCSS.to(imgRef.current, {
				x: x * 10,
				y: y * 10,
				scale: 1.04,
				duration: .4,
				ease: "power1.out"
			});
		};
		const onMouseLeave = () => {
			gsapWithCSS.to(card, {
				rotationY: 0,
				rotationX: 0,
				duration: .5,
				ease: "power2.out"
			});
			if (imgRef.current) gsapWithCSS.to(imgRef.current, {
				x: 0,
				y: 0,
				scale: 1,
				duration: .5,
				ease: "power2.out"
			});
		};
		card.addEventListener("mousemove", onMouseMove);
		card.addEventListener("mouseleave", onMouseLeave);
		return () => {
			card.removeEventListener("mousemove", onMouseMove);
			card.removeEventListener("mouseleave", onMouseLeave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: cardRef,
		className: "group relative border border-border bg-surface p-4 transition-all duration-300 hover:border-primary/60 hover:shadow-lg rounded-sm overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-2 right-3 z-10 pointer-events-none font-mono text-[0.6rem] tracking-[0.2em] text-primary/70 uppercase",
				children: [String(index + 1).padStart(2, "0"), " // BUILDER"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: imgRef,
				className: "relative aspect-[4/5] overflow-hidden bg-surface-2 border border-border/50 rounded-sm",
				children: [m.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: m.image,
					alt: m.name,
					loading: "lazy",
					className: "h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid-bg flex h-full w-full flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-4xl font-extrabold text-muted-foreground/60 tracking-wider",
						children: initials
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-primary/80",
						children: "AWS Builder"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-background/90 p-3 transition-transform duration-300 group-hover:translate-y-0",
					children: [
						"linkedin",
						"instagram",
						"github"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: m[s],
						"aria-label": `${m.name} ${s}`,
						className: "flex h-8 w-8 items-center justify-center border border-border-strong text-muted-foreground transition-colors hover:border-primary hover:text-primary rounded-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, { name: s })
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-1 pb-1 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary font-semibold",
						children: m.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-lg font-bold text-foreground",
						children: m.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted-foreground leading-relaxed",
						children: [
							"\"",
							m.bio,
							"\""
						]
					})
				]
			})
		]
	});
}
function Team() {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".builder-card", {
				opacity: 0,
				y: 35,
				stagger: .08,
				duration: .7,
				ease: "power2.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 75%"
				}
			});
		}, containerRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "team",
		ref: containerRef,
		className: "border-t border-border py-24 lg:py-32 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "04",
				eyebrow: "Meet the builders",
				title: "The core team.",
				intro: "Student developers, architects, and designers leading cloud workshops, projects, and events."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
				children: teamMembers.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "builder-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, {
						m,
						index: i
					})
				}, i))
			})]
		})
	});
}
var featuredEvent = {
	title: "AWS Cloud Workshop",
	tagline: "Learn. Build. Deploy.",
	dateISO: "2026-10-15T14:00:00+05:30",
	dateLabel: "[DD MONTH YYYY]",
	timeLabel: "[00:00 PM]",
	venue: "[BENNETT UNIVERSITY / VENUE]",
	description: "A hands-on session exploring cloud computing, AWS services and real-world deployment.",
	registerUrl: "#register"
};
var upcomingEvents = [
	{
		title: "AWS Cloud Workshop",
		date: "15 OCT 2026",
		venue: "PHL-101",
		type: "Workshop",
		description: "Launch your first EC2 instance and host a site on S3.",
		registerUrl: "#"
	},
	{
		title: "Cloud Computing Bootcamp",
		date: "22 OCT 2026",
		venue: "Bennett University",
		type: "Bootcamp",
		description: "Three days of serverless, databases and IAM fundamentals.",
		registerUrl: "#"
	},
	{
		title: "AWS Hack Night",
		date: "05 NOV 2026",
		venue: "Innovation Lab",
		type: "Hackathon",
		description: "Overnight build sprint. Ship something on AWS by sunrise.",
		registerUrl: "#"
	},
	{
		title: "Certification Prep Session",
		date: "19 NOV 2026",
		venue: "[VENUE]",
		type: "Session",
		description: "A guided walkthrough of the Cloud Practitioner exam.",
		registerUrl: "#"
	}
];
var pastEvents = [
	{
		title: "[Past Event Title]",
		date: "[MON YYYY]",
		description: "Replace with a short recap of what happened.",
		participants: 120,
		photos: 48
	},
	{
		title: "[Past Event Title]",
		date: "[MON YYYY]",
		description: "Replace with a short recap of what happened.",
		participants: 80,
		photos: 32
	},
	{
		title: "[Past Event Title]",
		date: "[MON YYYY]",
		description: "Replace with a short recap of what happened.",
		participants: 200,
		photos: 76
	}
];
function useCountdown(iso) {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(Date.now());
		const t = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(t);
	}, []);
	const diff = now === null ? 0 : Math.max(0, new Date(iso).getTime() - now);
	return [
		["Days", Math.floor(diff / 864e5)],
		["Hours", Math.floor(diff / 36e5) % 24],
		["Min", Math.floor(diff / 6e4) % 60],
		["Sec", Math.floor(diff / 1e3) % 60]
	];
}
function FeaturedEvent() {
	const parts = useCountdown(featuredEvent.dateISO);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-t border-border py-28 lg:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "05 /"
				}), " Next on the cloud"]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-5xl font-bold uppercase leading-[0.9] sm:text-7xl lg:text-8xl",
							children: featuredEvent.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl text-primary",
							children: featuredEvent.tagline
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg text-muted-foreground",
							children: featuredEvent.description
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-primary" }), featuredEvent.dateLabel]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-primary" }), featuredEvent.timeLabel]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), featuredEvent.venue]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .25,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: featuredEvent.registerUrl,
							className: "btn-primary mt-10",
							children: "Register Now"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 border border-border bg-surface",
						children: parts.map(([l, v], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-4 text-center sm:p-6 ${i ? "border-l border-border" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl font-bold tabular-nums sm:text-5xl",
								children: String(v).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground",
								children: l
							})]
						}, l))
					})
				})]
			})]
		})]
	});
}
function Events() {
	const [tab, setTab] = (0, import_react.useState)("up");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "events",
		className: "border-t border-border bg-surface py-28 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					index: "06",
					eyebrow: "Events",
					title: "On the calendar."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10 inline-flex border border-border",
					children: [["up", "Upcoming"], ["past", "Past Events"]].map(([k, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTab(k),
						className: "relative px-5 py-3 font-mono text-xs uppercase tracking-[0.16em]",
						children: [tab === k && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "tab",
							className: "absolute inset-0 bg-primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `relative ${tab === k ? "text-primary-foreground" : "text-muted-foreground"}`,
							children: l
						})]
					}, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: tab === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						className: "divide-y divide-border border-y border-border",
						children: upcomingEvents.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: i * .07 },
							className: "group grid items-center gap-4 py-6 transition-colors hover:bg-background md:grid-cols-[140px_1fr_200px_auto] md:px-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-sm text-primary",
									children: e.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground",
										children: e.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-2xl font-semibold uppercase transition-transform duration-300 group-hover:translate-x-2",
										children: e.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: e.description
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), e.venue]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: e.registerUrl,
									className: "btn-ghost !py-2.5",
									children: ["Register ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
								})
							]
						}, e.title))
					}, "up") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						className: "grid gap-4 md:grid-cols-3",
						children: pastEvents.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: i * .08 },
							className: "group relative aspect-[4/5] overflow-hidden border border-border bg-background",
							children: [
								e.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: e.image,
									alt: e.title,
									className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid-bg absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground",
										children: "Event photo placeholder"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-xs text-primary",
											children: e.date
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 text-xl font-semibold",
											children: e.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "overflow-hidden",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm text-muted-foreground",
													children: e.description
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-3 flex gap-4 font-mono text-xs text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }), e.participants]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-3.5 w-3.5" }),
															e.photos,
															" photos"
														]
													})]
												})]
											})
										})
									]
								})
							]
						}, i))
					}, "past")
				})
			]
		})
	});
}
var projectFilters = [
	"ALL",
	"WEB",
	"MOBILE",
	"AI/ML",
	"CLOUD"
];
var projects = [
	{
		name: "[Campus Events Portal]",
		description: "Serverless event registration with real-time seat counts.",
		category: "WEB",
		tech: ["React", "Node.js"],
		aws: [
			"Lambda",
			"DynamoDB",
			"S3"
		],
		github: "#",
		demo: "#"
	},
	{
		name: "[Attendance App]",
		description: "Mobile check-ins with QR codes and cloud sync.",
		category: "MOBILE",
		tech: ["Flutter"],
		aws: ["API Gateway", "DynamoDB"],
		github: "#",
		demo: "#"
	},
	{
		name: "[Notes Summarizer]",
		description: "Upload lecture notes, get AI summaries in seconds.",
		category: "AI/ML",
		tech: ["Python"],
		aws: ["S3", "Lambda"],
		github: "#",
		demo: "#"
	},
	{
		name: "[Infra Templates]",
		description: "Reusable IaC templates for student deployments.",
		category: "CLOUD",
		tech: ["Python"],
		aws: [
			"EC2",
			"RDS",
			"S3"
		],
		github: "#",
		demo: "#"
	},
	{
		name: "[Club Website]",
		description: "This site, deployed globally on a CDN.",
		category: "WEB",
		tech: ["React"],
		aws: ["CloudFront", "S3"],
		github: "#",
		demo: "#"
	},
	{
		name: "[Cost Monitor]",
		description: "Dashboard that alerts students before free-tier limits.",
		category: "CLOUD",
		tech: ["Node.js"],
		aws: ["Lambda", "EC2"],
		github: "#",
		demo: "#"
	}
];
function Projects() {
	const [f, setF] = (0, import_react.useState)("ALL");
	const list = projects.filter((p) => f === "ALL" || p.category === f);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "border-t border-border py-28 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					index: "07",
					eyebrow: "Projects",
					title: "Built by the community.",
					intro: "Real applications, designed and deployed by members on AWS infrastructure."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10 flex flex-wrap gap-2",
					children: projectFilters.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setF(x),
						className: `border px-4 py-2 font-mono text-xs tracking-[0.14em] transition-colors ${f === x ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"}`,
						children: x
					}, x))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							layout: true,
							initial: {
								opacity: 0,
								scale: .95
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							exit: {
								opacity: 0,
								scale: .95
							},
							transition: { duration: .35 },
							className: "group flex flex-col border border-border bg-surface transition-colors hover:border-primary/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-video overflow-hidden border-b border-border bg-surface-2",
								children: [p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.name,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid-bg flex h-full items-center justify-center transition-transform duration-700 group-hover:scale-105",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground",
										children: "Project screenshot"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-3 top-3 bg-background px-2 py-1 font-mono text-[0.6rem] tracking-[0.16em] text-primary",
									children: p.category
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 flex-1 text-sm text-muted-foreground",
										children: p.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex flex-wrap gap-1.5",
										children: [p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "border border-border px-2 py-0.5 font-mono text-[0.65rem]",
											children: t
										}, t)), p.aws.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-accent px-2 py-0.5 font-mono text-[0.65rem] text-accent-foreground",
											children: t
										}, t))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex gap-4 border-t border-border pt-4 font-mono text-xs uppercase tracking-[0.14em]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.github,
											className: "flex items-center gap-1.5 text-muted-foreground hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
												name: "github",
												className: "h-3.5 w-3.5"
											}), "GitHub"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.demo,
											className: "flex items-center gap-1.5 text-muted-foreground hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" }), "Live demo"]
										})]
									})
								]
							})]
						}, p.name))
					})
				})
			]
		})
	});
}
var achievements = [
	{
		year: "[2025]",
		category: "Hackathon Win",
		title: "[Hackathon Name]",
		description: "Replace with team, placement and project built."
	},
	{
		year: "[2025]",
		category: "AWS Certifications",
		title: "[XX] members certified",
		description: "Replace with certification counts and levels."
	},
	{
		year: "[2025]",
		category: "Tech Competitions",
		title: "[Competition Name]",
		description: "Replace with result and highlights."
	},
	{
		year: "[2026]",
		category: "Community Milestone",
		title: "[XXX] members",
		description: "Replace with the milestone the club reached."
	},
	{
		year: "[2026]",
		category: "Industry Collaboration",
		title: "[Partner Name]",
		description: "Replace with the collaboration details."
	}
];
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "achievements",
		className: "border-t border-border bg-surface py-28 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "08",
				eyebrow: "Achievements",
				title: "Building impact."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-3 hidden h-px bg-border lg:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4",
					children: achievements.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: i * .1,
							duration: .6
						},
						className: "relative flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative hidden h-6 w-6 items-center justify-center lg:flex mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3.5 w-3.5 border border-primary bg-background" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute h-1.5 w-1.5 bg-primary" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 border border-border bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between font-mono text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-semibold",
										children: a.year
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "uppercase tracking-[0.16em] text-muted-foreground text-[0.65rem]",
										children: a.category
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-semibold text-foreground",
									children: a.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: a.description
								})
							]
						})]
					}, i))
				})]
			})]
		})
	});
}
var schema$1 = objectType({
	name: stringType().trim().min(2, "Enter your name").max(100),
	email: stringType().trim().email("Enter a valid email").max(255),
	message: stringType().trim().min(10, "Message is too short").max(1e3)
});
async function sendMessage(_d) {
	await new Promise((r) => setTimeout(r, 800));
}
function Contact() {
	const [f, setF] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [err, setErr] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const submit = async (e) => {
		e.preventDefault();
		const r = schema$1.safeParse(f);
		if (!r.success) {
			const o = {};
			r.error.issues.forEach((i) => o[String(i.path[0])] ??= i.message);
			setErr(o);
			return;
		}
		setErr({});
		setStatus("loading");
		try {
			await sendMessage(r.data);
			setStatus("sent");
			setF({
				name: "",
				email: "",
				message: ""
			});
		} catch {
			setStatus("error");
		}
	};
	const socials = [
		{
			k: "instagram",
			label: "Instagram",
			href: site.socials.instagram,
			v: "[INSTAGRAM URL]"
		},
		{
			k: "linkedin",
			label: "LinkedIn",
			href: site.socials.linkedin,
			v: "[LINKEDIN URL]"
		},
		{
			k: "github",
			label: "GitHub",
			href: site.socials.github,
			v: "[GITHUB URL]"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-border bg-surface py-28 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "09",
				eyebrow: "Contact",
				title: "Let's connect."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-px bg-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 bg-surface p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: site.address.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: l }, l)) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.socials.email,
							className: "flex items-center gap-4 bg-surface p-6 transition-colors hover:bg-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm",
								children: site.email
							})]
						}),
						socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: s.href,
							className: "group flex items-center justify-between bg-surface p-6 transition-colors hover:bg-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
									name: s.k,
									className: "h-5 w-5 text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-semibold uppercase",
									children: s.label
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted-foreground group-hover:text-primary",
								children: s.v
							})]
						}, s.k))
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						noValidate: true,
						className: "space-y-5 border border-border bg-background p-6 sm:p-8",
						children: [
							["name", "email"].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground",
										children: k
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: k === "email" ? "email" : "text",
										className: "field",
										value: f[k],
										onChange: (e) => setF({
											...f,
											[k]: e.target.value
										})
									}),
									err[k] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-destructive",
										children: err[k]
									})
								]
							}, k)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground",
										children: "Message"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 5,
										className: "field resize-none",
										value: f.message,
										onChange: (e) => setF({
											...f,
											message: e.target.value
										})
									}),
									err["message"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-destructive",
										children: err["message"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: status === "loading",
								className: "btn-primary w-full disabled:opacity-60",
								children: status === "loading" ? "Sending…" : "Send Message"
							}),
							status === "sent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-success",
								children: "Message sent. We will get back to you soon."
							}),
							status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-destructive",
								children: "Couldn't send. Please try again."
							})
						]
					})
				})]
			})]
		})
	});
}
function Footer() {
	const links = navLinks.filter((l) => l.id !== "achievements");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative overflow-hidden border-t border-border pt-16 pb-8 bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[2fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl font-semibold text-foreground",
							children: site.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-xs text-muted-foreground leading-relaxed",
							children: "Student-led technology community at Bennett University, Greater Noida."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "Quick links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-xs font-mono",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${l.id}`,
							className: "text-muted-foreground transition-colors hover:text-primary",
							children: l.label
						}) }, l.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "Connect with us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: [
							"instagram",
							"linkedin",
							"github"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.socials[s],
							"aria-label": s,
							className: "flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary rounded-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, { name: s })
						}, s))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col justify-between gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 AWS Bennett University. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bennett University, Greater Noida, UP, India" })]
			})]
		})
	});
}
var branches = [
	"Computer Science & Engineering (CSE)",
	"CSE - Artificial Intelligence",
	"CSE - Data Science",
	"Electronics & Communication (ECE)",
	"Biotechnology",
	"Mechanical Engineering",
	"Civil Engineering",
	"BCA / MCA",
	"Other Branch"
];
var schema = objectType({
	fullName: stringType().trim().min(1, "Full name is required").min(2, "Full name must be at least 2 characters").max(100, "Full name is too long"),
	email: stringType().trim().min(1, "University email is required").email("Enter a valid email address").max(255).refine((v) => /@bennett\.edu\.in$/i.test(v), "Please enter your official Bennett University email (@bennett.edu.in)"),
	enrollment: stringType().trim().min(1, "Enrollment number is required").min(4, "Enter a valid enrollment number").max(30),
	year: stringType().min(1, "Please select your year of study"),
	branch: stringType().min(1, "Please select your branch"),
	phone: stringType().trim().min(1, "Phone number is required").regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid 10-digit phone number")
});
var empty = {
	fullName: "",
	email: "",
	enrollment: "",
	year: "",
	branch: "",
	phone: ""
};
function getStoredRegistrations() {
	try {
		const raw = localStorage.getItem("aws_bennett_registrations");
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function saveRegistration(data) {
	try {
		const list = getStoredRegistrations();
		if (list.some((r) => r.email.toLowerCase() === data.email.toLowerCase() || r.enrollment.toLowerCase() === data.enrollment.toLowerCase())) return false;
		list.push({
			email: data.email.toLowerCase(),
			enrollment: data.enrollment.toLowerCase()
		});
		localStorage.setItem("aws_bennett_registrations", JSON.stringify(list));
		return true;
	} catch {
		return true;
	}
}
async function submitRegistrationApi(data) {
	const apiUrl = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_REGISTRATION_API_URL"];
	if (apiUrl) try {
		const res = await fetch(apiUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
		if (!res.ok) return {
			success: false,
			message: (await res.json().catch(() => ({}))).message || "Failed to submit registration to server."
		};
		return { success: true };
	} catch {
		return {
			success: false,
			message: "Network error connecting to registration backend."
		};
	}
	await new Promise((r) => setTimeout(r, 700));
	if (!saveRegistration(data)) return {
		success: false,
		duplicate: true,
		message: "This email or enrollment number is already registered."
	};
	return { success: true };
}
function JoinModal({ open, onClose }) {
	const [form, setForm] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [touched, setTouched] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!open) return;
		document.body.style.overflow = "hidden";
		const k = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", k);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", k);
		};
	}, [open, onClose]);
	const updateField = (k, v) => {
		setForm((f) => ({
			...f,
			[k]: v
		}));
		setTouched((t) => ({
			...t,
			[k]: true
		}));
		if (errors[k]) setErrors((errs) => {
			const copy = { ...errs };
			delete copy[k];
			return copy;
		});
	};
	const submit = async (e) => {
		e.preventDefault();
		setErrorMessage("");
		const r = schema.safeParse(form);
		if (!r.success) {
			const errs = {};
			const allTouched = {};
			r.error.issues.forEach((i) => {
				const key = i.path[0];
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
			setErrorMessage("Something went wrong. Please check your connection and try again.");
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
	const Err = ({ k }) => errors[k] && touched[k] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-1 flex items-center gap-1 text-xs text-destructive",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3 w-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errors[k] })]
	}) : null;
	const Label = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground",
		children: [
			children,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "*"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: close,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "registration-title",
			onClick: (e) => e.stopPropagation(),
			initial: {
				y: 30,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			exit: {
				y: 30,
				opacity: 0
			},
			transition: {
				ease: [
					.22,
					1,
					.36,
					1
				],
				duration: .35
			},
			className: "relative max-h-[92vh] w-full max-w-xl overflow-y-auto border border-border-strong bg-popover shadow-2xl rounded-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-1 bg-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: close,
					"aria-label": "Close registration modal",
					className: "absolute right-4 top-4 z-10 p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				}),
				status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-8 text-center sm:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							scale: .8,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						transition: { duration: .4 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "mx-auto h-14 w-14 text-success",
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-2xl sm:text-3xl font-bold uppercase text-foreground",
								children: "REGISTRATION SUCCESSFUL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed",
								children: "Thank you for registering. We'll reach out to your university email with event schedules and updates."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: close,
								className: "btn-primary mt-8 min-w-[130px]",
								children: "Done"
							})
						]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					noValidate: true,
					className: "p-6 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-1",
							children: "Student Community"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "registration-title",
							className: "mb-2 text-2xl font-bold uppercase sm:text-3xl text-foreground",
							children: "REGISTRATION"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-6 text-xs text-muted-foreground font-mono",
							children: "Please fill out your university details below."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "field",
											placeholder: "e.g. Rahul Sharma",
											disabled: status === "loading",
											value: form.fullName,
											onChange: (e) => updateField("fullName", e.target.value)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "fullName" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "University email" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											className: "field",
											placeholder: "name@bennett.edu.in",
											disabled: status === "loading",
											value: form.email,
											onChange: (e) => updateField("email", e.target.value)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "email" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Enrollment number" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										placeholder: "e.g. E22CSE001",
										disabled: status === "loading",
										value: form.enrollment,
										onChange: (e) => updateField("enrollment", e.target.value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "enrollment" })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Year of study" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "field appearance-none pr-8 cursor-pointer",
											disabled: status === "loading",
											value: form.year,
											onChange: (e) => updateField("year", e.target.value),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Select year…"
											}), [
												"1st Year",
												"2nd Year",
												"3rd Year",
												"4th Year",
												"5th Year"
											].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: y,
												children: y
											}, y))]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "year" })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Branch" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												className: "field appearance-none pr-8 cursor-pointer",
												disabled: status === "loading",
												value: form.branch,
												onChange: (e) => updateField("branch", e.target.value),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select your branch…"
												}), branches.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: b,
													children: b
												}, b))]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "branch" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone number" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "tel",
											className: "field",
											placeholder: "e.g. 9876543210",
											disabled: status === "loading",
											value: form.phone,
											onChange: (e) => updateField("phone", e.target.value)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "phone" })
									]
								})
							]
						}),
						status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-start gap-3 border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive rounded-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Submission failed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs opacity-90",
								children: errorMessage
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: status === "loading",
							className: "btn-primary mt-8 w-full disabled:opacity-60 disabled:cursor-not-allowed",
							children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }), "Submitting Registration…"] }) : "SUBMIT REGISTRATION"
						})
					]
				})
			]
		})
	}) });
}
function Preloader() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	const panelsRef = (0, import_react.useRef)(null);
	const logoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const runExitAnimation = () => {
			if (prefersReducedMotion) {
				setLoading(false);
				return;
			}
			const ctx = gsapWithCSS.context(() => {
				const tl = gsapWithCSS.timeline({ onComplete: () => setLoading(false) });
				tl.to(logoRef.current, {
					opacity: 0,
					y: -20,
					duration: .35,
					ease: "power2.inOut"
				});
				const panels = panelsRef.current?.children;
				if (panels && panels.length > 0) tl.to(panels, {
					yPercent: -100,
					duration: .65,
					stagger: .07,
					ease: "power3.inOut"
				}, "-=0.1");
			}, containerRef);
			return () => ctx.revert();
		};
		let timer;
		if (document.readyState === "complete") timer = setTimeout(runExitAnimation, 500);
		else {
			const handleLoad = () => {
				timer = setTimeout(runExitAnimation, 400);
			};
			window.addEventListener("load", handleLoad);
			const fallbackTimer = setTimeout(runExitAnimation, 1e3);
			return () => {
				window.removeEventListener("load", handleLoad);
				clearTimeout(timer);
				clearTimeout(fallbackTimer);
			};
		}
		return () => clearTimeout(timer);
	}, []);
	if (!mounted || !loading) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-auto overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: logoRef,
			className: "relative z-10 flex flex-col items-center text-center px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mb-5 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/aws-bennett-logo.jpg",
						alt: "AWS Bennett University Logo",
						className: "h-16 sm:h-20 w-auto object-contain shadow-glow rounded-md"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-foreground",
					children: "AWS BENNETT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-mono text-xs uppercase tracking-[0.22em] text-primary",
					children: "BUILD · DEPLOY · SCALE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 h-1 w-44 overflow-hidden rounded-full bg-surface-2 border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-primary animate-pulse" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: panelsRef,
			className: "absolute inset-0 pointer-events-none flex z-20",
			children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full flex-1 bg-surface-2 border-r border-border/20 last:border-r-0" }, i))
		})]
	});
}
function Index() {
	const [join, setJoin] = (0, import_react.useState)(false);
	const open = () => setJoin(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { onJoin: open }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeDo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Architecture, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedEvent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Events, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinModal, {
				open: join,
				onClose: () => setJoin(false)
			})
		]
	});
}
//#endregion
export { Index as component };
