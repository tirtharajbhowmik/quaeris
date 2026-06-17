import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { brand } from "@/config/brand.config";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Book a Demo — Quaeris",
  description:
    "See Quaeris on your data. Book a demo and get a governed, audited answer to a real question from your own warehouse — no data leaves your environment.",
  openGraph: {
    title: "Book a Demo — Quaeris",
    description:
      "See governed agentic analytics on your data. Book a Quaeris demo — warehouse-native, audited, role-gated.",
    type: "website",
    siteName: brand.name,
  },
};

const TRUST_POINTS = [
  {
    title: "Warehouse-native",
    body: "We query Snowflake, BigQuery, Databricks, Redshift, or Synapse in place. Your data never leaves your environment.",
  },
  {
    title: "Governed & audited",
    body: "Every answer traces to a certified metric definition, with a full audit trail from question to source.",
  },
  {
    title: "Role-gated by design",
    body: "Row-level security and column masking are enforced at query time — each person sees only what their role allows.",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const rawPlan = Array.isArray(sp.plan) ? sp.plan[0] : sp.plan;
  const plan = rawPlan
    ? rawPlan.charAt(0).toUpperCase() + rawPlan.slice(1)
    : undefined;

  return (
    <>
      <SiteHeader />
      <main className="contact-main">
        <div className="container contact-grid">
          <section className="contact-intro" aria-labelledby="contact-heading">
            <p className="eyebrow">Talk to us</p>
            <h1 id="contact-heading" className="display-lg">
              See Quaeris on
              <br />
              <span className="accent-line">your own data.</span>
            </h1>
            <p className="contact-lede">
              Book a 30-minute demo and we&apos;ll answer a real question from your warehouse —
              governed, audited, and traced to a certified metric. No slideware.
            </p>

            <ul className="contact-trust">
              {TRUST_POINTS.map((t) => (
                <li key={t.title}>
                  <span className="contact-trust-check" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <strong>{t.title}</strong>
                    <span>{t.body}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="contact-alt">
              Prefer email? Reach us at{" "}
              <a href="mailto:seek@quaeris.ai">seek@quaeris.ai</a>.
            </p>
          </section>

          <section className="contact-card" aria-label="Demo request form">
            {plan ? (
              <p className="contact-plan-note">
                You&apos;re requesting a demo for the <strong>{plan}</strong> plan.
              </p>
            ) : null}
            <ContactForm plan={plan} />
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
