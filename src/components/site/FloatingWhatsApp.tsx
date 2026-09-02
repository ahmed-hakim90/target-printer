import { MessageCircle } from "lucide-react";
import { waLink } from "@/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hello Target Printers, I would like to inquire about your printing solutions.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 print:hidden"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
