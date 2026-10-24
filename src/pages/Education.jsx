import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdSchool, MdExpandMore, MdExpandLess } from "react-icons/md";
import { FaCode, FaUniversity } from "react-icons/fa";
import { education, journeyText } from "../data/education";

const icons = {
  cdac: FaCode,
  university: FaUniversity,
};

export default function Education() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <main style={{ paddingTop: 64 }}>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section
        className="grid-bg section"
        style={{ background: "var(--bg-secondary)", paddingBottom: 40 }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                fontSize: "0.82rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 8,
              }}
            >
              Academic background
            </p>
            <h1 className="section-title">Education</h1>
            <p style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "12px auto 0", lineHeight: 1.7 }}>
              From electrical circuits to full-stack applications — a journey driven by curiosity and a love for building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Journey Paragraph ────────────────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card"
            style={{
              maxWidth: 760,
              margin: "0 auto",
              padding: "28px 32px",
              borderLeft: "3px solid var(--accent)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                fontSize: "0.76rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 12,
              }}
            >
              My Journey
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "0.97rem" }}>
              {journeyText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 28,
                top: 0,
                bottom: 0,
                width: 2,
                background: "linear-gradient(to bottom, var(--accent) 0%, var(--bg-secondary) 100%)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {education.map((edu, i) => {
                const Icon = icons[edu.icon] || MdSchool;
                const isOpen = expanded === edu.id;

                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    style={{ display: "flex", gap: 24, paddingLeft: 12 }}
                  >
                    {/* Icon dot */}
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "var(--bg-card)",
                        border: "2px solid var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent)",
                        fontSize: 16,
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    >
                      <Icon />
                    </div>

                    {/* Card */}
                    <div className="card" style={{ flex: 1, overflow: "hidden" }}>
                      <button
                        onClick={() => toggle(edu.id)}
                        style={{
                          width: "100%",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "20px 24px",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: 12,
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              padding: "3px 10px",
                              borderRadius: 100,
                              border: "1px solid rgba(242,184,75,0.35)",
                              background: "var(--accent-glow)",
                              color: "var(--accent)",
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              marginBottom: 8,
                            }}
                          >
                            {edu.type}
                          </div>
                          <h2
                            style={{
                              fontSize: "1.05rem",
                              fontWeight: 700,
                              color: "var(--text-primary)",
                              marginBottom: 4,
                            }}
                          >
                            {edu.degree}
                          </h2>
                          <p style={{ color: "var(--accent)", fontSize: "0.88rem", fontWeight: 600 }}>
                            {edu.institution}
                          </p>
                          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 2 }}>
                            {edu.issuer} · {edu.period} · {edu.highlight}
                          </p>
                        </div>
                        <div style={{ color: "var(--text-muted)", fontSize: 22, flexShrink: 0, marginTop: 4 }}>
                          {isOpen ? <MdExpandLess /> : <MdExpandMore />}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                          >
                            <div
                              style={{
                                padding: "0 24px 24px",
                                borderTop: "1px solid var(--border)",
                                paddingTop: 20,
                                marginTop: 0,
                              }}
                            >
                              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: 16, lineHeight: 1.7 }}>
                                {edu.description}
                              </p>

                              {edu.modules.length > 0 && (
                                <>
                                  <p
                                    style={{
                                      fontFamily: "var(--font-mono)",
                                      color: "var(--accent)",
                                      fontSize: "0.74rem",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.08em",
                                      marginBottom: 10,
                                    }}
                                  >
                                    Modules Covered
                                  </p>
                                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {edu.modules.map((mod) => (
                                      <span key={mod} className="badge">
                                        {mod}
                                      </span>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
