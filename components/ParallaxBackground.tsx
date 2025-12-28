
import React, { useEffect, useState } from 'react';

export const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <div 
        className="parallax-text top-[15%] left-[-8%]"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      >
        PRODUCT SYNTHESIS
      </div>
      <div 
        className="parallax-text top-[55%] right-[-12%]"
        style={{ transform: `translateY(${-scrollY * 0.18}px)` }}
      >
        AGENTIC FRAMEWORKS
      </div>
      <div 
        className="parallax-text top-[135%] left-[-4%]"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        HETEROGENEOUS COMPUTE
      </div>
      <div 
        className="parallax-text top-[195%] right-[8%]"
        style={{ transform: `translateY(${-scrollY * 0.04}px)` }}
      >
        KERNEL BARE-METAL
      </div>
    </div>
  );
};
