import Link from "next/link";

export const metadata = {
  title: "Service Agreement — Calls From Clicks",
  description: "Service Agreement for the 72-Hour Lead System Build.",
};

const sectionStyle = { marginBottom: "32px" } as const;
const h2Style = { fontSize: "15px", fontWeight: 600, color: "var(--gg-text1)", margin: "24px 0 12px" } as const;
const pStyle = { fontSize: "14px", color: "var(--gg-text2)", lineHeight: 1.7, marginBottom: "12px" } as const;
const listStyle = { fontSize: "14px", color: "var(--gg-text2)", lineHeight: 1.7, paddingLeft: "20px", margin: "0 0 12px", listStyleType: "disc" } as const;

export default function ServiceAgreementPage() {
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
          Service Agreement
        </h1>
        <p style={{ fontSize: "12px", color: "var(--gg-text3)", margin: "0 0 32px" }}>
          This Service Agreement outlines the services provided by Calls From Clicks (&quot;Company&quot;) to the client (&quot;Client&quot;) for the 72-Hour Lead System Build.
        </p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Scope of Work</h2>
          <p style={pStyle}>
            Upon receipt and confirmation of the required assets listed in Section 2, Company will complete the following:
          </p>
          <h3 style={{ fontSize: "14px", fontWeight: 600, color: "var(--gg-text1)", margin: "16px 0 8px" }}>A. Conversion Website</h3>
          <p style={pStyle}>
            A custom, mobile-first website designed to generate calls and quote requests. The website includes:
          </p>
          <ul style={listStyle}>
            <li>Main landing page with clear calls-to-action</li>
            <li>Navigation to Services, About, Reviews/Testimonials, Gallery, and Contact</li>
            <li>Sticky click-to-call button (mobile)</li>
            <li>Quote request form routed to Client email</li>
            <li>Integrated reviews</li>
            <li>Clean on-page SEO structure (titles, headings, meta tags)</li>
            <li>Basic analytics installation once Client provides necessary access (e.g., Google Analytics property)</li>
          </ul>
          <p style={pStyle}>
            Two (2) revision rounds are included. Each round must be submitted as one consolidated list of edits.
          </p>
          <p style={pStyle}>
            Requests outside the defined scope may require a separate quote and timeline.
          </p>
          <h3 style={{ fontSize: "14px", fontWeight: 600, color: "var(--gg-text1)", margin: "16px 0 8px" }}>B. Professional Business Line Setup</h3>
          <p style={pStyle}>
            Company will provide a dedicated business number with call forwarding and missed-call auto text functionality.
          </p>
          <p style={pStyle}>
            Due to carrier verification and account activation requirements, telephony services may require an additional activation period beyond the initial 72-hour website build window.
          </p>
          <p style={pStyle}>
            Company will activate telephony services as soon as reasonably possible after verification requirements are completed.
          </p>
          <p style={pStyle}>
            As consideration for this temporary delay, Client will receive one (1) additional month of Ongoing Stability + Support at no charge.
          </p>
          <p style={pStyle}>
            Telephony activation timing does not affect the 72-hour delivery guarantee described in Section 4.
          </p>
          <h3 style={{ fontSize: "14px", fontWeight: 600, color: "var(--gg-text1)", margin: "16px 0 8px" }}>C. Review &amp; Listing Alignment</h3>
          <p style={pStyle}>
            Company will align and submit updates to foundational platforms including:
          </p>
          <ul style={listStyle}>
            <li>Google Business Profile</li>
            <li>Apple</li>
            <li>Yelp</li>
            <li>Angi</li>
            <li>Facebook</li>
            <li>Yellow Pages</li>
            <li>Trustpilot or Houzz (when applicable)</li>
          </ul>
          <p style={pStyle}>
            Company completes submission within 72 hours. Approval timelines by third-party platforms are outside Company&apos;s control.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. Required Assets</h2>
          <p style={pStyle}>
            The 72-hour timeline begins only after Company receives and confirms:
          </p>
          <ul style={listStyle}>
            <li>Business name</li>
            <li>Phone number and email</li>
            <li>List of services</li>
            <li>Service area</li>
            <li>Logo (or permission for text logo)</li>
            <li>Minimum five (5) photos (or permission for placeholders)</li>
          </ul>
          <p style={pStyle}>
            Client is responsible for providing accurate business information and service descriptions. Company may edit for clarity but does not provide full copywriting services.
          </p>
          <p style={pStyle}>
            Company may use stock or placeholder imagery if adequate photos are not provided.
          </p>
          <p style={pStyle}>
            Delays in asset delivery extend the timeline.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Ownership</h2>
          <p style={pStyle}>
            Upon full payment, Client owns the website deliverables, excluding proprietary tools or infrastructure used to host or manage the site.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Timeline &amp; Guarantee</h2>
          <p style={pStyle}>
            Company guarantees delivery of the website and listing submission components within 72 hours of confirmed asset receipt.
          </p>
          <p style={pStyle}>
            If Company fails to meet this deadline, the final payment is waived. The deposit remains payable.
          </p>
          <p style={pStyle}>
            The 72-hour guarantee applies only to the website and listing submission components. Telephony activation and third-party verification timelines are excluded.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>5. Pricing &amp; Payment</h2>
          <p style={pStyle}>
            Total project fee: $499
          </p>
          <ul style={listStyle}>
            <li>$250 deposit due before work begins</li>
            <li>$249 due at launch</li>
          </ul>
          <p style={pStyle}>
            The deposit secures project scheduling and is non-refundable once work begins. Work is considered to have begun once asset review, build preparation, or development has started.
          </p>
          <p style={pStyle}>
            Company may withhold final deployment, transfer, or administrative access until final payment is received, including domain connection or production launch.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Ongoing Stability + Support (Optional After 90 Days)</h2>
          <p style={pStyle}>
            The first ninety (90) days of hosting and support are included.
          </p>
          <p style={pStyle}>
            Due to the temporary telephony activation delay described in Section 1(B), Client will receive one (1) additional month of support at no charge.
          </p>
          <p style={pStyle}>
            After the included period (90 days, plus one additional month if the telephony compensation in Section 1(B) applies) ends, Client may choose:
          </p>
          <ul style={listStyle}>
            <li>$79/month (cancel anytime)</li>
            <li>6-month prepay: $395 upfront (includes 2 quarterly updates up to 2 hours each)</li>
            <li>12-month prepay: $711 upfront (includes 4 quarterly updates up to 2 hours each)</li>
          </ul>
          <p style={pStyle}>
            If no plan is selected after the included support period ends, hosting and support will terminate and the site will go offline until hosting is restored or the site is transferred.
          </p>
          <p style={pStyle}>
            Monthly plans include hosting, uptime stability, bug fixes, and up to 60 minutes of batched updates per month. Unused time does not roll over.
          </p>
          <p style={pStyle}>
            Quarterly updates cover modifications to the existing site structure and do not include full redesigns or new feature builds.
          </p>
          <p style={pStyle}>
            Additional work is billed at $70/hour, prorated.
          </p>
          <h3 style={{ fontSize: "14px", fontWeight: 600, color: "var(--gg-text1)", margin: "16px 0 8px" }}>Ongoing Stability + Support — Renewal &amp; Cancellation</h3>
          <p style={pStyle}>
            <strong>Renewal after bulk term:</strong> If Client purchases a 6-month or 12-month prepaid plan, the plan will automatically continue month-to-month at $79/month at the end of the prepaid term unless Client renews with another bulk option or cancels prior to renewal.
          </p>
          <p style={pStyle}>
            <strong>How to cancel:</strong> Client may cancel Ongoing Stability + Support at any time by emailing{" "}
            <a href="mailto:support@callsfromclicks.com" style={{ color: "var(--gg-accent)", textDecoration: "underline" }}>support@callsfromclicks.com</a>.
            Cancellation takes effect at the end of the current billing period. Partial months are not prorated or refunded.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>7. Transfer of Site</h2>
          <p style={pStyle}>
            If Client cancels ongoing support and requests transfer of the codebase and/or hosting assistance, transfer services may be subject to a separate fee.
          </p>
          <p style={pStyle}>
            After transfer, Company is not responsible for uptime, edits, maintenance, or technical issues.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>8. Exclusions</h2>
          <p style={pStyle}>
            This agreement does not include:
          </p>
          <ul style={listStyle}>
            <li>Paid advertising management</li>
            <li>Ongoing or advanced SEO campaigns</li>
            <li>CRM integrations</li>
            <li>Advanced booking systems</li>
            <li>Custom dashboards</li>
            <li>Custom software development</li>
          </ul>
          <p style={pStyle}>
            Additional services require separate agreement.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>9. Acceptance</h2>
          <p style={pStyle}>
            By submitting the deposit payment, Client acknowledges and agrees to the terms of this Service Agreement.
          </p>
        </section>
      </div>
    </div>
  );
}
