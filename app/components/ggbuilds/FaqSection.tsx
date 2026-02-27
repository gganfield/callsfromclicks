"use client";
import { useState } from "react";
import Link from "next/link";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Who is this for?",
    a: "Local service businesses \u2014 detailers, landscapers, remodelers, cleaners, mechanics. If you're based in one area and rely on local customers, this is for you.",
  },
  {
    q: "What does the audit look like?",
    a: (
      <>
        It&apos;s a private page we send you with your top leaks, Google visibility snapshot, competitor comparison, and clear next steps.{" "}
        <Link href="/audit/example" style={{ color: "var(--gg-accent)", textDecoration: "underline" }}>
          Check the example audit
        </Link>{" "}
        to see the format.
      </>
    ),
  },
  {
    q: "What do we need to provide?",
    a: "Business name, phone/email, list of services, service area, logo (or permission for a clean text logo), and at least 5 photos (or permission for placeholders). That's it. We'll handle the rest.",
  },
  {
    q: "What does the 72-hour guarantee include?",
    a: "Our work: site live and listings submitted within 72 hours of receiving and confirming your assets. We don't control Google, carriers, or other platforms, so their verification and approval timelines aren't part of the guarantee. We're on the hook for completion and submission; they run on their own schedule.",
  },
  {
    q: "What does 'hosted' mean?",
    a: "Your site lives on our hosting infrastructure so you don't have to think about it. Our Ongoing Stability + Support includes hosting, free debugging, 60 minutes of batched updates per month, and one quarterly refresh. First 90 days are included with your build.",
  },
  {
    q: "What happens if we stop paying?",
    a: "You own the site. If you cancel the support plan, hosting and updates stop — which means the site goes offline until it's hosted again. We can provide the full codebase and offer transfer options if needed.",
  },
  {
    q: "What's not included?",
    a: "Paid ads management, ongoing SEO campaigns, complex integrations, and custom software builds. This is a fast, conversion-focused website — not a full marketing agency retainer.",
  },
  {
    q: "What if we don't have a logo or photos?",
    a: "Not a problem. We'll create a simple logo and use professional industry imagery so you can launch quickly. You can always refine branding later — getting live is the priority.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "var(--gg-bg)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient glow so the section doesn't feel flat */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(79,142,247,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header — left-aligned, same rhythm as Guarantee / Process */}
        <div style={{ maxWidth: "560px", marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gg-text3)",
              marginBottom: "14px",
            }}
          >
            Questions
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--gg-text1)",
              lineHeight: 1.15,
              margin: "0 0 14px",
            }}
          >
            Common questions
          </h2>
          <p style={{ fontSize: "15px", color: "var(--gg-text2)", lineHeight: 1.7, margin: 0 }}>
            The stuff people ask before they commit. If yours isn&apos;t here, the free audit is the fastest way to get a straight answer.
          </p>
        </div>

        {/* FAQ list — card per item so it feels like the rest of the site */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  background: "var(--gg-card-bg)",
                  border: `1px solid ${isOpen ? "var(--gg-accent-border)" : "var(--gg-border)"}`,
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  boxShadow: isOpen ? "0 0 0 1px var(--gg-accent-border), 0 8px 32px rgba(0,0,0,0.2)" : "none",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    textAlign: "left",
                    transition: "background 0.15s",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: isOpen ? "var(--gg-text1)" : "var(--gg-text2)",
                      transition: "color 0.15s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      background: isOpen ? "var(--gg-accent-soft)" : "var(--gg-surface)",
                      border: `1px solid ${isOpen ? "var(--gg-accent-border)" : "var(--gg-border)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    >
                      <path
                        d="M2 5l5 5 5-5"
                        stroke={isOpen ? "var(--gg-accent)" : "var(--gg-text3)"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <div
                    style={{
                      padding: "0 24px 22px",
                      borderTop: isOpen ? "1px solid var(--gg-border)" : "none",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--gg-text2)",
                        lineHeight: 1.75,
                        margin: "18px 0 0",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA line — ties FAQ into the next step */}
        <div
          style={{
            marginTop: "40px",
            padding: "24px 28px",
            background: "var(--gg-gradient-soft)",
            border: "1px solid var(--gg-accent-border)",
            borderRadius: "14px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "14px", color: "var(--gg-text2)", margin: 0, maxWidth: "480px" }}>
            Still have questions? Get your free audit and we&apos;ll answer everything before you commit.
          </p>
          <Link
            href="/audit"
            className="gg-btn-primary"
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#fff",
              background: "var(--gg-gradient)",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 0 24px rgba(79,142,247,0.2)",
            }}
          >
            Request Free Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
