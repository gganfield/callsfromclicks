"use client";
import { useState } from "react";

const planItems = [
  {
    title: "Weekly Reputation Report",
    body: "Every Monday, new reviews from all 7 platforms — Google, Yelp, Facebook, Angi, Apple Maps, Yellow Pages, and Trustpilot/Houzz — compiled and sent with suggested reply drafts ready to copy. Negatives flagged for priority attention.",
    badge: "Every Monday",
    badgeColor: "var(--gg-green)",
    badgeBg: "var(--gg-green-soft)",
    badgeBorder: "rgba(62,207,142,0.25)",
  },
  {
    title: "Monthly Content & Info Updates",
    body: "Send us your changes — new photos, updated services, seasonal hours, copy tweaks — and we handle it in one clean batch per month. No back and forth, no extra charge.",
    badge: "Monthly",
    badgeColor: "var(--gg-accent)",
    badgeBg: "var(--gg-accent-soft)",
    badgeBorder: "var(--gg-accent-border)",
  },
  {
    title: "Monthly Presence Summary",
    body: "One email every month covering new reviews received, listing health across all 7 platforms, any updates completed, and one observation on what's working or where there's an opportunity.",
    badge: "Monthly",
    badgeColor: "var(--gg-accent)",
    badgeBg: "var(--gg-accent-soft)",
    badgeBorder: "var(--gg-accent-border)",
  },
  {
    title: "GBP + Listing Health Monitoring",
    body: "Your hours, phone number, address, and photos verified across all 7 platforms. Google silently edits listings more often than most business owners realize — we catch it before it costs you a call.",
    badge: "Ongoing",
    badgeColor: "var(--gg-amber)",
    badgeBg: "var(--gg-amber-soft)",
    badgeBorder: "rgba(245,166,35,0.25)",
  },
  {
    title: "Lead Form & Click-to-Call Testing",
    body: "Your contact form and phone link tested monthly so a broken button never silently kills a lead.",
    badge: "Ongoing",
    badgeColor: "var(--gg-amber)",
    badgeBg: "var(--gg-amber-soft)",
    badgeBorder: "rgba(245,166,35,0.25)",
  },
  {
    title: "Business Line Monitoring",
    body: "Your dedicated business line and missed-call text system kept running and checked regularly. If anything breaks, we fix it.",
    badge: "Ongoing",
    badgeColor: "var(--gg-amber)",
    badgeBg: "var(--gg-amber-soft)",
    badgeBorder: "rgba(245,166,35,0.25)",
  },
  {
    title: "Hosting & Uptime",
    body: "Your site stays live, fast, and secure. Nothing to manage on your end.",
    badge: "Included",
    badgeColor: "var(--gg-text3)",
    badgeBg: "var(--gg-surface)",
    badgeBorder: "var(--gg-border)",
  },
  {
    title: "Bug Fixes Covered",
    body: "If anything breaks on your site, we fix it. No ticket system, no extra charge.",
    badge: "Included",
    badgeColor: "var(--gg-text3)",
    badgeBg: "var(--gg-surface)",
    badgeBorder: "var(--gg-border)",
  },
];

const planOptions = [
  {
    id: "monthly",
    label: "Monthly",
    perMonth: "79",
    priceUpfront: null as string | null,
    badge: null as string | null,
    subNote: null as string | null,
    footerText: "Cancel anytime.",
  },
  {
    id: "six",
    label: "6 months",
    perMonth: "65",
    priceUpfront: "$395",
    badge: "Most popular",
    subNote: "Includes 2 quarterly update sessions.",
    footerText: "Includes 2 quarterly update sessions. Billed $395 upfront.",
  },
  {
    id: "twelve",
    label: "12 months",
    perMonth: "59",
    priceUpfront: "$711",
    badge: null,
    subNote: "Includes 4 quarterly update sessions.",
    footerText: "Includes 4 quarterly update sessions. Billed $711 upfront.",
  },
];

export default function AfterLaunchSupport() {
  const [selected, setSelected] = useState("six");
  const [openItem, setOpenItem] = useState<number | null>(null);

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
            Your presence doesn&apos;t stop
            <br />
            working after launch.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--gg-text2)", lineHeight: 1.7, margin: 0, maxWidth: "480px" }}>
            Most agencies hand you a login and walk away. Your site is kept running, updated, and converting.
          </p>
        </div>

        {/* Plan inclusions — expandable rows */}
        <div
          style={{
            background: "var(--gg-card-bg)",
            border: "1px solid var(--gg-border-strong)",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "20px",
          }}
        >
          {/* Card header */}
          <div
            style={{
              padding: "32px 28px 24px",
              borderBottom: "1px solid var(--gg-border)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gg-accent)",
                margin: "0 0 10px",
              }}
            >
              Your plan includes
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 800,
                color: "var(--gg-text1)",
                letterSpacing: "-0.03em",
                margin: "0 0 8px",
                lineHeight: 1.15,
              }}
            >
              Presence Management Plan — $79/month
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "var(--gg-text3)",
                margin: "0 0 6px",
                fontStyle: "italic",
              }}
            >
              Active every week. Delivered every month.
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "var(--gg-text2)",
                margin: "0 0 14px",
              }}
            >
              Tap any item to see what&apos;s included.
            </p>
          </div>

          {/* Accordion rows — DOM order 0–7 so mobile reads correctly; 2-col grid pairs (0,1),(2,3),(4,5),(6,7) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              alignItems: "start",
            }}
            className="gg-inclusions-two-col"
          >
            {planItems.map((item, i) => {
              const isOpen = openItem === i;
              const isLastInCol = i >= 6;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: isLastInCol ? "none" : "1px solid var(--gg-border)",
                    background: isOpen ? "var(--gg-surface)" : "transparent",
                    transition: "background 0.15s",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        flex: 1,
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "var(--gg-text1)",
                        lineHeight: 1.3,
                        minWidth: 0,
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: item.badgeColor,
                        background: item.badgeBg,
                        border: `1px solid ${item.badgeBorder}`,
                        borderRadius: "4px",
                        padding: "2px 7px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.badge}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                        color: isOpen ? "var(--gg-accent)" : "var(--gg-text3)",
                      }}
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? "300px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--gg-text2)",
                        lineHeight: 1.75,
                        margin: 0,
                        padding: "0 24px 20px",
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
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
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gg-accent)",
                margin: 0,
              }}
            >
              Choose your plan
            </p>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--gg-text2)",
                margin: 0,
              }}
            >
              Presence Management Plan
            </p>
            <p style={{ fontSize: "12px", color: "var(--gg-text3)", margin: 0 }}>
              First 90 days included with your build.
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
                    ${opt.perMonth}/mo
                  </p>
                  {isSelected && opt.priceUpfront && (
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "var(--gg-text3)",
                        margin: "0 0 4px",
                        lineHeight: 1.2,
                      }}
                    >
                      {opt.priceUpfront} upfront
                    </p>
                  )}
                  {isSelected && opt.subNote && (
                    <p
                      style={{
                        fontSize: "11px",
                        color: "var(--gg-text3)",
                        margin: 0,
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      {opt.subNote}
                    </p>
                  )}
                  {isSelected && opt.id === "monthly" && (
                    <p
                      style={{
                        fontSize: "11px",
                        color: "var(--gg-text3)",
                        margin: 0,
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      Cancel anytime.
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .gg-inclusions-two-col { grid-template-columns: 1fr !important; }
          .gg-plan-picker { grid-template-columns: 1fr !important; }
          .gg-plan-picker button { border-right: none !important; border-bottom: 1px solid var(--gg-border); }
          .gg-plan-picker button:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
