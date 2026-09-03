# Design QA — Target Printers

- Source visual truth: `/var/folders/3m/vwzv8hc14j3gdlkm8wtvscg80000gn/T/codex-clipboard-f0a8ca23-ca07-47cb-af3b-fcd45b8fccb7.png`
- Implementation screenshot: `/Users/hakimo/Developer/ois-industrial-hub/qa-reviews-focused.png`
- Combined comparison: `/Users/hakimo/Developer/ois-industrial-hub/design-comparison.png`
- Source pixels: 760 × 1600. Implementation pixels: 1759 × 5034; browser CSS viewport 1440 × 900 with browser density normalization. Comparison normalized to 1600px height.
- State: public home page, default viewport state.

## Full-view comparison evidence

The implementation preserves the reference's Target-blue identity, split hero, product-category discovery, featured-product grid, Made in Egypt story, business solutions, conversion CTA, and dense footer. It intentionally improves whitespace, card hierarchy, imagery consistency, and action clarity rather than cloning the screenshot.

## Focused surface review

- Typography: Cairo is loaded across Arabic and English at weights 400–800, producing a consistent bilingual hierarchy without fallback drift.
- Layout rhythm: sections use one container and consistent 16/20/24/40/64 spacing; hero and grids reflow cleanly to one column.
- Colors: Target navy, electric blue, white and cool grey map to the supplied direction with accessible foreground contrast.
- Image quality: all visible brand and product assets are real company-source files; no generated or placeholder imagery is present.
- Copy: product categories, current catalog names, company contact data, Made in Egypt positioning and support services come from the supplied source/site context.
- Focused regions: hero, category grid, product cards and CTA were legible in the combined comparison; no additional crop was needed.

## Interaction and responsive evidence

- Browser-rendered routes tested: `/`, `/machines`, `/machines/target-ta-300uv`, `/services`, `/parts`, `/about`, `/contact`.
- Primary navigation, product-detail route, quote links, mailto, telephone and WhatsApp destinations resolve.
- Viewports checked: 320 × 720, 390 × 844, 768 × 1024, 1440 × 900 and 1920 × 1080 with no document overflow.
- Desktop and mobile screenshots were inspected. Browser console check found no current page errors after the duplicate-key correction.

## Comparison history

- Initial P2: About-page paragraph keys collided because two paragraphs shared the same opening text. Fixed by including the paragraph index; rebuilt and rechecked.
- Initial P2: floating WhatsApp copy still named the previous OIS brand. Replaced with Target Printers product-inquiry wording.
- Post-fix evidence: production build passes and all public routes render without 404s or horizontal overflow.
- Product-detail correction: the nested route was flattened so product URLs now render their own page rather than the catalog parent. All 27 source product records are present, and the TA-604Pro page was verified with its source image, 21 specification rows, quote flow, brochure request, and related products.
- Home-content completion: added source-aligned statistics, six service offerings, five Modern Egypt differentiators, interactive vision/values/mission tabs, three customer reviews, innovation updates with validation states, and the Target partner callout. Desktop and 390px mobile renders were checked with no horizontal overflow or console errors.
- Site-system completion: added persisted English/Arabic switching, RTL direction, Arabic typography, localized navigation/core catalog/contact/about/service content, global section reveal motion, reduced-motion fallback, and shared route skeleton states. Arabic home, catalog and contact routes were browser-tested at 390px with 14 animated home sections and no console errors.
- September refinement: confirmed the source company explicitly supplies genuine printer and photocopier spare parts, then removed unrelated industrial-parts wording. Switched the full site to Cairo and converted all three available reviews into a looping drag-enabled carousel with previous/next controls, pause-on-interaction, automatic resume and reduced-motion handling.
- Post-fix evidence: at 1600px the carousel transform advanced automatically after 3.2 seconds and manual controls remained accessible; at 390px Arabic mode reported `dir=rtl`, Cairo as the computed body font, localized review labels and zero horizontal overflow. The spare-parts route contained printer/copier-specific copy and no legacy bearings or PLC-cabinet copy.
- Catalog completion: the 27 source posts were normalized into 19 unique models, preserving supplemental gallery images and non-conflicting specifications. Legacy duplicate URLs resolve to their canonical model detail page.
- Motion and loading completion: product and review rails loop automatically, support pointer/touch dragging and keyboard controls, pause during interaction, resume afterward and respect reduced motion. Product media now uses stable-ratio loading, error and skeleton states.
- Brand-logo correction: the top bar now renders the official colored Modern Egypt logo at 44px mobile / 56px desktop height. It was visually checked on the live home route against the white header; no Target logo replaces it.
- SEO/access/performance pass: generated and served a valid 25-URL sitemap (six core routes plus 19 canonical products) and robots policy; verified both return HTTP 200. Added absolute canonical/Open Graph URLs, Organization and Product structured data, crawler directives, a keyboard skip link and accessible pressed states. The hero payload dropped from about 1.0 MB to 223 KB, and production vendor chunking removed the client bundle-size warning.
- Spare-parts detail pass: added six bilingual detail routes with responsive hero, overview, three structured information cards, related parts and direct conversion actions. Build-generated discovery now covers 31 URLs. Browser QA on `/parts/print-heads` caught and fixed a cached-image hydration race in the shared image component; the product image then rendered correctly after reload.

## Follow-up polish

- P3: replace the generic Facebook destination when the company's official page URL is supplied.

final result: passed
