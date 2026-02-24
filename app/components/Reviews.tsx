import { config } from "@/client.config";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill={filled ? "var(--primary)" : "none"} aria-hidden="true">
      <path
        d="M7 1.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.7l-3.2 1.7.6-3.6L1.8 5.3l3.6-.5L7 1.5z"
        stroke="var(--primary)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  return (
    <div style={{
      width: "44px", height: "44px", borderRadius: "50%",
      background: "rgba(180,83,9,0.15)", border: "1.5px solid rgba(180,83,9,0.4)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "14px", fontWeight: 700, color: "var(--primary)", flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: "var(--bg-dark)", padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "56px" }}>
          <div>
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "14px" }}>
              Client Reviews
            </p>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1, margin: 0 }}>
              What our clients say.
            </h2>
          </div>

          {/* Aggregate rating card */}
          <div style={{
            display: "flex", alignItems: "center", gap: "16px",
            padding: "18px 24px",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "14px",
          }}>
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "32px", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", margin: "0 0 2px", lineHeight: 1 }}>
                {config.business.reviewRating}
              </p>
              <div style={{ display: "flex", gap: "2px" }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} filled={s <= Math.floor(parseFloat(config.business.reviewRating))} />
                ))}
              </div>
            </div>
            <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.1)" }} />
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "24px", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", margin: "0 0 2px", lineHeight: 1 }}>
                {config.business.reviewCount}+
              </p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: 0 }}>Google reviews</p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {config.reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${i + 1} demo-review-card`}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "18px",
                padding: "28px",
                transition: "border-color 0.25s, transform 0.25s",
              }}
            >
              <div style={{ display: "flex", gap: "3px", marginBottom: "18px" }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} filled={j < review.rating} />
                ))}
              </div>

              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, margin: "0 0 24px", fontStyle: "italic" }}>
                &ldquo;{review.text}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <Avatar name={review.name} />
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff", margin: "0 0 2px" }}>
                    {review.name}
                  </p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .demo-review-card:hover {
          border-color: rgba(180,83,9,0.3) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}
