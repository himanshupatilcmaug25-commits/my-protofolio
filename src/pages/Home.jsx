import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { HiMail, HiChevronDown } from "react-icons/hi";
import { MdSchool, MdEngineering, MdFlashOn } from "react-icons/md";
import { profile } from "../data/profile";
import { projects, timeline } from "../data/projects";
import { useTyping } from "../hooks/useTyping";
import StatCounter from "../components/StatCounter";
import ProjectModal from "../components/ProjectModal";
import ContactSection from "../components/ContactSection";

const quickFactIcons = {
  graduation: MdSchool,
  engineering: MdEngineering,
  available: MdFlashOn,
};
const timelineIcons = {
  train: "🚇",
  drone: "🚁",
  council: "🏛️",
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const typed = useTyping(profile.typingStrings, 75, 2200);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="grid-bg home-hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 24px 60px",
          position: "relative",
        }}
      >
        {/* Radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(600px, 90vw)",
            height: "min(600px, 90vw)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(242,184,75,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ textAlign: "center", maxWidth: 820, position: "relative" }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              margin: "0 auto 28px",
              border: "3px solid var(--accent)",
              background: "var(--bg-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow: "0 0 0 6px rgba(242,184,75,0.12)",
            }}
          >
            <img
              src="/assets/profile-photo.jpeg"
              alt="Himanshu Patil"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <span
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "200%",
                height: "200%",
                fontSize: 48,
              }}
            >
              👨‍💻
            </span>
          </div>

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 100,
              fontSize: "0.78rem",
              color: "var(--text-secondary)",
              marginBottom: 20,
              fontFamily: "var(--font-mono)",
            }}
          >
            <FaMapMarkerAlt style={{ color: "var(--accent)" }} />
            {profile.location}
          </motion.div>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 12,
              lineHeight: 1.1,
            }}
          >
            Hi, I'm{" "}
            <span style={{ color: "var(--accent)" }}>{profile.name.split(" ")[0]}</span>{" "}
            <span>{profile.name.split(" ")[1]}</span>
          </h1>

          {/* Typing animation */}
          <div
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontFamily: "var(--font-mono)",
              color: "var(--text-secondary)",
              minHeight: "2.2em",
              marginBottom: 28,
            }}
          >
            <span className="typing-cursor">{typed}</span>
          </div>

          {/* CTA Buttons */}
          <div className="home-hero-actions" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={profile.resumeUrl} download className="btn-primary">
              <FaDownload /> Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              <HiMail /> Contact Me
            </a>
          </div>

          {/* Social */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 32 }}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: "var(--text-muted)", fontSize: 20, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <FaGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "var(--text-muted)", fontSize: 20, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <FaLinkedin />
            </a>
            <a
              href={`tel:${profile.phone}`}
              aria-label="Phone"
              style={{ color: "var(--text-muted)", fontSize: 20, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <FaPhone />
            </a>
          </div>
        </motion.div>

        {/* Scroll down hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            color: "var(--text-muted)",
            fontSize: "0.75rem",
            animation: "float 2s ease-in-out infinite",
          }}
        >
          <span>Scroll</span>
          <HiChevronDown style={{ fontSize: 20 }} />
        </motion.div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(6px); }
          }
        `}</style>
      </section>

      {/* ── About / Quick Facts ──────────────────────────────── */}
      <FadeIn>
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="row g-4 g-lg-5 align-items-center">
              <div className="col-12 col-lg-6">
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
                  About me
                </p>
                <h2 className="section-title" style={{ marginBottom: 16 }}>
                  Engineering meets Software
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.97rem" }}>
                  {profile.summary}
                </p>
              </div>

              <div className="col-12 col-lg-6 d-flex flex-column gap-3">
                {profile.quickFacts.map((fact) => {
                  const Icon = quickFactIcons[fact.icon] || MdSchool;
                  return (
                    <div
                      key={fact.label}
                      className="card"
                      style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 10,
                          background: "var(--accent-glow)",
                          border: "1px solid rgba(243, 184, 75, 0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--accent)",
                          fontSize: 20,
                          flexShrink: 0,
                        }}
                      >
                        <Icon />
                      </div>
                      <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{fact.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Stats ────────────────────────────────────────────── */}
      <FadeIn>
        <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div className="row row-cols-2 row-cols-sm-4 g-0">
              {profile.stats.map((stat) => (
                <div className="col" key={stat.label}>
                  <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Featured Projects ─────────────────────────────────── */}
      <FadeIn>
        <section className="section">
          <div className="container">
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
              What I've built
            </p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Full-stack applications built during PG-DAC and beyond.
            </p>

            <div className="row g-4">
              {projects.filter((p) => p.featured).map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="col-12 col-md-6"
                >
                  <div className="card h-100" style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Project header */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--accent)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Full Stack
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 6, color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.techStack.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "3px 10px",
                          borderRadius: 100,
                          border: "1px solid var(--border)",
                          color: "var(--text-secondary)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary"
                      style={{ fontSize: "0.85rem", padding: "9px 18px" }}
                    >
                      View Details
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ fontSize: "0.85rem", padding: "9px 18px" }}
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Experience & Achievements Timeline ───────────────── */}
      <FadeIn>
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
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
              Experience & Achievements
            </p>
            <h2 className="section-title">Beyond the Code</h2>
            <p className="section-subtitle">
              Real-world exposure and national-level recognition before turning full-time to software.
            </p>

            <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: 28,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: "linear-gradient(to bottom, var(--accent), transparent)",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
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
                        fontSize: 18,
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    >
                      {timelineIcons[item.icon] || "📌"}
                    </div>

                    {/* Content */}
                    <div className="card" style={{ flex: 1, padding: "20px 24px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: 12,
                          flexWrap: "wrap",
                          marginBottom: 4,
                        }}
                      >
                        <div>
                          <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>
                            {item.title}
                          </h3>
                          <p style={{ color: "var(--accent)", fontSize: "0.88rem", fontWeight: 600 }}>
                            {item.org}
                          </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.75rem",
                              color: "var(--text-muted)",
                            }}
                          >
                            {item.period}
                          </span>
                          {item.highlight && (
                            <span
                              style={{
                                padding: "2px 10px",
                                borderRadius: 100,
                                background: "var(--accent-glow)",
                                border: "1px solid rgba(242,184,75,0.4)",
                                color: "var(--accent)",
                                fontSize: "0.72rem",
                                fontWeight: 700,
                              }}
                            >
                              🏆 {item.highlight}
                            </span>
                          )}
                        </div>
                      </div>
                      <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, marginTop: 10 }}>
                        {item.points.map((pt, j) => (
                          <li key={j} style={{ display: "flex", gap: 8, color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                            <span style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Contact ─────────────────────────────────────────── */}
      <ContactSection />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
