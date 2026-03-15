"use client";
import { config } from "@/client.config";
import { useEffect, useRef, useState } from "react";

function CountStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 2400;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} style={{ textAlign: "center", padding: "20px 12px", background: "var(--dt-card-bg)" }}>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, color: "var(--dt-text1)", margin: "0 0 4px", letterSpacing: "-0.03em" }}>
        {val}{suffix}
      </p>
      <p style={{ fontSize: "10px", color: "var(--dt-text3)", margin: 0, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
    </div>
  );
}

export default function Hero() {
  const yearsInBusiness = new Date().getFullYear() - config.business.yearFounded;
  const [heroForm, setHeroForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  function handleHeroSubmit(e: React.FormEvent) {
    e.preventDefault();
    setHeroSubmitted(true);
  }

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
        background: "var(--dt-bg)",
      }}
    >
      {/* Animated gradient orbs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "10%", left: "30%", width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(180,83,9,0.18) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(60px)",
          animation: "demo-orb-1 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", top: "40%", right: "15%", width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(180,83,9,0.10) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(80px)",
          animation: "demo-orb-2 10s ease-in-out infinite",
        }} />
      </div>

      {/* Grid — handled by CSS per theme in globals.css */}
      <div aria-hidden="true" className="demo-hero-grid" style={{
        position: "absolute", inset: 0,
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse at 50% 35%, black 15%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 15%, transparent 70%)",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", width: "100%" }}>
        {/* Badge */}
        <div className="reveal" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--dt-badge-text)",
          background: "rgba(180,83,9,0.12)", border: "1px solid rgba(180,83,9,0.32)",
          padding: "6px 16px", borderRadius: "999px", marginBottom: "32px",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", animation: "demo-pulse 2s ease-in-out infinite" }} />
          {config.business.serviceArea}
        </div>

        {/* Headline */}
        <h1 className="reveal reveal-delay-1" style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(40px, 7vw, 80px)",
          fontWeight: 900,
          letterSpacing: "-0.05em",
          color: "var(--dt-text1)",
          lineHeight: 0.95,
          margin: "0 0 24px",
        }}>
          {config.hero.headline}
        </h1>

        <p className="reveal reveal-delay-2" style={{
          fontSize: "clamp(15px, 2vw, 19px)",
          color: "var(--dt-text2)",
          lineHeight: 1.75,
          margin: "0 auto 44px",
          maxWidth: "560px",
        }}>
          {config.hero.subline}
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "36px" }}>
          <a
            href="#contact"
            className="demo-btn-primary"
            style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "15px",
              color: "#fff", background: "var(--primary)",
              padding: "16px 36px", borderRadius: "12px", textDecoration: "none",
              boxShadow: "0 0 50px rgba(180,83,9,0.4), 0 4px 20px rgba(0,0,0,0.3)",
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}
          >
            {config.hero.ctaPrimary}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="#gallery"
            className="demo-btn-ghost"
            style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "15px",
              color: "var(--dt-ghost-text)",
              background: "var(--dt-ghost-bg)",
              border: "1px solid var(--dt-ghost-border)",
              padding: "16px 36px", borderRadius: "12px", textDecoration: "none",
            }}
          >
            {config.hero.ctaSecondary}
          </a>
        </div>

        {/* Inline quote form */}
        <div className="reveal reveal-delay-3" style={{
          background: "var(--dt-form-bg)",
          border: "1px solid var(--dt-border-strong)",
          borderRadius: "16px",
          padding: "24px",
          textAlign: "left",
          maxWidth: "560px",
          margin: "0 auto 48px",
        }}>
          {heroSubmitted ? (
            <div style={{ textAlign: "center", padding: "12px 0" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "rgba(62,207,142,0.12)", border: "1.5px solid #3ecf8e",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 12px",
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9l4 4 8-8" stroke="#3ecf8e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px", fontWeight: 700, color: "var(--dt-text1)", margin: "0 0 4px" }}>
                Got it.
              </p>
              <p style={{ fontSize: "13px", color: "var(--dt-text2)", margin: 0 }}>
                We&apos;ll call you within 2 hours.
              </p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--dt-text3)", margin: "0 0 14px" }}>
                Quick Quote — We&apos;ll Call You Back
              </p>
              <form onSubmit={handleHeroSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }} className="demo-hero-form-grid">
                  <input
                    required
                    type="text"
                    value={heroForm.name}
                    onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                    placeholder="Your name"
                    style={{
                      width: "100%", padding: "11px 14px",
                      background: "var(--dt-input-bg)", border: "1px solid var(--dt-input-border)",
                      borderRadius: "8px", color: "var(--dt-input-text)", fontSize: "13px",
                      outline: "none", boxSizing: "border-box",
                    }}
                  />
                  <input
                    required
                    type="tel"
                    value={heroForm.phone}
                    onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                    placeholder="Your phone"
                    style={{
                      width: "100%", padding: "11px 14px",
                      background: "var(--dt-input-bg)", border: "1px solid var(--dt-input-border)",
                      borderRadius: "8px", color: "var(--dt-input-text)", fontSize: "13px",
                      outline: "none", boxSizing: "border-box",
                    }}
                  />
                </div>
                <select
                  value={heroForm.service}
                  onChange={(e) => setHeroForm({ ...heroForm, service: e.target.value })}
                  style={{
                    width: "100%", padding: "11px 14px", marginBottom: "10px",
                    background: "var(--dt-input-bg)", border: "1px solid var(--dt-input-border)",
                    borderRadius: "8px", color: heroForm.service ? "var(--dt-input-text)" : "var(--dt-text3)",
                    fontSize: "13px", outline: "none", boxSizing: "border-box",
                    appearance: "none" as const, cursor: "pointer",
                  }}
                >
                  <option value="">Service type...</option>
                  {config.form.serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <textarea
                  rows={2}
                  value={heroForm.message}
                  onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                  placeholder="Brief description..."
                  style={{
                    width: "100%", padding: "11px 14px", marginBottom: "12px",
                    background: "var(--dt-input-bg)", border: "1px solid var(--dt-input-border)",
                    borderRadius: "8px", color: "var(--dt-input-text)", fontSize: "13px",
                    outline: "none", resize: "none", boxSizing: "border-box",
                  }}
                />
                <button
                  type="submit"
                  className="demo-btn-primary"
                  style={{
                    width: "100%", padding: "13px",
                    background: "var(--primary)", color: "#fff",
                    border: "none", borderRadius: "10px",
                    fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "14px",
                    cursor: "pointer",
                    boxShadow: "0 0 30px rgba(180,83,9,0.3)",
                  }}
                >
                  Get a Call Back →
                </button>
              </form>
            </>
          )}
        </div>

        {/* Stats row — with count-up */}
        <div className="reveal reveal-delay-4" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px",
          background: "var(--dt-border)",
          border: "1px solid var(--dt-border-strong)",
          borderRadius: "18px", overflow: "hidden",
        }}>
          <div style={{ textAlign: "center", padding: "20px 12px", background: "var(--dt-card-bg)" }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, color: "var(--dt-text1)", margin: "0 0 4px", letterSpacing: "-0.03em" }}>
              {config.business.reviewRating}
            </p>
            <p style={{ fontSize: "10px", color: "var(--dt-text3)", margin: 0, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Google Rating</p>
          </div>
          <CountStat end={config.business.reviewCount} suffix="+" label="Reviews" />
          <CountStat end={config.business.jobsCompleted} suffix="+" label="Projects Done" />
          <CountStat end={yearsInBusiness} suffix="+" label="Years in Business" />
        </div>

        {/* Trust badges */}
        <div className="reveal reveal-delay-5" style={{ marginTop: "24px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          {["Licensed & Insured", "Written Quotes", "10-Year Warranty", "Fixed Pricing"].map((b) => (
            <span key={b} style={{ fontSize: "11px", color: "var(--dt-text3)", display: "flex", alignItems: "center", gap: "5px" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="rgba(180,83,9,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {b}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes demo-orb-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -30px); }
        }
        @keyframes demo-orb-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 20px); }
        }
        @keyframes demo-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 480px) {
          .demo-hero-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
