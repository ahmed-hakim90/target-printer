import { createFileRoute } from "@tanstack/react-router";
import { RouteLoading } from "@/components/site/RouteLoading";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { products } from "@/constants/products";
import { previewGate } from "@/lib/preview-gate";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      {
        title: `Products — IM Sector | ${products.name}`,
      },
      { name: "description", content: products.meta.description },
      {
        property: "og:title",
        content: `Products — IM Sector | ${products.name}`,
      },
      { property: "og:description", content: products.meta.ogDescription },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  pendingComponent: RouteLoading,
  component: previewGate(ProductsPage),
});

function ProductsPage() {
  const { localize } = useLanguage();
  const content = localize(products);
  return (
    <>
      <section className="bg-surface text-surface-foreground">
        <div className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-10 bg-accent" />
              {content.hero.eyebrow}
            </div>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
              {content.hero.title} <span className="text-accent">{content.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
              {content.hero.lead}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={content.heroImage}
              alt={content.heroImageAlt}
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <SectionHeader eyebrow={content.ourProducts.eyebrow} title={content.ourProducts.title} />
          <p className="mt-12 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.ourProducts.intro}
          </p>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {content.ourProducts.items.map(({ icon: Icon, title }) => (
              <li key={title} className="bg-background p-7">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <SectionHeader eyebrow={content.industries.eyebrow} title={content.industries.title} />
          <p className="mt-12 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.industries.intro}
          </p>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {content.industries.items.map(({ icon: Icon, label }) => (
              <li key={label} className="bg-background p-7">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{label}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <SectionHeader eyebrow={content.whyChooseUs.eyebrow} title={content.whyChooseUs.title} />
          <p className="mt-12 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.whyChooseUs.body}
          </p>
        </div>
      </section>

      <CTASection title={content.cta.title} description={content.cta.description} />
    </>
  );
}
