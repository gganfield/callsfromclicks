"use client";
import { config } from "@/client.config";
import { useState, useEffect } from "react";
import { useDemoTheme } from "@/app/context/DemoThemeContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useDemoTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        background: scrolled ? "var(--dt-nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        boxShadow: scrolled ? "var(--dt-nav-shadow)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "17px",
            color: "var(--dt-nav-name)",
            textDecoration: "none",
            letterSpacing: "-0.03em",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--primary)",
              boxShadow: "0 0 12px rgba(180,83,9,0.5)",
              display: "inline-block",
            }}
          />
          {config.business.name}
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }} className="demo-desktop-nav">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="demo-nav-link"
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--dt-nav-link)",
                textDecoration: "none",
                transition: "color 0.15s",
                letterSpacing: "0.01em",
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="demo-theme-toggle"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
          <a
            href={`tel:${config.business.phoneRaw}`}
            className="demo-btn-primary"
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#fff",
              background: "var(--primary)",
              padding: "9px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 0 24px rgba(180,83,9,0.3)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 2.5c.5-.5 1.3-.5 1.8 0l1.5 1.5c.5.5.5 1.3 0 1.8l-.7.7c.8 1.5 2 2.7 3.5 3.5l.7-.7c.5-.5 1.3-.5 1.8 0l1.5 1.5c.5.5.5 1.3 0 1.8C11.5 13 7 13.5 2.5 9 -2 4.5-.5 3 2.5 2.5z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round"/>
            </svg>
            {config.business.phone}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={toggleTheme}
            className="demo-theme-toggle demo-mobile-theme-btn"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            style={{ display: "none" }}
          >
            {theme === "light" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="demo-mobile-btn"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "none" }}
            aria-label="Menu"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: "22px",
                    height: "1.5px",
                    background: "var(--dt-hamburger)",
                    borderRadius: "2px",
                    transition: "transform 0.2s, opacity 0.2s",
                    transform:
                      menuOpen && i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                      : menuOpen && i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                      : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: "var(--dt-mob-menu-bg)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderTop: "1px solid var(--dt-mob-border)", padding: "16px 24px 24px" }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "14px 0", fontSize: "15px", fontWeight: 500, color: "var(--dt-mob-link)", textDecoration: "none", borderBottom: "1px solid var(--dt-mob-border)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${config.business.phoneRaw}`}
            onClick={() => setMenuOpen(false)}
            style={{ display: "block", marginTop: "16px", textAlign: "center", fontSize: "14px", fontWeight: 700, color: "#fff", background: "var(--primary)", padding: "13px 0", borderRadius: "10px", textDecoration: "none" }}
          >
            Call Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .demo-desktop-nav { display: none !important; }
          .demo-mobile-btn { display: flex !important; }
          .demo-mobile-theme-btn { display: inline-flex !important; }
        }
      `}</style>
    </nav>
  );
}
