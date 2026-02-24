"use client";

import { useReveal } from "@/app/hooks/useReveal";
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
  const ref = useReveal();

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
