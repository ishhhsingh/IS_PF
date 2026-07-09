import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, CheckCircle2, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { projects } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";

function ProjectVisual({ id }: { id: string }) {
  if (id === "powerbi") {
    return (
      <div className="h-full w-full p-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="grid grid-cols-3 gap-3 h-full">
          {["Revenue", "Profit", "Orders"].map((k, i) => (
            <div key={k} className="rounded-lg border border-border bg-surface p-3">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{k}</div>
              <div className="font-display text-lg font-bold mt-1">
                {["₹4.2M", "28.6%", "1,284"][i]}
              </div>
              <div className="mt-2 h-1 rounded-full bg-primary/15 overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${60 + i * 12}%` }} />
              </div>
            </div>
          ))}
          <div className="col-span-3 rounded-lg border border-border bg-surface p-4">
            <div className="flex items-end gap-1.5 h-24">
              {[38, 62, 45, 74, 58, 82, 68, 91, 76, 88, 72, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent/70" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-2 text-[10px] font-mono text-muted-foreground">Monthly revenue · FY24</div>
          </div>
        </div>
      </div>
    );
  }
  if (id === "customer") {
    return (
      <div className="h-full w-full p-6 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
        <div className="grid grid-cols-2 gap-3 h-full">
          <div className="rounded-lg border border-border bg-surface p-4 flex flex-col justify-between">
            <div className="text-xs text-muted-foreground">Segments</div>
            {["Loyal", "At-risk", "New", "Dormant"].map((s, i) => (
              <div key={s} className="flex items-center justify-between text-xs">
                <span>{s}</span>
                <div className="w-20 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full" style={{ width: `${80 - i * 15}%`, background: "var(--secondary)" }} />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border bg-surface p-4">
            <div className="text-xs text-muted-foreground mb-2">Category mix</div>
            <div className="relative aspect-square max-h-28 mx-auto">
              <div className="absolute inset-0 rounded-full" style={{
                background: "conic-gradient(var(--primary) 0 35%, var(--secondary) 35% 60%, var(--accent) 60% 82%, var(--warning) 82% 100%)"
              }} />
              <div className="absolute inset-3 rounded-full bg-surface grid place-items-center text-[10px] font-mono">2.1k rows</div>
            </div>
          </div>
          <div className="col-span-2 rounded-lg border border-border bg-surface p-4">
            <div className="text-xs text-muted-foreground mb-2 font-mono">SELECT segment, AVG(order_value) …</div>
            <div className="flex items-end gap-2 h-16">
              {[40, 55, 30, 68, 82, 47].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-secondary/70" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Timetable — auto-playing slideshow
  const dptImages = [
    "/dpt.png.png",
    "/login_page.png",
    "/student_dashboard.png",
    "/weekly_timetable.png",
    "/faculty_management.png",
    "/faculty_requests.png",
    "/csv_upload.png"
  ];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % dptImages.length), 3000);
    return () => clearInterval(timer);
  }, [dptImages.length]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black/5">
      {dptImages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Departmental Portal Screenshot ${idx + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: idx === slide ? 1 : 0 }}
        />
      ))}
      {/* Prev / Next */}
      <button
        onClick={() => setSlide((s) => (s - 1 + dptImages.length) % dptImages.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur rounded-full h-8 w-8 flex items-center justify-center text-foreground hover:bg-background transition-colors"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => setSlide((s) => (s + 1) % dptImages.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur rounded-full h-8 w-8 flex items-center justify-center text-foreground hover:bg-background transition-colors"
        aria-label="Next"
      >
        ›
      </button>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {dptImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`h-2 rounded-full transition-all ${idx === slide ? "w-5 bg-primary" : "w-2 bg-foreground/30"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Selected work"
          title="Case studies, not screenshots."
          description="Each project below started with a business question and ended with a shipped artifact — a dashboard, a portal, or an insight report."
        />

        <div className="space-y-16 md:space-y-24">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="surface-card overflow-hidden aspect-[4/3]">
                    <ProjectVisual id={p.id} />
                  </div>
                </div>

                <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="chip mb-4"><Sparkles className="h-3 w-3" />{p.category}</div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-lg text-muted-foreground">{p.tagline}</p>

                  <div className="mt-6 grid gap-4">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-1">Problem</div>
                      <p className="text-sm text-muted-foreground">{p.problem}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-1">Solution</div>
                      <p className="text-sm text-muted-foreground">{p.solution}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-2">What I built</div>
                      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 text-success shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-1">Outcome</div>
                      <p className="text-sm text-muted-foreground">{p.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="mr-1.5 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
