"use client";
import React from "react";
import Link from "next/link";
import { BETA_SPOTS_TOTAL, BETA_SPOTS_TAKEN } from "@/app/config/beta";

const tagIcons: Record<string, React.ReactElement> = {
  clock: (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 3v3l2 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  map: (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path d="M6 1C4.1 1 2.5 2.6 2.5 4.5 2.5 7 6 11 6 11s3.5-4 3.5-6.5C9.5 2.6 7.9 1 6 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <circle cx="6" cy="4.5" r="1" stroke="currentColor" strokeWidth="1.1"/>
    </svg>
  ),
  loop: (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path d="M8.5 3.5l2-2M10.5 3.5L8.5 3.5V1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 4.5A4.5 4.5 0 111.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  gift: (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <rect x="1.5" y="4.5" width="9" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M6 4.5v6M1.5 7h9" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M6 4.5c-1-2-3-2-3 0s3 0 3 0 2-2 3 0-3 0-3 0z" stroke="currentColor" strokeWidth="1.1"/>
    </svg>
  ),
  shield: (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path d="M6 1L2 3v3c0 2.5 1.7 4.5 4 5 2.3-.5 4-2.5 4-5V3L6 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M4 6l1.5 1.5L8 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  zap: (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path d="M6.5 1L4 6.5h3.5L5.5 11 8 5.5H4.5L6.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  message: (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path d="M2 2h8v6H3.5L2 9.5V2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  ),
};

const deliverables = [
  {
    num: "01",
    title: "Custom conversion site",
    detail: "A strong main landing page plus nav to Services, About, Testimonials, Gallery, Contact as needed. Mobile-first, fast, with click-to-call, quote form, and reviews. 2 revision rounds included (one batched list per round).",
    tag: "Delivered in 72 hrs",
    tagIcon: "clock",
    tagColor: "var(--gg-accent)",
    tagBg: "var(--gg-accent-soft)",
    tagBorder: "var(--gg-accent-border)",
  },
  {
    num: "02",
    title: "Local Presence Tune-Up",
    detail: "We tighten up your GBP, Apple Maps, BBB, Angi, and other key directories so your business looks consistent and credible wherever customers search. Categories, services, description, service area, call + website links, and a simple review/photo checklist included.",
    tag: "Maps + Reviews",
    tagIcon: "map",
    tagColor: "var(--gg-green)",
    tagBg: "var(--gg-green-soft)",
    tagBorder: "var(--gg-green-border)",
  },
  {
    num: "03",
    title: "Professional Business Line Setup",
    detail: "A dedicated business number that forwards to your cell, keeping your personal number private. It filters spam and sends an automatic text-back when you miss a call (even after-hours). We activate it on your site as soon as carrier verification clears.",
    tag: "After-hours ready",
    tagIcon: "message",
    tagColor: "var(--gg-green)",
    tagBg: "var(--gg-green-soft)",
    tagBorder: "var(--gg-green-border)",
  },
  {
    num: "05",
    title: "72-hour delivery guarantee",
    detail: "After we have your assets (business name, phone/email, services, service area, logo or text logo, at least 5 photos or placeholders), your site is live within 72 hours. If we miss our deadline, your final 50% is waived.",
    tag: "Or final 50% waived",
    tagIcon: "shield",
    tagColor: "var(--gg-red)",
    tagBg: "var(--gg-red-soft)",
    tagBorder: "rgba(242,100,100,0.2)",
  },
];

const pricingTiers = [
  { spots: "Spots 1–5", price: "$499", active: true },
  { spots: "Spots 6–10", price: "$999", active: false },
  { spots: "Spots 11–15", price: "$1,499", active: false },
  { spots: "Spots 16–20", price: "$1,999", active: false },
  { spots: "Spots 21+", price: "$2,499", active: false },
];

export default function OfferSection() {
  const spotsRemain = BETA_SPOTS_TOTAL - BETA_SPOTS_TAKEN;

  return (
    <section
      id="system"
      style={{
        background: "var(--gg-bg-section)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ maxWidth: "520px", marginBottom: "48px" }}>
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
            What Gets Built
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--gg-text1)",
              lineHeight: 1.1,
              margin: "0 0 14px",
            }}
          >
            The 72-Hour Conversion Build
          </h2>
          <p style={{ fontSize: "15px", color: "var(--gg-text2)", lineHeight: 1.7, maxWidth: "480px", margin: 0 }}>
            Everything your business needs to look legit and turn visitors into calls. Built, live, and handed off in 72 hours.
          </p>
        </div>

        {/* Main two-column layout: deliverables + price card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "28px",
            alignItems: "start",
          }}
          className="gg-offer-layout"
        >
          {/* ── Deliverables list ── */}
          <div
            style={{
              background: "var(--gg-card-bg)",
              border: "1px solid var(--gg-border-strong)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="gg-row-hover"
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: "16px",
                  alignItems: "start",
                  padding: "22px 24px",
                  borderBottom: i < deliverables.length - 1 ? "1px solid var(--gg-border)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "var(--gg-text3)",
                    letterSpacing: "0.04em",
                    marginTop: "2px",
                  }}
                >
                  {d.num}
                </span>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "var(--gg-text1)",
                        margin: 0,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {d.title}
                    </p>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "10px",
                        fontWeight: 600,
                        color: d.tagColor,
                        background: d.tagBg,
                        border: `1px solid ${d.tagBorder}`,
                        padding: "3px 8px 3px 6px",
                        borderRadius: "6px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span style={{ display: "flex", color: d.tagColor }}>{tagIcons[d.tagIcon]}</span>
                      {d.tag}
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--gg-text2)", lineHeight: 1.65, margin: 0 }}>
                    {d.detail}
                  </p>
                  {d.num === "02" && (
                    <p style={{ fontSize: "10px", color: "var(--gg-text3)", lineHeight: 1.5, margin: "12px 0 0", textAlign: "right" }}>
                      72-hour completion and submission; third-party verification timelines may vary.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Price card (sticky) ── */}
          <div style={{ position: "sticky", top: "96px", display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Current price */}
            <div
              style={{
                background: "var(--gg-gradient-soft)",
                border: "1px solid var(--gg-accent-border)",
                borderRadius: "20px",
                padding: "32px 28px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "10px", color: "var(--gg-text3)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>
                Beta Pricing
              </p>
              <p style={{ fontSize: "12px", color: "var(--gg-text3)", margin: "0 0 4px", textDecoration: "line-through" }}>
                $1,999
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "56px",
                  fontWeight: 800,
                  background: "var(--gg-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  margin: "0 0 4px",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                $499
              </p>
              <p style={{ fontSize: "11px", color: "var(--gg-text2)", margin: "0 0 20px" }}>
                {spotsRemain}/{BETA_SPOTS_TOTAL} spots remain
              </p>

              <Link
                href="/audit"
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
                  boxShadow: "0 0 30px rgba(79,142,247,0.25)",
                  marginBottom: "16px",
                }}
              >
                Claim Your Spot
              </Link>

              <p style={{ fontSize: "11px", color: "var(--gg-text3)", margin: 0, lineHeight: 1.5 }}>
                50% up front, 50% on delivery.
                <br />
                Past 72h after assets confirmed?
                <br />
                Final 50% waived.
              </p>
            </div>

            {/* Beta pricing ladder */}
            <div
              style={{
                background: "var(--gg-card-bg)",
                border: "1px solid var(--gg-border)",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <p
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gg-text3)",
                  margin: 0,
                  padding: "10px 14px 8px",
                  borderBottom: "1px solid var(--gg-border)",
                }}
              >
                Price increases as spots fill
              </p>
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 14px",
                    borderBottom: i < pricingTiers.length - 1 ? "1px solid var(--gg-border)" : "none",
                    background: tier.active ? "var(--gg-accent-soft)" : "transparent",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      color: tier.active ? "var(--gg-text1)" : "var(--gg-text3)",
                      fontWeight: tier.active ? 600 : 400,
                    }}
                  >
                    {tier.spots}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {tier.active && (
                      <span
                        style={{
                          fontSize: "9px",
                          fontWeight: 700,
                          color: "var(--gg-accent)",
                          background: "var(--gg-accent-soft)",
                          border: "1px solid var(--gg-accent-border)",
                          borderRadius: "4px",
                          padding: "1px 5px",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        Now
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: tier.active ? "var(--gg-text1)" : "var(--gg-text3)",
                      }}
                    >
                      {tier.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Ongoing Stability + Support ── */}
        <div
          style={{
            marginTop: "28px",
            background: "var(--gg-card-bg)",
            border: "1px solid var(--gg-green-border)",
            borderRadius: "16px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Green top accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "var(--gg-green)",
              opacity: 0.7,
            }}
          />

          <div
            style={{
              padding: "28px 28px 24px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
            className="gg-stability-row"
          >
            <div>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "var(--gg-green)",
                  margin: "0 0 6px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Ongoing Stability + Support
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "var(--gg-text1)",
                  margin: "0 0 12px",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                }}
              >
                $79/month — first 90 days included.
              </p>
              <p style={{ fontSize: "13px", color: "var(--gg-text2)", lineHeight: 1.5, margin: 0 }}>
                Optional after launch. Cancel anytime.
              </p>
            </div>
            <Link
              href="#after-launch-support"
              className="gg-scroll-down-link"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--gg-text2)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
                borderBottom: "1px solid var(--gg-border-strong)",
                paddingBottom: "2px",
              }}
            >
              Scroll down to see what&apos;s included ↓
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .gg-offer-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .gg-stability-row { flex-direction: column !important; align-items: flex-start !important; }
        }
        .gg-scroll-down-link:hover {
          color: var(--gg-text1) !important;
          border-bottom-color: var(--gg-text3) !important;
        }
      `}</style>
    </section>
  );
}
