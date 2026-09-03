import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  GraduationCap,
  Headphones,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { images } from "./images";

export const services = {
  name: "Target Printers",
  heroImage: images.hero,
  heroImageAlt: "Target printing equipment supported by Modern Egypt",
  meta: {
    description:
      "Printing equipment supply, installation, training, maintenance, genuine spare parts and annual support contracts.",
    ogDescription:
      "End-to-end printing solutions from equipment selection through daily production.",
  },
  hero: {
    eyebrow: "Printing Solutions",
    title: "Everything your business needs to",
    titleAccent: "print without interruption.",
    lead: "One local team for equipment selection, direct supply, professional installation, operator training, maintenance and genuine parts.",
  },
  pillars: [
    { value: "20+", label: "Years of experience" },
    { value: "19", label: "Unique product models" },
    { value: "6", label: "Integrated services" },
  ],
  intro: {
    eyebrow: "End-to-end support",
    title: "From the first consultation to every production day.",
    body: "We begin with your application, expected volume, media and working size—not a generic machine list. Then our team recommends the right configuration and stays responsible for installation, training and after-sales support.",
  },
  services: [
    {
      icon: ClipboardCheck,
      title: "Needs assessment & consultation",
      desc: "A practical recommendation based on your application, volume, working size, budget and running cost.",
    },
    {
      icon: Boxes,
      title: "Equipment supply & direct import",
      desc: "Office, DTF, UV DTF and large-format systems sourced with the correct configuration and warranty.",
    },
    {
      icon: Settings,
      title: "Installation & commissioning",
      desc: "Professional setup, calibration and output testing before the machine enters production.",
    },
    {
      icon: GraduationCap,
      title: "Operator training",
      desc: "Hands-on guidance for daily operation, media handling, routine care and consistent output quality.",
    },
    {
      icon: Wrench,
      title: "Maintenance & repairs",
      desc: "Scheduled and emergency service with accurate diagnostics to reduce downtime and protect equipment life.",
    },
    {
      icon: ShieldCheck,
      title: "Genuine parts & consumables",
      desc: "Original inks, drums, rollers, heads, electrical components and maintenance kits for supported models.",
    },
  ],
  applications: [
    {
      icon: BadgeCheck,
      title: "Labels & packaging",
      desc: "High-quality customized labels and print solutions for accurate brand presentation.",
    },
    {
      icon: GraduationCap,
      title: "Garment logos & direct printing",
      desc: "TPU logo and direct-to-garment production for professional results across multiple fabrics.",
    },
    {
      icon: Headphones,
      title: "Textile solutions",
      desc: "Stable color, sharp detail and practical workflows for textile printing businesses.",
    },
    {
      icon: Boxes,
      title: "Consumables & accessories",
      desc: "Approved inks, media and accessories selected for reliable day-to-day production.",
    },
    {
      icon: Settings,
      title: "Signage & banners",
      desc: "Indoor and outdoor wide-format solutions for banners, graphics and advertising applications.",
    },
    {
      icon: ShieldCheck,
      title: "Cups, bottles & cylinders",
      desc: "UV DTF technology for detailed transfers and full-coverage cylindrical applications.",
    },
  ],
  process: [
    ["01", "Understand", "We review what you print, your production volume and required quality."],
    ["02", "Recommend", "You receive a clear equipment configuration, quotation and support plan."],
    ["03", "Install", "Our technicians install, calibrate, test and train your operators."],
    ["04", "Support", "We remain available for preventive service, genuine parts and assistance."],
  ],
  promise: {
    title: "Support that continues after installation.",
    body: "Choose on-demand support or an annual maintenance agreement with preventive visits, service reporting and prioritized response.",
  },
  cta: {
    title: "Tell us what you need to print.",
    description:
      "Share your application, expected volume and working size. Our team will recommend the right equipment and service plan.",
  },
} as const;
