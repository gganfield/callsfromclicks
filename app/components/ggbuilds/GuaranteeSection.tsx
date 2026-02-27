"use client";
import Link from "next/link";

const fits = [
  "You're a local service business that relies on calls, Google, and referrals",
  "Your site or listings feel outdated, inconsistent, or invisible",
  "You want it live fast, without weeks of back-and-forth",
  "You want a small, accountable team",
];

const notFits = [
  "You need a large e-commerce build",
  "You require complex integrations or custom software",
  "You can't provide basic assets (logo, service info, photos)",
  "You're looking for the cheapest option regardless of quality",
];

export default function GuaranteeSection() {
  return (
    <section
      id="fit"
      style={{
        background: "var(--gg-bg)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Fit check */}
        <div style={{ maxWidth: "560px", marginBottom: "60px" }}>
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
            Fit Check
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--gg-text1)",
              lineHeight: 1.15,
              margin: "0 0 14px",
            }}
          >
            This is built for one type of business.
          </h2>
          <p style={{ fontSize: "15px", color: "var(--gg-text2)", lineHeight: 1.7, margin: 0 }}>
            For local service businesses tired of losing leads to competitors who show up stronger online.
          </p>
          <p style={{ fontSize: "13px", color: "var(--gg-text3)", letterSpacing: "0.02em", margin: "16px 0 0" }}>
            Oakland{"\u00A0"}County • Macomb{"\u00A0"}County • Metro{"\u00A0"}Detroit
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}
          className="gg-fit-grid"
        >
          {/* Perfect fit */}
          <div
            style={{
              background: "var(--gg-green-soft)",
              border: "1px solid var(--gg-green-border)",
              borderRadius: "16px",
              padding: "28px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--gg-green)",
                margin: "0 0 20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="var(--gg-green)" strokeWidth="1.4"/>
                <path d="M5 8l2 2 4-4" stroke="var(--gg-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Perfect fit if…
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {fits.map((f, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: "10px", alignItems: "start" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: "2px" }}>
                    <path d="M3 7l2.5 2.5 5.5-5.5" stroke="var(--gg-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p style={{ fontSize: "13px", color: "var(--gg-text2)", lineHeight: 1.55, margin: 0 }}>{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Not a fit */}
          <div
            style={{
              background: "var(--gg-red-soft)",
              border: "1px solid rgba(242,100,100,0.15)",
              borderRadius: "16px",
              padding: "28px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--gg-red)",
                margin: "0 0 20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="var(--gg-red)" strokeWidth="1.4"/>
                <path d="M5.5 10.5l5-5M10.5 10.5l-5-5" stroke="var(--gg-red)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Probably not the right fit if…
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {notFits.map((f, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: "10px", alignItems: "start" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: "2px" }}>
                    <path d="M4 10l6-6M10 10L4 4" stroke="var(--gg-red)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <p style={{ fontSize: "13px", color: "var(--gg-text2)", lineHeight: 1.55, margin: 0 }}>{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Catch-all */}
<p
          className="gg-fit-audit-line"
          style={{
            marginTop: "24px",
            fontSize: "14px",
            color: "var(--gg-text2)",
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          Not sure?{" "}
          <Link
            href="/audit"
            style={{
              color: "var(--gg-accent)",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Request a free audit
          </Link>{" "}
          and we&apos;ll tell you honestly.
        </p>

        {/* Guarantee callout */}
        <div
          style={{
            marginTop: "48px",
            padding: "32px 36px",
            background: "var(--gg-gradient-soft)",
            border: "1px solid var(--gg-accent-border)",
            borderRadius: "20px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "24px",
            alignItems: "center",
          }}
          className="gg-guarantee-card"
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--gg-accent)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: "0 0 8px",
              }}
            >
              The Guarantee
            </p>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 800,
                color: "var(--gg-text1)",
                letterSpacing: "-0.03em",
                margin: "0 0 8px",
              }}
            >
              72 hours or final 50% waived.
            </h3>
            <p style={{ fontSize: "14px", color: "var(--gg-text2)", lineHeight: 1.65, margin: 0, maxWidth: "560px" }}>
              After you send us your assets, your site goes live within 72 hours or we waive your final 50% (deposit stands). The 72-hour window begins once all required assets are received and confirmed. No exceptions.
            </p>
          </div>
          <Link
            href="/audit"
            className="gg-guarantee-cta"
            style={{
              fontWeight: 700,
              fontSize: "14px",
              color: "#fff",
              background: "var(--gg-gradient)",
              padding: "14px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(79,142,247,0.25)",
              flexShrink: 0,
            }}
          >
            Claim a Spot
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .gg-fit-grid { grid-template-columns: 1fr !important; }
          .gg-guarantee-card { grid-template-columns: 1fr !important; }
          .gg-guarantee-card .gg-guarantee-cta { justify-self: center; }
          .gg-fit-audit-line { font-size: 12px !important; }
        }
      `}</style>
    </section>
  );
}
