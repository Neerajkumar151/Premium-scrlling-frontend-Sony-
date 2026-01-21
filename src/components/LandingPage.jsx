import React, { useRef, useState, useEffect } from 'react';
import ImageSequence from './ImageSequence';
import ScrollOverlay from './ScrollOverlay';
import FeaturesAndSpecs from './FeaturesAndSpecs';

// Simple Preloader Component
const Preloader = ({ progress }) => (
  <div className="fixed inset-0 z-[100] bg-sony-black flex flex-col items-center justify-center text-white transition-opacity duration-700">
    <div className="mb-4 text-2xl font-semibold tracking-widest">SONY</div>
    <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-accent-blue transition-all duration-200 ease-out" 
        style={{ width: `${progress}%` }}
      />
    </div>
    <div className="mt-2 text-xs text-white/40 font-mono">
      {progress}%
    </div>
  </div>
);

export default function LandingPage() {
  const heroRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoadProgress = (progress) => {
    setLoadingProgress(progress);
    if (progress === 100) {
      setTimeout(() => setIsLoading(false), 800);
    }
  };

  useEffect(() => {
  if (isLoading) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => { document.body.style.overflow = ''; };
}, [isLoading]);

useEffect(() => {
  if (!isLoading) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }
}, [isLoading]);



  return (
    <>
      {isLoading && <Preloader progress={loadingProgress} />}

      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Hero Section */}
        <div id="hero" ref={heroRef} className="h-[500vh] relative z-0">
            <ImageSequence 
              containerRef={heroRef} 
              onLoadProgress={handleImageLoadProgress} 
            />
            <ScrollOverlay containerRef={heroRef} />
        </div>

        {/* Features Section */}
        <div id="overview">
           <FeaturesAndSpecs />
           
        </div>
      </div>
    </>
  );
}