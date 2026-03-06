export const metadata = {
  title: "Ben's Auto Spa — Local Lead Leak Audit",
  robots: "noindex, nofollow",
};

// Use CSS variables so theme (light/dark) applies
const C = {
  bg: "var(--gg-bg)",
  surface: "var(--gg-surface)",
  surfaceHover: "var(--gg-surface-hover)",
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

// ── Shared primitives ──────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: C.text3,
        marginBottom: "20px",
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: "1px",
        background: C.border,
        margin: "56px 0",
      }}
    />
  );
}

// ── Comparison table row ───────────────────────────────────────
interface RowProps {
  category: string;
  ben: string;
  diamond: string;
  result: "win" | "lose" | "neutral";
}

function Row({ category, ben, diamond, result }: RowProps) {
  const benColor =
    result === "win" ? C.green : result === "lose" ? C.red : C.amber;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr 1fr",
        gap: "16px",
        padding: "14px 20px",
        borderBottom: `1px solid ${C.border}`,
        alignItems: "start",
      }}
    >
      <span style={{ fontSize: "12px", color: C.text3, lineHeight: 1.5 }}>
        {category}
      </span>
      <span
        style={{
          fontSize: "13px",
          color: benColor,
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
        {ben}
      </span>
      <span style={{ fontSize: "13px", color: C.text2, lineHeight: 1.5 }}>
        {diamond}
      </span>
    </div>
  );
}

// ── Opportunity card ───────────────────────────────────────────
interface OpportunityProps {
  n: number;
  title: string;
  body: string;
  urgent?: boolean;
}

