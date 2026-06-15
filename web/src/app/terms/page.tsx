import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Quaeris",
  description:
    "The terms that govern your use of the Quaeris website and platform.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated="June 15, 2026"
      intro="These terms govern your use of the Quaeris website and, where you have a signed agreement, the Quaeris platform. By using our website you agree to these terms."
    >
      <h2>Use of the website</h2>
      <p>
        You may use this website for lawful purposes and in accordance with these terms. You
        agree not to misuse the site, interfere with its operation, or attempt to access it
        in any way other than the interface we provide.
      </p>

      <h2>The platform</h2>
      <p>
        Access to the Quaeris platform is governed by the written agreement between Quaeris
        and your organization. Where these terms conflict with that agreement, the signed
        agreement controls for the platform.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Quaeris name, logo, website, and content are owned by Quaeris and protected by
        intellectual-property laws. You may not copy or use them except as permitted in
        writing.
      </p>

      <h2>No warranty</h2>
      <p>
        The website is provided &ldquo;as is&rdquo; without warranties of any kind. Product
        descriptions and illustrative figures on this site are for general information and
        do not constitute a commitment or guarantee of specific results.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Quaeris is not liable for indirect,
        incidental, or consequential damages arising from your use of the website.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of the website after an
        update means you accept the revised terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:seek@quaeris.ai">seek@quaeris.ai</a>.
      </p>
    </LegalLayout>
  );
}
