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
  const effectiveCategoryId = /dtg|direct-to-garment|embroidery|\bdte\b/i.test(raw.name)
    ? ("dtg" as const)
    : raw.categoryId;
  const cat = machineCategoryById[effectiveCategoryId];
  const productImage = raw.image || cat.image;
  const knownLabels = [
    "Working Environment",
    "Operation Environment",
    "Ink Supply System",
    "Capping & Moisturizing",
    "Automatic Cleaning",
    "Printing Speed Output",
    "First print out time",
    "Power consumption",
    "Paper tray capacity",
    "Print resolution",
    "Duplex printing",
    "Max Media Width",
    "Max Print Width",
    "Laminating Thickness",
    "Laminating Speed",
    "Laminating Width",
    "Cutting Pressure",
    "Cutting Speed",
    "Cutting Width",
    "Feeding Width",
    "Heating System",
    "Drying System",
    "Lamination Way",
    "White Ink Cycle",
    "Feed & Take up System",
    "Visual Positioning System",
    "Smart Printhead maintenance",
    "RIP Software",
    "Media Thickness",
    "Media Type",
    "Machine Size",
    "Packing Size",
    "Print speed",
    "Printhead",
    "Product type",
    "Product",
    "Model",
    "Color",
    "Ink Type",
    "Inking System",
    "Input Power",
    "Power supply",
    "RAM",
    "Processor",
  ];
  const specs = raw.specs.map(({ value }, index) => {
    const label = knownLabels.find((candidate) =>
      value.toLowerCase().startsWith(candidate.toLowerCase()),
    );
    if (!label) return { label: index === 0 ? "Product information" : "Feature", value };
    return { label, value: value.slice(label.length).replace(/^\s*[:–-]\s*/, "") || value };
  });
  return {
    ...raw,
    categoryId: effectiveCategoryId,
    category: cat.label,
    specs,
    image: productImage,
    gallery: [productImage],
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

const productKey = (name: string) =>
  name
    .toLowerCase()
    .replace(/office printer/g, "")
    .replace(/[^a-z0-9]/g, "");

const resolvedMachines = machineCatalog.map(resolveMachine);
const machineGroups = new Map<string, Machine[]>();
resolvedMachines.forEach((machine) => {
  const key = productKey(machine.name);
  machineGroups.set(key, [...(machineGroups.get(key) ?? []), machine]);
});

export const machines: Machine[] = Array.from(machineGroups.values()).map((group) => {
  const primary = [...group].sort((a, b) => b.specs.length - a.specs.length)[0];
  const primaryLabels = new Set(primary.specs.map((spec) => spec.label.toLowerCase()));
  const supplementalSpecs = group
    .filter((machine) => machine.slug !== primary.slug)
    .flatMap((machine) => machine.specs)
    .filter(
      (spec) =>
        spec.label !== "Feature" &&
        spec.label !== "Product information" &&
        !primaryLabels.has(spec.label.toLowerCase()),
    );
  const uniqueSpecs = Array.from(
    new Map(
      [...primary.specs, ...supplementalSpecs].map((spec) => [
        `${spec.label.toLowerCase()}::${spec.value.toLowerCase()}`,
        spec,
      ]),
    ).values(),
  );
  return {
    ...primary,
    description: Array.from(new Set(group.flatMap((machine) => machine.description))),
    specs: uniqueSpecs,
    gallery: Array.from(new Set(group.map((machine) => machine.image).filter(Boolean))),
  };
});
export const parts_list = partCatalog.map(resolvePart);
export const findPart = (slug: string) => parts_list.find((part) => part.slug === slug);
export const relatedParts = (part: Part, limit = 3) =>
  parts_list.filter((candidate) => candidate.slug !== part.slug).slice(0, limit);

export const categories = ["All", ...machineCategories.map((c) => c.label)] as const;

export const partCategoryLabels = ["All", ...partCategories.map((c) => c.label)] as const;

export const findMachine = (slug: string) => {
  const exact = machines.find((machine) => machine.slug === slug);
  if (exact) return exact;
  const raw = resolvedMachines.find((machine) => machine.slug === slug);
  return raw
    ? machines.find((machine) => productKey(machine.name) === productKey(raw.name))
    : undefined;
};

export const relatedMachines = (m: Machine) =>
  machines.filter((x) => x.categoryId === m.categoryId && x.slug !== m.slug).slice(0, 3);
