"use client";

import { useRef } from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={containerRef}
        className="relative z-10 min-h-screen pt-16 lg:pt-20"
      >
        <div className="bg-transparent">
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
          <FloatingButtons />
        </div>
      </div>
    </>
  );
}
