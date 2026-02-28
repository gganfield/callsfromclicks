export const metadata = {
  title: "Ben's Auto Spa — Local Lead Leak Audit",
  robots: "noindex, nofollow",
};

// ── Tokens ────────────────────────────────────────────────────
const C = {
  bg: "#07070a",
  surface: "rgba(255,255,255,0.03)",
  surfaceHover: "rgba(255,255,255,0.055)",
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
import { AUDIT_BOOK_CALL_URL } from "@/app/config/audit";

function ExclusiveNote({ businessName }: { businessName: string }) {
  return (
    <p
      style={{
        fontSize: "12px",
        color: "rgba(255,255,255,0.4)",
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
        </header>

        {/* ── Critical alert: broken website ── */}
        <section
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
              color: "#fca5a5",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            Your website is broken right now.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "14px", color: "rgba(255,200,200,0.75)", lineHeight: 1.7, margin: 0 }}>
              On <strong style={{ color: "#fca5a5" }}>Chrome</strong> — anyone visiting
              bensautospa.com gets redirected to a random auto racing article. Your business
              is nowhere to be seen.
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,200,200,0.75)", lineHeight: 1.7, margin: 0 }}>
              On <strong style={{ color: "#fca5a5" }}>Safari / iPhone</strong> — blank white page.
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,150,150,0.45)",
                lineHeight: 1.6,
                margin: 0,
                paddingTop: "4px",
                borderTop: `1px solid rgba(242,100,100,0.15)`,
              }}
            >
              This happens when a domain&apos;s hosting lapses or gets caught in a parking
              redirect network. Every referral — from Instagram, Facebook, Yelp, or word of mouth
              — has hit a dead end. Most businesses never find out.
            </p>
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
            Google reviews are the primary signal customers use before spending
            $500–$2,500 on a ceramic coat. Diamond Detailz has 124 of them.
            You have zero — not because your work isn&apos;t there, but because
            Google has nothing to show for you yet.
          </p>
        </section>

        <Divider />

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

        <Divider />

        {/* ── What a GBP does ── */}
        <section style={{ marginBottom: "56px" }}>
          <Label>Why the GBP gap matters</Label>
          <p
            style={{
              fontSize: "15px",
              color: C.text2,
              lineHeight: 1.75,
              margin: "0 0 16px",
            }}
          >
            Google Business Profiles are{" "}
            <span style={{ color: C.text1, fontWeight: 600 }}>free to set up</span>{" "}
            and show up as a prominent block above all regular search results — photos,
            reviews, phone number, hours, and a booking button visible before anyone
            clicks anything.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: C.text2,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Right now, searching any of your services in Romeo returns zero results
            for you. That position is unclaimed and it&apos;s in your own city.
          </p>
        </section>

        {/* ── 3 opportunities ── */}
        <section style={{ marginBottom: "64px" }}>
          <Label>Three moves that change everything</Label>

          <Opportunity
            n={1}
            title="Fix the website — it's actively sending people away"
            body="Every person you've pointed to bensautospa.com has either gotten a blank page or a redirect to an auto racing article. All that consistent content you're posting on Instagram and TikTok has nowhere to land. A working site that Google can read turns your existing audience into actual booked jobs."
            urgent
          />
          <Opportunity
            n={2}
            title="Claim your Google Business Profile"
            body="Diamond Detailz has 124 Google reviews and a full GBP with photos and a live booking button. That's why they show up when someone types 'ceramic coating near me' and you don't. Claiming yours costs nothing. Your existing Facebook 5-star reviewers are the fastest path to getting on the board."
          />
          <Opportunity
            n={3}
            title="Own north Macomb before someone else does"
            body="The major shops — Diamond Detailz, K&D Auto Spa — are clustered around Shelby Township. A site and GBP built specifically for Romeo, Washington Township, and the surrounding area gives you a clear geographic edge in searches coming from the north end of the county. The audience is there. There's no online destination built for them yet."
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
            The foundation is there — good work, good reviews, active content.
            It just needs somewhere to live online. When you&apos;re ready to talk
            through it, pick a 15‑min slot below.
          </p>
        </div>

        {/* ── Book a call ── */}
        <div
          style={{
            marginTop: "32px",
            padding: "32px 36px",
            background: "transparent",
            borderTop: `1px solid ${C.border}`,
            textAlign: "center",
          }}
        >
          <a
            href={AUDIT_BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 32px",
              background: C.blue,
              color: "#fff",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              borderRadius: "10px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Pick a time
          </a>
        </div>

      </div>
    </div>
  );
}

export default function BenAuditPage() {
  notFound();
}
