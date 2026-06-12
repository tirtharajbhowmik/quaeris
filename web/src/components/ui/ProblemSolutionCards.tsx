import Reveal from "./Reveal";

interface ProblemCard {
  index: string;
  problem: string;
  fix: string;
}

const cards: ProblemCard[] = [
  {
    index: "01",
    problem: "Your dashboards are full of numbers — but nobody trusts them. Why does that keep happening?",
    fix: "Metric definitions drift. \"Revenue\" means something different in finance, sales, and product — so every team calculates it differently. Veris enforces a single certified definition per metric in your semantic layer. Everyone queries the same number.",
  },
  {
    index: "02",
    problem: "Business teams send data requests. The queue never empties. Sound familiar?",
    fix: "Self-serve without sacrificing governance. Veris agents let business users ask questions in plain language — returning governed, source-cited answers. The data team defines the rules once; Veris enforces them on every query.",
  },
  {
    index: "03",
    problem: "You're excited about AI for analytics — but how do you know the numbers aren't made up?",
    fix: "Architecture, not promises. Veris agents query your governed semantic layer, not a language model's training data. Every answer cites its source metric and lineage. If it can't be answered from certified data, the agent says so.",
  },
  {
    index: "04",
    problem: "Your data is sensitive. You can't let AI anywhere near it unless it stays in your environment.",
    fix: "Warehouse-native by design. Veris connects directly to your existing warehouse — Snowflake, BigQuery, Redshift — and queries it in place. Your data never leaves your environment. Role-based access is enforced at the agent level, not the dashboard layer.",
  },
];

export default function ProblemSolutionCards() {
  return (
    <section
      id="problem-solution"
      className="section-pad"
      aria-labelledby="problem-heading"
      style={{ background: "var(--bg-canvas)" }}
    >
      <div className="container">
        <Reveal>
          <div className="section-header center">
            <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
              Sound familiar?
            </span>
            <h2 id="problem-heading" className="display-lg">
              The analytics problems every data team knows.
            </h2>
            <p className="body-lg subcopy" style={{ color: "var(--text-secondary)" }}>
              We hear these from almost every team we talk to. Here is exactly how Veris fixes them.
            </p>
          </div>
        </Reveal>

        <div className="ps-grid" role="list">
          {cards.map((card, i) => (
            <Reveal key={card.index} delay={i * 80}>
              <article className="ps-card" role="listitem">
                <span className="ps-index" aria-hidden="true">
                  {card.index}
                </span>
                <h3 className="display-md ps-problem">{card.problem}</h3>
                <div className="ps-fix-box" aria-label="The fix">
                  <span className="ps-fix-label eyebrow">The fix</span>
                  <p className="body-md ps-fix-body">{card.fix}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
