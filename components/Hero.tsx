
import React, { useEffect, useState, useRef } from 'react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const titleOffset = scrollY * 0.4;
  const opacityFactor = Math.max(0, 1 - scrollY / 900);

  return (
    <section ref={sectionRef} className="relative h-[115vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-[#010101]">
      {/* High-Performance Cursor Aura */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" style={{ opacity: opacityFactor }}>
        <div 
          className="absolute w-[1100px] h-[1100px] rounded-full blur-[180px] transition-transform duration-[900ms] ease-out will-change-transform"
          style={{ 
            background: 'radial-gradient(circle, rgba(0,245,255,0.15) 0%, rgba(157,0,255,0.04) 50%, transparent 100%)',
            transform: `translate3d(${mousePos.x - 550}px, ${mousePos.y - 550}px, 0)`,
          }}
        />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center pointer-events-none">
        <div className={`mono text-[10px] uppercase tracking-[0.7em] text-cyan-400 mb-14 px-10 py-2 border border-cyan-500/20 inline-block rounded-full bg-cyan-500/5 transition-all duration-1000 delay-100 backdrop-blur-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          CS STUDENT • BUILDER • PRODUCT ARCHITECT
        </div>
        
        <h1 
          className={`text-7xl md:text-[12rem] font-black leading-[0.7] tracking-tighter italic transition-all duration-[1800ms] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-60'
          }`}
          style={{ transform: `translate3d(0, ${titleOffset}px, 0)` }}
        >
          <span className="text-reveal block">BUILD.</span>
          <span className="block text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)' }}>CODE.</span>
          <span className="text-reveal block">SHIP.</span>
        </h1>

        <div className={`mt-20 max-w-3xl transition-all duration-1000 delay-700 pointer-events-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-2xl md:text-3xl text-white/30 font-light tracking-tight leading-snug">
            I build <span className="text-white font-medium">cool stuff</span> with AI to create products that people <span className="text-cyan-400 italic">love to use</span>. 
            Synthesizing intelligence into utility.
          </p>
          
          <div className="flex gap-14 justify-center mt-16">
            <div 
              className="flex flex-col items-center group cursor-pointer" 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <span className="mono text-[9px] text-white/20 mb-6 tracking-[0.5em] group-hover:text-cyan-400 transition-colors uppercase">View Trajectory</span>
              <div className="w-px h-24 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Persistent HUD Metadata */}
      <div className="absolute top-12 right-12 hidden lg:flex flex-col items-end mono text-[10px] text-white/10 gap-2">
        <div>MAHINDRA_EC // 2021-2027</div>
        <div>CGPA // 7.00</div>
      </div>

      <div className="absolute bottom-12 left-12 flex flex-col gap-6 mono text-[10px] text-white/20">
        <div className="flex items-center gap-4 group cursor-default">
          <span className="text-cyan-500 font-black">LOC:</span>
          <span className="group-hover:text-white transition-colors">HYDERABAD, IN</span>
        </div>
        <div className="flex items-center gap-4 group cursor-default">
          <span className="text-cyan-500 font-black">FOCUS:</span>
          <span className="group-hover:text-white transition-colors">HETEROGENEOUS_COMPUTE</span>
        </div>
      </div>
    </section>
  );
};
