import { Search, Megaphone, BarChart3 } from "lucide-react";
import { brand, images, Pillar } from "@/config/brand.config";
import Reveal from "@/components/ui/Reveal";

const pillarImages: Record<Pillar["imgClass"], string> = {
  "pillar-img-1": images.pillarPaidSearch,
  "pillar-img-2": images.pillarPaidSocial,
  "pillar-img-3": images.pillarAnalytics,
};

const pillarImageAlts: Record<Pillar["imgClass"], string> = {
  "pillar-img-1": "Google Ads dashboard on a laptop screen",
  "pillar-img-2": "Social media creative on a phone screen",
  "pillar-img-3": "Analytics charts showing conversion data",
};

function PillarIcon({ pillar }: { pillar: Pillar }) {
  const style = { color: pillar.iconColor, width: 64, height: 64 };
  if (pillar.icon === "bar-chart") {
    return <BarChart3 aria-hidden="true" style={style} />;
  }
  if (pillar.icon === "target") {
    return <Megaphone aria-hidden="true" style={style} />;
  }
  return <Search aria-hidden="true" style={style} />;
}

export default function ThreePillars() {
  const { pillars } = brand;

  return (
    <section
      id="three-pillars"
      className="section-pad"
      aria-labelledby="pillars-heading"
    >
      <div className="container">
        <Reveal className="section-header">
          <span className="eyebrow">{pillars.eyebrow}</span>
          <h2 id="pillars-heading" className="display-lg">
            {pillars.headline}
          </h2>
          <p
            className="body-lg subcopy"
            style={{ color: "var(--text-secondary)" }}
          >
            {pillars.subcopy}
          </p>
        </Reveal>

        <div className="pillars-grid">
          {pillars.items.map((pillar, i) => (
            <Reveal key={pillar.title} as="article" className="pillar-card" delay={i * 60}>
              <div className={`pillar-img ${pillar.imgClass}`}>
                <img
                  src={pillarImages[pillar.imgClass]}
                  alt={pillarImageAlts[pillar.imgClass]}
                  width={800}
                  height={400}
                  loading="lazy"
                  className="pillar-photo"
                />
                {/* Icon overlay for brand accent */}
                <div className="pillar-icon-overlay" aria-hidden="true">
                  <PillarIcon pillar={pillar} />
                </div>
              </div>
              <div className="pillar-body">
                <h3 className="display-md">{pillar.title}</h3>
                <p className="body-md">{pillar.body}</p>
                <a
                  href="#"
                  className="btn-ghost"
                  aria-label={pillar.ctaAriaLabel}
                >
                  {pillar.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
