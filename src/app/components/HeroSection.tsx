"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import MobileContainer from "./ui/MobileContainer";
import RotatingText from "./ui/RotatingText";
import GridMotionBg from "./ui/GridMotionBg";

const mobileImages = [
  '/img/realistic-glassmorphism-mobile-app-template_23-2149441714.avif',
  '/img/realistic-glassmorphism-mobile-app-template_23-2149441714.avif',
  '/img/istockphoto-1418233376-612x612.jpg',
  '/img/professional-programmer-working-late-dark-office.jpg',
  '/img/4380747.jpg',
  '/img/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg',
  '/img/side-shot-code-editor-using-react-js.jpg',
  '/img/professional-programmer-working-late-dark-office.jpg',
  '/img/4380747.jpg',
  '/img/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg'
]

export default function HeroSection() {
  return (   
    <section id="home" className="relative flex items-center justify-center px-4 overflow-hidden ">
      {/* Full-screen glassy background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-blue-50/60 to-purple-50/80 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <GridMotionBg />
      </div>
      
      {/* Additional glassy layers covering the entire section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main glassy overlay for the entire component */}
      <div className="absolute inset-0 z-0 bg-white/10 backdrop-blur-xl border border-white/20"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-screen relative z-10 ">
        {/* Left side - Content */}
        <div className="flex items-center justify-start px-4 relative z-10">
          <div className="text-left max-w-4xl">
      

            <h1>
              <div className="font-['Roboto Flex'] flex flex-col items-start justify-start p-12 pl-0 text-left text-6xl md:text-7xl">
                <h1 className="font-bold text-6xl md:text-7xl text-slate-900 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                  Where Ideas<br />
                  <span className="text-6xl md:text-7xl">Come to <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Life</span></span>
                </h1>
              </div>

              <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 relative z-10 flex items-center gap-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                <span>We Develop your Next</span>
                <div className="w-32 h-12 flex items-center">
                  <RotatingText
                    texts={["SAAS", "AI", "Website", "App"]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg min-w-[8rem] shadow-xl"
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    rotationInterval={2000}
                  />
                </div>
              </div>
            </h1>

            <p className="text-xl md:text-2xl text-slate-800 font-semibold mb-12 relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            We design, build, and launch full-stack platforms — from websites and mobile apps to backend systems — for companies ready to scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start relative z-10">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold text-lg flex items-center group shadow-xl hover:shadow-2xl transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/90 border-2 border-purple-500 text-purple-700 rounded-full font-semibold text-lg flex items-center group hover:bg-white transition-all duration-300 shadow-xl">
                <PhoneCall className="mr-2 group-hover:scale-110 transition-transform" />
                Book a Meeting
              </button>
            </div>
          </div>
        </div>

        {/* Right side - MobileContainer */}
        <div className="relative mt-20">
          <MobileContainer 
            images={mobileImages} 
          />
        </div>
      </div>
    </section>
  );
}
