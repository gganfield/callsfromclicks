"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, suffix: string, prefix: string, duration = 2600) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * end);
            setDisplay(`${prefix}${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix, prefix, duration]);

  return { ref, display };
}

const cards = [
  {
    end: 30,
    prefix: "",
    suffix: " sec",
    statLabel: "is how long you have before they decide whether to trust you",
    headline: "Your site loses them before they call.",
    body: "If your site is slow, confusing, or doesn't load right on mobile, they hit back and call your competitor. That's a job you'll never know you lost.",
  },
  {
    end: 97,
    prefix: "",
    suffix: "%",
    statLabel: "of consumers read reviews for local businesses*",
    headline: "Customers compare you before they ever call.",
    body: "If your listings, reviews, and public info aren't strong and consistent, the business that looks more credible wins.",
  },
  {
    end: 45,
    prefix: "",
    suffix: "%",
    statLabel: "of consumers now use AI tools for local recommendations*",
    headline: "And AI doesn't just search Google.",
    body: "It pulls business information from websites, reviews, maps, and multiple platforms. If your presence isn't accurate and consistent everywhere, you lose visibility where customers are searching.",
  },
];

function ProblemCard({ card }: { card: (typeof cards)[number] }) {
  const counter = useCountUp(card.end, card.suffix, card.prefix);
  const isZero = card.end === 0;
  const [glow, setGlow] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isZero) return;
    const el = glowRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setGlow(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isZero]);

  return (
    <div
      ref={(node) => {
        (counter.ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        (glowRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      className="gg-card-problem"
      style={{
        background: "var(--gg-card-bg)",
        border: "1px solid var(--gg-border)",
        borderRadius: "16px",
        padding: "28px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(36px, 5vw, 48px)",
            fontWeight: 800,
            color: "var(--gg-red)",
            letterSpacing: "-0.04em",
            margin: "0 0 4px",
            lineHeight: 1,
            transition: isZero ? "text-shadow 0.6s ease" : undefined,
            textShadow: isZero && glow ? "0 0 30px rgba(242,100,100,0.5)" : undefined,
          }}
        >
          {counter.display}
        </p>
        <p style={{ fontSize: "12px", color: "var(--gg-text2)", margin: 0, lineHeight: 1.5 }}>
          {card.statLabel}
        </p>
      </div>

      <div
        style={{
          width: "32px",
          height: "1.5px",
          background: "var(--gg-red)",
          opacity: 0.4,
          marginBottom: "20px",
          borderRadius: "2px",
        }}
      />

      <h3
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "var(--gg-text1)",
          margin: "0 0 10px",
          letterSpacing: "-0.02em",
        }}
      >
        {card.headline}
      </h3>
      <p style={{ fontSize: "13px", color: "var(--gg-text2)", lineHeight: 1.7, margin: 0 }}>
        {card.body}
      </p>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section
      style={{
        background: "var(--gg-bg)",
        padding: "100px 24px",
        borderTop: "1px solid var(--gg-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gg-red)",
              marginBottom: "14px",
            }}
          >
            The Problem
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--gg-text1)",
              lineHeight: 1.15,
              margin: "0 0 16px",
            }}
          >
            Most local service businesses are losing jobs every day.
          </h2>
          <p style={{ fontSize: "15px", color: "var(--gg-text2)", lineHeight: 1.7, margin: 0 }}>
            It&apos;s not your work.
            <br />
            It&apos;s what people see before they ever call you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
          className="gg-problem-cards"
        >
          {cards.map((c, i) => (
            <ProblemCard key={i} card={c} />
          ))}
          <div className="gg-problem-source-cell" style={{ gridColumn: "2", textAlign: "center" }}>
            <p style={{ fontSize: "10px", color: "var(--gg-text3)", margin: "8px 0 0", lineHeight: 1.4 }}>
              *Source:{" "}
              <a
                href="https://www.brightlocal.com/research/local-consumer-review-survey/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gg-text3)", textDecoration: "underline" }}
              >
                BrightLocal Local Consumer Review Survey
              </a>
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .gg-problem-cards { grid-template-columns: 1fr !important; }
          .gg-problem-cards .gg-problem-source-cell { grid-column: 1 !important; }
        }
      `}</style>
    </section>
  );
}
