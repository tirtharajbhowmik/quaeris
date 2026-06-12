import { brand } from "@/config/brand.config";

export default function LogoMarquee() {
  const logos = brand.marquee.logos;
  // Duplicate for seamless CSS loop
  const doubled = [...logos, ...logos];

  return (
    <section id="logo-marquee" aria-label="Trusted by">
      <div className="container">
        <p className="eyebrow marquee-label">{brand.marquee.label}</p>
      </div>
      <div className="marquee-track-wrap" role="marquee" aria-label="Client logos">
        <div className="marquee-track" aria-hidden="true">
          {doubled.map((logo, i) => (
            <div key={i} className="marquee-logo">
              {logo.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
