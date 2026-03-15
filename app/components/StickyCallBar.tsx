import { config } from "@/client.config";

export default function StickyCallBar() {
  return (
    <div className="demo-sticky-bar" style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      paddingBottom: "env(safe-area-inset-bottom, 0px)",
      background: "var(--primary)",
      boxShadow: "0 -4px 24px rgba(180,83,9,0.35)",
    }}>
      <a
        href={`tel:${config.business.phoneRaw}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "16px 24px",
          color: "#fff",
          textDecoration: "none",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          letterSpacing: "-0.01em",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M3 3c.6-.6 1.6-.6 2.2 0l1.8 1.8c.6.6.6 1.6 0 2.2l-.8.8c1 1.8 2.4 3.3 4.2 4.2l.8-.8c.6-.6 1.6-.6 2.2 0l1.8 1.8c.6.6.6 1.6 0 2.2-1.8 2.4-6.2 2.4-10-2C1.4 8.6 1 5 3 3z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
        Call Now — {config.business.phone}
      </a>
    </div>
  );
}
