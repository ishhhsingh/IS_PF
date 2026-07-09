import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <button onClick={() => go("home")} className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground text-sm">IS</span>
          <span className="hidden sm:inline">Ishika Singh</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                active === s.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://drive.google.com/file/d/1MPWqePdM8UXJq4GdSlEHxZqmyrbhbAd2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-1.5 h-4 w-4" /> Resume
            </a>
          </Button>
          <Button size="sm" onClick={() => go("contact")}>Hire Me</Button>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* scroll progress */}
      <div className="h-0.5 w-full bg-transparent">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container-page py-4 grid gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                  active === s.id ? "bg-surface-hover text-primary" : "text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="https://drive.google.com/file/d/1MPWqePdM8UXJq4GdSlEHxZqmyrbhbAd2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
              <Button size="sm" onClick={() => go("contact")}>Hire Me</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
