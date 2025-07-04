'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

interface MobileContainerProps {
  images: string[];
  className?: string;
}

const MobileContainer: React.FC<MobileContainerProps> = ({ images, className = '' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Preload next image
  const preloadNextImage = useCallback((nextIndex: number) => {
    if (!loadedImages.has(nextIndex)) {
      const img = new window.Image();
      img.src = images[nextIndex];
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(nextIndex));
      };
    }
  }, [images, loadedImages]);

  // Handle image transition
  const transitionToNextImage = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    // Preload the image after next
    const nextNextIndex = (nextIndex + 1) % images.length;
    preloadNextImage(nextNextIndex);
    
    setCurrentImageIndex(nextIndex);
  }, [currentImageIndex, images.length, preloadNextImage]);

  useEffect(() => {
    // Preload the next image immediately
    const nextIndex = (currentImageIndex + 1) % images.length;
    preloadNextImage(nextIndex);

    timeoutRef.current = setInterval(transitionToNextImage, 5000);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [currentImageIndex, images.length, preloadNextImage, transitionToNextImage]);

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="relative">
        {/* iPhone Frame */}
        <div className="relative w-80 h-[643px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl transform-gpu">
          {/* Screen */}
          <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
            {/* Image Showcase */}
            <div className="relative w-full h-full">
              {images.map((image, index) => {
                // Only render current, previous, and next images for performance
                if (
                  index !== currentImageIndex &&
                  index !== (currentImageIndex + 1) % images.length &&
                  index !== (currentImageIndex - 1 + images.length) % images.length
                ) {
                  return null;
                }

                const isCurrentImage = index === currentImageIndex;
                const isNextImage = index === (currentImageIndex + 1) % images.length;

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transform-gpu will-change-transform will-change-opacity transition-all duration-700 ease-out ${
                      isCurrentImage
                        ? 'opacity-100 translate-x-0'
                        : isNextImage
                        ? 'opacity-0 translate-x-full'
                        : 'opacity-0 -translate-x-full'
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={`Showcase ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={isCurrentImage}
                        loading={isCurrentImage ? "eager" : "lazy"}
                        quality={75}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Home Button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full border-2 border-gray-700"></div>

          {/* Camera */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-full"></div>

          {/* Speaker */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileContainer;
