import { images } from "./images";

export const machineCategories = [
  { id: "cnc", label: "Office Printers", image: images.machineCategories.cnc },
  {
    id: "hydraulicPress",
    label: "UV DTF Printers",
    image: images.machineCategories.hydraulicPress,
  },
  { id: "cutting", label: "DTF Printers", image: images.machineCategories.cutting },
  { id: "packaging", label: "Finishing Equipment", image: images.machineCategories.packaging },
  { id: "welding", label: "Large Format Printers", image: images.machineCategories.welding },
  {
    id: "materialHandling",
    label: "Eco Solvent Printers",
    image: images.machineCategories.materialHandling,
  },
] as const;
export type MachineCategoryId = (typeof machineCategories)[number]["id"];
export type MachineRaw = {
  slug: string;
  name: string;
  categoryId: MachineCategoryId;
  summary: string;
  description: string[];
  specs: { label: string; value: string }[];
};
const specs = (width: string, heads: string, application: string) => [
  { label: "Print width", value: width },
  { label: "Print heads", value: heads },
  { label: "Application", value: application },
  { label: "Support", value: "Installation, training & local service" },
  { label: "Warranty", value: "Official Target warranty" },
];
export const machineCatalog: MachineRaw[] = [
  {
    slug: "plotter-cutter",
    name: "Plotter Cutter",
    categoryId: "packaging",
    summary: "Accurate contour cutting for signage, vinyl and transfer workflows.",
    description: [
      "A dependable finishing system designed for precise cutting and clean production handoff.",
      "Supported locally with setup, operator training and spare parts.",
    ],
    specs: specs("Model dependent", "Precision servo", "Vinyl, signage and apparel"),
  },
  {
    slug: "laminator",
    name: "Professional Laminator",
    categoryId: "packaging",
    summary: "Wide-format lamination for durable, premium printed output.",
    description: [
      "Consistent pressure and heat control protect graphics and improve finish quality.",
      "Available in configurations matched to your daily production volume.",
    ],
    specs: specs("Wide format", "Heated rollers", "Signage and display graphics"),
  },
  {
    slug: "kingjet-kj-1804",
    name: "KingJet KJ-1804",
    categoryId: "welding",
    summary: "Large-format indoor and outdoor printer built for production environments.",
    description: [
      "A high-throughput platform for advertising, display and signage businesses.",
      "Target technical support helps you select inks, media and the right production profile.",
    ],
    specs: specs("1.8 m", "4-head configuration", "Indoor and outdoor signage"),
  },
  {
    slug: "kingjet-kj-1602-1802",
    name: "KingJet KJ-1602 / 1802",
    categoryId: "materialHandling",
    summary: "Versatile eco-solvent printing in 1.6 m and 1.8 m configurations.",
    description: [
      "Balanced quality, speed and running cost for growing print service providers.",
      "Delivered with installation, calibration and practical operator training.",
    ],
    specs: specs("1.6 / 1.8 m", "2-head configuration", "Banners, vinyl and posters"),
  },
  {
    slug: "target-ta-1601-1801",
    name: "Target TA-1601 / 1801",
    categoryId: "materialHandling",
    summary: "Target large-format system for reliable everyday production.",
    description: [
      "Designed for accessible operation, consistent color and dependable shift-to-shift output.",
      "A locally supported choice for businesses that value predictable uptime.",
    ],
    specs: specs("1.6 / 1.8 m", "Target production series", "Advertising and signage"),
  },
  {
    slug: "target-ta-300uv",
    name: "Target TA-300UV",
    categoryId: "hydraulicPress",
    summary: "A3/A2 UV DTF sticker printer for custom products and new businesses.",
    description: [
      "Produce premium transfers for glass, metal, acrylic, wood and more without weeding.",
      "Compact footprint with guidance from Target application specialists.",
    ],
    specs: specs("A3 / A2", "UV DTF configuration", "Hard-surface transfers"),
  },
];
