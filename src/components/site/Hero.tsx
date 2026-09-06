import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { QuoteButton } from "@/components/site/CTAButtons";
import { StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { images } from "@/constants/images";
import { useLanguage } from "@/lib/language";

const stats = [
  ["20+", "Years of experience"],
  ["48+", "Happy customers"],
  ["27+", "Products delivered"],
] as const;

const trustPoints = ["Reliable quality", "Technical support", "Genuine spare parts"] as const;

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-primary md:min-h-[calc(100svh-5rem)]">
      <img
        src={images.factoryBackdrop}
        alt=""
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-[55%_center] lg:object-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,18,49,.97)_0%,rgba(2,18,49,.88)_42%,rgba(2,18,49,.48)_72%,rgba(2,18,49,.28)_100%)] rtl:bg-[linear-gradient(270deg,rgba(2,18,49,.97)_0%,rgba(2,18,49,.88)_42%,rgba(2,18,49,.48)_72%,rgba(2,18,49,.28)_100%)] max-md:bg-[linear-gradient(180deg,rgba(2,18,49,.9)_0%,rgba(2,18,49,.86)_55%,rgba(2,18,49,.96)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/10" aria-hidden="true" />

      <div className="container-x relative flex min-h-[calc(100svh-4rem)] min-w-0 items-center py-12 sm:py-16 md:min-h-[calc(100svh-5rem)] lg:py-20">
        <StaggerGroup className="relative z-10 w-full min-w-0 max-w-3xl">
          <StaggerItem>
            <img
              src={images.targetLogo}
              alt="Target — Modern Egypt Company"
              width={2560}
              height={1263}
              className="mb-7 h-auto w-40 object-contain sm:mb-9 sm:w-52 lg:w-60"
            />
          </StaggerItem>

          <StaggerItem>
            <h1 className="max-w-2xl text-balance text-[2.65rem] font-extrabold leading-[1.08] text-white rtl:leading-[1.4] sm:text-6xl sm:leading-[1.05] sm:rtl:leading-[1.35] md:text-6xl lg:text-[4.4rem] lg:leading-[.98] lg:rtl:leading-[1.25] xl:text-[5rem]">
              {t("Print bigger.")}
              <br />
              <span className="text-blue-300">{t("Build smarter.")}</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p
              lang="ar"
              dir="rtl"
              className="mt-4 w-fit max-w-full text-xl font-bold text-white sm:mt-5 sm:text-2xl lg:text-3xl"
            >
              صناعة مصرية بطموح عالمي
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 sm:mt-5 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              {t(
                "High-performance printing systems engineered for businesses that expect consistent quality, dependable uptime, and expert local support.",
              )}
            </p>
          </StaggerItem>

          <StaggerItem className="mt-5 grid max-w-md grid-cols-3 items-start gap-0 sm:mt-7">
            {stats.map(([value, label], i) => (
              <div key={label} className="flex min-w-0 items-center">
                <div className="min-w-0 flex-1 pe-2 sm:pe-4">
                  <strong className="block text-2xl font-extrabold text-white">{value}</strong>
                  <span className="block text-[11px] font-semibold leading-5 text-white/70 sm:text-xs">
                    {t(label)}
                  </span>
                </div>
                {i < stats.length - 1 && <span className="h-10 w-px shrink-0 bg-white/25" />}
              </div>
            ))}
          </StaggerItem>

          <StaggerItem className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 md:grid md:grid-cols-1 lg:flex lg:flex-wrap">
            <QuoteButton size="lg" className="w-full sm:w-auto" />
            <Link
              to="/machines"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-white/50 bg-white/10 px-6 font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20 sm:w-auto"
            >
              {t("Explore products")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </StaggerItem>

          <StaggerItem className="mt-7 hidden gap-3 text-sm font-semibold text-white/75 sm:flex sm:flex-wrap sm:gap-x-6 lg:mt-9">
            {trustPoints.map((x) => (
              <span key={x} className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-blue-300" />
                {t(x)}
              </span>
            ))}
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
