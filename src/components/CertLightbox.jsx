import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiDownload } from "react-icons/hi";

export default function CertLightbox({ cert, onClose }) {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cert-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(7, 14, 28, 0.90)",
          backdropFilter: "blur(8px)",
          zIndex: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <motion.div
          key="cert-modal"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.88 }}
          transition={{ type: "spring", damping: 22, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            maxWidth: 760,
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "20px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {cert.title}
              </h2>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: 2 }}>
                {cert.issuer} · Credential: {cert.credentialId}
              </p>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {cert.downloadUrl && (
                <a
                  href={cert.downloadUrl}
                  download
                  className="btn-primary"
                  style={{ fontSize: "0.82rem", padding: "8px 16px" }}
                >
                  <HiDownload /> Download
                </a>
              )}
              <button
                onClick={onClose}
                aria-label="Close"
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
                }}
              >
                <HiX />
              </button>
            </div>
          </div>

          {/* Image */}
          <div style={{ background: "var(--bg-secondary)", padding: 24 }}>
            {cert.image ? (
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                style={{ width: "100%", borderRadius: 10, display: "block" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div
              style={{
                display: cert.image ? "none" : "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 280,
                gap: 12,
                color: "var(--text-muted)",
              }}
            >
              <span style={{ fontSize: 40 }}>🎓</span>
              <p style={{ fontSize: "0.9rem" }}>
                Place certificate image at <code style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>/assets/pg-dac-certificate.jpg</code>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
