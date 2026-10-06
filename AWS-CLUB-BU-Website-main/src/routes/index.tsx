import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { Architecture } from "@/components/site/Architecture";
import { Team } from "@/components/site/Team";
import { FeaturedEvent } from "@/components/site/FeaturedEvent";
import { Events } from "@/components/site/Events";
import { Projects } from "@/components/site/Projects";
import { Achievements } from "@/components/site/Achievements";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { JoinModal } from "@/components/site/JoinModal";
import { Preloader } from "@/components/site/Preloader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AWS Bennett University: Build. Deploy. Scale." },
      {
        name: "description",
        content:
          "The student-led AWS cloud community at Bennett University. Workshops, hackathons, projects and certifications.",
      },
      {
        property: "og:title",
        content: "AWS Bennett University: Build. Deploy. Scale.",
      },
      {
        property: "og:description",
        content:
          "Learn, build and deploy on the cloud with Bennett University's AWS student community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [join, setJoin] = useState(false);
  const open = () => setJoin(true);
  return (
    <main className="relative min-h-screen">
      <Preloader />
      <Navbar onJoin={open} />
      <Hero />
      <About />
      <WhatWeDo />
      <Architecture />
      <Team />
      <FeaturedEvent />
      <Events />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <JoinModal open={join} onClose={() => setJoin(false)} />
    </main>
  );
}
