import Link from "next/link";
import { config } from "@/client.config";

export const metadata = {
  title: `Terms & Conditions — ${config.business.name}`,
  description: `Terms and conditions for ${config.business.name} website.`,
};

const sectionStyle = { marginBottom: "32px" } as const;
const h2Style = { fontSize: "15px", fontWeight: 600, color: "#fff", margin: "24px 0 12px" } as const;
const pStyle = { fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "12px" } as const;
const listStyle = { fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, paddingLeft: "20px", margin: "0 0 12px", listStyleType: "disc" } as const;

export default function DemoTermsPage() {
  return (
    <div style={{ background: "#050710", minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <Link
          href="/demo"
          style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "32px", display: "inline-block" }}
        >
          ← Back to {config.business.name}
        </Link>

        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", margin: "0 0 8px" }}>
          {config.business.name}
        </p>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, color: "#fff", margin: "0 0 4px", letterSpacing: "-0.03em" }}>
          Terms &amp; Conditions
        </h1>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: "0 0 32px" }}>
          Effective Date: January 1, 2025
        </p>

        <p style={pStyle}>
          By submitting a request form on this website, you agree to the following:
        </p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Service Inquiries</h2>
          <p style={pStyle}>
            Submitting a form does not create a binding contract. Estimates and agreements are provided separately.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. SMS Communications</h2>
          <p style={pStyle}>
            If you opt in to receive text messages from {config.business.name}:
          </p>
          <ul style={listStyle}>
            <li>Messages may relate to your project inquiry, scheduling, or updates</li>
            <li>Message frequency varies</li>
            <li>Message &amp; data rates may apply</li>
            <li>Reply STOP to opt out</li>
            <li>Reply HELP for assistance</li>
          </ul>
          <p style={pStyle}>Consent is not required to receive services.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Limitation of Liability</h2>
          <p style={pStyle}>
            We are not responsible for carrier message delays or failures.
          </p>
        </section>
      </div>
    </div>
  );
}
