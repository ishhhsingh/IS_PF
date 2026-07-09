import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Dashboard } from "@/components/portfolio/Dashboard";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";

import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { EducationSection, Certifications } from "@/components/portfolio/EducationCerts";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Dashboard />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <EducationSection />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
