# Target Printer redesign decision

- Target outcome: a complete, conversion-led product website for Modern Egypt's Target printing brand.
- Source of truth: public company content and media from `modernegypt.com.eg`; the supplied screenshot is visual direction, not a pixel-perfect clone.
- Information architecture: Home → Products → Product detail → Solutions / Spare parts → Quote or direct contact.
- Brand direction: deep Target blue, white product canvases, Cairo typography across Arabic and English, restrained elevation, real company assets only.
- Responsive rule: desktop uses product grids and a split hero; mobile reprioritizes to one column with persistent access to WhatsApp.
- Scope decision: all existing routes are enabled; inquiry submission intentionally opens the user's email client while WhatsApp remains an immediate alternative.
- Localization: English and Arabic share a persisted language context; Arabic switches the document to RTL and uses Noto Sans Arabic. Directional icons mirror logically.
- Motion: every route section enters through one IntersectionObserver-based motion system, with reduced-motion support. Route-level skeletons cover navigation loading and product grids.
- Social links: WhatsApp, email, telephone and the source site's confirmed YouTube video are active. Facebook, Instagram and LinkedIn icons remain visibly disabled until the company supplies official profile URLs; the legacy site exposes icons without destinations.
- Spare-parts scope: retained because the source company explicitly supplies genuine printer and photocopier parts; copy is constrained to inks, drums, rollers, print heads, electrical parts and maintenance kits rather than unrelated industrial components.
- Testimonials: all available reviews render in a looping, drag-enabled carousel. Autoplay pauses during pointer, hover or keyboard interaction, resumes afterward, and respects reduced-motion preferences.
