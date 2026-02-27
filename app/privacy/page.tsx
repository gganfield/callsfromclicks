import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Calls From Clicks",
  description: "Privacy Policy for Calls From Clicks website and services.",
};

const sectionStyle = { marginBottom: "32px" } as const;
const h2Style = { fontSize: "15px", fontWeight: 600, color: "var(--gg-text1)", margin: "24px 0 12px" } as const;
const pStyle = { fontSize: "14px", color: "var(--gg-text2)", lineHeight: 1.7, marginBottom: "12px" } as const;
const listStyle = { fontSize: "14px", color: "var(--gg-text2)", lineHeight: 1.7, paddingLeft: "20px", margin: "0 0 12px", listStyleType: "disc" } as const;

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--gg-bg)", minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <Link
          href="/"
          style={{ fontSize: "13px", color: "var(--gg-text3)", textDecoration: "none", marginBottom: "32px", display: "inline-block" }}
        >
          ← Back to Calls From Clicks
        </Link>

        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gg-accent)", margin: "0 0 8px" }}>
          Calls From Clicks
        </p>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, color: "var(--gg-text1)", margin: "0 0 4px", letterSpacing: "-0.03em" }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: "12px", color: "var(--gg-text3)", margin: "0 0 32px" }}>
          Effective Date: January 1, 2025
        </p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Information We Collect</h2>
          <p style={pStyle}>We may collect:</p>
          <ul style={listStyle}>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business information</li>
            <li>Website details</li>
          </ul>
          <p style={pStyle}>When you submit a form.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. How We Use Information</h2>
          <p style={pStyle}>We use collected information to:</p>
          <ul style={listStyle}>
            <li>Respond to inquiries</li>
            <li>Deliver audit reports</li>
            <li>Provide services</li>
            <li>Send relevant updates</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. SMS Data &amp; Mobile Privacy</h2>
          <p style={pStyle}>If you opt in to receive SMS:</p>
          <ul style={listStyle}>
            <li>Your mobile number will only be used for communications related to your inquiry or services.</li>
            <li>Mobile information will not be shared with third parties for marketing or promotional purposes.</li>
            <li>You may opt out at any time by replying STOP.</li>
            <li>We do not sell, rent, or share mobile numbers.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Data Security</h2>
          <p style={pStyle}>
            We take reasonable administrative and technical measures to protect your information.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>5. Third-Party Services</h2>
          <p style={pStyle}>
            We may use trusted third-party providers (e.g., hosting providers, email platforms, Twilio) to deliver services. These providers process data only as necessary to provide functionality.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Your Rights</h2>
          <p style={pStyle}>
            You may request access to or deletion of your personal information by contacting us at:{" "}
            <a href="mailto:hello@callsfromclicks.com" style={{ color: "var(--gg-accent)", textDecoration: "underline" }}>
              hello@callsfromclicks.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
