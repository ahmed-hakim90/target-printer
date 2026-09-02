import { ArrowRight } from "lucide-react";
import { InternalLink } from "./InternalLink";
import { QuoteButton, WhatsAppButton } from "./CTAButtons";
import type { Machine } from "@/constants";

export function MachineCard({ machine }: { machine: Machine }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 hover:border-accent/40">
      <InternalLink
        to="/machines/$slug"
        params={{ slug: machine.slug }}
        className="relative block aspect-[4/3] overflow-hidden bg-[#f5f8fc]"
      >
        <img
          src={machine.image}
          alt={machine.name}
          loading="lazy"
          width={1280}
          height={960}
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
          {machine.category}
        </span>
      </InternalLink>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
            {machine.name}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {machine.summary}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <InternalLink
            to="/machines/$slug"
            params={{ slug: machine.slug }}
            className="inline-flex items-center justify-between border-b border-border pb-3 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </InternalLink>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <QuoteButton size="sm" label="Request Quote" product={machine.name} />
            <WhatsAppButton
              size="sm"
              label="WhatsApp"
              message={`Hello, I am interested in the ${machine.name}. Could you share more details?`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
