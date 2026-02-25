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
    <div ref={ref} style={{ textAlign: "center", padding: "20px 12px", background: "rgba(255,255,255,0.04)" }}>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, color: "#fff", margin: "0 0 4px", letterSpacing: "-0.03em" }}>
        {val}{suffix}
      </p>
      <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", margin: 0, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
    </div>
  );
}

export default function Hero() {
  const yearsInBusiness = new Date().getFullYear() - config.business.yearFounded;

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
        background: "#070b14",
      }}
    >
      {/* Animated gradient orbs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "10%", left: "30%", width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(180,83,9,0.2) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(60px)",
          animation: "demo-orb-1 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", top: "40%", right: "15%", width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(180,83,9,0.12) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(80px)",
          animation: "demo-orb-2 10s ease-in-out infinite",
        }} />
      </div>

      {/* Grid */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse at 50% 35%, black 15%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 15%, transparent 70%)",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
        {/* Badge */}
        <div className="reveal" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.7)",
          background: "rgba(180,83,9,0.15)", border: "1px solid rgba(180,83,9,0.35)",
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
          color: "#fff",
          lineHeight: 0.95,
          margin: "0 0 24px",
        }}>
          {config.hero.headline}
        </h1>

        <p className="reveal reveal-delay-2" style={{
          fontSize: "clamp(15px, 2vw, 19px)",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.75,
          margin: "0 auto 44px",
          maxWidth: "560px",
        }}>
          {config.hero.subline}
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "64px" }}>
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
              color: "#fff",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "16px 36px", borderRadius: "12px", textDecoration: "none",
            }}
          >
            {config.hero.ctaSecondary}
          </a>
        </div>

        {/* Stats row — with count-up */}
        <div className="reveal reveal-delay-4" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "18px", overflow: "hidden",
        }}>
          <div style={{ textAlign: "center", padding: "20px 12px", background: "rgba(255,255,255,0.04)" }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, color: "#fff", margin: "0 0 4px", letterSpacing: "-0.03em" }}>
              {config.business.reviewRating}
            </p>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", margin: 0, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Google Rating</p>
          </div>
          <CountStat end={config.business.reviewCount} suffix="+" label="Reviews" />
          <CountStat end={config.business.jobsCompleted} suffix="+" label="Projects Done" />
          <CountStat end={yearsInBusiness} suffix="+" label="Years in Business" />
        </div>

        {/* Trust badges */}
        <div className="reveal reveal-delay-5" style={{ marginTop: "24px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          {["Licensed & Insured", "Written Quotes", "10-Year Warranty", "Fixed Pricing"].map((b) => (
            <span key={b} style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "5px" }}>
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
      `}</style>
    </section>
  );
}
