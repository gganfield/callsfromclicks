export default function ImplicationSection() {
  return (
    <section
      style={{
        background: "var(--gg-bg)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ maxWidth: "640px" }}>
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
            The Reality
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--gg-text1)",
              lineHeight: 1.15,
              margin: "0 0 32px",
            }}
          >
            Most contractors already have a site. It just hasn&apos;t rung their phone in months.
          </h2>

          <p style={{ fontSize: "16px", color: "var(--gg-text2)", lineHeight: 1.75, margin: "0 0 20px" }}>
            Most contractors we talk to already have a site. It just hasn&apos;t brought in a call in months — and they&apos;ve stopped expecting it to.
          </p>
          <p style={{ fontSize: "16px", color: "var(--gg-text2)", lineHeight: 1.75, margin: "0 0 36px" }}>
            Someone in your area Googled your trade last week. They didn&apos;t call you. You&apos;ll never know why.
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "var(--gg-text3)",
              lineHeight: 1.6,
              margin: 0,
              paddingLeft: "16px",
              borderLeft: "2px solid var(--gg-border-strong)",
              fontStyle: "italic",
            }}
          >
            That&apos;s what the audit finds. Here&apos;s what we fix.
          </p>
        </div>
      </div>
    </section>
  );
}
