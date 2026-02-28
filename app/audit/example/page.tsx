import Link from "next/link";
import { pitchData as d } from "./pitch.config";
import AuditIntroVideo from "@/app/components/ggbuilds/AuditIntroVideo";
import EmbedMode from "./EmbedMode";

export const metadata = {
  title: "Peak Home Remodeling — Local Lead Leak Audit (Example)",
  robots: "noindex, nofollow",
};

// ── Tokens ─────────────────────────────────────────────────────
const C = {
  bg: "#07070a",
  surface: "rgba(255,255,255,0.03)",
  border: "rgba(255,255,255,0.07)",
  borderStrong: "rgba(255,255,255,0.13)",
  text1: "#f2f2f7",
  text2: "rgba(255,255,255,0.58)",
  text3: "rgba(255,255,255,0.32)",
  blue: "#4f8ef7",
  blueSoft: "rgba(79,142,247,0.12)",
  green: "#3ecf8e",
  greenSoft: "rgba(62,207,142,0.1)",
  red: "#f26464",
  redSoft: "rgba(242,100,100,0.08)",
  redBorder: "rgba(242,100,100,0.22)",
  amber: "#f5a623",
  amberSoft: "rgba(245,166,35,0.1)",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.text3, marginBottom: "20px" }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: C.border, margin: "56px 0" }} />;
}

interface RowProps {
  category: string;
  you: string;
  competitor: string;
  result: "win" | "lose" | "neutral";
}

function Row({ category, you, competitor, result }: RowProps) {
  const youColor = result === "win" ? C.green : result === "lose" ? C.red : C.amber;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: "16px", padding: "14px 20px", borderBottom: `1px solid ${C.border}`, alignItems: "start" }}>
      <span style={{ fontSize: "12px", color: C.text3, lineHeight: 1.5 }}>{category}</span>
      <span style={{ fontSize: "13px", color: youColor, fontWeight: 500, lineHeight: 1.5 }}>{you}</span>
      <span style={{ fontSize: "13px", color: C.text2, lineHeight: 1.5 }}>{competitor}</span>
    </div>
  );
}

interface OpportunityProps {
  n: number;
  title: string;
  body: string;
  urgent?: boolean;
}

function Opportunity({ n, title, body, urgent }: OpportunityProps) {
  return (
    <div style={{ padding: "28px 28px 28px 0", borderBottom: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "52px 1fr", gap: "8px", alignItems: "start" }}>
      <span style={{ fontSize: "13px", fontWeight: 600, color: urgent ? C.red : C.blue, letterSpacing: "-0.01em", paddingTop: "2px" }}>
        0{n}
      </span>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, color: C.text1, letterSpacing: "-0.02em", lineHeight: 1.3, margin: 0 }}>
            {title}
          </h3>
          {urgent && (
            <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.red, background: C.redSoft, border: `1px solid ${C.redBorder}`, padding: "2px 7px", borderRadius: "4px" }}>
              Active now
            </span>
          )}
        </div>
        <p style={{ fontSize: "14px", color: C.text2, lineHeight: 1.7, margin: 0, whiteSpace: "pre-line" }}>{body}</p>
      </div>
    </div>
  );
}

function ExclusiveNote({ businessName }: { businessName: string }) {
  return (
    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "24px", fontStyle: "italic" }}>
      Prepared exclusively for {businessName}. Please do not share publicly.
    </p>
  );
}

