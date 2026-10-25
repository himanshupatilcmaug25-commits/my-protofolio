import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/skills", label: "Skills" },
  { to: "/courses", label: "Courses & Certs" },
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(15, 27, 51, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(185, 198, 224, 0.1)" : "none",
        transition: "background 0.3s ease, border 0.3s ease",
      }}
    >
      {/* Logo */}
      <NavLink
        to="/"
        style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
      >
        <FaCode style={{ color: "var(--accent)", fontSize: 20 }} />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            color: "var(--text-primary)",
            fontSize: "0.95rem",
            letterSpacing: "0.02em",
          }}
        >
          himanshu<span style={{ color: "var(--accent)" }}> patil</span>
        </span>
      </NavLink>

      {/* Desktop Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
        className="d-none d-md-flex"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            style={({ isActive }) => ({
              textDecoration: "none",
              padding: "6px 16px",
              borderRadius: 6,
              fontSize: "0.9rem",
              fontWeight: 500,
              color: isActive ? "var(--accent)" : "var(--text-secondary)",
              background: isActive ? "var(--accent-glow)" : "transparent",
              border: isActive ? "1px solid rgba(242,184,75,0.25)" : "1px solid transparent",
              transition: "all 0.2s ease",
            })}
          >
            {link.label}
          </NavLink>
        ))}

        <button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          style={{
            marginLeft: 12,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 16,
            transition: "all 0.2s ease",
          }}
        >
          {isDark ? <HiSun style={{ color: "var(--accent)" }} /> : <HiMoon />}
        </button>
      </nav>

      {/* Mobile: theme + hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="d-flex d-md-none">
        <button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          {isDark ? <HiSun style={{ color: "var(--accent)" }} /> : <HiMoon />}
        </button>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          style={{
            width: 36,
            height: 36,
            borderRadius: 6,
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 20,
          }}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: 64,
              left: 0,
              right: 0,
              background: "rgba(15, 27, 51, 0.97)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--border)",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  padding: "12px 16px",
                  borderRadius: 8,
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: isActive ? "var(--accent)" : "var(--text-primary)",
                  background: isActive ? "var(--accent-glow)" : "transparent",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
