"use client";
import { useState } from "react";
import Link from "next/link";

const industries = [
  "Auto Detailing",
  "Landscaping / Lawn Care",
  "Home Remodeling",
  "Roofing",
  "Cleaning Services",
  "HVAC / Plumbing / Electric",
  "Painting",
  "Other",
];

type FormState = {
  name: string;
  business: string;
  website: string;
  phone: string;
  industry: string;
  notes: string;
};

export default function AuditPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    business: "",
    website: "",
    phone: "",
    industry: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "audit", ...form }),
      });
      if (res.ok) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--gg-card-bg)",
    border: "1px solid var(--gg-border-strong)",
    borderRadius: "10px",
    padding: "13px 16px",
    fontSize: "14px",
    color: "var(--gg-text1)",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: 600,
    color: "var(--gg-text2)",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <div
      style={{
        background: "var(--gg-bg)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(79,142,247,0.08) 0%, rgba(123,92,248,0.04) 45%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "100px 24px 80px", position: "relative", zIndex: 1 }}>
        {status === "done" ? (
          <div style={{ textAlign: "center", paddingTop: "60px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "var(--gg-green-soft)",
                border: "1px solid var(--gg-green-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M5 11l4 4 8-8" stroke="var(--gg-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "26px",
                fontWeight: 800,
                color: "var(--gg-text1)",
                margin: "0 0 12px",
                letterSpacing: "-0.03em",
              }}
            >
              Audit requested. We&apos;ll take it from here.
            </h2>
            <p style={{ fontSize: "15px", color: "var(--gg-text2)", lineHeight: 1.75, maxWidth: "420px", margin: "0 auto 28px" }}>
              We&apos;ll review your online presence and send your Lead Leak Audit shortly. No meeting required.
              <br /><br />
              Want help interpreting it? Book a quick call below.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "320px", margin: "0 auto" }}>
              <Link
                href="/"
                className="gg-btn-primary"
                style={{
                  display: "block",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#fff",
                  background: "var(--gg-gradient)",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  textAlign: "center",
                  boxShadow: "0 0 24px rgba(79,142,247,0.25)",
                }}
              >
                Done, I&apos;ll wait for the audit
              </Link>
              <a
                href="https://calendly.com/garrett-callsfromclicks/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gg-btn-ghost audit-confirm-secondary-btn"
                style={{
                  display: "block",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "var(--gg-text1)",
                  background: "var(--gg-card-bg)",
                  border: "1px solid var(--gg-border-strong)",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Book a 15-min audit review
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Badge */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gg-accent)",
                  background: "var(--gg-accent-soft)",
                  border: "1px solid var(--gg-accent-border)",
                  padding: "5px 12px",
                  borderRadius: "999px",
                }}
              >
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--gg-accent)", display: "inline-block" }} />
                No strings attached
              </div>
            </div>

            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(26px, 4vw, 36px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--gg-text1)",
                lineHeight: 1.15,
                margin: "0 0 14px",
              }}
            >
              Where is your business leaking jobs online?
            </h1>

            <p
              style={{
                fontSize: "15px",
                color: "var(--gg-text2)",
                lineHeight: 1.75,
                margin: "0 0 40px",
              }}
            >
              Takes 2 minutes. We&apos;ll review your current online presence and send you a plain-English breakdown of what&apos;s costing you leads.
            </p>

            {/* Form card */}
            <div
              style={{
                background: "var(--gg-card-bg)",
                border: "1px solid var(--gg-border-strong)",
                borderRadius: "20px",
                padding: "32px 28px",
              }}
            >
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>Your name *</label>
                    <input required placeholder="John Smith" value={form.name} onChange={set("name")} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Business name *</label>
                    <input required placeholder="Smith Landscaping" value={form.business} onChange={set("business")} style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Phone number *</label>
                  <input required type="tel" placeholder="(586) 555-0100" value={form.phone} onChange={set("phone")} style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Current website (if any)</label>
                  <input type="url" placeholder="https://yoursite.com" value={form.website} onChange={set("website")} style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Industry</label>
                  <select value={form.industry} onChange={set("industry")} style={inputStyle}>
                    <option value="">Select your industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Anything else we should know? (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We run Facebook ads but get very little from them..."
                    value={form.notes}
                    onChange={set("notes")}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                {status === "error" && (
                  <p style={{ fontSize: "13px", color: "var(--gg-red)", margin: 0 }}>
                    Something went wrong. Try again or reach out to us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="gg-btn-primary"
                  style={{
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#fff",
                    background: status === "loading" ? "rgba(79,142,247,0.5)" : "var(--gg-gradient)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "16px",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    boxShadow: status === "loading" ? "none" : "0 0 30px rgba(79,142,247,0.25)",
                    display: "block",
                  }}
                >
                  {status === "loading" ? "Sending..." : "Request Free Audit"}
                </button>
              </form>
            </div>

            {/* Trust line */}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
              {["2-minute form", "Completely free", "No sales call"].map((t, i) => (
                <span key={i} style={{ fontSize: "11px", color: "var(--gg-text3)", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4" stroke="var(--gg-green)" strokeWidth="1.2"/>
                    <path d="M3 5l1.5 1.5 3-3" stroke="var(--gg-green)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      <style>{`
        input:focus, textarea:focus, select:focus {
          border-color: var(--gg-accent) !important;
          box-shadow: 0 0 0 3px var(--gg-accent-soft);
        }
        select { appearance: none; }
        .audit-confirm-secondary-btn:hover {
          border-color: var(--gg-accent-border) !important;
        }
      `}</style>
    </div>
  );
}
