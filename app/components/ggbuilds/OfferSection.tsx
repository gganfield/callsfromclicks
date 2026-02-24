"use client";
import React from "react";
import Link from "next/link";

const tagIcons: Record<string, React.ReactElement> = {
  clock: <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.3"/><path d="M6 3v3l2 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  map: <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 1C4.1 1 2.5 2.6 2.5 4.5 2.5 7 6 11 6 11s3.5-4 3.5-6.5C9.5 2.6 7.9 1 6 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><circle cx="6" cy="4.5" r="1" stroke="currentColor" strokeWidth="1.1"/></svg>,
  loop: <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M8.5 3.5l2-2M10.5 3.5L8.5 3.5V1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 4.5A4.5 4.5 0 111.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  gift: <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="4.5" width="9" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M6 4.5v6M1.5 7h9" stroke="currentColor" strokeWidth="1.1"/><path d="M6 4.5c-1-2-3-2-3 0s3 0 3 0 2-2 3 0-3 0-3 0z" stroke="currentColor" strokeWidth="1.1"/></svg>,
  shield: <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 1L2 3v3c0 2.5 1.7 4.5 4 5 2.3-.5 4-2.5 4-5V3L6 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M4 6l1.5 1.5L8 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

const deliverables = [
  {
    num: "01",
    title: "Custom 1-page website",
    detail: "Mobile-first, fast, and built to get you calls. Click-to-call button, quote form, service listings, and reviews \u2014 all above the fold where it matters.",
    tag: "Delivered in 72 hrs",
    tagIcon: "clock",
    tagColor: "var(--gg-accent)",
    tagBg: "var(--gg-accent-soft)",
    tagBorder: "var(--gg-accent-border)",
  },
  {
    num: "02",
    title: "Google Business Profile setup",
    detail: "Optimized from scratch or cleaned up so you show up in the map pack when someone searches your service in your area.",
    tag: "Where most leads come from",
    tagIcon: "map",
    tagColor: "var(--gg-green)",
    tagBg: "var(--gg-green-soft)",
    tagBorder: "var(--gg-green-border)",
  },
  {
    num: "03",
    title: "Review Request Kit",
    detail: "A done-for-you script and direct Google review link so your happy customers actually leave reviews. More reviews = higher ranking = more calls.",
    tag: "Reusable, forever",
    tagIcon: "loop",
    tagColor: "var(--gg-green)",
    tagBg: "var(--gg-green-soft)",
    tagBorder: "var(--gg-green-border)",
  },
  {
    num: "04",
    title: "Lead Leak Audit report",
    detail: "A plain-English breakdown of where you're losing jobs online \u2014 your site, your GBP, your competitors \u2014 and exactly what to fix.",
    tag: "Free before you commit",
    tagIcon: "gift",
    tagColor: "var(--gg-accent)",
    tagBg: "var(--gg-accent-soft)",
    tagBorder: "var(--gg-accent-border)",
  },
  {
    num: "05",
    title: "72-hour delivery guarantee",
    detail: "After we have your assets (logo, photos, copy), your site is live within 72 hours. Miss it and your final payment is waived.",
    tag: "Or you don't owe us",
    tagIcon: "shield",
    tagColor: "var(--gg-red)",
    tagBg: "var(--gg-red-soft)",
    tagBorder: "rgba(242,100,100,0.2)",
  },
];

export default function OfferSection() {
  return (
    <section
      id="offer"
      style={{
        background: "var(--gg-bg-section)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
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
            Everything your business needs to look legit and turn visitors into calls \u2014 built, live, and handed off in 72 hours.
          </p>
        </div>

        {/* Main content grid: deliverables + price */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: "24px",
            alignItems: "start",
          }}
          className="gg-offer-layout"
        >
          {/* Deliverables list */}
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
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
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
                </div>
              </div>
            ))}
          </div>

          {/* Price card — sticky on scroll */}
          <div
            style={{
              position: "sticky",
              top: "96px",
            }}
          >
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
                $1,500
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "52px",
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
                3 of 5 spots remaining
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
                50% upfront, 50% on delivery.
                <br />
                Miss 72 hrs = final 50% waived.
              </p>
            </div>

            {/* Hosting card — visually distinct */}
            <div
              style={{
                marginTop: "16px",
                padding: "20px 24px",
                background: "var(--gg-bg)",
                border: "1px solid var(--gg-green-border)",
                borderRadius: "14px",
                position: "relative",
                overflow: "hidden",
              }}
            >
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
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="2" y="2" width="10" height="4" rx="1.5" stroke="var(--gg-green)" strokeWidth="1.3"/>
                  <rect x="2" y="8" width="10" height="4" rx="1.5" stroke="var(--gg-green)" strokeWidth="1.3"/>
                  <circle cx="5" cy="4" r="0.8" fill="var(--gg-green)"/>
                  <circle cx="5" cy="10" r="0.8" fill="var(--gg-green)"/>
                </svg>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--gg-green)", margin: 0 }}>
                  Hosting & Maintenance
                </p>
              </div>
              <p style={{ fontSize: "22px", fontWeight: 800, fontFamily: "'Poppins', sans-serif", color: "var(--gg-text1)", margin: "0 0 4px", letterSpacing: "-0.03em" }}>
                $75<span style={{ fontSize: "13px", fontWeight: 500, color: "var(--gg-text3)" }}>/month</span>
              </p>
              <p style={{ fontSize: "12px", color: "var(--gg-text3)", lineHeight: 1.55, margin: 0 }}>
                Updates, uptime, and fast changes.
                <br />
                Cancel anytime — code is yours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .gg-offer-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
