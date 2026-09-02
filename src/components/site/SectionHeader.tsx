import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]",
            align === "center" && "justify-center",
            invert ? "text-accent" : "text-accent",
          )}
        >
          <span className="h-px w-8 bg-accent" />
          {t(eyebrow)}
        </div>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold leading-[1.1] md:text-4xl lg:text-5xl",
          invert ? "text-surface-foreground" : "text-foreground",
        )}
      >
        {t(title)}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed md:text-lg",
            invert ? "text-surface-foreground/70" : "text-muted-foreground",
          )}
        >
          {t(description)}
        </p>
      )}
    </div>
  );
}
