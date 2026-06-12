import { brand } from "@/config/brand.config";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";

export default function FAQSection() {
  const { faq, cta } = brand;

  return (
    <section id="faq" className="section-pad" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq-grid">
          {/* Left: section header + mini card */}
          <div>
            <Reveal className="section-header">
              <span className="eyebrow">{faq.eyebrow}</span>
              <h2 id="faq-heading" className="display-lg">
                {faq.headline}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {faq.subcopy}
              </p>
            </Reveal>
            <Reveal className="faq-mini-card" delay={120}>
              <h4 className="heading-sm">{faq.miniCard.title}</h4>
              <p>{faq.miniCard.body}</p>
              <a
                href="#"
                className="btn btn-secondary"
                style={{ fontSize: "14px", padding: "10px 22px" }}
              >
                {cta.bookACall}
              </a>
            </Reveal>
          </div>

          {/* Right: accordion */}
          <Reveal delay={60}>
            <Accordion items={faq.items} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
