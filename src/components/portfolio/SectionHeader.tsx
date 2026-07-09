export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
