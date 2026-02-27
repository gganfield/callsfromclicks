const items = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "72-hour delivery",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    text: "Custom code",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M2.5 2.5c.5-.5 1.2-.5 1.7 0l1.4 1.4c.5.5.5 1.2 0 1.7l-.6.6c.7 1.3 1.8 2.4 3.1 3.1l.6-.6c.5-.5 1.2-.5 1.7 0l1.4 1.4c.5.5.5 1.2 0 1.7l-1.9 1.9a11 11 0 01-7.8-7.8l1.9-1.9z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Click-to-call built in",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 9 4.5 9s4.5-5.5 4.5-9c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <circle cx="8" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    text: "GBP optimized",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 4v4l3 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Michigan-Based",
  },
];

export default function TrustStrip() {
  return (
    <div
      style={{
        background: "var(--gg-bg-section)",
        borderTop: "1px solid var(--gg-border)",
        borderBottom: "1px solid var(--gg-border)",
        padding: "12px 24px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(5, auto)",
          justifyContent: "center",
          gap: "12px 36px",
        }}
        className="gg-trust-grid"
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--gg-text2)",
              fontSize: "12px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "var(--gg-accent)", flexShrink: 0, display: "flex" }}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 740px) {
          .gg-trust-grid { grid-template-columns: repeat(3, auto) !important; }
        }
        @media (max-width: 480px) {
          .gg-trust-grid { grid-template-columns: repeat(2, auto) !important; }
        }
      `}</style>
    </div>
  );
}
