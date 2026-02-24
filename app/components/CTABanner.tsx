import { config } from "@/client.config";

export default function CTABanner() {
  return (
    <section
      style={{
        background: "var(--bg-dark)",
        padding: "100px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orbs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "700px", height: "350px",
          background: "radial-gradient(ellipse at center, rgba(180,83,9,0.2) 0%, transparent 65%)",
          borderRadius: "50%", filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", top: "30%", left: "25%",
          width: "200px", height: "200px",
          background: "radial-gradient(circle, rgba(180,83,9,0.1) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(60px)",
        }} />
      </div>

      <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p className="reveal" style={{
          fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)", marginBottom: "16px",
        }}>
          {config.business.serviceArea}
        </p>

        <h2 className="reveal reveal-delay-1" style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(30px, 5vw, 52px)",
          fontWeight: 900, letterSpacing: "-0.05em",
          color: "#fff", lineHeight: 1.05, margin: "0 0 18px",
        }}>
          {config.cta.headline}
        </h2>

        <p className="reveal reveal-delay-2" style={{
          fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75,
          margin: "0 auto 40px", maxWidth: "460px",
        }}>
          {config.cta.subline}
        </p>

        <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
            className="demo-btn-primary"
            style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "15px",
              color: "#fff", background: "var(--primary)",
              padding: "16px 36px", borderRadius: "12px", textDecoration: "none",
              boxShadow: "0 0 50px rgba(180,83,9,0.4), 0 4px 20px rgba(0,0,0,0.3)",
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}
          >
            {config.cta.buttonText}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href={`tel:${config.business.phoneRaw}`}
            className="demo-btn-ghost"
            style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "15px",
              color: "#fff",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
              padding: "16px 36px", borderRadius: "12px", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 2.5c.5-.5 1.3-.5 1.8 0l1.5 1.5c.5.5.5 1.3 0 1.8l-.7.7c.8 1.5 2 2.7 3.5 3.5l.7-.7c.5-.5 1.3-.5 1.8 0l1.5 1.5c.5.5.5 1.3 0 1.8C11.5 13 7 13.5 2.5 9-2 4.5-.5 3 2.5 2.5z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round"/>
            </svg>
            {config.business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
