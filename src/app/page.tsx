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
import Aurora from "./components/ui/AuroraBG";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* <div className="fixed inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.7}
          amplitude={1}
          speed={1}
        />
      </div> */}
      <div ref={containerRef} className="relative z-10 min-h-screen pt-16 lg:pt-20">
        <div className="bg-transparent">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <PortfolioSection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
          <FloatingButtons />
        </div>
      </div>
    </>
  );
}
