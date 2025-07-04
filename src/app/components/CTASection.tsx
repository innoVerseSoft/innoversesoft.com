'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z"
            fill="url(#ctaGradient)"
          />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch with our team and start your digital transformation journey today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-white text-indigo-600 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center mx-auto group"
          >
            Start Your Project Now
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 