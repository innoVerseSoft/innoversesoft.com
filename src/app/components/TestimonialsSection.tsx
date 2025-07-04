'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "MYKG Team",
      role: "CEO",
      text: "Innoverse transformed our digital presence completely. Their innovative approach and attention to detail exceeded all expectations.",
      rating: 5,
      avatar: "/img/mykg.svg"
    },
    {
      name: "Michael Chen",
      role: "CTO, DataSync",
      text: "The team at Innoverse delivered exceptional results. Their technical expertise and creative solutions helped us achieve our goals.",
      rating: 5,
      avatar: "https://picsum.photos/150/150?random=11"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupXYZ",
      text: "Working with Innoverse was a game-changer for our business. They truly understand how to create impactful digital experiences.",
      rating: 5,
      avatar: "https://picsum.photos/150/150?random=12"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-white overflow-hidden z-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600">
            Don't just take our word for it - hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="bg-gradient-to-br from-gray-100 to-blue-50 rounded-3xl p-12 text-center shadow-lg"
            >
              <div className="flex justify-center mb-6">
                {Array.from({ length: reviews[currentReview].rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-slate-700 mb-8 italic">
                "{reviews[currentReview].text}"
              </p>
              <div className="flex items-center justify-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image 
                    src={reviews[currentReview].avatar} 
                    alt={reviews[currentReview].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">{reviews[currentReview].name}</div>
                  <div className="text-slate-600">{reviews[currentReview].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none transition-transform hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none transition-transform hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-12 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentReview ? 1 : -1);
                setCurrentReview(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview ? 'bg-indigo-500 scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 