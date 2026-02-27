const phases = [
  {
    num: "01",
    title: "Request Free Audit",
    timeframe: "Today",
    body: "Fill out the 2-minute form. We'll review your current site, Google presence, and top competitors. You'll get a plain-English breakdown of exactly where you're bleeding leads.",
    color: "var(--gg-accent)",
    colorSoft: "var(--gg-accent-soft)",
  },
  {
    num: "02",
    title: "Assets In, Build Starts",
    timeframe: "Day 1",
    body: "Send us business name, phone/email, list of services, service area, logo (or permission for a text logo), and at least 5 photos (or placeholders). Build kicks off the same day assets land.",
    color: "#a78bfa",
    colorSoft: "rgba(167,139,250,0.1)",
  },
  {
    num: "03",
    title: "Review & Approve",
    timeframe: "Day 2–3",
    body: "We send you a live preview link. You review on your phone. 2 revision rounds included (one batched list per round). We fix what needs fixing — no extra charge.",
    color: "var(--gg-green)",
    colorSoft: "var(--gg-green-soft)",
  },
  {
    num: "04",
    title: "72 Hours Guaranteed",
    timeframe: "Live + Handed Off",
    body: "Site goes live on your domain. Listings and profile updates are submitted. Your online presence is clean, consistent, and ready to generate calls.",
    color: "#f59e0b",
    colorSoft: "rgba(245,158,11,0.1)",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        background: "var(--gg-bg)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ maxWidth: "520px", marginBottom: "60px" }}>
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
            How It Works
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
            4 phases.
            <br />
            72 hours.
          </h2>
          <p style={{ fontSize: "15px", color: "var(--gg-text2)", lineHeight: 1.7, margin: 0 }}>
            No long kickoff calls, no back and forth for weeks. Just assets in, site out.
          </p>
        </div>

        {/* Timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
            position: "relative",
          }}
        >
          {phases.map((p, i) => (
            <div
              key={i}
              style={{
                padding: "28px",
                borderLeft: i > 0 ? "1px solid var(--gg-border)" : "none",
                position: "relative",
              }}
            >
              {/* Phase number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: p.colorSoft,
                    border: `1px solid ${p.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      color: p.color,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.num}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: p.color,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {p.timeframe}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--gg-text1)",
                  margin: "0 0 10px",
                  letterSpacing: "-0.02em",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "13px", color: "var(--gg-text2)", lineHeight: 1.7, margin: 0 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          style={{
            marginTop: "48px",
            padding: "20px 28px",
            background: "var(--gg-gradient-soft)",
            border: "1px solid var(--gg-accent-border)",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2l1.8 4.5 4.7.4-3.5 3 1.1 4.5L10 12l-4.1 2.4 1.1-4.5-3.5-3 4.7-.4L10 2z" stroke="var(--gg-accent)" strokeWidth="1.4" strokeLinejoin="round"/>
          </svg>
          <p style={{ fontSize: "14px", color: "var(--gg-text1)", margin: 0, flex: 1 }}>
            <strong>We miss the 72-hour window?</strong>{" "}
            <span style={{ color: "var(--gg-text2)" }}>Your final 50% is waived. That's the guarantee.</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .gg-process-grid { grid-template-columns: 1fr !important; }
          .gg-process-grid > div { border-left: none !important; border-top: 1px solid var(--gg-border); }
          .gg-process-grid > div:first-child { border-top: none; }
        }
      `}</style>
    </section>
  );
}
