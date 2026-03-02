import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Calls From Clicks",
  description: "Terms of Service for Calls From Clicks website and services.",
};

const sectionStyle = { marginBottom: "32px" } as const;
const h2Style = { fontSize: "15px", fontWeight: 600, color: "var(--gg-text1)", margin: "24px 0 12px" } as const;
const pStyle = { fontSize: "14px", color: "var(--gg-text2)", lineHeight: 1.7, marginBottom: "12px" } as const;
const listStyle = { fontSize: "14px", color: "var(--gg-text2)", lineHeight: 1.7, paddingLeft: "20px", margin: "0 0 12px", listStyleType: "disc" } as const;

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ fontSize: "12px", color: "var(--gg-text3)", margin: "0 0 32px" }}>
          Effective Date: January 1, 2025
        </p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Services</h2>
          <p style={pStyle}>
            Calls From Clicks (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) provides website development, local presence setup and optimization, marketing automation setup, and related services.
          </p>
          <p style={pStyle}>
            Our local presence setup includes submission and optimization of your business on: Google Business Profile, Apple Maps, Yelp, Angi, Facebook, Yellow Pages, and Trustpilot or Houzz when relevant to your industry. We do not control verification, approval, or listing policies of these third-party platforms.
          </p>
          <p style={pStyle}>
            By using our website or submitting a form, you agree to these Terms.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. Communications &amp; SMS Consent</h2>
          <p style={pStyle}>
            If you provide your phone number and opt in to receive text messages, you consent to receive SMS communications from Calls From Clicks regarding your inquiry, project, or services.
          </p>
          <ul style={listStyle}>
            <li>Message frequency varies</li>
            <li>Message &amp; data rates may apply</li>
            <li>Reply STOP to opt out</li>
            <li>Reply HELP for assistance</li>
          </ul>
          <p style={pStyle}>Consent is not a condition of purchase.</p>
          <p style={pStyle}>
            We do not sell, rent, or share mobile phone numbers with third parties for marketing purposes.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Payments</h2>
          <p style={pStyle}>For build services:</p>
          <ul style={listStyle}>
            <li>50% upfront</li>
            <li>50% upon delivery</li>
          </ul>
          <p style={pStyle}>
            If we miss the agreed 72-hour delivery timeline (once all required assets are received and confirmed), the final 50% is waived.
          </p>
          <p style={pStyle}>Ongoing support plans are billed monthly unless otherwise agreed.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Intellectual Property</h2>
          <p style={pStyle}>
            Upon full payment, the client owns the final website content and assets created specifically for their project.
          </p>
          <p style={pStyle}>We retain the right to display work in our portfolio.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>5. Limitation of Liability</h2>
          <p style={pStyle}>We are not liable for:</p>
          <ul style={listStyle}>
            <li>Carrier delays in SMS verification</li>
            <li>Third-party service interruptions (e.g., hosting providers, Google, Twilio)</li>
            <li>Indirect or consequential damages</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Governing Law</h2>
          <p style={pStyle}>These Terms are governed by the laws of the State of Michigan.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>7. Contact</h2>
          <p style={pStyle}>
            Questions may be directed to:{" "}
            <a href="mailto:hello@callsfromclicks.com" style={{ color: "var(--gg-accent)", textDecoration: "underline" }}>
              hello@callsfromclicks.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
