import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { mailLink, site, waLink } from "@/constants";
import { useLanguage } from "@/lib/language";

export function Footer() {
  const { language, t } = useLanguage();
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 min-w-16 place-items-center rounded-md bg-white px-2 text-primary font-display text-xs font-extrabold">
                TARGET
              </span>
              <span className="font-display text-lg font-semibold">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-surface-foreground/70">
              {language === "ar"
                ? "تكنولوجيا طباعة مصرية، معدات احترافية وقطع غيار أصلية بدعم فريق محلي منذ عام 2005."
                : "Egyptian printing technology, professional equipment and genuine spare parts—supported by a local team since 2005."}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-surface-foreground/50">
              {t("Company")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-surface-foreground/80 transition-colors hover:text-accent"
                  >
                    {t(n.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-surface-foreground/50">
              {t("Contact")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-surface-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                {site.address}
              </li>
              <li>
                <a
                  href={mailLink()}
                  className="inline-flex items-center gap-2.5 text-surface-foreground/80 hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2.5 text-surface-foreground/80 hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-surface-foreground/50">
              {t("Follow")}
            </h4>
            <ul className="mt-4 flex gap-2.5">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-surface-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </li>
              <li>
                <span
                  aria-label="Instagram link pending confirmation"
                  title="Official link pending confirmation"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-surface-foreground/35"
                >
                  <Instagram className="h-4 w-4" />
                </span>
              </li>
              <li>
                <span
                  aria-label="LinkedIn link pending confirmation"
                  title="Official link pending confirmation"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-surface-foreground/35"
                >
                  <Linkedin className="h-4 w-4" />
                </span>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=VhBl3dHT5SY"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-surface-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </li>
              <li>
                <span
                  aria-label="Facebook link pending confirmation"
                  title="Official link pending confirmation"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-surface-foreground/35"
                >
                  <Facebook className="h-4 w-4" />
                </span>
              </li>
              <li>
                <a
                  href={mailLink()}
                  aria-label="Email"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-surface-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-surface-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Made in Egypt. Built for ambitious businesses.</p>
        </div>
      </div>
    </footer>
  );
}
