import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Let's talk"
          title="Have a role in mind? Let's start a conversation."
          description="I reply to every message within 24 hours. Whether it's a full-time role, an internship, or a freelance project — I'd love to hear about it."
          align="center"
        />

        <div className="max-w-xl mx-auto">
          {/* Contact info */}
          <div className="space-y-3">
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
              { icon: MapPin, label: "Location", value: profile.location },
              { icon: Github, label: "GitHub", value: "github.com/ishikasingh", href: profile.github },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ishikasingh", href: profile.linkedin },
            ].map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group surface-card surface-card-hover p-4 flex items-center gap-4"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground font-mono">{c.label}</div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
              </motion.a>
            ))}
            <div className="rounded-2xl bg-success/10 border border-success/30 p-4 text-sm">
              <div className="inline-flex items-center gap-2 font-medium text-success">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {profile.availability}
              </div>
              <p className="mt-1 text-muted-foreground text-xs">Ready to start within 2 weeks of offer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
