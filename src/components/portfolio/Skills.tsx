import { motion } from "motion/react";
import { Code2, LineChart, BarChart3, Palette, Server, Database } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { skillGroups } from "@/lib/portfolio-data";

const icons = [Code2, LineChart, BarChart3, Palette, Server, Database];

const levelDot: Record<string, string> = {
  Advanced: "bg-primary",
  Proficient: "bg-secondary",
  Foundational: "bg-muted-foreground/40",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface-hover/40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Skills"
          title="A toolkit built for shipping."
          description="I don't collect technologies — I pick tools that solve the problem in front of me. Here's what I reach for most often."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group surface-card surface-card-hover p-6 relative overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg">{group.category}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-5">{group.description}</p>
                  <ul className="space-y-2">
                    {group.items.map((it) => (
                      <li
                        key={it.name}
                        className="flex items-center justify-between text-sm py-1.5 border-b border-border/60 last:border-0"
                      >
                        <span className="font-medium">{it.name}</span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                          <span className={`h-1.5 w-1.5 rounded-full ${levelDot[it.level]}`} />
                          {it.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
