import { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider = ({ images, interval = 6000 }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % images.length);
          return 0;
        }
        return prev + (100 / (interval / 50));
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [images.length, interval]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-lg glass-card">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Timer Ring */}
      <div className="absolute bottom-4 right-4 w-14 h-14">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsla(270, 60%, 70%, 0.2)"
            strokeWidth="4"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(51, 100%, 50%)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-50 ease-linear"
            style={{
              filter: 'drop-shadow(0 0 6px hsla(51, 100%, 50%, 0.6))',
            }}
          />
        </svg>
        {/* Counter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-body text-gold font-medium">
            {currentIndex + 1}/{images.length}
          </span>
        </div>
      </div>

      {/* Tap to enlarge hint */}
      <div className="absolute bottom-4 left-4 text-lavender-soft text-xs font-body opacity-70">
        Tap to enlarge
      </div>
    </div>
  );
};

export default ImageSlider;
