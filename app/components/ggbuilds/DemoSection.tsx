"use client";
import { useState, useRef } from "react";
import Link from "next/link";

const outcomeIcons = [
  /* More answered calls — phone */
  (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 2.5c.5-.5 1.2-.5 1.7 0l1.4 1.4c.5.5.5 1.2 0 1.7l-.6.6c.7 1.3 1.8 2.4 3.1 3.1l.6-.6c.5-.5 1.2-.5 1.7 0l1.4 1.4c.5.5.5 1.2 0 1.7l-1.9 1.9a11 11 0 01-7.8-7.8l1.9-1.9z" stroke="var(--gg-accent)" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  ),
  /* Map pack visibility — map pin */
  (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 9 4.5 9s4.5-5.5 4.5-9c0-2.5-2-4.5-4.5-4.5z" stroke="var(--gg-accent)" strokeWidth="1.3" strokeLinejoin="round"/>
      <circle cx="8" cy="6" r="1.5" stroke="var(--gg-accent)" strokeWidth="1.2"/>
    </svg>
  ),
  /* More reviews rolling in — chat bubble */
  (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 4A1.5 1.5 0 014 2.5h8A1.5 1.5 0 0113.5 4v5A1.5 1.5 0 0112 10.5H5.5L3 13v-2.5A1.5 1.5 0 012.5 9V4z" stroke="var(--gg-accent)" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M5.5 5.5h5M5.5 7.5h3" stroke="var(--gg-accent)" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),
  /* Outranks the competition — trending up arrow */
  (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 12l3.5-4 3 2L14 4" stroke="var(--gg-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 4H14v3.5" stroke="var(--gg-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
];

const outcomes = [
  { label: "More answered calls", sub: "Every lead gets a fast response path" },
  { label: "Map pack visibility", sub: "GBP optimized to show in local searches" },
  { label: "More reviews rolling in", sub: "Review kit turns happy clients into ratings" },
  { label: "Outranks the competition", sub: "Site + GBP combo beats most local competitors" },
];

const DEMO_SCROLL_PX_PER_FRAME = 80;

export default function DemoSection() {
  const [iframeActive, setIframeActive] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <section
      id="demo"
      style={{
        background: "var(--gg-bg-section)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="gg-demo-grid"
        >
          {/* Left — outcomes */}
          <div>
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gg-text3)", marginBottom: "14px" }}>
              What You&apos;ll Notice
            </p>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--gg-text1)", lineHeight: 1.15, margin: "0 0 14px" }}>
              The signals that tell you it&apos;s working.
            </h2>
            <p style={{ fontSize: "15px", color: "var(--gg-text2)", lineHeight: 1.7, margin: "0 0 36px" }}>
              Most local businesses start seeing changes within 2–4 weeks of going live.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {outcomes.map((o, i) => (
                <div
                  key={i}
                  className="gg-card-outcome"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 18px",
                    background: "var(--gg-card-bg)",
                    border: "1px solid var(--gg-border)",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "var(--gg-accent-soft)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {outcomeIcons[i]}
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--gg-text1)", margin: "0 0 2px" }}>{o.label}</p>
                    <p style={{ fontSize: "12px", color: "var(--gg-text3)", margin: 0 }}>{o.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone mockup with scrollable iframe */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gg-text3)", marginBottom: "14px", textAlign: "center" }}>
              Live Example
            </p>

            {/* Phone frame */}
            <div
              style={{
                width: "280px",
                background: "#1a1a1f",
                borderRadius: "40px",
                padding: "12px",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.08)",
                position: "relative",
              }}
            >
              {/* Notch / dynamic island */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "22px",
                  background: "#000",
                  borderRadius: "12px",
                  zIndex: 2,
                }}
              />

              {/* Screen bezel */}
              <div
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                  background: "#000",
                  position: "relative",
                }}
              >
                {/* Status bar */}
                <div
                  style={{
                    height: "44px",
                    background: "rgba(0,0,0,0.9)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    padding: "0 24px 6px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#fff" }}>9:41</span>
                  <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                    {/* Signal */}
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="#fff">
                      <rect x="0" y="6" width="2.5" height="4" rx="0.5"/>
                      <rect x="3.5" y="4" width="2.5" height="6" rx="0.5"/>
                      <rect x="7" y="2" width="2.5" height="8" rx="0.5"/>
                      <rect x="10.5" y="0" width="2.5" height="10" rx="0.5"/>
                    </svg>
                    {/* Battery */}
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                      <rect x="0.5" y="0.5" width="16" height="9" rx="2" stroke="#fff" strokeWidth="1"/>
                      <rect x="17" y="3" width="2" height="4" rx="0.5" fill="#fff"/>
                      <rect x="2" y="2" width="10" height="6" rx="1" fill="#fff"/>
                    </svg>
                  </div>
                </div>

                {/* Iframe — renders mobile layout (375px width) */}
                <div
                  style={{ height: "540px", overflow: "hidden", position: "relative" }}
                  onMouseEnter={() => {
                    setIframeActive(true);
                    iframeRef.current?.contentWindow?.postMessage("autoscroll-pause", "*");
                  }}
                  onMouseLeave={() => {
                    setIframeActive(false);
                    iframeRef.current?.contentWindow?.postMessage("autoscroll-resume", "*");
                  }}
                >
                  <iframe
                    key={DEMO_SCROLL_PX_PER_FRAME}
                    ref={iframeRef}
                    src={`/demo?px=${DEMO_SCROLL_PX_PER_FRAME}`}
                    title="Demo site preview"
                    style={{
                      width: "375px",
                      height: "1080px",
                      border: "none",
                      transform: "scale(0.6833)",
                      transformOrigin: "top left",
                      pointerEvents: iframeActive ? "auto" : "none",
                    }}
                  />
                </div>

                {/* Home indicator */}
                <div
                  style={{
                    height: "24px",
                    background: "rgba(0,0,0,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "100px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.3)" }} />
                </div>
              </div>
            </div>

            {/* Link below phone */}
            <div style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}>
              <Link
                href="/demo"
                target="_blank"
                className="gg-btn-accent"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "var(--gg-accent)",
                  textDecoration: "none",
                  border: "1px solid var(--gg-accent-border)",
                  padding: "7px 14px",
                  borderRadius: "6px",
                  background: "var(--gg-accent-soft)",
                }}
              >
                Open Full Site
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .gg-demo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
