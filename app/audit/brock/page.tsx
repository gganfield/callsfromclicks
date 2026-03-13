import { notFound } from "next/navigation";
import { pitchData as d } from "./pitch.config";
import AuditIntroVideo from "@/app/components/ggbuilds/AuditIntroVideo";

export const metadata = {
  title: "Horne Residential Services LLC — Local Lead Leak Audit",
  robots: "noindex, nofollow",
};

const C = {
  bg: "var(--gg-bg)",
  surface: "var(--gg-surface)",
  border: "var(--gg-border)",
  borderStrong: "var(--gg-border-strong)",
  text1: "var(--gg-text1)",
  text2: "var(--gg-text2)",
  text3: "var(--gg-text3)",
  blue: "var(--gg-accent)",
  blueSoft: "var(--gg-accent-soft)",
  green: "var(--gg-green)",
  greenSoft: "var(--gg-green-soft)",
  red: "var(--gg-red)",
  redSoft: "var(--gg-red-soft)",
  redBorder: "rgba(242,100,100,0.22)",
  amber: "var(--gg-amber)",
  amberSoft: "var(--gg-amber-soft)",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.text3, marginBottom: "20px" }}>
      {children}
    </p>
  );
}

interface OpportunityProps {
  n: number;
  title: string;
  body: string;
  urgent?: boolean;
  showUrgentTag?: boolean;
}

