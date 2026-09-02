import { createFileRoute } from "@tanstack/react-router";
import { RouteLoading } from "@/components/site/RouteLoading";
import { useState } from "react";
import { z } from "zod";
import { Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { mailLink, site, waLink } from "@/constants";
import { cn } from "@/lib/utils";
import { previewGate } from "@/lib/preview-gate";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(150),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(5, "Phone is required")
    .max(30)
    .regex(/^[0-9+\-()\s]+$/, "Invalid phone"),
  product: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const searchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: `Contact ${site.name} — Request a Quotation` },
      {
        name: "description",
        content:
          "Get in touch with the Target Printers team for quotations, technical inquiries, or spare parts requests. Email, WhatsApp, or send a message.",
      },
      { property: "og:title", content: `Contact ${site.name}` },
      {
        property: "og:description",
        content:
          "Request a quotation, ask a technical question, or book a meeting with our engineering team.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  pendingComponent: RouteLoading,
  component: previewGate(ContactPage),
});

function ContactPage() {
  const { product } = Route.useSearch();
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const f: FormErrors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof FormErrors;
        if (!f[k]) f[k] = issue.message;
      }
      setErrors(f);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const d = result.data;
    const subject = `Inquiry from ${d.name} (${d.company})${d.product ? ` — ${d.product}` : ""}`;
    const body = [
      `Name: ${d.name}`,
      `Company: ${d.company}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      d.product ? `Interested Product: ${d.product}` : "",
      "",
      "Message:",
      d.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = mailLink(subject, body);
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <>
      <section className="bg-surface text-surface-foreground">
        <div className="container-x py-16 md:py-24">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Contact
          </div>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
            Talk to our engineering team.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
            Whether you need a machine quotation, a technical consultation, or a hard-to-find spare
            part — we respond within one business day.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* FORM */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-6 md:p-10"
          >
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Fields marked * are required.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="Name *" name="name" error={errors.name} />
              <Field label="Company Name *" name="company" error={errors.company} />
              <Field label="Email *" name="email" type="email" error={errors.email} />
              <Field label="Phone *" name="phone" type="tel" error={errors.phone} />
              <Field
                label="Interested Product"
                name="product"
                defaultValue={product ?? ""}
                error={errors.product}
                className="md:col-span-2"
              />
              <Field
                label="Message *"
                name="message"
                error={errors.message}
                className="md:col-span-2"
                textarea
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60 md:w-auto"
            >
              {submitting ? "Opening your email…" : "Submit Inquiry"}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Submitting opens your email client with the message pre-filled.
            </p>
          </form>

          {/* INFO */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-foreground">Direct contact</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <span className="text-foreground">{site.address}</span>
                </li>
                <li>
                  <a
                    href={mailLink()}
                    className="flex items-start gap-3 text-foreground hover:text-accent"
                  >
                    <Mail className="mt-0.5 h-4 w-4 text-accent" />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                    className="flex items-start gap-3 text-foreground hover:text-accent"
                  >
                    <Phone className="mt-0.5 h-4 w-4 text-accent" />
                    {site.phoneDisplay}
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex gap-2">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-md bg-[oklch(0.7_0.18_150)] text-white hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid h-11 w-11 place-items-center rounded-md bg-[oklch(0.45_0.18_260)] text-white hover:opacity-90"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={mailLink()}
                  aria-label="Email"
                  className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground hover:opacity-90"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="relative aspect-[4/3] w-full">
                <div className="absolute inset-0 hero-grid-bg opacity-50" />
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div>
                    <MapPin className="mx-auto h-7 w-7 text-accent" />
                    <p className="mt-3 font-display text-lg font-semibold text-surface-foreground">
                      Our Location
                    </p>
                    <p className="mt-1 text-sm text-surface-foreground/70">{site.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  defaultValue,
  className,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  defaultValue?: string;
  className?: string;
  textarea?: boolean;
}) {
  const inputClass = cn(
    "mt-2 w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent",
    error ? "border-destructive" : "border-border",
  );
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          defaultValue={defaultValue}
          className={inputClass}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          defaultValue={defaultValue}
          className={inputClass}
        />
      )}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
