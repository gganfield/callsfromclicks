"use client";

import { useEffect, useRef } from "react";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import TrustBar from "@/app/components/TrustBar";
import Services from "@/app/components/Services";
import WhyUs from "@/app/components/WhyUs";
import Reviews from "@/app/components/Reviews";
import Gallery from "@/app/components/Gallery";
import CTABanner from "@/app/components/CTABanner";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null);

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
    const pxPerFrame = Math.max(1, parseInt(params.get("px") ?? "80", 10)) || 80;
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
    <div ref={ref}>
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Reviews />
      <Gallery />
      <CTABanner />
      <ContactForm />
      <Footer />
    </div>
  );
}
