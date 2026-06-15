// ============================================================
// Contact / demo-request form — shared schema + types.
// This module is CLIENT-SAFE: it imports only zod, so both the
// client form and the server route handler can share one source
// of truth for fields and validation. Server-only concerns
// (persisting + forwarding leads) live in the route handler.
// ============================================================
import { z } from "zod";

/** Select options — shared between the form UI and validation. */
export const ROLES = [
  "Data / Analytics",
  "Engineering",
  "Finance",
  "Product",
  "Executive / Leadership",
  "Other",
] as const;

export const COMPANY_SIZES = [
  "1–50",
  "51–200",
  "201–1,000",
  "1,001–5,000",
  "5,000+",
] as const;

/** Treat empty-string (unselected <select>/<textarea>) as "absent". */
const optionalText = (max: number) =>
  z.preprocess(
    (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
    z.string().trim().max(max).optional(),
  );

const optionalEnum = <T extends readonly [string, ...string[]]>(values: T) =>
  z.preprocess(
    (v) => (v === "" || v == null ? undefined : v),
    z.enum(values).optional(),
  );

/**
 * The demo-request payload. Honeypot (`company_url`) is validated here as
 * "must be empty" so a filled value is a hard reject at the schema layer too,
 * but the route handler also short-circuits on it before doing any work.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z
    .string()
    .trim()
    .min(1, "Work email is required")
    .email("Enter a valid email address")
    .max(200),
  company: z.string().trim().min(1, "Company is required").max(160),
  role: optionalEnum(ROLES),
  companySize: optionalEnum(COMPANY_SIZES),
  message: optionalText(2000),
  // Optional plan prefill from the pricing CTA (?plan=enterprise).
  plan: optionalText(60),
  // Honeypot: real users never see or fill this.
  company_url: z
    .string()
    .max(0, "rejected")
    .optional()
    .or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Shape returned by POST /api/contact. */
export interface ContactResponse {
  ok: boolean;
  /** Per-field validation messages, keyed by field name. */
  fieldErrors?: Partial<Record<keyof ContactInput, string[]>>;
  /** A general, user-facing error message. */
  error?: string;
}
