import { brand } from "@/config/brand.config";
import StatBlock from "@/components/ui/StatBlock";
import Reveal from "@/components/ui/Reveal";

interface StatsBandProps {
  /** "plain" = existing flat layout; "gradient" = single rounded container with accent wash */
  variant?: "plain" | "gradient";
}

export default function StatsBand({ variant = "plain" }: StatsBandProps) {
  const { stats } = brand;

  if (variant === "gradient") {
    return (
      <section id="stats-band" className="section-pad" aria-label="Key metrics">
        <div className="container">
          <Reveal>
            <div className="stats-band-gradient">
              <div className="stats-grid-gradient">
                {stats.items.map((stat, i) => (
                  <StatBlock key={stat.label} stat={stat} delay={i * 60} inGradient />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="stats-band" className="section-pad" aria-label="Key metrics">
      <div className="container">
        <Reveal>
          <div className="stats-grid">
            {stats.items.map((stat, i) => (
              <StatBlock key={stat.label} stat={stat} delay={i * 60} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
