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

export const machineCatalog = productData as MachineRaw[];
