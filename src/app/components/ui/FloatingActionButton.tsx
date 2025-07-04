'use client';

import { ArrowUp, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FloatingActionButton = () => {
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
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Contact Button */}
      <button
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </>
  );
}; 