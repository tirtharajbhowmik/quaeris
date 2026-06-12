import { brand } from "@/config/brand.config";
import TestimonialCard from "./TestimonialCard";
import Reveal from "./Reveal";

export default function TestimonialMarquee() {
  const { testimonials } = brand;
  const row1 = [...testimonials.row1, ...testimonials.row1]; // duplicate for loop
  const row2 = [...testimonials.row2, ...testimonials.row2];

  return (
    <section
      id="testimonials"
      className="section-pad"
      aria-labelledby="testimonials-heading"
    >
      <div className="container" style={{ marginBottom: "var(--space-7)" }}>
        <Reveal className="section-header center">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2 id="testimonials-heading" className="display-lg">
            {testimonials.headline}
          </h2>
        </Reveal>

        <div
          className="review-badges"
          role="list"
          aria-label="Review platform ratings"
        >
          {testimonials.reviewBadges.map((badge) => (
            <div key={badge.platform} className="review-badge" role="listitem">
              <span className="review-badge-stars" aria-hidden="true">
                {badge.stars}
              </span>
              <span className="review-badge-text">{badge.score}</span>
              <span className="review-badge-platform">{badge.platform}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-rows" aria-label="Client testimonials">
        <div className="testimonial-row" aria-hidden="true">
          {row1.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
        <div className="testimonial-row reverse" aria-hidden="true">
          {row2.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
