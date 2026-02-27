import Link from "next/link";

export default function GGFooter() {
  return (
    <footer
      style={{
        background: "var(--gg-bg)",
        borderTop: "1px solid var(--gg-border)",
        padding: "56px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "40px",
          alignItems: "start",
          marginBottom: "48px",
        }}
        className="gg-footer-grid"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="var(--gg-accent)" />
              <path d="M10 11.5l2.5-2.5a1.2 1.2 0 011.7 0l1.3 1.3a1.2 1.2 0 010 1.7l-.8.8c.8 1.5 2 2.7 3.5 3.5l.8-.8a1.2 1.2 0 011.7 0l1.3 1.3a1.2 1.2 0 010 1.7L19.5 21a8 8 0 01-9.5-9.5z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M18 9.5c2.5.5 4.5 2.5 5 5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
            </svg>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "16px",
                color: "var(--gg-text1)",
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Calls From Clicks
            </p>
          </div>
          <p style={{ fontSize: "13px", color: "var(--gg-text2)", margin: "0 0 16px", maxWidth: "320px", lineHeight: 1.65 }}>
            72-hour conversion websites for local service businesses. Built to turn traffic into calls.
          </p>
          <p style={{ fontSize: "12px", color: "var(--gg-text2)", margin: 0 }}>
            Serving Macomb County, Oakland County &amp; Metro Detroit
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gg-accent)", margin: "0 0 6px" }}>
            Quick Links
          </p>
          {[
            { label: "Get Free Audit", href: "/audit" },
            { label: "The System", href: "/#system" },
            { label: "View Demo", href: "/demo" },
            { label: "Contact us", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="gg-footer-link"
              style={{
                fontSize: "13px",
                color: "var(--gg-text2)",
                textDecoration: "none",
                padding: "2px 0",
                borderBottom: "1px solid transparent",
                transition: "color 0.15s, border-color 0.15s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingTop: "20px",
          borderTop: "1px solid var(--gg-border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <p style={{ fontSize: "11px", color: "var(--gg-text3)", margin: 0 }}>
          &copy; {new Date().getFullYear()} Calls From Clicks
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/privacy" className="gg-footer-link" style={{ fontSize: "11px", color: "var(--gg-text3)", textDecoration: "none", transition: "color 0.15s" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="gg-footer-link" style={{ fontSize: "11px", color: "var(--gg-text3)", textDecoration: "none", transition: "color 0.15s" }}>
            Terms of Service
          </Link>
          <Link href="/" target="_blank" rel="noopener noreferrer" className="gg-footer-link" style={{ fontSize: "11px", color: "var(--gg-text3)", textDecoration: "none", transition: "color 0.15s" }}>
            callsfromclicks.com
          </Link>
        </div>
      </div>

      <style>{`
        .gg-footer-link:hover {
          color: var(--gg-text1) !important;
          border-bottom-color: var(--gg-accent) !important;
        }
        @media (max-width: 560px) {
          .gg-footer-grid { grid-template-columns: 1fr !important; }
          .gg-footer-grid > div:last-child { align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  );
}
