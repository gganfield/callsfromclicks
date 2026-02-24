import { config } from "@/client.config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#050710", padding: "56px 24px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: "40px", marginBottom: "48px" }} className="demo-footer-grid">
          {/* Brand */}
          <div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "17px", color: "#fff", margin: "0 0 12px", letterSpacing: "-0.03em" }}>
              {config.business.name}
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(255,255,255,0.45)", margin: "0 0 16px", maxWidth: "280px" }}>
              {config.business.tagline}
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" style={{
                  width: "34px", height: "34px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.15s",
                }} className="demo-social-link" aria-label="Facebook">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 .5A6.5 6.5 0 00.5 7 6.5 6.5 0 006 13.4v-4.5H4.5V7H6V5.5c0-1.5.9-2.3 2.2-2.3.6 0 1.3.1 1.3.1V5h-.7c-.7 0-.8.4-.8 1v1h1.5l-.2 1.9H8V13.4A6.5 6.5 0 0013.5 7 6.5 6.5 0 007 .5z" fill="rgba(255,255,255,0.5)"/></svg>
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" style={{
                  width: "34px", height: "34px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.15s",
                }} className="demo-social-link" aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/><circle cx="7" cy="7" r="2.8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/><circle cx="10.5" cy="3.5" r="0.8" fill="rgba(255,255,255,0.5)"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 14px" }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>
              <a href={`tel:${config.business.phoneRaw}`} className="demo-footer-link" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.15s" }}>
                {config.business.phone}
              </a>
              <a href={`mailto:${config.business.email}`} className="demo-footer-link" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.15s" }}>
                {config.business.email}
              </a>
              <p style={{ margin: 0 }}>{config.business.address}</p>
              <p style={{ margin: 0 }}>{config.business.hours}</p>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 14px" }}>
              Service Area
            </p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: "0 0 16px", lineHeight: 1.6 }}>
              {config.business.serviceArea}
            </p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", margin: 0 }}>
              {config.business.license}
            </p>
          </div>
        </div>

        <div style={{
          paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px",
        }}>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            &copy; {year} {config.business.name}. All rights reserved.
          </p>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", margin: 0 }}>
            Built by <a href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.15s" }} className="demo-footer-link">Calls From Clicks</a>
          </p>
        </div>
      </div>
      <style>{`
        .demo-footer-link:hover { color: #fff !important; }
        .demo-social-link:hover { background: rgba(255,255,255,0.1) !important; }
        @media (max-width: 640px) {
          .demo-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
