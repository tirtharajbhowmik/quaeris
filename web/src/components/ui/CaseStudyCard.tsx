import { CaseStudy } from "@/config/brand.config";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="case-study-card">
      <span className="industry-chip">{study.industry}</span>
      <h3 className="display-md" style={{ color: "var(--text-primary)" }}>
        {study.client}
      </h3>
      <p className="cs-outcome">{study.outcome}</p>
      <div className="cs-stats" aria-label="Key metrics">
        {study.stats.map((s) => (
          <div key={s.label} className="cs-stat">
            <span className="cs-stat-num">{s.num}</span>
            <span className="cs-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <p className="cs-how">{study.how}</p>
      <a href="#" className="btn-ghost">
        {study.cta}
      </a>
    </article>
  );
}
