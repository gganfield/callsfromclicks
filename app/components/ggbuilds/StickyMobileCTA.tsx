"use client";
import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <>
      <div className="gg-sticky-cta" aria-hidden="false">
        <Link
          href="/audit"
          className="gg-cta-main"
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            fontWeight: 700,
            fontSize: "15px",
            color: "#fff",
            background: "var(--gg-gradient)",
            padding: "14px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            boxShadow: "0 0 40px rgba(79,142,247,0.3)",
          }}
        >
          Get Free Lead Leak Audit
        </Link>
      </div>

      <style>{`
        .gg-sticky-cta {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 90;
          padding: 12px 16px;
          padding-bottom: calc(12px + env(safe-area-inset-bottom));
          background: var(--gg-bg);
          border-top: 1px solid var(--gg-border);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        @media (max-width: 768px) {
          .gg-sticky-cta { display: block; }
          main { padding-bottom: 80px; }
        }
      `}</style>
    </>
  );
}
