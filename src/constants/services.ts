import {
  Building2,
  ClipboardList,
  Factory,
  FlaskConical,
  GraduationCap,
  HardHat,
  Package,
  PenTool,
  Gauge,
} from "lucide-react";
import { images } from "./images";

export const services = {
  name: "Target",
  heroImage: images.hero,
  heroImageAlt: "Industrial installation and turnkey project services",
  meta: {
    description:
      "Installation, maintenance, repairs, spare parts, and turnkey project delivery — from feasibility and design through commissioning, training, and ongoing support.",
    ogDescription:
      "Comprehensive industrial services and end-to-end turnkey project solutions from Target — single point of responsibility from concept to completion.",
  },
  hero: {
    eyebrow: "Our Services",
    title: "Comprehensive services for",
    titleAccent: "seamless operations.",
    lead: "Beyond top-quality machinery, we deliver installation, maintenance, repairs, spare parts, and customized solutions — backed by skilled technicians and engineers focused on maximizing uptime.",
  },
  comprehensive: {
    title: "Comprehensive Services",
    body: "In addition to our top-quality machinery, we provide a comprehensive range of services to ensure your experience with us is seamless and hassle-free. Our team of skilled technicians and engineers is dedicated to offering services such as installation, maintenance, repairs, and spare parts supply. We also provide customized solutions tailored to your specific requirements. With our prompt and reliable service, you can maximize the uptime of your machinery and minimize downtime.",
  },
  turnkey: {
    eyebrow: "Turnkey Project Solutions",
    title: "From Concept to Completion",
    paragraphs: [
      "Welcome to Target, your trusted partner for comprehensive turnkey project delivery. As a leading provider of end-to-end solutions, we manage every aspect of your complex projects, allowing you to focus on your core business objectives.",
      "At Target, we understand the challenges of managing large-scale, multi-faceted projects. That's why we've developed a proven, streamlined process to handle the entire project lifecycle, from initial planning to final commissioning. By serving as your single point of responsibility, we ensure seamless coordination, efficient resource allocation, and successful project outcomes.",
    ],
  },
  turnkeyServices: {
    title: "Our Turnkey Services",
    items: [
      {
        icon: ClipboardList,
        title: "Feasibility Studies and Planning",
        desc: "Our experienced team conducts in-depth assessments to determine the viability and scope of your project.",
      },
      {
        icon: PenTool,
        title: "Design and Engineering",
        desc: "We provide cutting-edge design and engineering services to bring your vision to life, optimizing functionality and cost-effectiveness.",
      },
      {
        icon: Package,
        title: "Procurement and Sourcing",
        desc: "Our extensive supply chain network allows us to procure high-quality materials and equipment at the best possible terms.",
      },
      {
        icon: HardHat,
        title: "Construction and Installation",
        desc: "Our skilled professionals execute the construction and installation process with the utmost precision and safety.",
      },
      {
        icon: Gauge,
        title: "Commissioning and Testing",
        desc: "We meticulously commission and test all systems to ensure optimal performance and compliance with industry standards.",
      },
      {
        icon: GraduationCap,
        title: "Training and Support",
        desc: "We provide comprehensive training and ongoing support to ensure the long-term success of your project.",
      },
    ],
  },
  industries: {
    title: "Industries We Serve",
    intro:
      "Target has a proven track record of delivering turnkey solutions across a diverse range of industries, including:",
    items: [
      {
        icon: Factory,
        label: "Industrial",
        desc: "Manufacturing facilities, warehouses, and logistics hubs.",
      },
      {
        icon: Building2,
        label: "Infrastructure",
        desc: "Transportation, utilities, and public works projects.",
      },
      {
        icon: FlaskConical,
        label: "Pharma",
        desc: "Factories, research facilities.",
      },
    ],
  },
  projectManagement: {
    title: "Our Project Management Approach",
    body: "At the heart of our turnkey project delivery is our robust project management methodology. Our dedicated project managers work closely with you, employing advanced tools and techniques to ensure seamless coordination, effective risk mitigation, and timely project completion.",
  },
  trackRecord: {
    title: "Proven Track Record of Success",
    lead: "Over the years, Target has successfully completed numerous turnkey projects, earning a reputation for excellence in project delivery.",
    portfolio: { label: "portfolio", to: "/machines" as const },
    testimonials: { label: "client testimonials", to: "/contact" as const },
    closing: "to learn more about their experience working with us.",
  },
  cta: {
    title: "Ready to discuss your next project?",
    description:
      "From installation and maintenance to full turnkey delivery, our team is ready to scope solutions tailored to your requirements.",
  },
} as const;
