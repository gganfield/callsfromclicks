import { pitchData as d } from "./pitch.config";
import AuditIntroVideo from "@/app/components/ggbuilds/AuditIntroVideo";

export const metadata = {
  title: "Big Dawgs Lawn & Landscape — Local Lead Leak Audit",
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

// ── Primitives ─────────────────────────────────────────────────
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
  zach: string;
  competitor: string;
  result: "win" | "lose" | "neutral";
}

function Row({ category, zach, competitor, result }: RowProps) {
  const zachColor = result === "win" ? C.green : result === "lose" ? C.red : C.amber;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: "16px", padding: "14px 20px", borderBottom: `1px solid ${C.border}`, alignItems: "start" }}>
      <span style={{ fontSize: "12px", color: C.text3, lineHeight: 1.5 }}>{category}</span>
      <span style={{ fontSize: "13px", color: zachColor, fontWeight: 500, lineHeight: 1.5 }}>{zach}</span>
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
        <p style={{ fontSize: "14px", color: C.text2, lineHeight: 1.7, margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────
export default function ZachSnapshot() {
  return (
    <div style={{ background: C.bg, color: C.text1, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", WebkitFontSmoothing: "antialiased", minHeight: "100vh" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 24px 100px" }}>

        <AuditIntroVideo />

        {/* ── Header ── */}
        <header style={{ marginBottom: "64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.blue, background: C.blueSoft, padding: "5px 10px", borderRadius: "6px", marginBottom: "24px" }}>
            Online Presence Breakdown
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
                0
              </div>
              <p style={{ fontSize: "11px", color: C.red, fontWeight: 600, margin: 0, opacity: 0.8 }}>Big Dawgs</p>
            </div>
            <span style={{ fontSize: "11px", fontWeight: 600, color: C.text3, letterSpacing: "0.08em" }}>VS</span>
            <div style={{ background: C.greenSoft, border: `1px solid rgba(62,207,142,0.2)`, borderRadius: "12px", padding: "28px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(52px, 12vw, 72px)", fontWeight: 700, letterSpacing: "-0.05em", color: C.green, lineHeight: 1, marginBottom: "10px", fontFamily: "'Poppins', sans-serif" }}>
                701
              </div>
              <p style={{ fontSize: "11px", color: C.green, fontWeight: 600, margin: 0, opacity: 0.8 }}>Big Lakes Lawncare</p>
            </div>
          </div>
          <p style={{ fontSize: "13px", color: C.text3, textAlign: "center", marginTop: "16px", lineHeight: 1.5 }}>
            {d.prospect.yearsInBusiness} years of real work, real clients, and real results —
            none of which shows up on Google yet. The reviews simply haven&apos;t been collected in a place
            that Google can see.
          </p>
          <p style={{ fontSize: "13px", color: C.text3, textAlign: "center", marginTop: "12px", lineHeight: 1.5 }}>
            Grant Property Service — your direct competitor in north Macomb — has 9 reviews and shows up
            in search. The first 10–20 are the hardest; after that, momentum builds.
          </p>
        </section>

        {/* ── Market table ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>Your market — Macomb County lawn care</Label>
          <p style={{ fontSize: "13px", color: C.text3, lineHeight: 1.65, marginBottom: "16px" }}>
            It&apos;s not just Big Lakes. Every established lawn care company in this market
            has a Google presence — including one with a 3.3-star rating that still shows up
            in search ahead of Big Dawgs, purely because it has reviews on record.
          </p>

          <div style={{ border: `1px solid ${C.border}`, borderRadius: "14px", overflow: "hidden" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.8fr 0.6fr 1fr", gap: "12px", padding: "11px 20px", background: C.surface, borderBottom: `1px solid ${C.borderStrong}` }}>
              {["Company", "Reviews", "Rating", "GBP"].map((h) => (
                <span key={h} style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.text3 }}>{h}</span>
              ))}
            </div>

            {d.market.map((co, i) => {
              const isYou = co.name === "Big Dawgs Lawn & Landscape";
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
              { label: "In business since", value: `${d.prospect.founded} — ${d.prospect.yearsInBusiness} years of real work and real clients` },
              { label: "Website", value: `bigdawgslandscape.com — live and functional with photos, services, and a contact form` },
              { label: "Facebook", value: `Active page · ${d.prospect.facebookReviews} review · ${d.prospect.facebookRating} stars` },
              { label: "Services", value: d.prospect.services },
              { label: "Credibility", value: "Fully insured · personal story · real testimonial from a named customer" },
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
          <Label>Head-to-Head · Big Dawgs vs. Big Lakes Lawncare</Label>
          <p style={{ fontSize: "13px", color: C.text3, lineHeight: 1.65, marginBottom: "20px" }}>
            Big Lakes Lawncare (Macomb, on Romeo Plank Rd) is the dominant lawn care company
            in this market — a fully indexed site, 701 Google reviews at 4.7 stars, and a GBP
            that shows up for every local search.
          </p>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: "16px", padding: "12px 20px", background: C.surface, borderBottom: `1px solid ${C.borderStrong}` }}>
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.text3 }}>Category</span>
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.blue }}>Big Dawgs</span>
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.text3 }}>Big Lakes</span>
            </div>
            <Row category="Google Business Profile" zach="Not set up" competitor="Claimed · fully built" result="lose" />
            <Row category="Google Reviews" zach="0 reviews" competitor="701 reviews · 4.7 stars" result="lose" />
            <Row category="Google Search visibility" zach="No results for any service" competitor="Maps pack for all services" result="lose" />
            <Row category="Online Booking / Quote" zach="Form (Wix)" competitor="Integrated quote system" result="neutral" />
            <Row category="Working website" zach="Live on Wix" competitor="Custom professional site" result="neutral" />
            <Row category="Years in business" zach="16 years · since 2009" competitor="Newer operation" result="win" />
            <Row category="Geographic position" zach="Romeo — north Macomb" competitor="Macomb — central" result="win" />
          </div>
        </section>

        <Divider />

        {/* ── Why GBP matters ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>Why the Google gap matters</Label>
          <p style={{ fontSize: "15px", color: C.text2, lineHeight: 1.75, margin: "0 0 16px" }}>
            Google Business Profiles are{" "}
            <span style={{ color: C.text1, fontWeight: 600 }}>free to set up</span>{" "}
            and show up as a prominent block above all regular search results — photos, reviews,
            phone number, hours, and directions, visible before anyone clicks anything.
          </p>
          <p style={{ fontSize: "15px", color: C.text2, lineHeight: 1.75, margin: 0 }}>
            Right now, searching any of your services in Romeo returns zero results for you.
            Big Lakes is collecting every one of those customers. That position is unclaimed
            at your address and it&apos;s free to take.
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
            The foundation is solid — 16 years of real work, happy customers, and a service
            area with room to own. Getting it visible online is the next step.
            Text me back when you&apos;ve had a chance to go through this.
          </p>
        </div>

      </div>
    </div>
  );
}
