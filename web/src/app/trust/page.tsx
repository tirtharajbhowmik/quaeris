import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Trust Center — Quaeris",
  description:
    "How Quaeris keeps enterprise data secure: warehouse-native architecture, query-time access control, encryption, and our current compliance status.",
};

// One canonical, honest source of compliance status, surfaced here and
// referenced by the rest of the site. Update statuses here as certifications
// are earned — do not state certifications as complete before they are.
const COMPLIANCE: { name: string; status: string; note: string }[] = [
  {
    name: "SOC 2 Type II",
    status: "In progress",
    note: "Independent audit underway. Report available under NDA on request once complete.",
  },
  {
    name: "GDPR",
    status: "Supported",
    note: "Data-processing terms and EU data-handling practices available for enterprise agreements.",
  },
  {
    name: "HIPAA",
    status: "On roadmap",
    note: "Controls in development for regulated healthcare deployments. Not yet available as a certified offering.",
  },
  {
    name: "EU AI Act readiness",
    status: "In progress",
    note: "Audit-trail and transparency capabilities designed to support governed, explainable analytics.",
  },
];

export default function TrustPage() {
  return (
    <LegalLayout
      eyebrow="Trust Center"
      title="Security &amp; trust"
      intro="Quaeris is built for regulated, data-sensitive enterprises. The core principle: your data stays in your warehouse, and every answer is governed and auditable."
    >
      <h2>Warehouse-native by design</h2>
      <p>
        Quaeris queries your data where it lives — Snowflake, BigQuery, Databricks, Redshift,
        or Synapse — and does not copy your warehouse data into our systems to answer
        questions. That means there is no second copy of your data to secure, and no egress
        out of your environment.
      </p>

      <h2>Access control at query time</h2>
      <p>
        Row-level security and column masking are enforced at query time against your roles,
        not bolted on in a dashboard layer. Each person sees only what their role permits,
        and every access decision is logged.
      </p>

      <h2>Auditability</h2>
      <p>
        Every question, the metric definitions used, and the access decisions made are
        recorded in a full audit trail — from plain-language question to warehouse result —
        so compliance and finance teams can trace any number back to its source.
      </p>

      <h2>Encryption</h2>
      <p>
        Data is encrypted in transit (TLS) and at rest. Credentials and connection secrets
        are stored encrypted and scoped to your deployment.
      </p>

      <h2>Compliance status</h2>
      <p>
        We believe in being precise about where we are. The following reflects our current
        status; we update it here as certifications are earned.
      </p>
      <ul className="trust-status">
        {COMPLIANCE.map((c) => (
          <li key={c.name}>
            <span className="trust-status-name">{c.name}</span>
            <span className="trust-status-badge">{c.status}</span>
            <span className="trust-status-note">{c.note}</span>
          </li>
        ))}
      </ul>

      <h2>Reporting a vulnerability</h2>
      <p>
        If you believe you&apos;ve found a security issue, please email{" "}
        <a href="mailto:seek@quaeris.ai">seek@quaeris.ai</a>. We investigate all reports and
        will work with you on responsible disclosure.
      </p>
    </LegalLayout>
  );
}
