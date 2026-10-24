import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCounter } from "../hooks/useCounter";

export default function StatCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCounter(value, 1800, inView);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: "24px 16px",
      }}
    >
      <div
        style={{
          fontSize: "clamp(2.2rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "var(--accent)",
          fontFamily: "var(--font-mono)",
          lineHeight: 1,
        }}
      >
        {count}
        <span style={{ fontSize: "0.55em" }}>{suffix}</span>
      </div>
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "0.85rem",
          marginTop: 6,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </p>
    </div>
  );
}
