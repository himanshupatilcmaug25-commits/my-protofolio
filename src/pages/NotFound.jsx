import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        textAlign: "center",
        flexDirection: "column",
        gap: 24,
      }}
      className="grid-bg"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(5rem, 15vw, 10rem)",
            fontWeight: 700,
            color: "var(--bg-secondary)",
            lineHeight: 1,
            marginBottom: 8,
            letterSpacing: "-0.04em",
            textShadow: "0 0 60px rgba(242,184,75,0.15)",
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: 12,
          }}
        >
          Page Not Found
        </h1>

        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: 400, margin: "0 auto 32px" }}>
          Looks like you took a wrong turn. This route doesn't exist — but the ones in the navbar do.
        </p>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "12px 20px",
            display: "inline-block",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#e05555" }}>Error</span>:{" "}
          <span style={{ color: "var(--accent)" }}>404</span> — Route not matched.
        </div>

        <div>
          <Link to="/" className="btn-primary">
            <FaHome /> Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
