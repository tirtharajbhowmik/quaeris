<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# UI pipeline — MANDATORY for new sections, elements, and pages

**Never build new UI directly in Next.js.** Every new section/element/page goes
mockup-first: standalone HTML in `../mockup/sections/` (copy `_template.html`),
reviewed and approved by the human in a browser, THEN ported. Full method:
`../mockup/sections/README.md`. Port order: content → both brand configs
(`src/brands/*/config.ts` + shared type in `src/config/types.ts`), new CSS →
`globals.css` (token-driven), markup → component reading `@/config/brand.config`.

# White-label rules (this repo's architecture)

- Components NEVER hardcode brand content (names, copy, colors, URLs) — everything
  flows from `@/config/brand.config`; the active brand is selected at build time by
  `scripts/select-brand.mjs` (BRAND env: veris|quaeris) into gitignored `src/brand-active/`.
- Brand config modules export VALUES only; shared types live in `src/config/types.ts`.
- Brand-divergent styling = CSS custom properties defined in BOTH
  `src/brands/*/tokens.css` files; never hardcode brand hex/radius/fonts in shared CSS.
- One brand's dev server per checkout at a time (`dev:quaeris` :3101 / `dev:veris` :3100
  share `src/brand-active/` and `.next/`).
