import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";
import { profile } from "../data/profile";

// ─── To enable EmailJS: npm install @emailjs/browser
// Then replace the SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY below.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactSection() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message too short";
    return e;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("sending");

    // Try EmailJS if configured, else fallback to mailto
    if (EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID") {
      try {
        const emailjs = await import("@emailjs/browser");
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } catch {
        setStatus("error");
      }
    } else {
      // mailto fallback
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
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
            Get in touch
          </p>
          <h2 className="section-title">Let's Talk</h2>
          <p className="section-subtitle">
            Open to Software Developer roles in growth-oriented teams. Drop a message and I'll respond within 24 hours.
          </p>

          {/* Contact Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
            <a href={`mailto:${profile.email}`} className="btn-outline" style={{ fontSize: "0.88rem" }}>
              <FaEnvelope /> {profile.email}
            </a>
            <button
              onClick={copyEmail}
              className="btn-outline"
              style={{ fontSize: "0.88rem" }}
            >
              {copied ? <FaCheck style={{ color: "#5cb85c" }} /> : <FaCopy />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.88rem" }}>
              <FaLinkedin /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.88rem" }}>
              <FaGithub /> GitHub
            </a>
          </div>

          {/* Form */}
          <div className="card" style={{ padding: "32px 28px" }}>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "32px 0" }}
                >
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>
                    Message sent!
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>Thanks for reaching out. I'll reply within 24 hours.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-outline"
                    style={{ marginTop: 20, fontSize: "0.88rem" }}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <Field
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <Field
                      label="Your Email"
                      name="email"
                      type="email"
                      placeholder="priya@company.com"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      />
                    </div>
                  </div>
                  <Field
                    label="Message"
                    name="message"
                    type="textarea"
                    placeholder="Hi Himanshu, I'd like to discuss a role..."
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    rows={5}
                  />

                  {status === "error" && (
                    <p style={{ color: "#e05555", fontSize: "0.88rem" }}>
                      Something went wrong. Please email me directly at{" "}
                      <a href={`mailto:${profile.email}`} style={{ color: "var(--accent)" }}>{profile.email}</a>
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === "sending"}
                    style={{ alignSelf: "flex-start" }}
                  >
                    <FaPaperPlane />
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder, value, onChange, error, rows }) {
  const inputStyle = {
    width: "100%",
    background: "var(--bg-secondary)",
    border: `1.5px solid ${error ? "#e05555" : "var(--border)"}`,
    borderRadius: 8,
    padding: "12px 14px",
    color: "var(--text-primary)",
    fontFamily: "var(--font-display)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    resize: "vertical",
  };

  return (
    <div>
      <label
        htmlFor={`contact-${name}`}
        style={{
          display: "block",
          fontSize: "0.82rem",
          fontWeight: 600,
          color: "var(--text-secondary)",
          marginBottom: 6,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={`contact-${name}`}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows || 4}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
          onBlur={(e) => (e.target.style.borderColor = error ? "#e05555" : "var(--border)")}
        />
      ) : (
        <input
          id={`contact-${name}`}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
          onBlur={(e) => (e.target.style.borderColor = error ? "#e05555" : "var(--border)")}
        />
      )}
      {error && (
        <p style={{ color: "#e05555", fontSize: "0.78rem", marginTop: 4 }}>{error}</p>
      )}
    </div>
  );
}
