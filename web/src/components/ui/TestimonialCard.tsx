import { Testimonial } from "@/config/brand.config";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="testimonial-author">
        <div className="author-avatar" aria-hidden="true">
          {testimonial.initials}
        </div>
        <div>
          <div className="author-name">{testimonial.name}</div>
          <div className="author-role">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
