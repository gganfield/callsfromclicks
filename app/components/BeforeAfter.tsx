import Image from "next/image";
import { config } from "@/client.config";

const pairs = [
  {
    label: "Kitchen Remodel",
    location: "Shelby Township",
    before: config.gallery[4].src,
    after: config.gallery[0].src,
  },
  {
    label: "Master Bathroom",
    location: "Macomb Township",
    before: config.gallery[5].src,
    after: config.gallery[1].src,
  },
  {
    label: "Composite Deck",
    location: "Washington Township",
    before: config.gallery[3].src,
    after: config.gallery[2].src,
  },
];

export default function BeforeAfter() {
  return (
    <section style={{ background: "var(--dt-bg-alt)", padding: "100px 24px", borderTop: "1px solid var(--dt-border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto 56px" }}>
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "14px" }}>
            Transformations
          </p>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--dt-text1)", lineHeight: 1.1, margin: "0 0 16px" }}>
            Before &amp; After
          </h2>
          <p style={{ fontSize: "15px", color: "var(--dt-text2)", lineHeight: 1.75, margin: 0 }}>
            The difference a professional crew makes. Every project left better than we found it.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
          {pairs.map((pair, i) => (
            <div
              key={pair.label}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--dt-border)",
                background: "var(--dt-card-bg)",
              }}
            >
              {/* Image comparison */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", aspectRatio: "4/3" }}>
                {/* Before — grayscale */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <Image
                    src={pair.before}
                    alt={`Before — ${pair.label}`}
                    fill
                    style={{ objectFit: "cover", filter: "grayscale(1) brightness(0.65)" }}
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(0,0,0,0.18)",
                  }} />
                  <span style={{
                    position: "absolute", bottom: "10px", left: "10px",
                    fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
                    background: "rgba(0,0,0,0.5)", padding: "3px 8px", borderRadius: "4px",
                  }}>
                    Before
                  </span>
                </div>

                {/* Divider */}
                <div style={{
                  position: "absolute", top: 0, bottom: 0, left: "50%",
                  width: "2px", background: "rgba(255,255,255,0.5)",
                  zIndex: 1, transform: "translateX(-50%)",
                }} />

                {/* After — full color */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <Image
                    src={pair.after}
                    alt={`After — ${pair.label}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                  <span style={{
                    position: "absolute", bottom: "10px", right: "10px",
                    fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: "rgba(255,255,255,0.9)",
                    background: "rgba(180,83,9,0.7)", padding: "3px 8px", borderRadius: "4px",
                  }}>
                    After
                  </span>
                </div>
              </div>

              {/* Label */}
              <div style={{ padding: "16px 18px", borderTop: "1px solid var(--dt-border)" }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 700, color: "var(--dt-text1)", margin: "0 0 2px" }}>
                  {pair.label}
                </p>
                <p style={{ fontSize: "12px", color: "var(--dt-text3)", margin: 0 }}>
                  {pair.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
