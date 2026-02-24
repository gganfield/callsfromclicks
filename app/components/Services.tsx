import React from "react";
import { config } from "@/client.config";

function KitchenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="8" cy="7" r="1.2" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="12" cy="7" r="1.2" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="14" y="13" width="4" height="4" rx="0.8" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}
function BathIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M4 12V7a3 3 0 016 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 20v2M15 20v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function OutdoorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="13" width="18" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 13V10M18 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M9 7V5M12 6V4M15 7V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function BasementIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L3 9h18L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="4" y="9" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 21v-7h6v7" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L3 10h3v10h5v-6h2v6h5V10h3L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 5a5 5 0 00-5 5.5l-5 5.5a2 2 0 103 3l5.2-4.8A5 5 0 0020 9a5 5 0 00-1-3l-2.5 2.5-2-2L17 4a5 5 0 00-2-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

const serviceIcons: Record<string, () => React.ReactElement> = {
  kitchen: KitchenIcon,
  bath: BathIcon,
  outdoor: OutdoorIcon,
  basement: BasementIcon,
  home: HomeIcon,
  wrench: WrenchIcon,
};

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--bg-dark)", padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 64px" }}>
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "14px" }}>
            What We Do
          </p>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1, margin: "0 0 16px" }}>
            Services Built Around Your Vision
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>
            From small upgrades to full home transformations. One crew, one contract, zero surprises.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
          {config.services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <div
                key={service.name}
                className={`reveal reveal-delay-${(i % 5) + 1} demo-service-card`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s, background 0.25s, transform 0.25s",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: "var(--primary)", opacity: 0, transition: "opacity 0.25s",
                }} className="demo-card-accent" />

                <div style={{
                  width: "52px", height: "52px", borderRadius: "14px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(180,83,9,0.12)",
                  color: "var(--primary)", marginBottom: "20px",
                }}>
                  {Icon ? <Icon /> : null}
                </div>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: "17px", fontWeight: 700,
                  color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em",
                }}>
                  {service.name}
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .demo-service-card:hover {
          border-color: rgba(180,83,9,0.35) !important;
          background: rgba(180,83,9,0.04) !important;
          transform: translateY(-4px);
        }
        .demo-service-card:hover .demo-card-accent { opacity: 0.7 !important; }
      `}</style>
    </section>
  );
}
