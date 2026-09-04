import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, PackageCheck, Settings2, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { QuoteButton, WhatsAppButton } from "@/components/site/CTAButtons";
import { PartCard } from "@/components/site/PartCard";
import { RouteLoading } from "@/components/site/RouteLoading";
import { SmartImage } from "@/components/site/SmartImage";
import { findPart, relatedParts, site, type Part } from "@/constants";
import { useLanguage } from "@/lib/language";
import { previewGate } from "@/lib/preview-gate";

export const Route = createFileRoute("/parts_/$slug")({
  loader: ({ params }): { part: Part } => {
    const part = findPart(params.slug);
    if (!part) throw notFound();
    return { part };
  },
  head: ({ loaderData }) => {
    const part = loaderData?.part;
    if (!part) return { meta: [{ title: "Spare part not found" }] };
    const url = `${site.url}/parts/${part.slug}`;
    return {
      meta: [
        { title: `${part.name} — ${site.name}` },
        { name: "description", content: part.summary },
        { property: "og:title", content: `${part.name} — ${site.name}` },
        { property: "og:description", content: part.summary },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: new URL(part.image, site.url).href },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: part.name,
            description: part.summary,
            image: new URL(part.image, site.url).href,
            category: part.category,
            brand: { "@type": "Brand", name: site.name },
          }),
        },
      ],
    };
  },
  pendingComponent: RouteLoading,
  component: previewGate(PartDetailPage),
});

function PartDetailPage() {
  const { language } = useLanguage();
  const { part } = Route.useLoaderData();
  const isArabic = language === "ar";
  const name = isArabic ? part.nameAr : part.name;
  const summary = isArabic ? part.summaryAr : part.summary;
  const description = isArabic ? part.descriptionAr : part.description;
  const applications = isArabic ? part.applicationsAr : part.applications;
  const compatibility = isArabic ? part.compatibilityAr : part.compatibility;
  const serviceIncludes = isArabic ? part.serviceIncludesAr : part.serviceIncludes;
  const related = relatedParts(part);

  return (
    <>
      <section className="bg-surface text-surface-foreground">
        <div className="container-x py-10 md:py-14">
          <Link
            to="/parts"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {isArabic ? "العودة إلى قطع الغيار" : "Back to spare parts"}
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="eyebrow">{isArabic ? "قطع غيار ودعم فني" : part.category}</p>
              <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight md:text-5xl">
                {name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <QuoteButton size="lg" product={name} />
                <WhatsAppButton
                  size="lg"
                  message={`Hello, I need availability and compatibility details for ${part.name}.`}
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
              <SmartImage
                src={part.image}
                alt={name}
                width={1280}
                height={960}
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">{isArabic ? "نظرة عامة" : "Overview"}</p>
            <h2 className="mt-4 text-3xl font-extrabold text-primary">
              {isArabic
                ? "القطعة الصحيحة تبدأ بالتشخيص الصحيح."
                : "The right part starts with the right diagnosis."}
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">{description}</p>
            <div className="mt-7 rounded-xl border border-accent/20 bg-blue-50 p-5 text-sm leading-7 text-primary">
              <strong className="block">{isArabic ? "قبل طلب القطعة" : "Before ordering"}</strong>
              {isArabic
                ? "أرسل موديل الماكينة والرقم التسلسلي وصورة القطعة أو كودها ووصف العطل، حتى يؤكد الفريق الفني التوافق قبل التوريد."
                : "Send the machine model, serial number, part photo or reference, and fault description so the technical team can confirm compatibility before supply."}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <DetailList
              icon={PackageCheck}
              title={isArabic ? "الاستخدامات" : "Applications"}
              items={applications}
            />
            <DetailList
              icon={Settings2}
              title={isArabic ? "التوافق" : "Compatibility"}
              items={compatibility}
            />
            <DetailList
              icon={ShieldCheck}
              title={isArabic ? "تشمل الخدمة" : "Service includes"}
              items={serviceIncludes}
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/84 py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow">{isArabic ? "قطع أخرى" : "Related parts"}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary">
            {isArabic
              ? "استكمل احتياجات الصيانة والتشغيل."
              : "Complete your service and operating needs."}
          </h2>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <div key={item.slug}>
                <PartCard part={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={isArabic ? "لست متأكدًا من كود القطعة؟" : "Not sure about the part reference?"}
        description={
          isArabic
            ? "أرسل بيانات الماكينة وصورة العطل، وسيساعدك فريقنا في تحديد القطعة المتوافقة قبل إصدار عرض السعر."
            : "Send the machine details and a fault photo. Our team will help identify the compatible component before issuing a quotation."
        }
      />
    </>
  );
}

function DetailList({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof CheckCircle2;
  title: string;
  items: string[];
}) {
  return (
    <article className="interactive-card rounded-xl border border-border bg-card p-6" tabIndex={0}>
      <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
      <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