export function ExampleAuditContent(props: { exclusiveFor?: { businessName: string } }) {
  return (
    <div style={{ background: C.bg, color: C.text1, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", WebkitFontSmoothing: "antialiased", minHeight: "100vh" }}>
      <EmbedMode />
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 24px 100px" }}>
        {props.exclusiveFor && <ExclusiveNote businessName={props.exclusiveFor.businessName} />}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: C.text3,
            textDecoration: "none",
            marginBottom: "24px",
          }}
        >
          ← Back to home
        </Link>

        <AuditIntroVideo />

        {/* ── Header ── */}
        <header style={{ marginBottom: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.blue, background: C.blueSoft, padding: "5px 10px", borderRadius: "6px" }}>
              Online Presence Breakdown
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, letterSpacing: "-0.035em", color: C.text1, margin: "0 0 10px", fontFamily: "'Poppins', -apple-system, sans-serif", lineHeight: 1.15 }}>
            {d.prospect.name}
          </h1>
          <p style={{ fontSize: "14px", color: C.text3, margin: 0 }}>
            {d.prospect.city} &nbsp;·&nbsp; {d.prospect.services}
          </p>
        </header>

        {/* ── Site issues callout ── */}
        <section style={{ background: C.amberSoft, border: `1px solid rgba(245,166,35,0.22)`, borderRadius: "14px", padding: "28px 28px 24px", marginBottom: "56px" }}>
          <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.amber, marginBottom: "12px" }}>
            Site Issues — Small Details, Real Cost
          </div>
          <h2 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.025em", color: "#fde68a", margin: "0 0 20px", lineHeight: 1.3 }}>
            Your site works. It&apos;s just quietly losing you customers.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {d.prospect.websiteIssues.map((issue, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "8px", alignItems: "start" }}>
                <span style={{ fontSize: "11px", color: C.amber, opacity: 0.7, paddingTop: "2px", fontWeight: 600 }}>{i + 1}.</span>
                <p style={{ fontSize: "13px", color: "rgba(253,230,138,0.7)", lineHeight: 1.6, margin: 0 }}>{issue}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── The number that matters ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>Google Reviews — You vs. Your Top Competitor</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "8px", alignItems: "center" }}>
            <div style={{ background: C.redSoft, border: `1px solid ${C.redBorder}`, borderRadius: "12px", padding: "28px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(52px, 12vw, 72px)", fontWeight: 700, letterSpacing: "-0.05em", color: C.red, lineHeight: 1, marginBottom: "10px", fontFamily: "'Poppins', sans-serif" }}>
                {d.prospect.googleReviews}
              </div>
              <p style={{ fontSize: "11px", color: C.red, fontWeight: 600, margin: 0, opacity: 0.8 }}>{d.prospect.name}</p>
            </div>
            <span style={{ fontSize: "11px", fontWeight: 600, color: C.text3, letterSpacing: "0.08em" }}>VS</span>
            <div style={{ background: C.greenSoft, border: `1px solid rgba(62,207,142,0.2)`, borderRadius: "12px", padding: "28px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(52px, 12vw, 72px)", fontWeight: 700, letterSpacing: "-0.05em", color: C.green, lineHeight: 1, marginBottom: "10px", fontFamily: "'Poppins', sans-serif" }}>
                {d.competitor.googleReviews}
              </div>
              <p style={{ fontSize: "11px", color: C.green, fontWeight: 600, margin: 0, opacity: 0.8 }}>{d.competitor.name}</p>
            </div>
          </div>
          <p style={{ fontSize: "13px", color: C.text3, textAlign: "center", marginTop: "16px", lineHeight: 1.5 }}>
            {d.prospect.yearsInBusiness} years in Macomb and Oakland County — 300+ projects, real reviews on Facebook —
            but none of it shows up on Google yet. Reviews haven&apos;t been collected where customers look first.
          </p>
        </section>

        {/* ── Market table ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>Your market — Macomb & Oakland County remodeling</Label>
          <p style={{ fontSize: "13px", color: C.text3, lineHeight: 1.65, marginBottom: "16px" }}>
            Premier Renovations and others have a head start on Google. The good news: a GBP at your address is free,
            and Shelby Township and north Macomb are still under-served in search for kitchen and bathroom remodels.
          </p>

          <div style={{ border: `1px solid ${C.border}`, borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.8fr 0.6fr 1fr", gap: "12px", padding: "11px 20px", background: C.surface, borderBottom: `1px solid ${C.borderStrong}` }}>
              {["Company", "Reviews", "Rating", "GBP"].map((h) => (
                <span key={h} style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.text3 }}>{h}</span>
              ))}
            </div>

            {d.market.map((co, i) => {
              const isYou = co.name === d.prospect.name;
              const reviewColor = isYou ? C.red : C.text2;
              return (
                <div
                  key={co.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 0.8fr 0.6fr 1fr",
                    gap: "12px",
                    padding: "14px 20px",
                    borderBottom: i < d.market.length - 1 ? `1px solid ${C.border}` : "none",
                    alignItems: "start",
                    background: isYou ? C.redSoft : "transparent",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: isYou ? 600 : 400, color: isYou ? C.text1 : C.text2, margin: "0 0 2px", lineHeight: 1.3 }}>
                      {co.name}
                    </p>
                    <p style={{ fontSize: "11px", color: C.text3, margin: 0 }}>{co.location}</p>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: reviewColor, letterSpacing: "-0.02em" }}>
                    {co.googleReviews === 0 ? "0" : co.googleReviews.toLocaleString()}
                  </span>
                  <span style={{ fontSize: "13px", color: co.googleRating && co.googleRating >= 4.5 ? C.green : co.googleRating && co.googleRating >= 4.0 ? C.amber : co.googleRating ? C.red : C.text3 }}>
                    {co.googleRating ? `${co.googleRating}` : "—"}
                  </span>
                  <span style={{ fontSize: "12px", color: co.gbp ? C.green : C.red, fontWeight: 500 }}>
                    {co.gbp ? "Claimed" : "None"}
                    {co.note && (
                      <span style={{ display: "block", fontSize: "11px", color: C.text3, fontWeight: 400, marginTop: "2px", lineHeight: 1.4 }}>
                        {co.note}
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <Divider />

        {/* ── What's working ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>What You&apos;ve Built</Label>
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "14px", overflow: "hidden" }}>
            {[
              { label: "In business since", value: `${d.prospect.founded} — ${d.prospect.yearsInBusiness} years in Metro Detroit` },
              { label: "Website", value: `${d.prospect.website} — live with services and contact form` },
              { label: "Facebook", value: `Active page · ${d.prospect.facebookReviews} reviews · ${d.prospect.facebookRating} stars` },
              { label: "Services", value: d.prospect.services },
              { label: "Location", value: "Shelby Township — Macomb & Oakland County. Washington Township, Romeo, Clinton Township, and Troy are all in your service area." },
            ].map((item, i, arr) => (
              <div key={item.label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "16px", padding: "16px 20px", borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : "none", alignItems: "start" }}>
                <span style={{ fontSize: "12px", color: C.text3, lineHeight: 1.5, paddingTop: "1px" }}>{item.label}</span>
                <span style={{ fontSize: "13px", color: C.text2, lineHeight: 1.6 }}>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Head-to-head ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>Head-to-Head · {d.prospect.name} vs. {d.competitor.name}</Label>
          <p style={{ fontSize: "13px", color: C.text3, lineHeight: 1.65, marginBottom: "20px" }}>
            {d.competitor.name} ({d.competitor.city}) has a strong Google presence — {d.competitor.googleReviews} reviews,
            full GBP, and online booking. Same metro, same type of customer. Here&apos;s how you compare.
          </p>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: "16px", padding: "12px 20px", background: C.surface, borderBottom: `1px solid ${C.borderStrong}` }}>
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.text3 }}>Category</span>
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.blue }}>{d.prospect.name}</span>
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.text3 }}>{d.competitor.name}</span>
            </div>
            <Row category="Google Business Profile" you="Not set up" competitor="Claimed · fully built" result="lose" />
            <Row category="Google Reviews" you={`${d.prospect.googleReviews} reviews`} competitor={`${d.competitor.googleReviews} reviews · ${d.competitor.googleRating} stars`} result="lose" />
            <Row category="Google Search visibility" you="No results for core services" competitor="Maps pack for kitchen & bath" result="lose" />
            <Row category="Online Booking" you="Contact form only" competitor="Live via GBP" result="lose" />
            <Row category="Working website" you="Live (minor issues)" competitor="Professional site" result="neutral" />
            <Row category="Years in business" you={`${d.prospect.yearsInBusiness} years · since ${d.prospect.founded}`} competitor="Established" result="neutral" />
            <Row category="Geographic position" you="Shelby Township — north Macomb" competitor="Sterling Heights — central Macomb" result="win" />
          </div>
        </section>

        <Divider />

        {/* ── Why the listings gap matters ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>Why the listings gap matters</Label>
          <p style={{ fontSize: "15px", color: C.text2, lineHeight: 1.75, margin: "0 0 16px" }}>
            Google Business Profiles are free and show up above everything else — but in 2026 customers also check Apple Maps, BBB, Angi, and Yellow Pages.
          </p>
          <p style={{ fontSize: "15px", color: C.text2, lineHeight: 1.75, margin: "0 0 16px" }}>
            When those listings are missing or incomplete, you become invisible even if you have real reviews and a good site.
          </p>
          <p style={{ fontSize: "15px", color: C.text2, lineHeight: 1.75, margin: "0 0 16px" }}>
            AI tools and map platforms pull business data from multiple sources — if your information isn&apos;t consistent everywhere, you lose visibility automatically.
          </p>
          <p style={{ fontSize: "15px", color: C.text2, lineHeight: 1.75, margin: 0 }}>
            The good news? Every single one of these is free to claim and optimize. It just takes a little time and a few verification steps (email, phone, or postcard).
          </p>
        </section>

        {/* ── 3 opportunities ── */}
        <section style={{ marginBottom: "64px" }}>
          <Label>Three moves that change everything</Label>
          {d.opportunities.map((opp, i) => (
            <Opportunity key={i} n={i + 1} title={opp.title} body={opp.body} urgent={opp.urgent} />
          ))}
        </section>

        {/* ── CTA ── */}
        <div style={{ background: C.greenSoft, border: `1px solid rgba(62,207,142,0.22)`, borderRadius: "18px", padding: "36px 32px" }}>
          <p style={{ fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 700, letterSpacing: "-0.03em", color: C.text1, lineHeight: 1.25, margin: "0 0 12px", fontFamily: "'Poppins', -apple-system, sans-serif" }}>
            All of this is fixable.
          </p>
          <p style={{ fontSize: "14px", color: C.text3, lineHeight: 1.7, margin: 0, maxWidth: "420px" }}>
            This is example copy. For a real audit we&apos;d plug in your actual data and send you
            a link like this. Request a free audit on the main site when you&apos;re ready.
          </p>
        </div>

      </div>
    </div>
  );
}

export default function ExampleAuditPage() {
  return <ExampleAuditContent />;
}
