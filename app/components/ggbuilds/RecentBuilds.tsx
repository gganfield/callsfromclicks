"use client";
import Link from "next/link";

const builds = [
  {
    id: "placeholder-1",
    name: "Coming soon",
    industry: "Home Services",
    location: "Macomb County, MI",
    result: "Case study & review coming soon",
    siteUrl: null,
    caseStudySlug: null,
  },
  {
    id: "placeholder-2",
    name: "Coming soon",
    industry: "Auto Detailing",
    location: "Metro Detroit, MI",
    result: "Case study & review coming soon",
    siteUrl: null,
    caseStudySlug: null,
  },
  {
    id: "placeholder-3",
    name: "Coming soon",
    industry: "Lawn & Landscape",
    location: "Romeo, MI",
    result: "Case study & review coming soon",
    siteUrl: null,
    caseStudySlug: null,
  },
  {
    id: "placeholder-4",
    name: "Coming soon",
    industry: "General Contracting",
    location: "Macomb County, MI",
    result: "Case study & review coming soon",
    siteUrl: null,
    caseStudySlug: null,
  },
];

const industryIcons: Record<string, React.ReactElement> = {
  "Home Services": (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M2 7L8 2l6 5v7a1 1 0 01-1 1H3a1 1 0 01-1-1V7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M6 14V9h4v5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  ),
  "Auto Detailing": (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="6" width="14" height="6" rx="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M4 6V5a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="4.5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="11.5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  ),
  "Lawn & Landscape": (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M8 13V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M8 7C8 5 6 3 4 3c0 2 1.5 4 4 4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M8 7c0-2 2-4 4-4 0 2-1.5 4-4 4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M3 13h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  "General Contracting": (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 13l2-4 3 2 3-5 2 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="1" y="2" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
};

export default function RecentBuilds() {
  return (
    <section
      style={{
        background: "var(--gg-bg)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gg-text3)",
                marginBottom: "12px",
              }}
            >
              Recent Builds
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--gg-text1)",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              What we&apos;ve built
            </h2>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "var(--gg-text3)",
              maxWidth: "280px",
              lineHeight: 1.6,
              margin: 0,
              textAlign: "right",
            }}
            className="gg-builds-note"
          >
            Beta clients share results in exchange for the discounted rate. Case studies and reviews coming soon.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
          className="gg-builds-grid"
        >
          {builds.map((b) => (
            <div
              key={b.id}
              style={{
                background: "var(--gg-card-bg)",
                border: "1px solid var(--gg-border)",
                borderRadius: "16px",
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "border-color 0.2s, background 0.2s",
              }}
              className="gg-builds-card"
            >
              {/* Industry badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "var(--gg-text3)",
                  background: "var(--gg-surface)",
                  border: "1px solid var(--gg-border)",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  alignSelf: "flex-start",
                }}
              >
                <span style={{ color: "var(--gg-text3)", display: "flex" }}>
                  {industryIcons[b.industry]}
                </span>
                {b.industry}
              </div>

              {/* Business name */}
              <div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--gg-text1)",
                    margin: "0 0 3px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {b.name}
                </p>
                <p style={{ fontSize: "11px", color: "var(--gg-text3)", margin: 0 }}>
                  {b.location}
                </p>
              </div>

              {/* Result / placeholder */}
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--gg-text3)",
                  lineHeight: 1.6,
                  margin: 0,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                {b.result}
              </p>

              {/* Actions */}
              <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                {b.siteUrl ? (
                  <a
                    href={b.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--gg-text2)",
                      background: "var(--gg-surface)",
                      border: "1px solid var(--gg-border)",
                      borderRadius: "7px",
                      padding: "7px 0",
                      textAlign: "center",
                      textDecoration: "none",
                      transition: "border-color 0.15s, color 0.15s",
                    }}
                    className="gg-btn-ghost"
                  >
                    View site
                  </a>
                ) : (
                  <div
                    style={{
                      flex: 1,
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "var(--gg-text3)",
                      background: "var(--gg-surface)",
                      border: "1px solid var(--gg-border)",
                      borderRadius: "7px",
                      padding: "7px 0",
                      textAlign: "center",
                      opacity: 0.5,
                      cursor: "default",
                    }}
                  >
                    Pending
                  </div>
                )}
                {b.caseStudySlug ? (
                  <Link
                    href={`/case-study/${b.caseStudySlug}`}
                    style={{
                      flex: 1,
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--gg-accent)",
                      background: "var(--gg-accent-soft)",
                      border: "1px solid var(--gg-accent-border)",
                      borderRadius: "7px",
                      padding: "7px 0",
                      textAlign: "center",
                      textDecoration: "none",
                      transition: "border-color 0.15s",
                    }}
                  >
                    Case study
                  </Link>
                ) : (
                  <div
                    style={{
                      flex: 1,
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "var(--gg-text3)",
                      background: "var(--gg-accent-soft)",
                      border: "1px solid var(--gg-accent-border)",
                      borderRadius: "7px",
                      padding: "7px 0",
                      textAlign: "center",
                      opacity: 0.45,
                      cursor: "default",
                    }}
                  >
                    Coming soon
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gg-builds-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gg-builds-note { text-align: left !important; }
        }
        @media (max-width: 520px) {
          .gg-builds-grid { grid-template-columns: 1fr !important; }
        }
        .gg-builds-card:hover {
          border-color: var(--gg-border-strong) !important;
          background: var(--gg-card-hover) !important;
        }
      `}</style>
    </section>
  );
}
