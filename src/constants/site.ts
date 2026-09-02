const fullNav = [
  { label: "Home", to: "/" as const },
  { label: "Products", to: "/machines" as const },
  { label: "Solutions", to: "/services" as const },
  { label: "Spare Parts", to: "/parts" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export const site = {
  name: "Target Printers",
  short: "TARGET",
  tagline: "High-performance printing solutions, made in Egypt",
  url: "https://target-printer.com",
  ogImagePath: "/og.jpg",
  description:
    "Target Printers by Modern Egypt supplies office, DTF, UV DTF and large-format printing systems with local technical support and genuine spare parts.",
  email: "info@modernegypt.com.eg",
  phoneDisplay: "0150 008 8874",
  whatsappNumber: "201500088875",
  facebook: "https://facebook.com/",
  address: "Plot 20, First Central Industrial Zone, District 27, 15 May City, Cairo, Egypt",
  previewMode: false,
  nav: fullNav,
};

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsappNumber}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
export const mailLink = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${site.email}${q ? `?${q}` : ""}`;
};
