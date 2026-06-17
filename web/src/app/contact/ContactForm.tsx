"use client";

import { useId, useRef, useState } from "react";
import {
  COMPANY_SIZES,
  ROLES,
  contactSchema,
  type ContactInput,
  type ContactResponse,
} from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = ContactResponse["fieldErrors"];

export default function ContactForm({ plan }: { plan?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string>("");
  const successRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  const fieldId = (name: string) => `${baseId}-${name}`;
  const errId = (name: string) => `${baseId}-${name}-err`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries()) as Record<string, string>;

    // Client-side validation first — same schema as the server.
    const result = contactSchema.safeParse(payload);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as FieldErrors);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: ContactResponse = await res.json().catch(() => ({ ok: false }));

      if (res.ok && data.ok) {
        setStatus("success");
        // Move focus to the confirmation for screen-reader users.
        requestAnimationFrame(() => successRef.current?.focus());
        return;
      }
      if (res.status === 400 && data.fieldErrors) {
        setErrors(data.fieldErrors);
        setStatus("error");
        return;
      }
      setFormError(data.error || "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setFormError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="contact-success"
        role="status"
        aria-live="polite"
      >
        <div className="contact-success-check" aria-hidden="true">
          ✓
        </div>
        <h2 className="contact-success-title">Thanks — we&apos;ll be in touch.</h2>
        <p className="contact-success-body">
          Your request is in. A member of the Quaeris team will reach out within one
          business day to schedule your demo. In the meantime, you can keep exploring the
          platform.
        </p>
        <a href="/platform" className="btn btn-primary">
          Explore the platform
        </a>
      </div>
    );
  }

  const ariaInvalid = (name: keyof ContactInput) =>
    errors?.[name]?.length ? true : undefined;
  const describedBy = (name: keyof ContactInput) =>
    errors?.[name]?.length ? errId(name) : undefined;

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {plan ? <input type="hidden" name="plan" value={plan} /> : null}

      {/* Honeypot — hidden from real users. */}
      <div className="contact-hp" aria-hidden="true">
        <label htmlFor={fieldId("company_url")}>Company URL</label>
        <input
          id={fieldId("company_url")}
          type="text"
          name="company_url"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="contact-field">
        <label htmlFor={fieldId("name")}>
          Full name <span className="contact-req" aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId("name")}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={ariaInvalid("name")}
          aria-describedby={describedBy("name")}
        />
        {errors?.name?.length ? (
          <p id={errId("name")} className="contact-err">
            {errors.name[0]}
          </p>
        ) : null}
      </div>

      <div className="contact-field">
        <label htmlFor={fieldId("email")}>
          Work email <span className="contact-req" aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={ariaInvalid("email")}
          aria-describedby={describedBy("email")}
        />
        {errors?.email?.length ? (
          <p id={errId("email")} className="contact-err">
            {errors.email[0]}
          </p>
        ) : null}
      </div>

      <div className="contact-field">
        <label htmlFor={fieldId("company")}>
          Company <span className="contact-req" aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId("company")}
          name="company"
          type="text"
          autoComplete="organization"
          required
          aria-invalid={ariaInvalid("company")}
          aria-describedby={describedBy("company")}
        />
        {errors?.company?.length ? (
          <p id={errId("company")} className="contact-err">
            {errors.company[0]}
          </p>
        ) : null}
      </div>

      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor={fieldId("role")}>Role</label>
          <select id={fieldId("role")} name="role" defaultValue="">
            <option value="">Select…</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div className="contact-field">
          <label htmlFor={fieldId("companySize")}>Company size</label>
          <select id={fieldId("companySize")} name="companySize" defaultValue="">
            <option value="">Select…</option>
            {COMPANY_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor={fieldId("message")}>What would you like to solve?</label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={4}
          placeholder="e.g. We need one trusted definition of revenue across finance and the board deck."
        />
      </div>

      {formError ? (
        <p className="contact-form-error" role="alert">
          {formError}
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary contact-submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Book a demo"}
      </button>

      <p className="contact-consent">
        By submitting, you agree to be contacted about Quaeris. We never share your details.
        See our <a href="/privacy">privacy policy</a>.
      </p>

      {/* Polite status for assistive tech. */}
      <p className="sr-only" role="status" aria-live="polite">
        {status === "submitting" ? "Sending your request…" : ""}
      </p>
    </form>
  );
}
