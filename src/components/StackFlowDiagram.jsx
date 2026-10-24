import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stackFlow } from "../data/skills";

export default function StackFlowDiagram() {
  const [hovered, setHovered] = useState(null);

  const node = hovered ? stackFlow.find((n) => n.id === hovered) : null;

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "28px 32px",
        marginTop: 48,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.78rem",
          color: "var(--accent)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        My Core Stack Flow
      </p>

      {/* Flow Diagram */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          flexWrap: "wrap",
          rowGap: 16,
        }}
      >
        {stackFlow.map((node, i) => (
          <div key={node.id} style={{ display: "flex", alignItems: "center" }}>
            <motion.button
              className="stack-flow-node"
              onHoverStart={() => setHovered(node.id)}
              onHoverEnd={() => setHovered(null)}
              onFocus={() => setHovered(node.id)}
              onBlur={() => setHovered(null)}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: hovered === node.id
                  ? `${node.color}20`
                  : "var(--bg-secondary)",
                border: `2px solid ${hovered === node.id ? node.color : "var(--border)"}`,
                borderRadius: 12,
                padding: "12px 20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                transition: "background 0.2s ease, border-color 0.2s ease",
                minWidth: 110,
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {node.layer}
              </span>
              <span
                style={{
                  fontWeight: 700,
                  color: hovered === node.id ? node.color : "var(--text-primary)",
                  fontSize: "0.95rem",
                  transition: "color 0.2s ease",
                }}
              >
                {node.label}
              </span>
            </motion.button>

            {/* Arrow between nodes */}
            {i < stackFlow.length - 1 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 8px",
                  color: "var(--text-muted)",
                  fontSize: "1.2rem",
                }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tooltip */}
      <AnimatePresence mode="wait">
        {node && (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            style={{
              marginTop: 20,
              padding: "12px 18px",
              background: "var(--bg-secondary)",
              borderRadius: 8,
              border: `1px solid ${node.color}50`,
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                color: node.color,
                fontWeight: 600,
              }}
            >
              {node.label}
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>used in:</span>
            {node.projects.map((p) => (
              <span
                key={p}
                style={{
                  padding: "2px 10px",
                  borderRadius: 100,
                  background: `${node.color}18`,
                  border: `1px solid ${node.color}40`,
                  color: "var(--text-secondary)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                }}
              >
                {p}
              </span>
            ))}
          </motion.div>
        )}
        {!node && (
          <p
            style={{
              marginTop: 16,
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: "0.82rem",
              fontStyle: "italic",
            }}
          >
            Hover a node to see which projects used it
          </p>
        )}
      </AnimatePresence>
    </div>
  );
}
