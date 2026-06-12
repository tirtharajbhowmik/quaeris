import Reveal from "./Reveal";

export default function EditorialBlock() {
  return (
    <section
      id="founder-note"
      className="section-pad"
      aria-labelledby="editorial-heading"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container">
        <Reveal>
          <div className="editorial-inner">
            <span className="eyebrow editorial-eyebrow">A note from the founder</span>

            <h2 id="editorial-heading" className="display-lg editorial-headline">
              Analytics should inform decisions, not start arguments.
            </h2>

            {/* Byline */}
            <div className="editorial-byline" aria-label="Author">
              <div className="editorial-monogram" aria-hidden="true">AR</div>
              <div className="editorial-byline-text">
                <span className="editorial-byline-name">A. Rowe</span>
                <span className="editorial-byline-role">Founder &amp; CEO · Veris</span>
              </div>
              <time className="editorial-byline-date body-sm" dateTime="2025-06-01" style={{ color: "var(--text-tertiary)", marginLeft: "auto" }}>
                June 2025
              </time>
            </div>

            {/* Body prose */}
            <div className="editorial-prose">
              <p className="editorial-dropcap body-lg">
                Most data teams come to us after a version of the same story: an AI pilot that looked impressive in the demo, then returned a number nobody could verify — and a business user who stopped trusting the analytics platform entirely. We built Veris to fix that problem at the architecture level, not the prompt level.
              </p>

              <p className="body-lg" style={{ color: "var(--text-secondary)" }}>
                The principle is simple. Every answer a Veris agent returns should be traceable to a certified metric definition your data team controls. Not a language model&apos;s statistical best guess — a governed number with a lineage trail. If the answer can&apos;t be grounded in your semantic layer, the agent says so and stops there.
              </p>

              {/* Pull quote */}
              <blockquote className="editorial-pullquote">
                <p>
                  &ldquo;The organisations that get the most from AI analytics aren&apos;t the ones with the biggest models — they&apos;re the ones with the clearest metric definitions. Governance is the competitive advantage.&rdquo;
                </p>
              </blockquote>

              <p className="body-lg" style={{ color: "var(--text-secondary)" }}>
                That means connecting to your warehouse without moving data. It means enforcing role-based access at the agent level, not the dashboard filter. It means the semantic layer — not a prompt — is the source of truth. The accountability is structural, not aspirational.
              </p>

              <p className="body-lg" style={{ color: "var(--text-secondary)" }}>
                The outcomes are in the case studies. But the reason trust compounds in every deployment is the same: a governed platform that answers honestly, cites its sources, and respects the boundaries your data team sets. That&apos;s rarer than it should be — and it&apos;s the only thing worth building.
              </p>
            </div>

            {/* Signature */}
            <div className="editorial-signature" aria-label="Signature">
              <span className="editorial-sig-text">— A. Rowe, Founder</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
