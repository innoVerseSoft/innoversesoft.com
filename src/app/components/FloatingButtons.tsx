'use client';

import { ArrowUp, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      <button
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </>
  );
} 