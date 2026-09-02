import { images } from "./images";
export const partCategories = [
  { id: "rotating", label: "Inks & Consumables", image: images.partCategories.rotating },
  { id: "hydraulics", label: "Print Heads", image: images.partCategories.hydraulics },
  {
    id: "powerTransmission",
    label: "UV Components",
    image: images.partCategories.powerTransmission,
  },
  { id: "conveying", label: "Media Handling", image: images.partCategories.conveying },
  { id: "electrical", label: "Electrical Parts", image: images.partCategories.electrical },
  { id: "automation", label: "Maintenance Kits", image: images.partCategories.automation },
] as const;
export type PartCategoryId = (typeof partCategories)[number]["id"];
export type PartRaw = { slug: string; name: string; categoryId: PartCategoryId; summary: string };
export const partCatalog: PartRaw[] = [
  {
    slug: "original-inks",
    name: "Original Target Inks",
    categoryId: "rotating",
    summary: "Color-consistent inks matched to Target print profiles and production systems.",
  },
  {
    slug: "print-heads",
    name: "Genuine Print Heads",
    categoryId: "hydraulics",
    summary: "Replacement print heads with installation and calibration by trained technicians.",
  },
  {
    slug: "uv-lamps",
    name: "UV Lamps & Curing Parts",
    categoryId: "powerTransmission",
    summary: "Reliable UV curing components for stable adhesion and production quality.",
  },
  {
    slug: "rollers",
    name: "Pinch Rollers & Media Feed",
    categoryId: "conveying",
    summary: "Precision media-handling parts that protect tracking accuracy and feed consistency.",
  },
  {
    slug: "boards-motors",
    name: "Boards, Motors & Sensors",
    categoryId: "electrical",
    summary: "Original electrical components diagnosed and fitted by the Target service team.",
  },
  {
    slug: "maintenance-kits",
    name: "Preventive Maintenance Kits",
    categoryId: "automation",
    summary: "Scheduled-service kits that reduce downtime and extend machine life.",
  },
];
