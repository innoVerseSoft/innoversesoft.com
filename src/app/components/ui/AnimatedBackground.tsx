'use client';

import { useMouseParallax } from '../../hooks/useMouseParallax';

export default function AnimatedBackground() {
  const mousePosition = useMouseParallax();

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"
      />
      
      {/* Grid Pattern */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-10" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      {/* Static Circles */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl"
      />
      
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 blur-3xl"
      />
    </div>
  );
}