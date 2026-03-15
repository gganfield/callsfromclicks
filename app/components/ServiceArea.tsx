const areas = [
  {
    county: "Macomb County",
    townships: [
      "Shelby Township", "Macomb Township", "Warren", "Sterling Heights",
      "Clinton Township", "Washington Township", "Romeo", "New Baltimore", "Chesterfield",
    ],
  },
  {
    county: "Oakland County",
    townships: [
      "Troy", "Royal Oak", "Birmingham", "Bloomfield Hills",
      "Rochester Hills", "Auburn Hills", "Pontiac", "Clarkston",
    ],
  },
  {
    county: "Metro Detroit",
    townships: [
      "Grosse Pointe", "Dearborn", "Westland", "Farmington Hills",
      "Livonia", "Redford",
    ],
  },
];

export default function ServiceArea() {
  return (
    <section style={{ background: "var(--dt-bg)", padding: "80px 24px", borderTop: "1px solid var(--dt-border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "40px" }}>
          <div>
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "14px" }}>
              Service Area
            </p>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--dt-text1)", lineHeight: 1.1, margin: 0 }}>
              We come to you.
            </h2>
          </div>
          <p style={{ fontSize: "15px", color: "var(--dt-text2)", lineHeight: 1.7, maxWidth: "360px", margin: 0 }}>
            Serving Macomb County, Oakland County, and throughout Metro Detroit. Free estimates on-site.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {areas.map((area) => (
            <div
              key={area.county}
              className="reveal"
              style={{
                background: "var(--dt-card-bg)",
                border: "1px solid var(--dt-border)",
                borderRadius: "14px",
                padding: "22px 24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "var(--primary)", flexShrink: 0,
                  boxShadow: "0 0 8px rgba(180,83,9,0.5)",
                }} />
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--dt-text1)", margin: 0 }}>
                  {area.county}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {area.townships.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      color: "var(--dt-text3)",
                      background: "var(--dt-border)",
                      borderRadius: "4px",
                      padding: "3px 8px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal" style={{ fontSize: "12px", color: "var(--dt-text3)", margin: "20px 0 0", textAlign: "center" }}>
          Not sure if we cover your area? Call us — we&apos;ll let you know.
        </p>
      </div>
    </section>
  );
}
