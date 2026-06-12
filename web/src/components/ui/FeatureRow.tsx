import { FeatureRowItem } from "@/config/brand.config";
import Reveal from "@/components/ui/Reveal";

interface FeatureRowProps {
  item: FeatureRowItem;
  /** Even index = text left / image right; odd = image left / text right */
  index: number;
}

/**
 * FeatureRow — spec §3
 * Alternating 2-col rows: text 5 cols / visual 7 cols, flipping each row.
 * Text side: eyebrow, display-md heading, body, ghost link.
 * Visual side: real photo inside a card frame, or inline-SVG fallback.
 */
export default function FeatureRow({ item, index }: FeatureRowProps) {
  const flip = index % 2 !== 0;

  const textCol = (
    <Reveal className="feature-row-text" delay={60}>
      <span className="eyebrow feature-row-eyebrow">{item.eyebrow}</span>
      <h3 className="display-md feature-row-heading">{item.heading}</h3>
      <p className="body-md feature-row-body">{item.body}</p>
      <a href={item.ctaHref} className="btn-ghost">
        {item.cta}
      </a>
    </Reveal>
  );

  const visualCol = (
    <Reveal className="feature-row-visual" delay={120}>
      {item.image ? (
        <div className="feature-row-img-wrap">
          <img
            src={item.image}
            alt={item.imageAlt}
            width={800}
            height={533}
            loading="lazy"
            className="feature-row-img"
          />
        </div>
      ) : (
        /* Fallback: tasteful SVG abstraction for "Scale" step */
        /* AI generation prompt: "abstract upward-trending line chart on soft violet
           gradient background, clean geometric minimal style, no text, 16:10 ratio" */
        <div className="feature-row-img-wrap feature-row-img-fallback" aria-hidden="true">
          <svg
            viewBox="0 0 800 530"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Abstract growth chart illustration"
          >
            <rect width="800" height="530" fill="url(#fr-grad)" rx="20" />
            {/* Grid lines */}
            {[106, 212, 318, 424].map((y) => (
              <line key={y} x1="80" y1={y} x2="720" y2={y} stroke="rgba(103,84,233,0.12)" strokeWidth="1" />
            ))}
            {/* Trend line — compound growth curve */}
            <path
              d="M80 430 C180 420, 250 380, 320 340 S460 240, 560 180 S680 100, 720 70"
              stroke="var(--brand-accent)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            {/* Area fill */}
            <path
              d="M80 430 C180 420, 250 380, 320 340 S460 240, 560 180 S680 100, 720 70 L720 460 L80 460 Z"
              fill="url(#fr-area)"
            />
            {/* Data points */}
            {[
              [80, 430], [200, 400], [320, 340], [440, 260], [560, 180], [720, 70],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="5" fill="var(--brand-accent)" opacity="0.8" />
            ))}
            {/* Stat callout */}
            <rect x="560" y="120" width="140" height="52" rx="12" fill="white" opacity="0.95" />
            <text x="630" y="142" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-tertiary)">ROAS</text>
            <text x="630" y="162" textAnchor="middle" fontFamily="system-ui" fontSize="20" fontWeight="700" fill="var(--brand-accent)">5.2×</text>
            <defs>
              <linearGradient id="fr-grad" x1="0" y1="0" x2="800" y2="530" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(103,84,233,0.06)" />
                <stop offset="100%" stopColor="rgba(103,84,233,0.14)" />
              </linearGradient>
              <linearGradient id="fr-area" x1="0" y1="0" x2="0" y2="460" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0.02" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </Reveal>
  );

  return (
    <div className={`feature-row${flip ? " feature-row-flip" : ""}`}>
      {flip ? (
        <>
          {visualCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {visualCol}
        </>
      )}
    </div>
  );
}
