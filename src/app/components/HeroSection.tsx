"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import GridMotionBg from "./ui/GridMotionBg";
import GradientText from "./ui/GradientText";
import RotatingText from "./ui/RotatingText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-screen">
        {/* Left side - Content */}
        <div className="flex items-center justify-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Semi-transparent backdrop for better readability */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl -z-10" />

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 relative z-10"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Innovating Tomorrow's Technology Today
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-500 bg-clip-text text-transparent mb-6 relative z-10"
            >
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={10}
                showBorder={false}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-500 bg-clip-text text-transparent mb-6 relative z-10"
              >
                Welcome to Innoverse
              </GradientText>
            <div className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6 relative z-10 flex items-center justify-center gap-2">
              <span>We Develop your Next</span>
              <div className="w-32 h-12 flex items-center justify-center">
                <RotatingText
                  texts={["SAAS", "AI", "Website", "App"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg min-w-[8rem]"
                  staggerFrom={"last"}
                  initial={{ y: "100%" } as any}
                  animate={{ y: 0 } as any}
                  exit={{ y: "-120%" } as any}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-800 mb-12 max-w-3xl mx-auto relative z-10"
            >
              We craft digital experiences that inspire, innovate, and transform
              businesses for the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold text-lg flex items-center group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-600 rounded-full font-semibold text-lg flex items-center group hover:bg-indigo-50 transition-all duration-300"
              >
                <Play className="mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - GridMotionBg */}
        <div className="relative">
          <GridMotionBg />
        </div>
      </div>
    </section>
  );
}
