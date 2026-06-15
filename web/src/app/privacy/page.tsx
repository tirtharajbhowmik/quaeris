import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Quaeris",
  description:
    "How Quaeris collects, uses, and protects personal information across our website and platform.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="June 15, 2026"
      intro="This policy explains what information Quaeris collects when you use our website and platform, how we use it, and the choices you have. Quaeris is built so that your analytical data stays in your own warehouse — this policy concerns the limited personal information we process to run our business."
    >
      <h2>Information we collect</h2>
      <p>
        We collect information you provide directly — such as your name, work email,
        company, and any message — when you request a demo, subscribe to updates, or
        contact us. We also collect basic technical information (such as IP address,
        browser type, and pages visited) to operate and secure our website.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to demo requests and other inquiries.</li>
        <li>To send product updates you have asked to receive.</li>
        <li>To operate, maintain, secure, and improve our website and services.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>Your data in the platform</h2>
      <p>
        Quaeris is warehouse-native. Agents query your data where it lives — Snowflake,
        BigQuery, Databricks, Redshift, or Synapse — under your access controls. We do not
        copy your warehouse data into Quaeris to deliver answers, and access is enforced at
        query time against your roles.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We share it only with service providers who
        help us run our business (for example, hosting and email delivery) under
        appropriate confidentiality and data-processing terms, or when required by law.
      </p>

      <h2>Retention &amp; security</h2>
      <p>
        We keep personal information only as long as needed for the purposes above, then
        delete or anonymize it. We use industry-standard administrative and technical
        safeguards to protect it. For details on our security program, see our{" "}
        <a href="/trust">Trust Center</a>.
      </p>

      <h2>Your choices</h2>
      <p>
        You can unsubscribe from marketing email at any time, and you can request access to,
        correction of, or deletion of your personal information by emailing{" "}
        <a href="mailto:seek@quaeris.ai">seek@quaeris.ai</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at{" "}
        <a href="mailto:seek@quaeris.ai">seek@quaeris.ai</a>.
      </p>
    </LegalLayout>
  );
}
