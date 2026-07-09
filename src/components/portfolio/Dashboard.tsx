import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Briefcase, Code2, Award, CalendarClock, Rocket, Zap } from "lucide-react";
import { dashboardStats } from "@/lib/portfolio-data";

const icons = [Rocket, Briefcase, Code2, Award, Zap, CalendarClock];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * value));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Dashboard() {
  return (
    <section className="py-16 md:py-20 -mt-8 relative z-10">
      <div className="container-page">
        <div className="surface-card p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="font-mono text-xs text-primary uppercase tracking-widest">Recruiter Dashboard</div>
              <h2 className="font-display text-xl md:text-2xl font-semibold mt-1">Snapshot at a glance</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Live · Updated {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dashboardStats.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group relative p-4 rounded-xl border border-border bg-background hover:bg-surface-hover transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-display font-bold tracking-tight">
                    {s.isText ? String(s.value) : <Counter value={Number(s.value)} suffix={s.suffix || ""} />}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
