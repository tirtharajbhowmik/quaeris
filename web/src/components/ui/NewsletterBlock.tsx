"use client";

import { useState, FormEvent } from "react";
import { brand } from "@/config/brand.config";
import Reveal from "./Reveal";

export default function NewsletterBlock() {
  const { newsletter } = brand;
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector<HTMLInputElement>("input[type=email]");
    if (!input || !input.value || !input.value.includes("@")) {
      setError(true);
      input?.focus();
      return;
    }
    setError(false);
    setSubscribed(true);
  }

  return (
    <div
      className="newsletter-block"
      role="complementary"
      aria-label="Newsletter signup"
    >
      <div className="container">
        <Reveal className="newsletter-inner">
          <span className="eyebrow">{newsletter.eyebrow}</span>
          <h3>{newsletter.headline}</h3>
          <p>{newsletter.body}</p>
          <form
            className="newsletter-form"
            noValidate
            aria-label="Newsletter signup form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              className="newsletter-input"
              placeholder="you@company.com"
              required
              autoComplete="email"
              disabled={subscribed}
              style={error ? { borderColor: "var(--error)" } : undefined}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={subscribed}
              style={
                subscribed
                  ? { background: "var(--success)" }
                  : undefined
              }
            >
              {subscribed ? "Subscribed ✓" : brand.cta.subscribe}
            </button>
          </form>
          <p className="newsletter-consent">
            {newsletter.consentPrefix}{" "}
            <a
              href={newsletter.privacyHref}
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "underline",
              }}
            >
              {newsletter.privacyLabel}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </div>
  );
}
