import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FaGithub, FaExternalLinkAlt, FaDownload } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(7, 14, 28, 0.85)",
          backdropFilter: "blur(6px)",
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", damping: 22, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            maxWidth: 680,
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "24px 28px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 16,
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 4,
                }}
              >
                {project.title}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "var(--bg-secondary)",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              <HiX />
            </button>
          </div>

          {/* Tech Stack Chips */}
          <div style={{ padding: "16px 28px 0", display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "var(--accent-glow)",
                  border: "1px solid rgba(242,184,75,0.35)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Screenshot placeholder */}
          {!project.screenshot && (
            <div
              style={{
                margin: "20px 28px",
                height: 180,
                borderRadius: 10,
                background: "var(--bg-secondary)",
                border: "1px dashed var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 8,
                color: "var(--text-muted)",
                fontSize: "0.85rem",
              }}
            >
              <span style={{ fontSize: 28 }}>🖼️</span>
              <span>Replace with a real screenshot at /assets/{project.id}-screenshot.png</span>
            </div>
          )}
          {project.screenshot && (
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              style={{ margin: "20px 28px", width: "calc(100% - 56px)", borderRadius: 10, objectFit: "cover" }}
            />
          )}

          {/* Highlights */}
          <div style={{ padding: "0 28px 24px" }}>
            <h3
              style={{
                fontSize: "0.85rem",
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 12,
              }}
            >
              What I built
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ display: "flex", gap: 10, color: "var(--text-secondary)", fontSize: "0.92rem" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: "0.88rem", padding: "10px 20px" }}
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "0.88rem", padding: "10px 20px" }}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              ) : (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 20px",
                    background: "var(--bg-secondary)",
                    color: "var(--text-muted)",
                    borderRadius: 6,
                    fontSize: "0.88rem",
                    fontWeight: 500,
                  }}
                >
                  <FaExternalLinkAlt /> Live Demo — coming soon
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
