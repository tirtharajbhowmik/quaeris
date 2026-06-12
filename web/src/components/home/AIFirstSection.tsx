import { MessageSquare, ShieldCheck, GitBranch, Activity, Bell, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

interface Capability {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const capabilities: Capability[] = [
  {
    title: "Natural-Language Queries",
    desc: "Ask in plain English. Agents translate your question into governed queries against the semantic layer — no SQL, no waiting on the data team.",
    icon: <MessageSquare aria-hidden="true" />,
  },
  {
    title: "Governed Answers",
    desc: "Every answer maps to certified metrics and definitions, so the number you see is the number everyone else sees.",
    icon: <ShieldCheck aria-hidden="true" />,
  },
  {
    title: "Source Citations & Lineage",
    desc: "Each result cites the tables, metrics, and logic behind it. Trace any number back to its source in one click.",
    icon: <GitBranch aria-hidden="true" />,
  },
  {
    title: "Anomaly Detection",
    desc: "Agents watch your KPIs and flag unexpected shifts — churn risk, spend spikes, pipeline drops — before they surface in a report.",
    icon: <Activity aria-hidden="true" />,
  },
  {
    title: "Proactive Insights",
    desc: "Scheduled and triggered alerts surface what changed and why, delivered to your inbox or Slack without anyone asking.",
    icon: <Bell aria-hidden="true" />,
  },
  {
    title: "AI Co-Pilot",
    desc: "A conversational analyst that turns questions into answers, charts, and next steps across your entire warehouse.",
    icon: <Sparkles aria-hidden="true" />,
  },
];

export default function AIFirstSection() {
  return (
    <section id="ai-first" aria-labelledby="ai-first-heading">
      <div className="ai-first-glow" aria-hidden="true" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="ai-first-header">
            <span className="ai-first-eyebrow eyebrow">AI-first</span>
            <h2 id="ai-first-heading" className="ai-first-title">
              AI isn&apos;t a feature here.
              <span className="ai-first-title-accent"> It&apos;s how every answer is made.</span>
            </h2>
            <p className="ai-first-sub">
              Intelligence runs through every layer of Veris — from understanding your question to
              citing the metric behind the answer. Agents don&apos;t just fetch data; they reason
              over your governed semantic layer to deliver answers your whole team can trust.
            </p>
          </div>
        </Reveal>

        <div className="ai-grid" role="list">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="ai-card" role="listitem">
                <span className="ai-icon" aria-hidden="true">
                  {c.icon}
                </span>
                <h3 className="ai-card-title">{c.title}</h3>
                <p className="ai-card-desc">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="ai-first-cta-row">
            <a href="#cta-band" className="hero-cta ai-cta">
              See Veris in action
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
