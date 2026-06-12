import {
  Activity,
  Bell,
  Cpu,
  FileText,
  GitBranch,
  Layers,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { brand, AiCapabilityIcon } from "@/config/brand.config";

const capabilityIcons: Record<AiCapabilityIcon, React.ReactNode> = {
  "message-square": <MessageSquare aria-hidden="true" />,
  "shield-check": <ShieldCheck aria-hidden="true" />,
  "git-branch": <GitBranch aria-hidden="true" />,
  activity: <Activity aria-hidden="true" />,
  bell: <Bell aria-hidden="true" />,
  sparkles: <Sparkles aria-hidden="true" />,
  workflow: <Workflow aria-hidden="true" />,
  layers: <Layers aria-hidden="true" />,
  cpu: <Cpu aria-hidden="true" />,
  "file-text": <FileText aria-hidden="true" />,
};

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
              Intelligence runs through every layer of {brand.name} — from understanding your question to
              citing the metric behind the answer. Agents don&apos;t just fetch data; they reason
              over your governed semantic layer to deliver answers your whole team can trust.
            </p>
          </div>
        </Reveal>

        <div className="ai-grid" role="list">
          {brand.aiCapabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="ai-card" role="listitem">
                <span className="ai-icon" aria-hidden="true">
                  {capabilityIcons[c.icon]}
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
              See {brand.name} in action
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
