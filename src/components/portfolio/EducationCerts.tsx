import { motion } from "motion/react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { education, certifications } from "@/lib/portfolio-data";

export function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Education"
          title="Where I trained the fundamentals."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {education.map((e, i) => (
            <motion.div
              key={e.degree + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="surface-card surface-card-hover p-6"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary mb-4">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="font-mono text-xs text-muted-foreground">{e.duration}</div>
              <h3 className="mt-1 font-display font-semibold text-lg leading-snug">{e.degree}</h3>
              <div className="text-sm text-primary mt-1">{e.institution}</div>
              {e.detail && <p className="mt-3 text-sm text-muted-foreground">{e.detail}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-surface-hover/40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Certifications"
          title="Signals from the industry."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group surface-card surface-card-hover p-6 flex gap-5 relative"
            >
              {c.link && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View certificate for ${c.title}`} />
              )}
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lift">
                <Award className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-semibold text-lg leading-snug">{c.title}</h3>
                  <ExternalLink className={`h-4 w-4 transition-opacity ${c.link ? 'text-primary opacity-100' : 'text-muted-foreground opacity-0 group-hover:opacity-100'}`} />
                </div>
                <div className="mt-1 text-sm text-primary">{c.org}</div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">{c.date}</div>
                <p className="mt-3 text-sm text-muted-foreground">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
