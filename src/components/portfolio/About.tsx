import { motion } from "motion/react";
import { Target, Heart, Compass, GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const values = [
  { icon: Target, title: "Outcome first", body: "I optimize for shipped value, not lines of code. Every project answers a clear business question." },
  { icon: Heart, title: "Trust by default", body: "Clean data, readable code, honest documentation. I want teammates to inherit my work happily." },
  { icon: Compass, title: "Curiosity as compass", body: "I go deep into one problem at a time — Power BI DAX one week, Spring Boot the next." },
  { icon: GraduationCap, title: "Always learning", body: "BCA student by day, Forage/Deloitte simulation by night, GitHub commits on weekends." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="About"
          title="A fresher who thinks like a shipping engineer."
          description="I'm pursuing my BCA at Sikkim Manipal Institute of Technology while shipping real projects across data analytics and full-stack development. My goal for my first role: join a team where I can turn business questions into production software — fast."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="surface-card p-8">
              <div className="font-mono text-xs text-primary mb-4">// career mission</div>
              <p className="text-lg md:text-xl leading-relaxed">
                Help teams make faster, better decisions — by connecting raw data, well-designed
                software, and the humans who use it.
              </p>
              <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">Focus</div>
                  <div className="font-medium mt-1">Data + Product</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">Based in</div>
                  <div className="font-medium mt-1">Ranchi, India</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">Availability</div>
                  <div className="font-medium mt-1 text-success">Immediate</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">Open to</div>
                  <div className="font-medium mt-1">Full-time · Remote</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="surface-card surface-card-hover p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
