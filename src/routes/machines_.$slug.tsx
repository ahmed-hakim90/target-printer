import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { RouteLoading } from "@/components/site/RouteLoading";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { MachineCard } from "@/components/site/MachineCard";
import { QuoteButton, WhatsAppButton, EmailButton } from "@/components/site/CTAButtons";
import { findMachine, relatedMachines, site, type Machine } from "@/constants";
import { previewGate } from "@/lib/preview-gate";
import { useLanguage } from "@/lib/language";
import { SmartImage } from "@/components/site/SmartImage";

export const Route = createFileRoute("/machines_/$slug")({
  loader: ({ params }): { machine: Machine } => {
    const machine = findMachine(params.slug);
    if (!machine) throw notFound();
    return { machine };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.machine;
    if (!m) return { meta: [{ title: "Machine not found" }] };
    const title = `${m.name} — ${site.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: m.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: m.summary },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `${site.url}/machines/${m.slug}` },
        { property: "og:image", content: new URL(m.image, site.url).href },
        { name: "twitter:image", content: new URL(m.image, site.url).href },
      ],
      links: [{ rel: "canonical", href: `${site.url}/machines/${m.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: m.name,
            description: m.summary,
            category: m.category,
            image: new URL(m.image, site.url).href,
            brand: { "@type": "Brand", name: site.name },
          }),
        },
      ],
    };
  },
  pendingComponent: RouteLoading,
  component: previewGate(MachineDetailPage),
});

function MachineDetailPage() {
  const { t, language } = useLanguage();
  const { machine } = Route.useLoaderData() as { machine: Machine };
  const [active, setActive] = useState(0);
  const related = relatedMachines(machine);

  return (
    <>
      {/* HEADER */}
      <section className="bg-surface text-surface-foreground">
        <div className="container-x py-12 md:py-16">
          <Link
            to="/machines"
            className="inline-flex items-center gap-2 text-sm font-medium text-surface-foreground/70 hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t("Back to machines")}
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {machine.category}
          </p>
          <h1 className="mt-3 text-balance font-display text-3xl font-semibold leading-[1.05] md:text-4xl lg:text-5xl">
            {machine.name}
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
            {machine.summary}
          </p>
        </div>
      </section>

      {/* GALLERY + SPECS */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-xl border border-border bg-[#f5f8fc]">
              <SmartImage
                src={machine.gallery[active]}
                alt={machine.name}
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-contain p-6"
              />
            </div>
            {machine.gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-3 gap-3">
                {machine.gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={
                      "overflow-hidden rounded-lg border bg-surface " +
                      (i === active ? "border-accent ring-2 ring-accent/40" : "border-border")
                    }
                  >
                    <SmartImage
                      src={g}
                      alt={`${machine.name} ${i + 1}`}
                      loading="lazy"
                      width={400}
                      height={300}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {t("Specifications")}
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <tbody>
                  {machine.specs.map((s, i) => (
                    <tr
                      key={`${s.label}-${i}`}
                      className={i % 2 ? "bg-secondary" : "bg-background"}
                    >
                      <th className="w-1/2 px-4 py-3 text-left font-medium text-muted-foreground">
                        {s.label}
                      </th>
                      <td className="px-4 py-3 font-medium text-foreground">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <QuoteButton size="lg" product={machine.name} />
              <WhatsAppButton
                size="lg"
                label="Request product brochure"
                message={`Hello, please send me the product brochure for ${machine.name}.`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL DETAILS */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeader eyebrow="Product Overview" title="Supported from setup to production." />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {machine.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-background py-20">
        <div className="container-x rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                {language === "ar"
                  ? `اطلب عرض سعر لـ ${machine.name}`
                  : `Request a quotation for the ${machine.name}`}
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                Send your application details and our engineering team will respond with pricing,
                lead time, and integration notes.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <QuoteButton size="lg" product={machine.name} />
              <WhatsAppButton
                size="lg"
                message={`Hello, I would like a quotation for the ${machine.name}.`}
              />
              <EmailButton size="lg" subject={`Quotation request: ${machine.name}`} />
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-background pb-24">
          <div className="container-x">
            <SectionHeader eyebrow="Related Machines" title="Other equipment in this category." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((m) => (
                <MachineCard key={m.slug} machine={m} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
