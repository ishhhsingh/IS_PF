import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface-hover/40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've shipped so far."
          description="A short career today, a real one tomorrow. Every role below shipped real work with real teammates."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" />
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-14 md:pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 grid h-9 w-9 md:h-12 md:w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift">
                <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div className="surface-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-semibold text-lg">{e.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.duration}</span>
                </div>
                <div className="text-sm text-primary mt-1">{e.company}</div>
                <ul className="mt-4 space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground leading-relaxed">— {b}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