function Opportunity({ n, title, body, urgent }: OpportunityProps) {
  return (
    <div
      style={{
        padding: "28px 28px 28px 0",
        borderBottom: `1px solid ${C.border}`,
        display: "grid",
        gridTemplateColumns: "52px 1fr",
        gap: "8px",
        alignItems: "start",
      }}
    >
      {/* Number */}
      <span
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: urgent ? C.red : C.blue,
          letterSpacing: "-0.01em",
          paddingTop: "2px",
        }}
      >
        0{n}
      </span>

      {/* Content */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: C.text1,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {title}
          </h3>
          {urgent && (
            <span
              style={{
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.red,
                background: C.redSoft,
                border: `1px solid ${C.redBorder}`,
                padding: "2px 7px",
                borderRadius: "4px",
              }}
            >
              Active now
            </span>
          )}
        </div>
        <p
          style={{
            fontSize: "14px",
            color: C.text2,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────
import { notFound } from "next/navigation";
import AuditIntroVideo from "@/app/components/ggbuilds/AuditIntroVideo";

function ExclusiveNote({ businessName }: { businessName: string }) {
  return (
    <p
      style={{
        fontSize: "12px",
        color: C.text3,
        marginBottom: "24px",
        fontStyle: "italic",
      }}
    >
      Prepared exclusively for {businessName}. Please do not share publicly.
    </p>
  );
}

export function BenAuditContent(props: { exclusiveFor?: { businessName: string } }) {
  return (
    <div
      style={{
        background: C.bg,
        color: C.text1,
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 24px 100px" }}>
        {props.exclusiveFor && <ExclusiveNote businessName={props.exclusiveFor.businessName} />}
        <AuditIntroVideo />

        {/* ── Header ── */}
        <header style={{ marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: C.blue,
              background: C.blueSoft,
              padding: "5px 10px",
              borderRadius: "6px",
              marginBottom: "24px",
            }}
          >
            Online Presence Breakdown
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              color: C.text1,
              margin: "0 0 10px",
              fontFamily: "'Poppins', -apple-system, sans-serif",
              lineHeight: 1.15,
            }}
          >
            Ben&apos;s Auto Spa
          </h1>

          <p style={{ fontSize: "14px", color: C.text3, margin: 0 }}>
            Romeo, MI &nbsp;·&nbsp; Window Tinting · PPF · Paint Correction · Ceramic Coating
          </p>

          <p
            style={{
              fontSize: "15px",
              color: C.text2,
              lineHeight: 1.75,
              margin: "24px 0 0",
              maxWidth: "560px",
            }}
          >
            Your GBP is getting sorted. Your Instagram and TikTok are active. Your
            Facebook page has 21 five star reviews. The foundation is genuinely
            strong. The one thing working against you right now is that anyone
            who looks you up hits a broken website. With the shop opening in
            three weeks, here is what the full picture looks like and what to do
            about it.
          </p>
        </header>

        {/* ── What's working ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>What You&apos;ve Built</Label>

          <div
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            {[
              {
                label: "Facebook · Bens Auto Spa LLC",
                value: "21 reviews · 5.0 stars",
              },
              {
                label: "Yelp",
                value: "5-star review · posted a full-car tint walkthrough 2 days ago",
              },
              {
                label: "Instagram & TikTok",
                value: "@bensautospa_ · active, consistent content",
              },
              {
                label: "YouTube",
                value: "@bensautospa",
              },
              {
                label: "Services",
                value: "Window Tinting · PPF · Paint Correction · Ceramic Coating",
              },
              {
                label: "Location",
                value:
                  "Romeo — north end of Macomb County. Washington Township, Ray Township, and Armada are right in your backyard.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "16px",
                  padding: "16px 20px",
                  borderBottom:
                    i < arr.length - 1 ? `1px solid ${C.border}` : "none",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: C.text3,
                    lineHeight: 1.5,
                    paddingTop: "1px",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{ fontSize: "13px", color: C.text2, lineHeight: 1.6 }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── The number that matters ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>Google Reviews — You vs. Your Top Competitor</Label>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {/* Ben */}
            <div
              style={{
                background: C.redSoft,
                border: `1px solid ${C.redBorder}`,
                borderRadius: "12px",
                padding: "28px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(52px, 12vw, 72px)",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: C.red,
                  lineHeight: 1,
                  marginBottom: "10px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                0
              </div>
              <p style={{ fontSize: "11px", color: C.red, fontWeight: 600, margin: 0, opacity: 0.8 }}>
                Ben&apos;s Auto Spa
              </p>
            </div>

            {/* VS */}
            <span style={{ fontSize: "11px", fontWeight: 600, color: C.text3, letterSpacing: "0.08em" }}>
              VS
            </span>

            {/* Diamond */}
            <div
              style={{
                background: C.greenSoft,
                border: `1px solid rgba(62,207,142,0.2)`,
                borderRadius: "12px",
                padding: "28px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(52px, 12vw, 72px)",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: C.green,
                  lineHeight: 1,
                  marginBottom: "10px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                124
              </div>
              <p style={{ fontSize: "11px", color: C.green, fontWeight: 600, margin: 0, opacity: 0.8 }}>
                Diamond Detailz
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: "13px",
              color: C.text3,
              textAlign: "center",
              marginTop: "16px",
              lineHeight: 1.5,
            }}
          >
            97% of consumers read reviews before booking a service. For a
            $500–$2,500 ceramic coat or PPF job, Google is the first place they
            check. Diamond Detailz has 124 of them. You have zero — not because
            your work isn&apos;t there, but because your GBP hasn&apos;t been live
            to collect them yet. That changes once your profile is verified. Your
            21 Facebook reviewers are ready to be your first Google reviews the
            moment you ask.
          </p>
        </section>

        {/* ── Critical alert: broken website ── */}
        <section
          className="audit-critical-box"
          style={{
            background: C.redSoft,
            border: `1px solid ${C.redBorder}`,
            borderRadius: "14px",
            padding: "28px 28px 24px",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: C.red,
              marginBottom: "12px",
            }}
          >
            Critical — Action Required
          </div>

          <h2
            style={{
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: C.red,
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            Your website is broken right now.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "14px", color: C.red, lineHeight: 1.7, margin: 0 }}>
              On <strong style={{ color: C.red }}>Chrome</strong> — anyone visiting
              bensautospa.com gets redirected to a random auto racing article. Your business
              is nowhere to be seen.
            </p>
            <p style={{ fontSize: "14px", color: C.red, lineHeight: 1.7, margin: 0 }}>
              On <strong style={{ color: C.red }}>Safari / iPhone</strong> — blank white page.
            </p>
            <p
              style={{
                fontSize: "12px",
                color: C.red,
                lineHeight: 1.6,
                margin: 0,
                paddingTop: "4px",
                borderTop: `1px solid ${C.redBorder}`,
              }}
            >
              This happens when a domain&apos;s hosting lapses or gets caught in a parking
              redirect network. Every referral — from Instagram, Facebook, Yelp, or word of mouth
              — has hit a dead end. Most businesses never find out.
            </p>
          </div>
        </section>

        {/* ── Head-to-head table ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>Head-to-Head · Ben&apos;s Auto Spa vs. Diamond Detailz</Label>
          <p
            style={{
              fontSize: "13px",
              color: C.text3,
              lineHeight: 1.65,
              marginBottom: "20px",
            }}
          >
            Diamond Detailz (Shelby Township) — same services, same county. Their
            website is under construction right now, but their Google Business Profile
            is doing all the work.
          </p>

          <div
            style={{
              border: `1px solid ${C.border}`,
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 1fr",
                gap: "16px",
                padding: "12px 20px",
                background: C.surface,
                borderBottom: `1px solid ${C.borderStrong}`,
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.text3 }}>
                Category
              </span>
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.blue }}>
                Ben&apos;s Auto Spa
              </span>
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.text3 }}>
                Diamond Detailz
              </span>
            </div>

            <Row category="Google Business Profile" ben="Not claimed" diamond="Claimed · fully built" result="lose" />
            <Row category="Google Reviews" ben="0 reviews" diamond="124 reviews · 5.0" result="lose" />
            <Row category="Online Booking" ben="None" diamond="Live via GBP" result="lose" />
            <Row category="Google Search visibility" ben="No results for any service" diamond="Maps pack for paint correction" result="lose" />
            <Row category="Facebook Reviews" ben="21 reviews · 5.0" diamond="13 reviews" result="win" />
            <Row category="Website status" ben="Broken — redirects to spam" diamond="Under construction" result="neutral" />
            <Row
              category="Geographic position"
              ben="Romeo — north Macomb"
              diamond="Shelby Township — central"
              result="win"
            />
          </div>
        </section>

        {/* ── 3 opportunities ── */}
        <section style={{ marginBottom: "64px" }}>
          <Label>Three moves that change everything</Label>

          <Opportunity
            n={1}
            title="Fix the website — it's actively sending people away"
            body="97% of consumers read reviews before booking a service, and 41% check them every single time. You have active Instagram and TikTok accounts, a Facebook page with 21 five star reviews, and a new shop opening in three weeks. People are already looking you up. Every single one of them is hitting a blank page or getting redirected to an auto racing article. All that content you're posting has nowhere to land. A working site built to convert turns the audience you've already built into actual booked jobs."
            urgent
          />
          <Opportunity
            n={2}
            title="Your GBP is in progress — make sure it has somewhere to send people."
            body="Once your profile is verified and live, Google starts sending people directly to your website. Right now that means a blank page or an auto racing article. The GBP work you're already investing in only pays off if there's a working site ready to receive it. Your existing Facebook reviewers are the fastest path to getting Google reviews on the board once it's live."
          />
          <Opportunity
            n={3}
            title="Own north Macomb before someone else does"
            body="The major shops (Diamond Detailz and Huntz Auto Works) are clustered around Shelby Township. A site and GBP built specifically for Romeo, Washington Township, and the surrounding area gives you a clear geographic edge in searches coming from the north end of the county. The audience is there. There's no online destination built for them yet."
          />
        </section>

        {/* ── CTA ── */}
        <div
          style={{
            background: C.greenSoft,
            border: `1px solid rgba(62,207,142,0.22)`,
            borderRadius: "18px",
            padding: "36px 32px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(18px, 4vw, 22px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: C.text1,
              lineHeight: 1.25,
              margin: "0 0 12px",
              fontFamily: "'Poppins', -apple-system, sans-serif",
            }}
          >
            All of this is fixable.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: C.text3,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "420px",
            }}
          >
            Good work, active content, real reviews, a physical shop, and a GBP
            on the way. You are closer than you think. If you want help getting
            the website sorted before opening day, send me a message and we can
            talk through it.
          </p>
        </div>

      </div>
    </div>
  );
}

export default function BenAuditPage() {
  notFound();
}
