// Brand-agnostic import surface. The active brand is selected at build time
// by scripts/select-brand.mjs (BRAND env var) — components never know which.
export * from "./types";
export * from "@/brand-active/config";
