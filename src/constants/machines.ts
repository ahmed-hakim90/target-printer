import { images } from "./images";
import productData from "@/data/products.json";

export const machineCategories = [
  { id: "cnc", label: "Office Printers", image: images.machineCategories.cnc },
  {
    id: "hydraulicPress",
    label: "UV DTF Printers",
    image: images.machineCategories.hydraulicPress,
  },
  { id: "cutting", label: "DTF Printers", image: images.machineCategories.cutting },
  { id: "dtg", label: "DTG & Textile Printers", image: images.machineCategories.cutting },
  { id: "packaging", label: "Finishing Equipment", image: images.machineCategories.packaging },
  { id: "welding", label: "Production Printers", image: images.machineCategories.welding },
  {
    id: "materialHandling",
    label: "Large Format & Eco Solvent",
    image: images.machineCategories.materialHandling,
  },
  { id: "upcoming", label: "Coming Soon", image: images.machineCategories.cnc },
] as const;

export type MachineCategoryId = (typeof machineCategories)[number]["id"];
export type MachineRaw = {
  slug: string;
  name: string;
  categoryId: MachineCategoryId;
  summary: string;
  description: string[];
  specs: { label: string; value: string }[];
  image?: string | null;
};

const upcomingProducts: MachineRaw[] = [
  {
    slug: "nail-printer",
    name: "Nail Printer",
    categoryId: "upcoming",
    summary: "Compact direct nail-art printing for personalized beauty applications.",
    description: [
      "An upcoming Target printing solution for personalized nail-art applications. Final specifications and availability will be announced before launch.",
    ],
    specs: [],
    image: null,
  },
  {
    slug: "coffee-printer",
    name: "Coffee Printer",
    categoryId: "upcoming",
    summary: "Edible-image printing designed for personalized drinks and hospitality service.",
    description: [
      "An upcoming Target printing solution for personalized beverages and hospitality applications. Final specifications and availability will be announced before launch.",
    ],
    specs: [],
    image: null,
  },
  {
    slug: "portable-printer",
    name: "Portable Printer",
    categoryId: "upcoming",
    summary: "A portable format for convenient on-demand color printing.",
    description: [
      "An upcoming Target portable color-printing solution. Final specifications and availability will be announced before launch.",
    ],
    specs: [],
    image: null,
  },
];

export const machineCatalog = [...(productData as MachineRaw[]), ...upcomingProducts];
