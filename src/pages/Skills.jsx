import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava, FaReact, FaDocker, FaGitAlt, FaGithub, FaHtml5,
  FaCss3Alt, FaPython, FaDatabase, FaNetworkWired,
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiKubernetes, SiApachekafka,
  SiPostman, SiSwagger, SiJavascript,
  SiHibernate, SiDotnet,
} from "react-icons/si";
import { MdCode, MdBuild, MdSecurity } from "react-icons/md";
import { skills, skillCategories } from "../data/skills";
import StackFlowDiagram from "../components/StackFlowDiagram";

// Map skill icon keys to actual react-icon components
const iconMap = {
  java: FaJava,
  react: FaReact,
  docker: FaDocker,
  git: FaGitAlt,
  github: FaGithub,
  html: FaHtml5,
  css: FaCss3Alt,
  python: FaPython,
  db: FaDatabase,
  api: FaNetworkWired,
  spring: SiSpringboot,
  mysql: SiMysql,
  k8s: SiKubernetes,
  kafka: SiApachekafka,
  postman: SiPostman,
  vscode: MdBuild, // SiVisualstudiocode not in this react-icons version
  swagger: SiSwagger,
  js: SiJavascript,
  csharp: MdCode,  // SiCsharp not in this react-icons version
  hibernate: SiHibernate,
  dotnet: SiDotnet,
  default: MdCode,
};

function SkillIcon({ name }) {
  const Icon = iconMap[name] || MdCode;
  return <Icon style={{ flexShrink: 0 }} />;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const coreSkills = filtered.filter((s) => s.level === "core");
  const familiarSkills = filtered.filter((s) => s.level === "familiar");

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
              Technical toolkit
            </p>
            <h1 className="section-title">Skills</h1>
            <p style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "12px auto 0", lineHeight: 1.7 }}>
              Grouped by proficiency — <strong style={{ color: "var(--accent)" }}>Core</strong> skills I build with daily, and <strong style={{ color: "var(--text-secondary)" }}>Familiar</strong> ones I've used in projects or coursework.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          {/* ── Category Filter Tabs ─────────────────────────── */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 40,
              justifyContent: "center",
            }}
          >
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "7px 18px",
                  borderRadius: 100,
                  border: activeCategory === cat
                    ? "1.5px solid var(--accent)"
                    : "1.5px solid var(--border)",
                  background: activeCategory === cat ? "var(--accent-glow)" : "transparent",
                  color: activeCategory === cat ? "var(--accent)" : "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {/* ── Core Skills ─────────────────────────────── */}
              {coreSkills.length > 0 && (
                <div style={{ marginBottom: 36 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        boxShadow: "0 0 8px var(--accent)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--accent)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 700,
                      }}
                    >
                      Core — use daily
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {coreSkills.map((skill) => (
                      <SkillBadge key={skill.name + skill.category} skill={skill} />
                    ))}
                  </div>
                </div>
              )}

              {/* ── Familiar Skills ─────────────────────────── */}
              {familiarSkills.length > 0 && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "var(--text-muted)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 700,
                      }}
                    >
                      Familiar — used in projects & coursework
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {familiarSkills.map((skill) => (
                      <SkillBadge key={skill.name + skill.category} skill={skill} />
                    ))}
                  </div>
                </div>
              )}

              {filtered.length === 0 && (
                <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "40px 0" }}>
                  No skills in this category yet.
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* ── Stack Flow Diagram ───────────────────────────── */}
          <StackFlowDiagram />
        </div>
      </section>
    </main>
  );
}

function SkillBadge({ skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`badge ${skill.level === "core" ? "core" : ""}`}
      style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "default" }}
    >
      <SkillIcon name={skill.icon} />
      {skill.name}
    </motion.div>
  );
}