function Opportunity({ n, title, body, urgent, showUrgentTag = true }: OpportunityProps) {
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
          {urgent && showUrgentTag && (
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

function ExclusiveNote({ businessName }: { businessName: string }) {
  return (
    <p style={{ fontSize: "12px", color: C.text3, marginBottom: "24px", fontStyle: "italic" }}>
      Prepared exclusively for {businessName}. Please do not share publicly.
    </p>
  );
}

const WHAT_YOUVE_BUILT = [
  { label: "Google Business Profile", value: "Claimed · 5.0 stars · 2 reviews" },
  { label: "Facebook · Horne Residential Services LLC", value: "171 followers · active · real project photos" },
  { label: "Facebook Reviews", value: "0 — not yet rated" },
  { label: "Website", value: "None" },
  { label: "Yelp", value: "Not found" },
  { label: "Angi / HomeAdvisor", value: "Not found" },
  { label: "Apple Maps", value: "Not confirmed" },
  { label: "Yellow Pages", value: "Not found" },
  { label: "Services", value: d.prospect.services },
  { label: "Credibility", value: d.prospect.credibility },
];

export function BrockAuditContent(props: { exclusiveFor?: { businessName: string } }) {
  return (
    <div style={{ background: C.bg, color: C.text1, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", WebkitFontSmoothing: "antialiased", minHeight: "100vh" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 24px 100px" }}>
        {props.exclusiveFor && <ExclusiveNote businessName={props.exclusiveFor.businessName} />}
        <AuditIntroVideo />

        <header style={{ marginBottom: "64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.blue, background: C.blueSoft, padding: "5px 10px", borderRadius: "6px", marginBottom: "24px" }}>
            Online Presence Breakdown
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, letterSpacing: "-0.035em", color: C.text1, margin: "0 0 10px", fontFamily: "'Poppins', -apple-system, sans-serif", lineHeight: 1.15 }}>
            {d.prospect.name}
          </h1>
          <p style={{ fontSize: "12px", color: C.text3, margin: 0, letterSpacing: "0.02em" }}>
            {d.prospect.city} &nbsp;·&nbsp; Serving Macomb and Oakland Counties
          </p>
          <p style={{ fontSize: "14px", color: C.text2, margin: "6px 0 0", lineHeight: 1.5 }}>
            Kitchen Remodeling · Bathroom Renovations · Basement Finishing · Flooring · Tile · Drywall · Painting · Decks · Pressure Washing · Concrete Sealing
          </p>
        </header>

        <p style={{ fontSize: "15px", color: C.text2, lineHeight: 1.75, margin: "0 0 40px", maxWidth: "560px" }}>
          Brock, you&apos;ve built something real here. Licensed, insured, a solid service mix, actual project photos going up on Facebook, and a GBP already in the ground. For a business that&apos;s still early, the foundation is genuinely good. The thing working against you right now is that the online presence around that work is thin enough that most homeowners doing their homework won&apos;t feel confident pulling the trigger before they&apos;ve moved on. Here&apos;s the full picture.
        </p>

        <section style={{ marginBottom: "56px" }}>
          <Label>What You&apos;ve Built</Label>
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "14px", overflow: "hidden" }}>
            {WHAT_YOUVE_BUILT.map((item, i, arr) => (
              <div key={item.label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "16px", padding: "16px 20px", borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : "none", alignItems: "start" }}>
                <span style={{ fontSize: "12px", color: C.text3, lineHeight: 1.5, paddingTop: "1px" }}>{item.label}</span>
                <span style={{ fontSize: "13px", color: C.text2, lineHeight: 1.6 }}>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <Label>Google Reviews — You vs. The Competition</Label>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr 0.5fr 0.7fr 0.8fr", gap: "12px", padding: "11px 20px", background: C.surface, borderBottom: `1px solid ${C.borderStrong}` }}>
              {["Company", "Reviews", "Rating", "GBP", "Website"].map((h) => (
                <span key={h} style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.text3 }}>{h}</span>
              ))}
            </div>
            {d.competitionTable.map((row, i) => (
              <div
                key={row.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.6fr 0.5fr 0.7fr 0.8fr",
                  gap: "12px",
                  padding: "14px 20px",
                  borderBottom: i < d.competitionTable.length - 1 ? `1px solid ${C.border}` : "none",
                  alignItems: "start",
                  background: row.isYou ? C.redSoft : "transparent",
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: row.isYou ? 600 : 400, color: row.isYou ? C.text1 : C.text2 }}>{row.name}</span>
                <span style={{ fontSize: "13px", color: row.isYou ? C.red : C.text2, fontWeight: row.isYou ? 600 : 400 }}>{row.reviews}</span>
                <span style={{ fontSize: "13px", color: row.isYou ? C.green : row.rating >= 4.8 ? C.green : C.text2, fontWeight: row.isYou ? 600 : 400 }}>{row.rating}</span>
                <span style={{ fontSize: "12px", color: C.text2 }}>{row.gbp}</span>
                <span style={{ fontSize: "12px", color: row.website === "None" ? C.red : C.text2 }}>{row.website}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: C.text3, marginTop: "16px", lineHeight: 1.5 }}>
            Here&apos;s what stands out about that table: you have the best rating of the three. A perfect 5.0 is genuinely harder to hold as you accumulate reviews, and you have it right now. Yes, Michigan Construction Group also has a 5.0 rating. But they&apos;re running duplicate GBP listings (two separate profiles for the same business), and that&apos;s a red flag Google can penalize. Your single clean profile is a stronger foundation than what they have. The only thing separating you from the top is that they got their other pieces in place first. That gap closes fast once you start moving.
          </p>
        </section>

        <section style={{ background: C.redSoft, border: `1px solid ${C.redBorder}`, borderRadius: "14px", padding: "28px 28px 24px", marginBottom: "56px" }}>
          <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.red, marginBottom: "12px" }}>
            The Biggest Gap
          </div>
          <h2 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.025em", color: C.red, margin: "0 0 16px", lineHeight: 1.3 }}>
            No website means the GBP you built has nowhere to send people.
          </h2>
          <p style={{ fontSize: "14px", color: C.red, lineHeight: 1.7, margin: "0 0 12px" }}>
            When someone finds your Google listing (or gets your number from a friend), the first thing they do before calling is Google your business name. What they see is a 5-star listing with 2 reviews and a field that says &quot;Add website.&quot; No gallery, no services page, no quote form. For big jobs like kitchen or bathroom remodels, homeowners are doing real due diligence. The contractor who has a clean site with project photos and a way to request a quote wins that comparison before either of you picks up the phone.
          </p>
          <p style={{ fontSize: "14px", color: C.red, lineHeight: 1.7, margin: 0 }}>
            The photos are already there on Facebook — the complete flooring transformation from January, 1,000 sq ft of luxury vinyl plank, before and after. The problem is there&apos;s nowhere for any of it to land when someone goes looking.
          </p>
        </section>

        <section className="audit-amber-callout" style={{ background: C.amberSoft, border: `1px solid rgba(245,166,35,0.22)`, borderRadius: "14px", padding: "28px 28px 24px", marginBottom: "56px" }}>
          <div className="audit-amber-callout-label" style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gg-amber-callout-label)", marginBottom: "12px" }}>
            A Few Smaller Things Worth Tightening
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {d.websiteIssues.map((issue, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "8px", alignItems: "start" }}>
                <span className="audit-amber-callout-num" style={{ fontSize: "11px", color: "var(--gg-amber-callout-num)", opacity: 0.9, paddingTop: "2px", fontWeight: 600 }}>{i + 1}.</span>
                <p className="audit-amber-callout-body" style={{ fontSize: "13px", color: "var(--gg-amber-callout-body)", lineHeight: 1.6, margin: 0 }}>{issue}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "64px" }}>
          <Label>Three Moves That Change Everything</Label>
          {d.opportunities.map((opp, i) => (
            <Opportunity key={i} n={i + 1} title={opp.title} body={opp.body} urgent={opp.urgent} showUrgentTag={opp.showUrgentTag} />
          ))}
        </section>

        <div style={{ background: C.greenSoft, border: `1px solid rgba(62,207,142,0.22)`, borderRadius: "18px", padding: "36px 32px" }}>
          <p style={{ fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 700, letterSpacing: "-0.03em", color: C.text1, lineHeight: 1.25, margin: "0 0 12px", fontFamily: "'Poppins', -apple-system, sans-serif" }}>
            You&apos;re closer than this looks.
          </p>
          <p style={{ fontSize: "14px", color: C.text3, lineHeight: 1.7, margin: 0, maxWidth: "420px" }}>
            Real work, real photos, a clean rating, licensed and insured, and a service list that covers what Oakland County homeowners actually need done. The gap between where you are and where the guys at the top of local search are is mostly just execution, building the foundation they built before you got here. Once that&apos;s in place, the work you&apos;re already doing starts compounding into leads you didn&apos;t have to chase.
          </p>
          <p style={{ fontSize: "14px", color: C.text3, lineHeight: 1.7, margin: "16px 0 0" }}>
            Happy to jump on a call and walk through what that looks like. Just let me know!
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BrockAuditPage() {
  notFound();
}
