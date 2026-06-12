import { brand } from "@/config/brand.config";
import Reveal from "./Reveal";

// Inline SVG icons matching the mockup exactly
function IconAudit() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 0-2 2h-2a2 2 0 0 0-2-2z" />
    </svg>
  );
}

function IconSprint() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  );
}

function IconCreative() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

const icons = {
  audit: IconAudit,
  sprint: IconSprint,
  creative: IconCreative,
  dashboard: IconDashboard,
} as const;

export default function IconFeatureGrid() {
  const { howWeWork } = brand;

  return (
    <section
      id="how-we-work"
      className="section-pad"
      aria-labelledby="how-heading"
    >
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="eyebrow">{howWeWork.eyebrow}</span>
            <h2 id="how-heading" className="display-lg">
              {howWeWork.headline}
            </h2>
            <p
              className="body-lg subcopy"
              style={{ color: "var(--text-secondary)" }}
            >
              {howWeWork.subcopy}
            </p>
          </div>
        </Reveal>

        <div className="icon-feature-grid">
          {howWeWork.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                key={item.title}
                className="icon-feature"
                delay={i * 60}
              >
                <div className="icon-box" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="heading-sm">{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
