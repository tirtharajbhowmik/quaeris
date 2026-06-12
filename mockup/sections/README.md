# Section pipeline — mockup-first HTML → review → Next.js

The standard method for adding ANY new UI section, element, or page to this site.
Nothing ships to the Next.js app until its HTML mockup has been reviewed and approved
in a browser. (Method distilled from the ruh-uiux-agent workflow: mockup-first → verify → port.)

## Why HTML first

- Iterating on a standalone HTML file is minutes, not component plumbing.
- Mockups here link the app's REAL `tokens.css` and `globals.css` — pixel-true brand,
  zero duplicated styles, no drift between "design" and "build".
- The approved mockup stays in this folder as the design record for the component.

## The pipeline

### 1 · Spec
Check `docs/page-specs/` — most pages already have an implementation-ready spec with
section blueprints, copy, and SEO requirements. If the new thing has no spec, write
3–5 lines first: purpose, audience, sections, source of copy.

### 2 · Mock
```bash
cp mockup/sections/_template.html mockup/sections/$(date +%F)-<section-name>.html
```
Build the section in that file. Hard rules:
- **Existing classes first** (`.section-pad`, `.container`, `.section-header`, `.card`,
  `.btn`, `.eyebrow`, `.display-*` …). New CSS only when no pattern fits — put it in a
  `<style>` block labelled `/* PORT: new classes */` so the port step knows what moves
  into `globals.css` (token-driven, brand-agnostic).
- **Tokens only.** Never hardcode brand hex, radius, or font names. If a value isn't a
  token yet, that's a signal to add one to BOTH brand token files at port time.
- Real copy where known; placeholder data marked `data-placeholder`.
- Lucide-style SVG icons only, `aria-hidden` on decorative ones.
- Semantic heading order, WCAG AA contrast, 44px touch targets.

### 3 · Review
```bash
open mockup/sections/<file>.html      # file:// works — CSS is linked relatively
```
Self-check against the quality bar (spacing rhythm, type scale, contrast, mobile at
390px via responsive mode), fix everything, THEN show the human. Iterate in the HTML
until they approve. **Do not start the port before approval.**

### 4 · Port (on approval only)
1. **Content → brand configs.** All copy/data from the mockup goes into
   `web/src/brands/quaeris/config.ts` AND `web/src/brands/veris/config.ts`
   (template gets brand-neutral equivalents), with a shared interface in
   `web/src/config/types.ts` (`satisfies` in both configs).
2. **New CSS → `globals.css`**, token-driven (anything brand-divergent becomes a
   token in both brand files). Copy the `PORT: new classes` block, never restyle ad hoc.
3. **Markup → component** in `web/src/components/`, reading from
   `@/config/brand.config` — zero hardcoded content (see AGENTS.md).
4. Wire into the page/route.

### 5 · Verify & commit
```bash
cd web && npx tsc --noEmit && npm run build:quaeris
```
Visual-compare the live section on :3101 against the mockup. Commit the mockup file
TOGETHER with the component port — the mockup is the design record. Keep the mockup;
never delete approved ones.

## Notes
- Active brand in `_template.html` is **quaeris**; for template (Veris) work, point the
  tokens `<link>` at `../../web/src/brands/veris/tokens.css` and load Fraunces instead
  of Roboto in the fonts `<link>`.
- The browser ignores the Tailwind at-rules at the top of `globals.css` — expected.
- `.reveal` elements are force-visible in mockups via a shim; in-app animation comes
  from `Reveal.tsx` at port time.
