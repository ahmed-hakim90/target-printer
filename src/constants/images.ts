import hero from "@/assets/target/3df4bd5dc5ee6fd1.jpg";
import factory from "@/assets/target/0cfbd64cba3e1f66.png";
import office from "@/assets/target/979d8fcf5f27fdd1.png";
import uv from "@/assets/target/2226686c9bdd587b.png";
import printerA from "@/assets/target/1e9ca3936e86de3a.png";
import printerB from "@/assets/target/21e3feca42018838.png";
import printerC from "@/assets/target/7a302621201a7238.png";
import printerD from "@/assets/target/4af7ee40bcac44a2.png";
import printerE from "@/assets/target/ad87b2eeac86bc2b.png";
import printerF from "@/assets/target/da1b942c62eca055.png";
import logo from "@/assets/target/modern-egypt-logo.png";

export const images = {
  hero,
  about: factory,
  logo,
  factory,
  office,
  uv,
  machineCategories: {
    cnc: office,
    hydraulicPress: uv,
    cutting: printerA,
    packaging: printerB,
    welding: printerC,
    materialHandling: printerD,
  },
  partCategories: {
    rotating: printerE,
    hydraulics: printerF,
    powerTransmission: uv,
    conveying: printerA,
    electrical: printerB,
    automation: office,
  },
} as const;
