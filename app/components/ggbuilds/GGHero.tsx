"use client";
import Link from "next/link";
import { BETA_SPOTS_TOTAL, BETA_SPOTS_TAKEN } from "@/app/config/beta";

const stats = [
  { value: "72 hrs", label: "Delivery guarantee" },
  { value: "100%", label: "Custom — no templates" },
  { value: "$0", label: "Monthly tools you don't need" },
  { value: "2 min", label: "To request your free audit" },
];

export default function GGHero() {
  return (
    <section
      style={{
        background: "var(--gg-bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated orb — main glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(79,142,247,0.13) 0%, rgba(123,92,248,0.07) 45%, transparent 70%)",
          animation: "gg-pulse-glow 6s ease-in-out infinite",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />
      {/* Secondary orb */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "60%",
          left: "30%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(123,92,248,0.07) 0%, transparent 70%)",
          animation: "gg-pulse-glow 8s 2s ease-in-out infinite",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "780px" }}>
        {/* Badge */}
        <div
          className="gg-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--gg-accent)",
            background: "var(--gg-accent-soft)",
            border: "1px solid var(--gg-accent-border)",
            padding: "5px 14px",
            borderRadius: "999px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "var(--gg-accent)",
              display: "inline-block",
              animation: "gg-pulse-glow 2s ease-in-out infinite",
            }}
          />
          Beta — {BETA_SPOTS_TOTAL - BETA_SPOTS_TAKEN} spots left at $499
        </div>

        {/* Headline */}
        <h1
          className="gg-fade-up-1"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(32px, 6vw, 68px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            margin: "0 0 24px",
            color: "var(--gg-text1)",
          }}
        >
          Your business deserves
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #4f8ef7 0%, #a78bfa 60%, #4f8ef7 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gg-shimmer 9s linear infinite",
            }}
          >
            a website that converts.
          </span>
        </h1>

        {/* Sub-copy */}
        <p
          className="gg-fade-up-2"
          style={{
            fontSize: "clamp(15px, 2vw, 19px)",
            color: "var(--gg-text2)",
            lineHeight: 1.75,
            margin: "0 auto 40px",
            maxWidth: "560px",
          }}
        >
          Custom-built, mobile-first, live in 72 hours. For local service businesses that are tired of leaking jobs to competitors with better-looking sites.
        </p>

        {/* CTAs */}
        <div
          className="gg-fade-up-3"
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "64px",
          }}
        >
          <Link
            href="/audit"
            className="gg-btn-primary"
            style={{
              fontWeight: 700,
              fontSize: "14px",
              color: "#fff",
              background: "var(--gg-gradient)",
              padding: "15px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(79,142,247,0.3)",
              display: "inline-block",
            }}
          >
            Get Free Lead Leak Audit
          </Link>
          <a
            href="#offer"
            className="gg-btn-ghost"
            style={{
              fontWeight: 600,
              fontSize: "14px",
              color: "var(--gg-text1)",
              background: "var(--gg-card-bg)",
              border: "1px solid var(--gg-border-strong)",
              padding: "15px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            See what you get →
          </a>
        </div>

        {/* Demo preview video — drop demo-preview.mp4 + demo-poster.jpg into /public to activate */}
        <div
          className="gg-fade-up-4"
          style={{
            width: "100%",
            maxWidth: "640px",
            margin: "0 auto 48px",
            borderRadius: "18px",
            overflow: "hidden",
            border: "1px solid var(--gg-border-strong)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
            background: "var(--gg-card-bg)",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderBottom: "1px solid var(--gg-border)",
              padding: "8px 14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              {["#f26464", "#f5a623", "#27c93f"].map((c) => (
                <div key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c, opacity: 0.85 }} />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--gg-border)",
                borderRadius: "5px",
                padding: "3px 10px",
                fontSize: "10px",
                color: "var(--gg-text3)",
                fontFamily: "monospace",
                textAlign: "center",
              }}
            >
              callsfromclicks.com/demo
            </div>
          </div>
          {/* Video — poster shows immediately; video plays when loaded */}
          <video
            src="/demo-preview.mp4"
            poster="/demo-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            style={{ display: "block", width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
          />
        </div>

        {/* Stats row */}
        <div
          className="gg-fade-up-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--gg-border)",
            border: "1px solid var(--gg-border)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.value}
              style={{
                background: "var(--gg-bg-section)",
                padding: "20px 12px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 800,
                  color: "var(--gg-text1)",
                  margin: "0 0 4px",
                  letterSpacing: "-0.04em",
                }}
              >
                {s.value}
              </p>
              <p style={{ fontSize: "12px", color: "var(--gg-text2)", margin: 0, lineHeight: 1.4 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .gg-hero-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
