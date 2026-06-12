import { brand } from "@/config/brand.config";
import Reveal from "@/components/ui/Reveal";
import FeatureRow from "@/components/ui/FeatureRow";

export default function MethodologySection() {
  const { methodology } = brand;

  return (
    <section
      id="methodology"
      className="section-pad methodology-section"
      aria-labelledby="methodology-heading"
    >
      <div className="container">
        <Reveal className="section-header center methodology-header">
          <span className="eyebrow">{methodology.eyebrow}</span>
          <h2 id="methodology-heading" className="display-lg">
            {methodology.headline}
          </h2>
          <p className="body-lg subcopy">{methodology.subcopy}</p>
        </Reveal>

        <div className="feature-rows-list">
          {methodology.items.map((item, i) => (
            <FeatureRow key={item.eyebrow} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
