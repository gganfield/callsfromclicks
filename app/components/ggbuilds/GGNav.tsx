"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function GGNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "What You Get", href: "#offer" },
    { label: "How It Works", href: "#process" },
    { label: "Demo", href: "#demo" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.25s, box-shadow 0.25s",
        background: scrolled ? "rgba(6,6,9,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 0 var(--gg-border)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo + wordmark */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-label="Calls From Clicks logo">
            <rect width="32" height="32" rx="8" fill="var(--gg-accent)" />
            <path d="M10 11.5l2.5-2.5a1.2 1.2 0 011.7 0l1.3 1.3a1.2 1.2 0 010 1.7l-.8.8c.8 1.5 2 2.7 3.5 3.5l.8-.8a1.2 1.2 0 011.7 0l1.3 1.3a1.2 1.2 0 010 1.7L19.5 21a8 8 0 01-9.5-9.5z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M18 9.5c2.5.5 4.5 2.5 5 5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
            <path d="M18 12.5c1 .3 1.8 1.1 2.1 2.1" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
          </svg>
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "17px",
              color: "var(--gg-text1)",
              letterSpacing: "-0.03em",
            }}
          >
            Calls From Clicks
          </span>
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
          className="gg-desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="gg-nav-link"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--gg-text2)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}

          <Link
            href="/audit"
            className="gg-btn-primary"
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#fff",
              background: "var(--gg-gradient)",
              padding: "10px 22px",
              borderRadius: "8px",
              textDecoration: "none",
              boxShadow: "0 0 20px rgba(79,142,247,0.2)",
              display: "inline-block",
            }}
          >
            Free Audit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="gg-mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "none",
          }}
          aria-label="Toggle menu"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "22px",
                  height: "1.5px",
                  background: "var(--gg-text1)",
                  borderRadius: "2px",
                  transition: "transform 0.2s, opacity 0.2s",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translate(4.5px, 4.5px)"
                      : menuOpen && i === 2
                      ? "rotate(-45deg) translate(4.5px, -4.5px)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(6,6,9,0.98)",
            borderTop: "1px solid var(--gg-border)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                fontSize: "15px",
                fontWeight: 500,
                color: "var(--gg-text2)",
                textDecoration: "none",
                borderBottom: "1px solid var(--gg-border)",
              }}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/audit"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: "16px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 700,
              color: "#fff",
              background: "var(--gg-gradient)",
              padding: "13px 0",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            Free Audit
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .gg-desktop-nav { display: none !important; }
          .gg-mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
