import { brand } from "@/config/brand.config";
import Reveal from "./Reveal";

export default function CTABand() {
  const { ctaBand, cta } = brand;

  return (
    <section
      id="cta-band"
      className="section-pad"
      aria-labelledby="cta-heading"
    >
      <div className="cta-band-glow" aria-hidden="true" />
      <div className="container">
        <Reveal className="cta-inner">
          <span className="eyebrow">{ctaBand.eyebrow}</span>
          <h2 id="cta-heading" className="display-lg">
            {ctaBand.headline}
          </h2>
          <p className="body-lg subcopy">{ctaBand.subcopy}</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-on-dark">
              {cta.ctaBandPrimary}
            </a>
            <a href="#" className="btn btn-secondary-dark">
              {cta.ctaBandSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
