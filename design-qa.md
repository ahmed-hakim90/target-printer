# Product-card specification strip — Design QA

- Source visual truth: `/var/folders/3m/vwzv8hc14j3gdlkm8wtvscg80000gn/T/codex-clipboard-08c3f0d9-d207-4f54-a3e5-0954039f6d08.png` (2166 × 306 px, supplied desktop reference).
- Implementation evidence: `/.design-qa-cards-desktop.png` and `/.design-qa-rtl-desktop.png`, captured in the Codex in-app browser from `http://localhost:4173/machines`.
- Viewports checked: 360 × 800, 430 × 900, 768 × 900, 1024 × 900 and 1440 × 1000 CSS px at device scale 1.
- State: catalog cards in English/LTR and Arabic/RTL, with real product records.

**Findings**

- No actionable P0/P1/P2 mismatch remains in the requested card region. The implementation follows the reference's three-column, icon-first, centered specification treatment while retaining the project's existing color, typography, border and spacing tokens.
- The source crop omits the rest of the card. The implementation intentionally preserves the existing product image, category, title, summary, details, quote and WhatsApp actions.
- Cards with fewer than three verified source specifications show only verified values; no placeholder data is invented.

**Required fidelity surfaces**

- Fonts and typography: existing site families and weights retained; compact values use a bold 12 px role and labels use a legible 10 px supporting role with two-line clamps.
- Spacing and layout rhythm: three equal columns, 16 px vertical padding, 8 px inline padding and logical separators match the reference's compact rhythm while fitting existing card widths.
- Colors and visual tokens: existing accent blue, foreground, muted foreground and border tokens are used; contrast and theme behavior remain consistent.
- Image and icon quality: product imagery is unchanged; icons come from the project's installed vector icon library and use a consistent 20 px optical size.
- Copy and content: values are derived from canonical product specifications and labels are translated for Arabic.

**Responsive and interaction evidence**

- No document overflow at any tested viewport.
- Three specification columns remained within card widths of 305, 375, 333, 299 and 427 px respectively.
- RTL switched the document direction and logical separators correctly; Arabic labels rendered in place.
- Existing card links and quote/WhatsApp actions remained present and keyboard-addressable.
- A fresh browser load reported no console errors or warnings.

**Focused comparison evidence**

- Focused review used the specification strip because the supplied reference is itself a narrow component crop. The reference and implementation both present icon, emphasized value and secondary label in equal centered columns. The implementation adds subtle logical separators to integrate with the current card system.

**Comparison history**

- Initial pass found incorrect extraction of speed units and ink-color text from mixed source fields. Extraction was changed to prefer canonical labeled specs and numeric speed records, then browser content was recaptured. Post-fix evidence shows values such as `4 Pass 80 sqm/h`, `1850mm`, `4 colors (C, M, Y, K)`, and `40 ppm` without damaged prefixes.

**Implementation checklist**

- [x] Category-aware highlights from canonical data.
- [x] Responsive three-column layout with logical RTL borders.
- [x] English and Arabic accessible labels.
- [x] Existing actions and business behavior preserved.
- [x] Build, lint and browser verification complete.

**Follow-up polish**

- P3: a later content pass could normalize legacy spelling and units in the source catalog itself; this is outside the visual change.

final result: passed
