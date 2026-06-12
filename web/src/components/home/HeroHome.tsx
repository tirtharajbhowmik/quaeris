"use client";

import { motion } from "framer-motion";
import { FloatingPaths } from "@/components/ui/background-paths";

export default function HeroHome() {
  return (
    <section id="hero" aria-labelledby="hero-heading">
      {/* Animated background paths effect */}
      <div className="hero-bg-paths" aria-hidden="true">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="hero-purple-wash" aria-hidden="true" />
      {/* White scrim on the text side: keeps headline/subcopy on clean high-contrast
          white while the animated paths stay visible on the right. */}
      <div className="hero-scrim" aria-hidden="true" />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            paddingTop: "clamp(28px, 4vw, 56px)",
            paddingBottom: "clamp(48px, 6vw, 88px)",
          }}
        >
          <h1 id="hero-heading" className="hero-h1">
            Secure, Governed Analytics.
            <span className="accent-line">Powered by Trusted Agents.</span>
          </h1>
          <p
            className="subcopy"
            style={{
              color: "var(--text-secondary)",
              marginTop: "1.25rem",
              maxWidth: "32rem",
              fontSize: "1.125rem",
              lineHeight: 1.6,
            }}
          >
            Ask questions, get trusted answers — on a secure platform your enterprise can rely on.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <a href="#cta-band" className="hero-cta">
              Book a Demo
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
