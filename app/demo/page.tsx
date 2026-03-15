"use client";

import { useEffect, useRef } from "react";
import { DemoThemeProvider, useDemoTheme } from "@/app/context/DemoThemeContext";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import TrustBar from "@/app/components/TrustBar";
import Services from "@/app/components/Services";
import WhyUs from "@/app/components/WhyUs";
import Reviews from "@/app/components/Reviews";
import Gallery from "@/app/components/Gallery";
import BeforeAfter from "@/app/components/BeforeAfter";
import ServiceArea from "@/app/components/ServiceArea";
import CTABanner from "@/app/components/CTABanner";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import StickyCallBar from "@/app/components/StickyCallBar";

function DemoInner() {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useDemoTheme();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.querySelectorAll(".reveal").forEach((node) => {
      (node as HTMLElement).style.transition = "none";
      node.classList.add("visible");
    });

    const inIframe = window.self !== window.top;
    if (!inIframe) return;

    const params = new URLSearchParams(window.location.search);
    const paramPx = Math.max(1, parseInt(params.get("px") ?? "80", 10)) || 80;
    const pxPerFrame = window.innerWidth <= 768 ? 140 : paramPx;
    const pauseMs = 2000;
    let raf: number;
    let timeout: ReturnType<typeof setTimeout>;
    let paused = false;
    let running = false;

    function scrollDown() {
      if (paused) { running = false; return; }
      running = true;
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        timeout = setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
          timeout = setTimeout(() => { raf = requestAnimationFrame(scrollDown); }, pauseMs);
        }, pauseMs);
        return;
      }
      window.scrollBy(0, pxPerFrame);
      raf = requestAnimationFrame(scrollDown);
    }

    function onMessage(e: MessageEvent) {
      if (e.data === "autoscroll-pause") {
        paused = true;
      } else if (e.data === "autoscroll-resume") {
        paused = false;
        if (!running) {
          raf = requestAnimationFrame(scrollDown);
        }
      }
    }
    window.addEventListener("message", onMessage);

    timeout = setTimeout(() => { raf = requestAnimationFrame(scrollDown); }, pauseMs);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <div ref={ref} data-demo-theme={theme}>
      {/* Floating pill back button */}
      <a
        href="/"
        style={{
          position: "fixed",
          top: "14px",
          left: "14px",
          zIndex: 102,
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "12px",
          fontWeight: 600,
          color: "var(--dt-pill-text)",
          background: "var(--dt-pill-bg)",
          border: "1px solid var(--dt-pill-border)",
          padding: "6px 12px",
          borderRadius: "999px",
          textDecoration: "none",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          transition: "opacity 0.15s",
        }}
        className="demo-back-pill"
      >
        ← CFC
      </a>

      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Reviews />
      <Gallery />
      <BeforeAfter />
      <ServiceArea />
      <CTABanner />
      <ContactForm />
      <Footer />
      <StickyCallBar />

      <style>{`
        .demo-back-pill:hover { opacity: 0.8; }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  return (
    <DemoThemeProvider>
      <DemoInner />
    </DemoThemeProvider>
  );
}
