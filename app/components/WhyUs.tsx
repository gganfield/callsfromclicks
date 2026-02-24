import React from "react";
import { config } from "@/client.config";

function PeopleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2.5 20c0-3.6 3-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="18" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M21.5 20c0-2.5-1.6-4.6-3.5-5.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function DocIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="2.5" width="15" height="19" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8.5 8h7M8.5 12h7M8.5 16h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function WarrantyIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.5L4 6.5v5.5c0 5 3.2 9.4 8 10.5 4.8-1.1 8-5.5 8-10.5V6.5L12 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8 12l2.5 2.5 5.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const whyIcons: Record<string, () => React.ReactElement> = {
  people: PeopleIcon,
  doc: DocIcon,
  warranty: WarrantyIcon,
};

const metrics = ["In-house crew only", "Fixed-price quotes", "10-year warranty"];

export default function WhyUs() {
  return (
    <section id="about" style={{ background: "#070b14", padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ maxWidth: "560px", marginBottom: "64px" }}>
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "14px" }}>
            Why {config.business.name}
          </p>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1, margin: "0 0 16px" }}>
            The difference you&apos;ll feel on day one.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>
            Most contractors subcontract your job out, give you a moving-target invoice, and disappear. We don&apos;t.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {config.whyUs.map((item, i) => {
            const Icon = whyIcons[item.icon];
            return (
              <div
                key={item.claim}
                className={`reveal reveal-delay-${i + 1} demo-why-card`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s, background 0.25s, transform 0.25s",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: "var(--primary)", opacity: 0.5,
                }} />
                <div style={{
                  width: "56px", height: "56px", borderRadius: "16px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(180,83,9,0.12)",
                  color: "var(--primary)", marginBottom: "20px",
                }}>
                  {Icon ? <Icon /> : null}
                </div>
                <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary)", margin: "0 0 8px" }}>
                  {metrics[i]}
                </p>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 700, color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                  {item.claim}
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>
                  {item.proof}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .demo-why-card:hover {
          border-color: rgba(180,83,9,0.35) !important;
          background: rgba(180,83,9,0.04) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
}
