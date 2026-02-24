"use client";

import { config } from "@/client.config";
import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "14px",
    padding: "13px 16px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: "rgba(255,255,255,0.4)",
    marginBottom: "6px",
  };

  return (
    <section id="contact" style={{ background: "var(--bg-dark)", padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
      {/* Subtle glow */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse at center, rgba(180,83,9,0.06) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div style={{ maxWidth: "560px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "14px" }}>
            Free Quote
          </p>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1, margin: "0 0 14px" }}>
            Let&apos;s Talk About Your Project
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>
            No pushy sales calls. Just a straight conversation about what you need.
          </p>
        </div>

        {status === "success" ? (
          <div className="reveal" style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px", padding: "48px 32px", textAlign: "center",
          }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px",
              background: "rgba(52,211,153,0.12)", border: "1.5px solid #34d399",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10.5l4 4 8-8" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "20px", fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>
              Got it \u2014 we&apos;ll be in touch soon.
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", margin: 0 }}>
              We typically follow up within a few hours during business hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="demo-form-grid">
              <div>
                <label style={labelStyle}>Name *</label>
                <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone *</label>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(586) 555-0000" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Service Needed</label>
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const }}>
                <option value="">Select a service...</option>
                {config.form.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyle}>Tell us about your project</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What are you looking to do? Rough timeline? Any other details..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="demo-btn-primary"
              style={{
                fontWeight: 700, fontSize: "15px", color: "#fff",
                background: status === "sending" ? "rgba(180,83,9,0.5)" : "var(--primary)",
                border: "none", borderRadius: "12px", padding: "16px",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                boxShadow: status === "sending" ? "none" : "0 0 40px rgba(180,83,9,0.3)",
              }}
            >
              {status === "sending" ? "Sending..." : "Send My Request"}
            </button>

            {status === "error" && (
              <p style={{ fontSize: "12px", color: "#f26464", textAlign: "center", margin: 0 }}>
                Something went wrong. Please call us directly at {config.business.phone}.
              </p>
            )}

            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", textAlign: "center", margin: 0 }}>
              Or call directly: <a href={`tel:${config.business.phoneRaw}`} style={{ color: "var(--primary)", textDecoration: "none" }}>{config.business.phone}</a>
            </p>
          </form>
        )}
      </div>

      <style>{`
        #contact input:focus, #contact textarea:focus, #contact select:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 3px rgba(180,83,9,0.15);
        }
        @media (max-width: 480px) {
          .demo-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
