import { Award, Headphones, Lightbulb, ShieldCheck } from "lucide-react";
import { images } from "./images";

export const about = {
  name: "Modern Egypt",
  heroImage: images.about,
  heroImageAlt: "Modern Egypt printing equipment and technical operations",
  meta: {
    description:
      "Modern Egypt has supplied printers, photocopiers, genuine parts and technical support to Egyptian organizations since 2005.",
    ogDescription:
      "Discover the experience, values and local support behind Target Printers by Modern Egypt.",
  },
  hero: {
    eyebrow: "About Modern Egypt",
    title: "Twenty years of printing expertise.",
    titleAccent: "One dependable local partner.",
    lead: "Established in 2005, Modern Egypt Supplies & Import grew into a trusted specialist in printers, photocopiers, genuine parts and professional after-sales service.",
  },
  companyProfile: {
    eyebrow: "Our story",
    title: "Built to keep Egyptian businesses productive.",
    paragraphs: [
      "Modern Egypt Supplies & Import was established in 2005 with a clear goal: provide organizations and companies with complete, high-quality printing and document-processing solutions.",
      "Our work combines equipment supply and direct import with professional installation, maintenance, annual service contracts, genuine spare parts and technical consultation.",
      "Through the Target Printers brand, we bring together modern printing technology, practical local knowledge and a service team that remains accountable after installation.",
    ],
  },
  milestones: [
    {
      year: "2005",
      title: "Modern Egypt established",
      desc: "The company began serving the Egyptian printer and photocopier market.",
    },
    {
      year: "20+",
      title: "Years of experience",
      desc: "Two decades of equipment supply, service and long-term customer relationships.",
    },
    {
      year: "Today",
      title: "Target Printers",
      desc: "A growing range of office and production printing systems supported locally.",
    },
  ],
  strengths: [
    {
      icon: Lightbulb,
      title: "Modern technology",
      desc: "Current equipment selected for consistent quality and efficient operation.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & trust",
      desc: "Dependable specifications, genuine supplies and accountable service.",
    },
    {
      icon: Headphones,
      title: "Continuous support",
      desc: "A local technical team from installation through preventive maintenance.",
    },
    {
      icon: Award,
      title: "Competitive value",
      desc: "The right balance of purchase cost, running cost and long-term support.",
    },
  ],
  experience: {
    eyebrow: "Our journey",
    title: "Experience that continues after the sale.",
    description:
      "Every milestone reflects one priority: reliable equipment and support that protects customer uptime.",
  },
  strengthsSection: {
    eyebrow: "Why Modern Egypt",
    title: "The standards behind every recommendation.",
  },
  cta: {
    title: "Build a more reliable print workflow.",
    description:
      "Tell our team what you print and we will recommend the equipment and support plan that fits your operation.",
  },
} as const;
