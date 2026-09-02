import { machineCatalog, machineCategories } from "./machines";
import { partCatalog, partCategories } from "./parts";
import type { MachineRaw } from "./machines";
import type { PartRaw } from "./parts";
import type { Machine, Part } from "./types";

export { images } from "./images";
export { site, waLink, mailLink } from "./site";
export { home } from "./home";
export { about } from "./about";
export { services } from "./services";
export { machineCategories, machineCatalog } from "./machines";
export { partCategories, partCatalog } from "./parts";
export type { Machine, Part } from "./types";
export type { MachineRaw, MachineCategoryId } from "./machines";
export type { PartRaw, PartCategoryId } from "./parts";

const machineCategoryById = Object.fromEntries(machineCategories.map((c) => [c.id, c])) as Record<
  (typeof machineCategories)[number]["id"],
  (typeof machineCategories)[number]
>;

const partCategoryById = Object.fromEntries(partCategories.map((c) => [c.id, c])) as Record<
  (typeof partCategories)[number]["id"],
  (typeof partCategories)[number]
>;

function resolveMachine(raw: MachineRaw): Machine {
  const cat = machineCategoryById[raw.categoryId];
  return {
    ...raw,
    category: cat.label,
    image: cat.image,
    gallery: [cat.image, cat.image, cat.image],
  };
}

function resolvePart(raw: PartRaw): Part {
  const cat = partCategoryById[raw.categoryId];
  return {
    ...raw,
    category: cat.label,
    image: cat.image,
  };
}

export const machines = machineCatalog.map(resolveMachine);
export const parts_list = partCatalog.map(resolvePart);

export const categories = ["All", ...machineCategories.map((c) => c.label)] as const;

export const partCategoryLabels = ["All", ...partCategories.map((c) => c.label)] as const;

export const findMachine = (slug: string) => machines.find((m) => m.slug === slug);

export const relatedMachines = (m: Machine) =>
  machines.filter((x) => x.categoryId === m.categoryId && x.slug !== m.slug).slice(0, 3);
