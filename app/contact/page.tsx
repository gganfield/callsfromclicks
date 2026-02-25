import Link from "next/link";
import GGNav from "../components/ggbuilds/GGNav";

export const metadata = {
  title: "Contact — Calls From Clicks",
  description: "Get in touch with Calls From Clicks.",
};

// Replace with your real phone (E.164 or dialable) and email for tap-to-call / mailto
const CONTACT_PHONE_RAW = "+15865550100";
const CONTACT_PHONE_DISPLAY = "(586) 555-0100";
const CONTACT_EMAIL = "hello@callsfromclicks.com";

export default function ContactPage() {
  return (
    <>
      <GGNav />
    <div
      style={{
        background: "var(--gg-bg)",
        minHeight: "100vh",
        color: "var(--gg-text1)",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            margin: "0 0 12px",
          }}
        >
          Contact us
        </h1>
        <p style={{ fontSize: "15px", color: "var(--gg-text2)", lineHeight: 1.7, margin: "0 0 40px" }}>
          Call or email to get started.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <a
            href={`tel:${CONTACT_PHONE_RAW}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "20px 24px",
              background: "var(--gg-card-bg)",
              border: "1px solid var(--gg-border)",
              borderRadius: "14px",
              color: "var(--gg-text1)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "18px",
              transition: "border-color 0.2s, background 0.2s",
            }}
            className="gg-row-hover"
          >
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
              <path d="M2.5 2.5c.5-.5 1.2-.5 1.7 0l1.4 1.4c.5.5.5 1.2 0 1.7l-.6.6c.7 1.3 1.8 2.4 3.1 3.1l.6-.6c.5-.5 1.2-.5 1.7 0l1.4 1.4c.5.5.5 1.2 0 1.7l-1.9 1.9a11 11 0 01-7.8-7.8l1.9-1.9z" stroke="var(--gg-accent)" strokeWidth="1.3" strokeLinejoin="round"/>
            </svg>
            {CONTACT_PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "20px 24px",
              background: "var(--gg-card-bg)",
              border: "1px solid var(--gg-border)",
              borderRadius: "14px",
              color: "var(--gg-text1)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "18px",
              transition: "border-color 0.2s, background 0.2s",
            }}
            className="gg-row-hover"
          >
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="3" width="14" height="10" rx="2" stroke="var(--gg-accent)" strokeWidth="1.3"/>
              <path d="M1 4l7 5 7-5" stroke="var(--gg-accent)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {CONTACT_EMAIL}
          </a>
        </div>

        <p style={{ marginTop: "32px" }}>
          <Link
            href="/"
            style={{ fontSize: "14px", color: "var(--gg-accent)", textDecoration: "none", fontWeight: 500 }}
          >
            Back to home
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}
