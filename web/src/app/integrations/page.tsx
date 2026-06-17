import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Integrations — Quaeris",
  description:
    "Quaeris connects natively to your cloud data warehouse — Snowflake, BigQuery, Databricks, Redshift, or Synapse — and queries it in place, with no data copy.",
  openGraph: {
    title: "Integrations — Quaeris",
    description:
      "Warehouse-native connectors for Snowflake, BigQuery, Databricks, Redshift, and Synapse.",
    type: "website",
    siteName: "Quaeris",
  },
};

const WAREHOUSES = [
  {
    id: "snowflake",
    name: "Snowflake",
    body: "Query Snowflake in place with role-based access and warehouse-native governance. Quaeris respects your existing roles and resource monitors.",
  },
  {
    id: "bigquery",
    name: "Google BigQuery",
    body: "Connect BigQuery datasets and let agents answer governed questions against your tables — no extracts, no copies, full lineage.",
  },
  {
    id: "databricks",
    name: "Databricks",
    body: "Run governed analytics over your Databricks lakehouse, with Unity Catalog permissions enforced at query time.",
  },
  {
    id: "redshift",
    name: "Amazon Redshift",
    body: "Point Quaeris at your Redshift cluster and turn plain-language questions into certified, auditable answers.",
  },
  {
    id: "synapse",
    name: "Azure Synapse",
    body: "Connect Synapse and deliver trusted, role-scoped answers to business users across your Azure estate.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="intg-main">
        <div className="container">
          <header className="intg-hero">
            <p className="eyebrow">Integrations</p>
            <h1 className="display-lg">
              Native to your
              <br />
              <span className="accent-line">cloud data warehouse.</span>
            </h1>
            <p className="intg-lede">
              Quaeris connects to where your data already lives and queries it in place —
              no extracts, no second copy, no egress. Access is enforced against your roles
              at query time, and every answer is auditable.
            </p>
          </header>

          <nav className="intg-grid" aria-label="Supported warehouses">
            {WAREHOUSES.map((w) => (
              <a key={w.id} href={`#${w.id}`} className="intg-chip">
                {w.name}
              </a>
            ))}
          </nav>

          <div className="intg-sections">
            {WAREHOUSES.map((w) => (
              <section key={w.id} id={w.id} className="intg-section">
                <h2>{w.name}</h2>
                <p>{w.body}</p>
                <a href="/contact" className="intg-cta">
                  Book a demo on {w.name} →
                </a>
              </section>
            ))}
          </div>

          <p className="intg-foot">
            Don&apos;t see your platform? <a href="/contact">Talk to us</a> — we&apos;re
            adding connectors continuously.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
