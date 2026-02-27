"use client";
import { useState } from "react";

const agencyItems = [
  "Hosting + uptime monitoring",
  "Security updates + fixes",
  "Small content edits",
  "Performance checks",
  "Priority support",
];

const planItems = [
  "Everything on the left",
  "60 min of batched updates each month",
  "Quarterly refresh (up to 2 hours)",
  "Bug fixes covered if anything breaks",
];

const planOptions = [
  {
    id: "monthly",
    label: "Monthly",
    price: "$79",
    sub: "/mo",
    note: null,
    badge: null,
  },
  {
    id: "six",
    label: "6 months",
    price: "$426",
    sub: " upfront",
    note: "Save 10%",
    badge: "Most popular",
  },
  {
    id: "twelve",
    label: "12 months",
    price: "$756",
    sub: " upfront",
    note: "Save 20%",
    badge: null,
  },
];

export default function AfterLaunchSupport() {
  const [selected, setSelected] = useState("six");

  return (
    <section
      id="after-launch-support"
      style={{
        background: "var(--gg-bg)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(62,207,142,0.07) 0%, rgba(79,142,247,0.05) 45%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <div style={{ maxWidth: "600px", marginBottom: "56px" }}>
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gg-text3)",
              marginBottom: "14px",
            }}
          >
            After the Build
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--gg-text1)",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            We don&apos;t disappear
            <br />
            after launch.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--gg-text2)", lineHeight: 1.7, margin: 0, maxWidth: "480px" }}>
            Most agencies hand you a login and walk away. Your site is kept running, updated, and converting.
          </p>
        </div>

        {/* Comparison grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "28px",
            alignItems: "stretch",
          }}
          className="gg-als-compare-grid"
        >
          {/* Left: agency column */}
          <div
            style={{
              background: "var(--gg-card-bg)",
              border: "1px solid var(--gg-border)",
              borderRadius: "20px",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gg-text3)",
                  margin: "0 0 8px",
                }}
              >
                Typical agency
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 700,
                  color: "var(--gg-text2)",
                  letterSpacing: "-0.02em",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                $150–$300/mo
              </p>
            </div>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
              {agencyItems.map((text, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "var(--gg-text3)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M2 6l4-4M6 6L2 2" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: your plan */}
          <div
            style={{
              background: "var(--gg-card-bg)",
              border: "1px solid var(--gg-green-border)",
              borderRadius: "20px",
              padding: "32px 28px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Green glow behind card */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "240px",
                height: "240px",
                background: "radial-gradient(ellipse at center, rgba(62,207,142,0.1) 0%, transparent 70%)",
                pointerEvents: "none",
                borderRadius: "50%",
              }}
            />
            {/* Green top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, var(--gg-green) 0%, rgba(62,207,142,0.2) 100%)",
              }}
            />

            <div style={{ marginBottom: "20px", position: "relative" }}>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gg-green)",
                  margin: "0 0 8px",
                }}
              >
                Your plan
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 700,
                  color: "var(--gg-text1)",
                  letterSpacing: "-0.02em",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                $79/mo — all of it, plus more.
              </p>
            </div>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px", flex: 1, position: "relative" }}>
              {planItems.map((text, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: i === 0 ? "var(--gg-text3)" : "var(--gg-text1)",
                    fontWeight: i === 0 ? 400 : 500,
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "var(--gg-green-soft)",
                      border: "1px solid var(--gg-green-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5 5-5" stroke="var(--gg-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Plan picker */}
        <div
          style={{
            background: "var(--gg-card-bg)",
            border: "1px solid var(--gg-border-strong)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "20px 28px",
              borderBottom: "1px solid var(--gg-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--gg-text2)",
                margin: 0,
              }}
            >
              Ongoing Stability + Support — after the first 90 days
            </p>
            <p style={{ fontSize: "12px", color: "var(--gg-text3)", margin: 0 }}>
              Prefer to lock it in upfront? Discounted options below.
            </p>
          </div>

          {/* Option cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
            }}
            className="gg-plan-picker"
          >
            {planOptions.map((opt, i) => {
              const isSelected = selected === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  style={{
                    background: isSelected ? "var(--gg-accent-soft)" : "transparent",
                    border: "none",
                    borderRight: i < planOptions.length - 1 ? "1px solid var(--gg-border)" : "none",
                    borderTop: isSelected ? "2px solid var(--gg-accent)" : "2px solid transparent",
                    padding: "24px 20px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "background 0.15s, border-color 0.15s",
                    position: "relative",
                  }}
                >
                  {opt.badge && (
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        fontSize: "9px",
                        fontWeight: 700,
                        color: "var(--gg-accent)",
                        background: "var(--gg-accent-soft)",
                        border: "1px solid var(--gg-accent-border)",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {opt.badge}
                    </span>
                  )}
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: isSelected ? "var(--gg-accent)" : "var(--gg-text3)",
                      margin: "0 0 6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      transition: "color 0.15s",
                    }}
                  >
                    {opt.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "22px",
                      fontWeight: 800,
                      color: isSelected ? "var(--gg-text1)" : "var(--gg-text2)",
                      letterSpacing: "-0.03em",
                      margin: "0 0 4px",
                      lineHeight: 1,
                      transition: "color 0.15s",
                    }}
                  >
                    {opt.price}
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "var(--gg-text3)",
                        letterSpacing: 0,
                      }}
                    >
                      {opt.sub}
                    </span>
                  </p>
                  {opt.note && (
                    <p
                      style={{
                        fontSize: "11px",
                        color: "var(--gg-green)",
                        margin: 0,
                        fontWeight: 600,
                      }}
                    >
                      {opt.note}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div
            style={{
              padding: "14px 28px",
              borderTop: "1px solid var(--gg-border)",
            }}
          >
            <p style={{ fontSize: "12px", color: "var(--gg-text3)", margin: 0 }}>
              Most clients choose 6 months upfront. Monthly plan cancels anytime. Prepaid plans cover 6 or 12 months.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .gg-als-compare-grid { grid-template-columns: 1fr !important; }
          .gg-plan-picker { grid-template-columns: 1fr !important; }
          .gg-plan-picker button { border-right: none !important; border-bottom: 1px solid var(--gg-border); }
          .gg-plan-picker button:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
