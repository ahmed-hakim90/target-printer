import { Link } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/CTAButtons";

export function ComingSoonPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Coming soon</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
        This section is under development
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        We&apos;re preparing this page. In the meantime, explore our homepage or contact us on
        WhatsApp.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground hover:bg-accent/90"
        >
          Back to home
        </Link>
        <WhatsAppButton variant="outline" />
      </div>
    </div>
  );
}
