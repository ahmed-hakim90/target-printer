import p3300Overview from "@/assets/products/ta-p3300dnw/01-overview.png";
import p3300BoxContents from "@/assets/products/ta-p3300dnw/02-box-contents.png";
import p3300Features from "@/assets/products/ta-p3300dnw/03-features.png";
import p3300Package from "@/assets/products/ta-p3300dnw/04-package.png";
import m3300Front from "@/assets/products/ta-m3300/01-front.png";
import m3300BoxContents from "@/assets/products/ta-m3300/02-box-contents.png";
import m3300Features from "@/assets/products/ta-m3300/03-features.png";
import m3300Angle from "@/assets/products/ta-m3300/04-angle.png";
import m3300Gallery from "@/assets/products/ta-m3300/05-gallery.png";
import m3300FrontDetail from "@/assets/products/ta-m3300/06-front-detail.png";
import p2000Overview from "@/assets/products/ta-p2000w/01-overview.png";
import p2000Gallery from "@/assets/products/ta-p2000w/02-gallery.png";
import p2000Features from "@/assets/products/ta-p2000w/03-features.png";
import p2000Angle from "@/assets/products/ta-p2000w/04-angle.png";
import p2000Front from "@/assets/products/ta-p2000w/05-front.png";
import p2000Views from "@/assets/products/ta-p2000w/06-views.png";
import p2000FrontBranded from "@/assets/products/ta-p2000w/07-front-branded.png";
import p2000Details from "@/assets/products/ta-p2000w/08-details.png";
import catalogM301 from "@/assets/catalog/products/ta-m301.png";
import catalogM3300 from "@/assets/catalog/products/ta-m3300.png";
import catalogM24000w from "@/assets/catalog/products/ta-m24000w.png";
import catalogM40lonw from "@/assets/catalog/products/ta-m40lonw.png";
import catalogM2300w from "@/assets/catalog/products/ta-m2300w.png";
import catalogP2000w from "@/assets/catalog/products/ta-p2000w.png";
import catalogP3300dnw from "@/assets/catalog/products/ta-p3300dnw.png";
import catalogP4400dnw from "@/assets/catalog/products/ta-p4400dnw.png";
import catalogTa602604 from "@/assets/catalog/products/ta-602-604.png";
import catalogTa604pro from "@/assets/catalog/products/ta-604pro.png";
import catalogDte from "@/assets/catalog/products/dte.png";
import catalogTa604uv from "@/assets/catalog/products/ta-604uv.png";
import catalogTa300uv from "@/assets/catalog/products/ta-300uv.png";
import catalogTa16011801 from "@/assets/catalog/products/ta-1601-1801.png";
import catalogKj16021802 from "@/assets/catalog/products/kj-1602-1802.png";
import catalogKj1804 from "@/assets/catalog/products/kj-1804.png";
import catalogLaminator from "@/assets/catalog/products/laminator.png";
import catalogPlotter from "@/assets/catalog/products/plotter-cutter.png";
import catalogNailPrinter from "@/assets/catalog/products/nail-printer.png";
import catalogCoffeePrinter from "@/assets/catalog/products/coffee-printer.png";
import catalogPortablePrinter from "@/assets/catalog/products/portable-printer.png";

export const productGalleries: Record<string, string[]> = {
  tam301: [catalogM301],
  tam24000w: [catalogM24000w],
  tam40lonw: [catalogM40lonw],
  tam2300w: [catalogM2300w],
  tap4400dnw: [catalogP4400dnw],
  targetta602604dtfprinterwithpowdershaker: [catalogTa602604],
  targetta604pro24inchdtfprinterfortshirttextile: [catalogTa604pro],
  targetdteintegrateddtgembroiderymachinedirecttogarmentembroiderymachine: [catalogDte],
  targetta604uv24inchuvdtfprinter: [catalogTa604uv],
  targetta300uva3a2uvdtfstickerprinterforbeginners: [catalogTa300uv],
  targetta16011801largeformatinoutdoorprinter: [catalogTa16011801],
  kingjetkj16021802largeformatinoutdoorprinter: [catalogKj16021802],
  kingjetkj1804largeformatinoutdoorprinter: [catalogKj1804],
  laminator: [catalogLaminator],
  plottercutter: [catalogPlotter],
  nailprinter: [catalogNailPrinter],
  coffeeprinter: [catalogCoffeePrinter],
  portableprinter: [catalogPortablePrinter],
  tap3300dnw: [catalogP3300dnw, p3300Overview, p3300BoxContents, p3300Features, p3300Package],
  tam3300: [
    catalogM3300,
    m3300Front,
    m3300BoxContents,
    m3300Features,
    m3300Angle,
    m3300Gallery,
    m3300FrontDetail,
  ],
  tap2000w: [
    catalogP2000w,
    p2000Overview,
    p2000Gallery,
    p2000Features,
    p2000Angle,
    p2000Front,
    p2000Views,
    p2000FrontBranded,
    p2000Details,
  ],
};
