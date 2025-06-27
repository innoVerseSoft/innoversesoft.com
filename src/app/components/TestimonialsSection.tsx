'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      text: "Innoverse transformed our digital presence completely. Their innovative approach and attention to detail exceeded all expectations.",
      rating: 5,
      avatar: "https://picsum.photos/150/150?random=10"
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

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-slate-600">
            Don't just take our word for it - hear from the businesses we've helped transform.
          </p>
        </motion.div>

        <motion.div
          key={currentReview}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
            <img 
              src={reviews[currentReview].avatar} 
              alt={reviews[currentReview].name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold text-slate-800 text-lg">{reviews[currentReview].name}</div>
              <div className="text-slate-600">{reviews[currentReview].role}</div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview ? 'bg-indigo-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 