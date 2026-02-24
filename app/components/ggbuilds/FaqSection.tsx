"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Who is this for?",
    a: "Local service businesses \u2014 detailers, landscapers, remodelers, cleaners, mechanics. If you're based in one area and rely on local customers, this is for you.",
  },
  {
    q: "What do we need to provide?",
    a: "Your logo (or we can create a simple one), a few photos of your work, and a list of your services. That's it. We'll handle the rest.",
  },
  {
    q: "What does 'hosted' mean?",
    a: "Your site lives on our hosting infrastructure. It loads fast, stays online, and we can push updates whenever you need them. $75/month covers all of it.",
  },
  {
    q: "What happens if we stop paying?",
    a: "We hand you the full codebase and walk you through deploying it yourself for free on Vercel. No hard feelings.",
  },
  {
    q: "Do we own the site?",
    a: "Yes. Once you pay the build fee, the code is yours. The monthly fee is just for hosting and maintenance \u2014 not a subscription that locks you in.",
  },
  {
    q: "What if we don't have a logo or photos?",
    a: "We'll figure it out. We can pull together a clean, minimal logo and source free professional photos for your industry. It's not ideal but it gets you live fast.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "var(--gg-bg-section)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--gg-text1)",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Common questions
          </h2>
        </div>

        <div
          style={{
            background: "var(--gg-card-bg)",
            border: "1px solid var(--gg-border-strong)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: i < faqs.length - 1 ? "1px solid var(--gg-border)" : "none",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    background: isOpen ? "rgba(255,255,255,0.02)" : "transparent",
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
                      fontSize: "14px",
                      fontWeight: 600,
                      color: isOpen ? "var(--gg-text1)" : "var(--gg-text2)",
                      transition: "color 0.15s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "8px",
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
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    >
                      <path
                        d="M2 4l4 4 4-4"
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
                    maxHeight: isOpen ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--gg-text2)",
                      lineHeight: 1.75,
                      margin: 0,
                      padding: "0 24px 20px",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
