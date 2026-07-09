import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">IS</span>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Designed & built with care.
          </div>
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            { icon: Github, href: profile.github, label: "GitHub" },
            { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
