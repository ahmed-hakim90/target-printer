import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { mailLink, site, waLink } from "@/constants";
import { cn } from "@/lib/utils";

type Variant = "accent" | "solid" | "outline" | "ghost" | "whatsapp" | "surface";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  solid: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-current/40 bg-transparent text-inherit hover:bg-current/10",
  ghost: "bg-transparent text-foreground hover:bg-secondary",
  whatsapp:
    "border border-[#25D366] bg-[#25D366]/15 text-[#86efac] hover:bg-[#25D366] hover:text-white",
  surface:
    "border border-surface-foreground/40 bg-surface-foreground/5 text-surface-foreground hover:bg-surface-foreground/15",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm rounded-md",
  md: "h-11 px-5 text-sm rounded-md",
  lg: "h-12 px-6 text-base rounded-md",
};

export function QuoteButton({
  variant = "accent",
  size = "md",
  className,
  label = "Request a Quote",
  product,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
  product?: string;
}) {
  if (site.previewMode) {
    const message = product
      ? `Hello, I'd like a quote for: ${product}`
      : "Hello, I'd like to request a quotation.";
    return (
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link
      to="/contact"
      search={product ? { product } : undefined}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function WhatsAppButton({
  variant = "outline",
  size = "md",
  className,
  label = "WhatsApp Inquiry",
  message,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
  message?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], sizes[size], className)}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

export function EmailButton({
  variant = "outline",
  size = "md",
  className,
  label = "Email Us",
  subject,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
  subject?: string;
}) {
  return (
    <a href={mailLink(subject)} className={cn(base, variants[variant], sizes[size], className)}>
      <Mail className="h-4 w-4" />
      {label}
    </a>
  );
}

export function ExploreButton({
  to = "/machines",
  label = "Explore Machines",
  variant = "outline",
  size = "md",
  className,
}: {
  to?: "/machines" | "/parts" | "/about" | "/contact" | "/";
  label?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (site.previewMode) {
    return (
      <span className={cn(classes, "cursor-default")} aria-disabled="true">
        {label}
        <ArrowRight className="h-4 w-4" />
      </span>
    );
  }

  return (
    <Link to={to} className={classes}>
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
