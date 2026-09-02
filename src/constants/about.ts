import { Award, Globe2, Layers, ShieldCheck } from "lucide-react";
import { images } from "./images";

export const about = {
  name: "Target Printers",
  heroImage: images.about,
  heroImageAlt: "Target Printers team and industrial solutions",
  meta: {
    description:
      "Target Printers — more than 10 years of professional manufacturing and turnkey solutions. Serving 200+ customers across 90+ countries.",
    ogDescription:
      "Learn how Target Printers delivers turnkey industrial solutions, machinery, raw materials, and after-sales support worldwide.",
  },
  hero: {
    eyebrow: "About Target Printers",
    title: "A leader in turnkey solutions",
    titleAccent: "across industrial fields.",
    lead: "Target Printers has more than 10 years of experience in professional manufacturing and is a leader in turnkey solution projects across different industrial fields.",
  },
  companyProfile: {
    eyebrow: "Company Profile",
    title: "Built on innovation, service, and global reach.",
    paragraphs: [
      "Target Printers Co., Ltd. was established in 2011, affiliated to Target Printers Company, which was famous for machine supplying and after-sales services. In order to meet the growing market demand, especially to provide a better service to all of our customers, Target set up its own trading company. Since then, Target has provided comprehensive solutions and excellent after-sales service to more than 200 customers.",
      "Target Printers Co., Ltd. was established in 2014. Since its inception, Target believed that the true way is to establish our company based on independent research and development, technological innovation. We adopt innovative and high technology from home and abroad in the design, advanced technology, and testing equipment, improve the product efficiency, and we have strong technical force, high-quality not only machinery but also raw material and perfect management department, accumulated more than 10 years of professional rich experience in our services in different sectors.",
      "Target Printers is committed to providing customers with all kinds of solutions reaching turnkey solutions, such as printing and packaging line, paper cup production line and so on. Now, Target Printers provides a wide range not only in machines but also in raw materials and consultation services and so on.",
      "Our support and reputation wins the trust of our customers. Now, our markets cover more than 90 countries, including Germany, UK, Spain, Italy, Poland, USA, Brazil, Australia, Egypt and so on. We are willing to strengthen cooperation and exchange ideas with all customers, becoming your ideal partner by our superior quality and service, and creating a brilliant future together. Let's make business easier and safer.",
    ],
  },
  milestones: [
    {
      year: "2011",
      title: "Trading Company",
      desc: "Established affiliated to Target Printers Company to expand machine supply and after-sales service.",
    },
    {
      year: "2014",
      title: "Target Printers Co., Ltd.",
      desc: "Founded on independent R&D, technological innovation, and advanced manufacturing capabilities.",
    },
    {
      year: "Today",
      title: "Global Partner",
      desc: "Comprehensive turnkey solutions for 200+ customers across more than 90 countries.",
    },
  ],
  strengths: [
    {
      icon: Layers,
      title: "Turnkey Solutions",
      desc: "Printing and packaging lines, paper cup production lines, and complete project delivery.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Innovation",
      desc: "Advanced technology, testing equipment, and high-quality machinery and raw materials.",
    },
    {
      icon: Globe2,
      title: "Global Markets",
      desc: "Serving customers in more than 90 countries across Europe, the Americas, and beyond.",
    },
    {
      icon: Award,
      title: "Trusted Service",
      desc: "Comprehensive solutions, consultation, and excellent after-sales support customers rely on.",
    },
  ],
  experience: {
    eyebrow: "Our Journey",
    title: "From machinery supply to global turnkey partner.",
    description:
      "Two milestones in our history reflect how Target grew from an affiliated trading company into an institution focused on R&D, innovation, and worldwide customer support.",
  },
  strengthsSection: {
    eyebrow: "Why partner with us",
    title: "Strengths that translate to results on your production line.",
  },
  cta: {
    title: "Let's make business easier and safer.",
    description:
      "We are ready to strengthen cooperation with you — from machinery and raw materials to turnkey solutions and consultation.",
  },
} as const;
