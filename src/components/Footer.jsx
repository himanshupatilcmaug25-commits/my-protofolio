import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 24px",
        background: "var(--bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            Built with React.js + Vite + Tailwind CSS
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: 4 }}>
            © {new Date().getFullYear()} Himanshu Patil. All rights reserved.
          </p>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            style={iconBtn}
          >
            <FaEnvelope />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={iconBtn}
          >
            <FaLinkedin />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={iconBtn}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

const iconBtn = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: "1px solid var(--border)",
  background: "var(--bg-card)",
  color: "var(--text-secondary)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 16,
  textDecoration: "none",
  transition: "color 0.2s ease, border-color 0.2s ease",
};
