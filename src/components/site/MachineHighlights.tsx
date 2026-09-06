import {
  Droplets,
  Gauge,
  Layers2,
  Maximize2,
  MemoryStick,
  Network,
  Printer,
  Scissors,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Machine } from "@/constants";
import { useLanguage } from "@/lib/language";

type Highlight = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const findValue = (machine: Machine, patterns: RegExp[]) =>
  machine.specs.find((spec) => patterns.some((pattern) => pattern.test(spec.value)))?.value;

const findLabeledValue = (machine: Machine, patterns: RegExp[]) =>
  machine.specs.find((spec) => patterns.some((pattern) => pattern.test(spec.label)))?.value;

const cleanValue = (value: string, prefix: RegExp) =>
  value
    .replace(prefix, "")
    .replace(/^\s*[:–-]?\s*/, "")
    .trim();

const compact = (value: string, pattern: RegExp) => value.match(pattern)?.[0] ?? value;

function getHighlights(machine: Machine): Highlight[] {
  const highlights: Highlight[] = [];
  const add = (label: string, value: string | undefined, icon: LucideIcon) => {
    if (value && !highlights.some((item) => item.value === value))
      highlights.push({ label, value, icon });
  };

  if (machine.categoryId === "cnc") {
    const speed = findValue(machine, [/\d+\s*(?:ppm|pages per minute)/i]);
    const duplex = findLabeledValue(machine, [/^duplex printing$/i]);
    const connectivity =
      findLabeledValue(machine, [/^connectivity$/i]) ??
      findValue(machine, [
        /^connectivity\s*[:–-]+\s*\S/i,
        /^connectivity\s+\S/i,
        /wifi|wi-fi|ethernet|network|bluetooth/i,
      ]);
    const ram = findLabeledValue(machine, [/^ram$/i]);
    add(
      "Print Speed",
      speed
        ? compact(cleanValue(speed, /print speed/i), /\d+\s*(?:ppm|pages per minute)/i)
        : undefined,
      Gauge,
    );
    add("Duplex", duplex ? cleanValue(duplex, /duplex printing/i) : undefined, Layers2);
    add(
      "Connectivity",
      connectivity ? cleanValue(connectivity, /connectivity/i) : undefined,
      Network,
    );
    add("Memory", ram ? cleanValue(ram, /ram/i) : undefined, MemoryStick);
  } else if (machine.categoryId === "packaging") {
    const width = findLabeledValue(machine, [
      /cutting width/i,
      /laminating width/i,
      /feeding width/i,
    ]);
    const speed = findLabeledValue(machine, [/cutting speed/i, /laminating speed/i]);
    const pressure =
      findLabeledValue(machine, [/cutting pressure/i]) ??
      findValue(machine, [/method of pressure/i]);
    add(
      "Working Width",
      width ? cleanValue(width, /(?:cutting|laminating|feeding) width/i) : undefined,
      Maximize2,
    );
    add(
      "Working Speed",
      speed ? cleanValue(speed, /(?:cutting|laminating) speed/i) : undefined,
      Gauge,
    );
    add(
      "Operation",
      pressure ? cleanValue(pressure, /(?:cutting pressure|method of pressure)/i) : undefined,
      Scissors,
    );
  } else {
    const speed = findValue(machine, [/(?:\d+(?:\.\d+)?\s*(?:sqm|m²)\/h|(?:4|6|8)\s*pass\s+\d+)/i]);
    const width = findLabeledValue(machine, [/max print width/i, /max media width/i]);
    const color = findLabeledValue(machine, [/^color$/i]);
    const printhead = findLabeledValue(machine, [/^printhead$/i]);
    add(
      "Print Speed",
      speed
        ? cleanValue(speed, /printing speed output(?:\s*\(sqm\/hr\))?|print speed/i)
        : undefined,
      Gauge,
    );
    add(
      "Print Width",
      width ? cleanValue(width, /max (?:print|media) width/i) : undefined,
      Maximize2,
    );
    add("Ink Colors", color ? cleanValue(color, /^color\b/i) : undefined, Droplets);
    add("Printheads", printhead ? cleanValue(printhead, /printhead/i) : undefined, Printer);
  }

  return highlights.slice(0, 3);
}

export function MachineHighlights({ machine }: { machine: Machine }) {
  const { t } = useLanguage();
  const highlights = getHighlights(machine);

  if (!highlights.length) return null;

  return (
    <dl
      className="grid grid-cols-3 border-y border-border py-3"
      aria-label={t("Key specifications")}
    >
      {highlights.map(({ label, value, icon: Icon }) => (
        <div
          key={`${label}-${value}`}
          className="flex min-w-0 flex-col items-center border-e border-border px-1.5 text-center last:border-e-0"
        >
          <Icon
            aria-hidden="true"
            className="mb-1.5 h-4 w-4 shrink-0 text-accent"
            strokeWidth={1.9}
          />
          <dd
            className="line-clamp-2 text-[11px] font-bold leading-4 text-foreground"
            title={value}
          >
            {value}
          </dd>
          <dt className="mt-0.5 text-[9px] font-medium leading-3 text-muted-foreground">
            {t(label)}
          </dt>
        </div>
      ))}
    </dl>
  );
}
