import { Factory, FileText, FlaskConical, Layers, Plane, Zap } from "lucide-react";
import { images } from "./images";

export const products = {
  name: "Target Printers",
  heroImage: images.machineCategories.packaging,
  heroImageAlt: "Industrial raw materials and packaging sector supplies",
  meta: {
    description:
      "IM sector at Target Printers — leading supplier of industrial raw materials including paper, pulp, and pharma products for manufacturing, aerospace, and energy.",
    ogDescription:
      "High-quality industrial raw materials sourced from trusted suppliers worldwide. Paper, pulp, and pharma products with personalized service from Target Printers.",
  },
  hero: {
    eyebrow: "Industrial Materials",
    title: "Welcome to the IM sector",
    titleAccent: "at Target Printers.",
    lead: "We are a leading supplier of industrial raw materials, dedicated to providing high-quality products and exceptional customer service. Our extensive range of raw materials is sourced from trusted suppliers around the world, ensuring that our customers receive the best products for their specific needs.",
  },
  ourProducts: {
    eyebrow: "Our Products",
    title: "A wide range of industrial raw materials.",
    intro: "We offer a wide range of industrial raw materials, including:",
    items: [
      { icon: FileText, title: "Paper Products" },
      { icon: Layers, title: "Pulp Products" },
      { icon: FlaskConical, title: "Pharma Products" },
    ],
  },
  industries: {
    eyebrow: "Industries Served",
    title: "Materials trusted across demanding sectors.",
    intro: "Our raw materials are used in a variety of industries, including:",
    items: [
      {
        icon: Factory,
        label: "Manufacturing",
      },
      {
        icon: Plane,
        label: "Aerospace",
      },
      {
        icon: Zap,
        label: "Energy",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "Quality, reliability, and customer satisfaction.",
    body: "At Target, we pride ourselves on our commitment to quality, reliability, and customer satisfaction. Our team of experts is dedicated to providing personalized service and support to ensure that our customers receive the right products for their specific needs.",
  },
  cta: {
    title: "Get in Touch",
    description:
      "Contact us today to learn more about our industrial raw materials and how we can help your business succeed.",
  },
} as const;
