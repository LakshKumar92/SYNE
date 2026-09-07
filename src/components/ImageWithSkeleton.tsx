import React, { useState } from 'react';
import { motion } from 'motion/react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export function ImageWithSkeleton({ src, alt, className = "", imgClassName = "" }: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton / Shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-surface-container-highest">
          <motion.div
            className="w-full h-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      )}

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
