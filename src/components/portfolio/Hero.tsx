import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

const floatingTech = [
  { name: "Python", top: "8%", left: "6%" },
  { name: "SQL", top: "22%", right: "4%" },
  { name: "Power BI", top: "58%", left: "-4%" },
  { name: "React", top: "70%", right: "-2%" },
  { name: "Spring Boot", bottom: "8%", left: "18%" },
  { name: "MySQL", bottom: "18%", right: "12%" },
];

function useTyping(words: string[], speed = 90, hold = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDeleting(true), hold);
        } else {
          const next = word.slice(0, Math.max(text.length - 1, 0));
          setText(next);
          if (next === "") {
            setDeleting(false);
            setI((n) => n + 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, hold]);

  return text;
}

export function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute top-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40 animate-blob"
           style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.72 0.14 190 / 0.6), transparent 60%)" }} />
      <div className="absolute -bottom-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 animate-blob"
           style={{ background: "radial-gradient(circle at 60% 40%, oklch(0.56 0.22 262 / 0.5), transparent 60%)", animationDelay: "3s" }} />

      <div className="container-page relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface pl-1 pr-4 py-1 shadow-elegant"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-xs font-medium text-success">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-70 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              Open to Work
            </span>
            <span className="text-xs text-muted-foreground">Full-time · Internships · Remote-friendly</span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
              className="font-mono text-sm text-primary tracking-wider"
            >
              // hi — I'm Ishika Singh
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Building <span className="text-gradient-brand">data-driven</span> software
              <br className="hidden md:block" /> that solves real business problems.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-3 text-lg md:text-xl text-muted-foreground"
            >
              <span>I work as a</span>
              <span className="font-display font-semibold text-foreground">
                {typed}
                <span className="inline-block w-0.5 h-5 md:h-6 ml-0.5 bg-primary align-middle animate-pulse" />
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Hire Me <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={`mailto:${profile.email}?subject=Interview%20Request`}>
                <Download className="mr-1.5 h-4 w-4" /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {profile.location}</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-primary" /> BCA · Graduating {profile.graduation}</span>
          </motion.div>
        </div>

        {/* Right — portrait card */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-[4/5] max-w-md mx-auto"
          >
            {/* Blob */}
            <div className="absolute inset-6 rounded-[40%_60%_55%_45%/50%_50%_50%_50%] blur-2xl opacity-70 animate-blob"
                 style={{ background: "linear-gradient(135deg, oklch(0.56 0.22 262 / 0.35), oklch(0.55 0.24 295 / 0.3), oklch(0.72 0.14 190 / 0.3))" }} />

            {/* Card */}
            <div className="relative h-full surface-card overflow-hidden">
              <div className="absolute inset-0"
                   style={{ background: "linear-gradient(135deg, oklch(0.56 0.22 262 / 0.06), transparent 50%, oklch(0.72 0.14 190 / 0.06))" }} />
              <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 blur-xl" />
                  <div className="relative grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lift overflow-hidden">
                    <img src="/profile.jpg.jpeg" alt="Ishika Singh" className="h-full w-full object-cover bg-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display font-semibold text-xl">Ishika Singh</div>
                  <div className="text-sm text-muted-foreground mt-1">Data · Full-Stack · Engineering</div>
                </div>
                <div className="grid grid-cols-3 gap-2 w-full pt-2">
                  {["6+ Projects", "3 mo Intern", "2 Certs"].map((s) => (
                    <div key={s} className="text-center text-xs font-mono text-muted-foreground border border-border rounded-lg py-2 bg-surface-hover">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            {floatingTech.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                className="absolute hidden md:block"
                style={{ top: t.top, left: t.left, right: t.right, bottom: t.bottom }}
              >
                <div className="chip shadow-elegant animate-float-slow" style={{ animationDelay: `${i * 0.4}s` }}>
                  {t.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
