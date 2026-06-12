import { brand } from "@/config/brand.config";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import Reveal from "@/components/ui/Reveal";

export default function ProofSection() {
  const { proof, cta } = brand;

  return (
    <section
      id="proof"
      className="section-pad"
      aria-labelledby="proof-heading"
    >
      <div className="container">
        <Reveal className="section-header">
          <span className="eyebrow">{proof.eyebrow}</span>
          <h2 id="proof-heading" className="display-lg">
            {proof.headline}
          </h2>
          <p
            className="body-lg subcopy"
            style={{ color: "var(--text-secondary)" }}
          >
            {proof.subcopy}
          </p>
        </Reveal>

        <div className="case-study-grid">
          {proof.items.map((study, i) => (
            <Reveal key={study.client} delay={i * 60}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>

        <Reveal className="proof-cta">
          <a href="#" className="btn btn-secondary">
            {cta.viewAllStories}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
