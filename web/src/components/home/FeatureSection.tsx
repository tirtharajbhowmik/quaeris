import { brand } from "@/config/brand.config";
import Reveal from "@/components/ui/Reveal";
import MetricDashboardMock from "@/components/ui/MetricDashboardMock";

export default function FeatureSection() {
  const { darkFeature } = brand;

  return (
    <section
      id="dark-feature"
      className="section-pad"
      aria-labelledby="dark-feature-heading"
    >
      <div className="dark-feature-glow" aria-hidden="true" />
      <div className="container">
        <div className="dark-feature-grid">
          {/* Left column: header + value props */}
          <div>
            <Reveal className="section-header section-header-dark">
              <span className="eyebrow">{darkFeature.eyebrow}</span>
              <h2 id="dark-feature-heading" className="display-lg">
                {darkFeature.headline}
              </h2>
              <p className="body-lg subcopy">{darkFeature.subcopy}</p>
            </Reveal>

            <div className="value-prop-list" role="list">
              {darkFeature.valueProps.map((vp, i) => (
                <Reveal
                  key={vp.num}
                  className="value-prop-row"
                  delay={(i + 1) * 60}
                  as="div"
                >
                  <span className="value-prop-num">{vp.num}</span>
                  <div className="value-prop-text">
                    <h4 className="heading-sm">{vp.title}</h4>
                    <p>{vp.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right column: metric dashboard */}
          <Reveal
            delay={120}
            aria-label="Illustrative analytics dashboard"
          >
            <MetricDashboardMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
