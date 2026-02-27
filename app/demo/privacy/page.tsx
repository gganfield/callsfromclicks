import Link from "next/link";
import { config } from "@/client.config";

export const metadata = {
  title: `Privacy Policy — ${config.business.name}`,
  description: `Privacy policy for ${config.business.name} website.`,
};

const sectionStyle = { marginBottom: "32px" } as const;
const h2Style = { fontSize: "15px", fontWeight: 600, color: "#fff", margin: "24px 0 12px" } as const;
const pStyle = { fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "12px" } as const;
const listStyle = { fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, paddingLeft: "20px", margin: "0 0 12px", listStyleType: "disc" } as const;

export default function DemoPrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: "0 0 32px" }}>
          Effective Date: January 1, 2025
        </p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Information Collected</h2>
          <p style={pStyle}>We collect:</p>
          <ul style={listStyle}>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Project details</li>
          </ul>
          <p style={pStyle}>When you submit a quote request.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. Use of Information</h2>
          <p style={pStyle}>We use your information to:</p>
          <ul style={listStyle}>
            <li>Respond to your inquiry</li>
            <li>Provide estimates</li>
            <li>Schedule services</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. SMS Privacy</h2>
          <p style={pStyle}>If you opt in to receive text messages:</p>
          <ul style={listStyle}>
            <li>Your mobile information will not be shared with third parties for marketing or promotional purposes.</li>
            <li>You may opt out at any time by replying STOP.</li>
            <li>Standard message and data rates may apply.</li>
            <li>We do not sell or share your phone number.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Data Security</h2>
          <p style={pStyle}>
            We take reasonable measures to protect your information.
          </p>
        </section>
      </div>
    </div>
  );
}
