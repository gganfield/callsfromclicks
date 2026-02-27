"use client";
import Link from "next/link";
import { BETA_SPOTS_TOTAL, BETA_SPOTS_TAKEN } from "@/app/config/beta";

export default function CTASection() {
  const spotsRemain = BETA_SPOTS_TOTAL - BETA_SPOTS_TAKEN;
  const rawPercent = (BETA_SPOTS_TAKEN / BETA_SPOTS_TOTAL) * 100;
  const progressPercent = Math.max(2, rawPercent);

  return (
    <section
      style={{
        background: "var(--gg-bg-section)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(79,142,247,0.12) 0%, rgba(123,92,248,0.06) 50%, transparent 70%)",
          animation: "gg-pulse-glow 6s ease-in-out infinite",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      <div style={{ maxWidth: "580px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "var(--gg-text1)",
            lineHeight: 1.1,
            margin: "0 0 18px",
          }}
        >
          Stop leaving jobs on
          <br />
          <span
            style={{
              background: "var(--gg-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            the table online.
          </span>
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "var(--gg-text2)",
            lineHeight: 1.75,
            margin: "0 auto 36px",
            maxWidth: "440px",
          }}
        >
          We&apos;ll send back a real breakdown of where your business is losing jobs online — completely free. No sales call, no obligation.
        </p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <Link
            href="/audit"
            style={{
              fontWeight: 700,
              fontSize: "15px",
              color: "#fff",
              background: "var(--gg-gradient)",
              padding: "16px 40px",
              borderRadius: "12px",
              textDecoration: "none",
              boxShadow: "0 0 60px rgba(79,142,247,0.35)",
              display: "inline-block",
            }}
            className="gg-cta-main"
          >
            Request Free Lead Leak Audit
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {["2-minute form", "Completely free", "No sales call"].map((t, i) => (
              <span key={i} style={{ fontSize: "12px", color: "var(--gg-text3)", display: "flex", alignItems: "center", gap: "5px" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="var(--gg-text3)" strokeWidth="1.2"/>
                  <path d="M3 5l1.5 1.5 3-3" stroke="var(--gg-text3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </span>
            ))}
          </div>

          {/* Beta progress bar */}
          <div style={{ marginTop: "32px", width: "100%", maxWidth: "320px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "6px",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--gg-text3)",
                }}
              >
                Beta spots
              </span>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--gg-text2)" }}>
                {spotsRemain}/{BETA_SPOTS_TOTAL} available
              </span>
            </div>
            <div
              style={{
                height: "6px",
                background: "var(--gg-surface)",
                borderRadius: "999px",
                overflow: "hidden",
                border: "1px solid var(--gg-border)",
              }}
            >
              <div
                className="gg-beta-fill"
                style={{
                  height: "100%",
                  width: `${progressPercent}%`,
                  minWidth: progressPercent > 0 ? "4px" : undefined,
                  background: "var(--gg-gradient)",
                  borderRadius: "999px",
                  transition: "width 0.4s ease",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gg-beta-fill {
          background: linear-gradient(135deg, #4f8ef7 0%, #7b5cf8 50%, #4f8ef7 100%) !important;
          background-size: 200% 100% !important;
          animation: gg-beta-shimmer 4s ease-in-out infinite;
        }
        [data-theme="light"] .gg-beta-fill {
          background: linear-gradient(135deg, #3a7ef5 0%, #6b3cf5 50%, #3a7ef5 100%) !important;
        }
        @keyframes gg-beta-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
