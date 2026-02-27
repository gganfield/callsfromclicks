"use client";
import { useState, useRef, useEffect, useCallback } from "react";
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
  email: string;
  website: string;
  phone: string;
  industry: string;
  notes: string;
};

export default function AuditPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    business: "",
    email: "",
    website: "",
    phone: "",
    industry: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<{ name?: boolean; business?: boolean; email?: boolean }>({});
  const [showShake, setShowShake] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const businessInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef(form);
  formRef.current = form;

  const firstEmptyField = fieldErrors.name ? "name" : fieldErrors.business ? "business" : fieldErrors.email ? "email" : null;

  const getFirstInvalidRef = useCallback(() => {
    const f = formRef.current;
    const nameOk = f.name.trim().length > 0;
    const businessOk = f.business.trim().length > 0;
    const emailOk = f.email.trim().length > 0;
    if (!nameOk) return nameInputRef;
    if (!businessOk) return businessInputRef;
    if (!emailOk) return emailInputRef;
    return null;
  }, []);

  useEffect(() => {
    if (!firstEmptyField) return;
    const ref = firstEmptyField === "name" ? nameInputRef : firstEmptyField === "business" ? businessInputRef : emailInputRef;
    const el = ref?.current;
    if (el) {
      const t = requestAnimationFrame(() => el.focus());
      return () => cancelAnimationFrame(t);
    }
  }, [firstEmptyField]);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const revalidateOnBlur = useCallback(() => {
    const hasError = fieldErrors.name || fieldErrors.business || fieldErrors.email;
    if (!hasError) return;
    const f = formRef.current;
    const nameOk = f.name.trim().length > 0;
    const businessOk = f.business.trim().length > 0;
    const emailOk = f.email.trim().length > 0;
    const next: { name?: boolean; business?: boolean; email?: boolean } = {};
    if (!nameOk) next.name = true;
    else if (!businessOk) next.business = true;
    else if (!emailOk) next.email = true;
    setFieldErrors(next);
  }, [fieldErrors.name, fieldErrors.business, fieldErrors.email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameOk = form.name.trim().length > 0;
    const businessOk = form.business.trim().length > 0;
    const emailOk = form.email.trim().length > 0;
    if (!nameOk || !businessOk || !emailOk) {
      const allInvalid: { name?: boolean; business?: boolean; email?: boolean } = {};
      if (!nameOk) allInvalid.name = true;
      if (!businessOk) allInvalid.business = true;
      if (!emailOk) allInvalid.email = true;
      setFieldErrors(allInvalid);

      const reducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reducedMotion) {
        setShowShake(true);
        setTimeout(() => setShowShake(false), 600);
      }

      const scrollBehavior = reducedMotion ? "auto" : "smooth";
      const ref = getFirstInvalidRef();
      const el = ref?.current;
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: scrollBehavior as ScrollBehavior, block: "center" });
          el.focus();
        }, reducedMotion ? 0 : 80);
      }

      setTimeout(() => {
        const next: { name?: boolean; business?: boolean; email?: boolean } = {};
        if (!nameOk) next.name = true;
        else if (!businessOk) next.business = true;
        else if (!emailOk) next.email = true;
        setFieldErrors(next);
      }, 1000);
      return;
    }
    setFieldErrors({});
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

      <div className="audit-page-wrap" style={{ maxWidth: "960px", margin: "0 auto", padding: "32px 24px 80px", position: "relative", zIndex: 1 }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "var(--gg-text3)",
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          ← Back to home
        </Link>
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
            {/* Top section: full width headline + subheadline */}
            <div style={{ marginBottom: "40px" }}>
              <h1
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(26px, 4vw, 36px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--gg-text1)",
                  lineHeight: 1.15,
                  margin: "0 0 16px",
                }}
              >
                Where is your business leaking jobs online?
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--gg-text2)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                2-minute form. We&apos;ll email a clear breakdown of what&apos;s costing you calls.
              </p>
            </div>

            {/* Two columns: left 40% (what you'll get), right 60% (form) — desktop; mobile: form first, then bullets */}
            <div className="audit-two-col">
              {/* Left column: What you'll get + sample link (desktop) / shown after form on mobile */}
              <div className="audit-left-col">
                <div
                  className="audit-left-card"
                  style={{
                    background: "var(--gg-card-bg)",
                    border: "1px solid var(--gg-border)",
                    borderRadius: "14px",
                    padding: "28px 24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--gg-text3)", letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 12px" }}>
                    What your audit looks like
                  </p>
                  <div className="audit-preview-wrap" style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                    <iframe
                      src="/audit/example?embed=1"
                      title="Sample audit preview"
                      className="audit-preview-iframe"
                      style={{
                        width: "100%",
                        maxWidth: "320px",
                        height: "100%",
                        minHeight: "395px",
                        border: "1px solid var(--gg-border)",
                        borderRadius: "10px",
                        background: "var(--gg-bg)",
                        boxShadow: "inset 0 2px 12px rgba(0,0,0,0.08)",
                        filter: "brightness(0.96)",
                      }}
                    />
                  </div>
                  <Link
                    href="/audit/example"
                    style={{
                      display: "inline-block",
                      marginTop: "24px",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--gg-accent)",
                      textDecoration: "none",
                    }}
                  >
                    View sample audit →
                  </Link>
                </div>
              </div>

              {/* Right column: Form card */}
              <div className="audit-right-col">
                <div
                  className="audit-form-card"
                  style={{
                    background: "var(--gg-card-bg)",
                    border: "1px solid var(--gg-border-strong)",
                    borderRadius: "20px",
                    padding: "32px 28px",
                  }}
                >
                  <form onSubmit={handleSubmit} className={`audit-form ${showShake ? "audit-form-shake" : ""}`} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={labelStyle}>Your name *</label>
                        <input ref={nameInputRef} placeholder="John Smith" value={form.name} onChange={set("name")} onBlur={revalidateOnBlur} style={inputStyle} className={fieldErrors.name ? "audit-field-error" : ""} />
                        {firstEmptyField === "name" && (
                          <p style={{ fontSize: "11px", color: "var(--gg-red)", margin: "6px 0 0" }}>Please complete the highlighted fields</p>
                        )}
                      </div>
                      <div>
                        <label style={labelStyle}>Business name *</label>
                        <input ref={businessInputRef} placeholder="Smith Landscaping" value={form.business} onChange={set("business")} onBlur={revalidateOnBlur} style={inputStyle} className={fieldErrors.business ? "audit-field-error" : ""} />
                        {firstEmptyField === "business" && (
                          <p style={{ fontSize: "11px", color: "var(--gg-red)", margin: "6px 0 0" }}>Please complete the highlighted fields</p>
                        )}
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={labelStyle}>Email *</label>
                        <input ref={emailInputRef} type="email" placeholder="you@business.com" value={form.email} onChange={set("email")} onBlur={revalidateOnBlur} style={inputStyle} className={fieldErrors.email ? "audit-field-error" : ""} />
                        {firstEmptyField === "email" && (
                          <p style={{ fontSize: "11px", color: "var(--gg-red)", margin: "6px 0 0" }}>Please complete the highlighted fields</p>
                        )}
                      </div>
                      <div>
                        <label style={labelStyle}>Phone (optional)</label>
                        <input type="tel" placeholder="(586) 555-0100" value={form.phone} onChange={set("phone")} style={inputStyle} />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={labelStyle}>Current website (if you have one)</label>
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
              </div>
            </div>

            {/* Trust line — below both sections, evenly spaced */}
            <div className="audit-trust-line" style={{ display: "flex", justifyContent: "space-evenly", gap: "24px", marginTop: "32px", flexWrap: "wrap" }}>
              {["Delivered within 24 hours", "Completely free", "No sales call"].map((t, i) => (
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
        input, textarea, select {
          transition: border-color 1.8s ease, box-shadow 1.8s ease;
        }
        input:focus, textarea:focus, select:focus {
          border-color: var(--gg-accent) !important;
          box-shadow: 0 0 0 3px var(--gg-accent-soft);
        }
        select { appearance: none; }
        .audit-confirm-secondary-btn:hover {
          border-color: var(--gg-accent-border) !important;
        }

        .audit-field-error {
          border-width: 1px !important;
          border-color: rgba(242, 100, 100, 0.5) !important;
          box-shadow: none !important;
        }
        @media (prefers-reduced-motion: no-preference) {
          .audit-form-shake {
            animation: audit-form-shake 0.5s ease-in-out;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .audit-form-shake {
            animation: none;
          }
        }

        .audit-two-col {
          display: grid;
          grid-template-columns: 40% 1fr;
          gap: 40px;
          align-items: stretch;
        }
        .audit-left-col {
          min-width: 0;
          display: flex;
        }
        .audit-left-card {
          min-height: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .audit-right-col {
          min-width: 0;
          display: flex;
          flex-direction: column;
        }
        .audit-form-card {
          flex: 1;
        }

        @keyframes audit-form-shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }

        .audit-preview-wrap {
          align-self: center;
        }
        .audit-preview-iframe {
          flex: 1;
        }

        @media (max-width: 720px) {
          .audit-page-wrap {
            padding-top: 24px !important;
          }
          .audit-two-col {
            grid-template-columns: 1fr;
            gap: 28px;
            align-items: start;
          }
          .audit-left-col {
            display: block;
          }
          .audit-left-card {
            height: auto !important;
            flex: none;
          }
          .audit-right-col {
            display: block;
          }
          .audit-two-col .audit-left-col {
            order: 2;
          }
          .audit-two-col .audit-right-col {
            order: 1;
          }
          .audit-form-card {
            padding: 24px 22px !important;
          }
          .audit-form {
            gap: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}
