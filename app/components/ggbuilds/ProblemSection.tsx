"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, suffix: string, prefix: string, duration = 1400) {
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
    statLabel: "is how long you have before a visitor leaves",
    headline: "Your site loses them before they call.",
    body: "If your site is slow, confusing, or doesn't load right on mobile \u2014 they hit back and call your competitor. That's a job you'll never know you lost.",
  },
  {
    end: 78,
    prefix: "",
    suffix: "%",
    statLabel: "of local searches lead to a purchase within 24 hours",
    headline: "You're invisible in the searches that matter.",
    body: "No Google Business Profile means no map pack presence. Your competitor with 40 reviews and an optimized GBP is getting those calls. You're not.",
  },
  {
    end: 0,
    prefix: "$",
    suffix: "",
    statLabel: "in return from a website nobody can find or use",
    headline: "An outdated site is worse than no site.",
    body: "When a prospect Googles you and finds a broken, slow, or embarrassing website \u2014 it actively costs you the job. They'd rather hire the guy with no online presence at all.",
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
        <p style={{ fontSize: "11px", color: "var(--gg-text3)", margin: 0 }}>
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
            Most local service businesses are leaking jobs online every single day.
          </h2>
          <p style={{ fontSize: "15px", color: "var(--gg-text2)", lineHeight: 1.7, margin: 0 }}>
            Not because their work is bad. Because their online presence doesn&apos;t match the quality of what they actually deliver.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {cards.map((c, i) => (
            <ProblemCard key={i} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
