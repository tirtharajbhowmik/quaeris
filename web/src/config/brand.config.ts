// Brand-agnostic import surface. The active brand is selected at build time
// by scripts/select-brand.mjs (BRAND env var) — components never know which.
// INVARIANT: brand config modules export VALUES only (brand, images). Types are
// exported solely from ./types — a duplicate name across these two `export *`
// lines would be silently dropped by ES module resolution, not errored.
export * from "./types";
export * from "@/brand-active/config";
// Per-page content modules (src/brands/<brand>/pages/*), barrelled by select-brand.mjs.
export * from "@/brand-active/pages";
