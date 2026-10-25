import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaAward, FaDownload } from "react-icons/fa";
import {
  MdCode, MdStorage, MdWeb, MdComputer, MdSchool,
  MdBuild, MdLightbulb, MdIntegrationInstructions,
} from "react-icons/md";
import { SiDotnet } from "react-icons/si";
import { certifications, pgdacModules, moduleFilterTags } from "../data/courses";
import CertLightbox from "../components/CertLightbox";

const moduleIcons = {
  cpp: MdCode,
  database: MdStorage,
  java: MdComputer,
  web: MdWeb,
  algo: MdLightbulb,
  oop: MdIntegrationInstructions,
  dotnet: SiDotnet,
  os: MdBuild,
  project: MdSchool,
  aptitude: MdLightbulb,
};

export default function Courses() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filteredModules = pgdacModules.filter((mod) => {
    const matchSearch =
      search === "" ||
      mod.title.toLowerCase().includes(search.toLowerCase()) ||
      mod.topics.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchTag = activeTag === "All" || mod.filterTags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <main style={{ paddingTop: 64 }}>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="grid-bg section" style={{ background: "var(--bg-secondary)", paddingBottom: 40 }}>
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
              Credentials & learning
            </p>
            <h1 className="section-title">Courses & Certifications</h1>
            <p style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "12px auto 0", lineHeight: 1.7 }}>
              Formal qualifications and the 10 modules that make up the PG-DAC curriculum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Certifications ─────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FaAward style={{ color: "var(--accent)" }} /> Certifications
          </h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mb-3">
            {certifications.map((cert, i) => (
              <motion.button
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="card"
                style={{
                  padding: "24px 20px",
                  textAlign: "left",
                  cursor: "pointer",
                  background: "none",
                  border: "1px solid var(--border)",
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Golden top accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "linear-gradient(90deg, var(--accent), var(--accent-dim))",
                  }}
                />

                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "var(--accent-glow)",
                      border: "1px solid rgba(242,184,75,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  >
                    <FaAward />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 700, fontSize: "0.97rem", color: "var(--text-primary)", marginBottom: 4 }}>
                      {cert.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", marginBottom: 6 }}>
                      {cert.issuer}
                    </p>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {cert.date}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--accent)",
                        }}
                      >
                        #{cert.credentialId}
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    marginTop: 14,
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    fontStyle: "italic",
                  }}
                >
                  Click to view certificate →
                </p>
              </motion.button>
            ))}

            {/* Placeholder "More coming soon" card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: certifications.length * 0.1 }}
              className="card"
              style={{
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 140,
                gap: 10,
                borderStyle: "dashed",
              }}
            >
              <span style={{ fontSize: 32 }}>🏅</span>
              <p style={{ color: "var(--text-muted)", fontWeight: 600, fontSize: "0.9rem", textAlign: "center" }}>
                More certifications coming soon
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", textAlign: "center" }}>
                Oracle, Udemy, Coursera, and others
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PG-DAC Modules ──────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0, background: "var(--bg-secondary)" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <MdSchool style={{ color: "var(--accent)" }} /> PG-DAC Modules
          </h2>

          {/* Search + Filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28, alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "var(--bg-card)",
                border: "1.5px solid var(--border)",
                borderRadius: 8,
                padding: "9px 14px",
                flex: "1 1 220px",
                maxWidth: 320,
              }}
            >
              <FaSearch style={{ color: "var(--text-muted)", fontSize: 13 }} />
              <input
                type="search"
                placeholder="Search modules or topics…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.88rem",
                  width: "100%",
                }}
                aria-label="Search modules"
              />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {moduleFilterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 100,
                    border: activeTag === tag ? "1.5px solid var(--accent)" : "1.5px solid var(--border)",
                    background: activeTag === tag ? "var(--accent-glow)" : "transparent",
                    color: activeTag === tag ? "var(--accent)" : "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag + search}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3"
            >
              {filteredModules.map((mod, i) => {
                const Icon = moduleIcons[mod.icon] || MdCode;
                return (
                  <motion.div
                    key={mod.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="col"
                  >
                    <div className="card h-100" style={{ padding: "20px" }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "var(--accent-glow)",
                        border: "1px solid rgba(242,184,75,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent)",
                        fontSize: 18,
                        marginBottom: 12,
                      }}
                    >
                      <Icon />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: 6 }}>
                      {mod.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: 12 }}>
                      {mod.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {mod.topics.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: "2px 9px",
                            borderRadius: 100,
                            border: "1px solid var(--border)",
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.68rem",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    </div>
                  </motion.div>
                );
              })}

              {filteredModules.length === 0 && (
                <div className="col-12" style={{ textAlign: "center", padding: "48px 0", color: "var(--text-muted)" }}>
                  <p style={{ fontSize: "1.5rem", marginBottom: 8 }}>🔍</p>
                  <p>No modules match "{search}". Try a different keyword.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Certificate Lightbox */}
      {selectedCert && (
        <CertLightbox cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </main>
  );
}
