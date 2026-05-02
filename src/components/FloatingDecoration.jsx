import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FloatingDecoration = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.float-item');
    
    elements.forEach((el, index) => {
      const speed = 1 + index * 0.5;
      gsap.to(el, {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: speed,
        },
        y: (i) => -200 * speed,
        rotation: (i) => 360 * (index % 2 === 0 ? 1 : -1),
        ease: 'none',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Decorative shapes that move on scroll */}
      <div className="float-item absolute top-[20%] left-[10%] w-24 h-24 rounded-full border border-red-500/20 blur-sm" />
      <div className="float-item absolute top-[60%] right-[15%] w-32 h-32 rounded-lg border border-black/20 blur-sm rotate-45" />
      <div className="float-item absolute top-[80%] left-[20%] w-16 h-16 rounded-full border border-red-500/10 blur-sm" />
      <div className="float-item absolute top-[40%] right-[30%] w-40 h-40 rounded-full border border-red-400/5 blur-md" />
      
      {/* Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-800/5 rounded-full blur-[120px]" />
    </div>
  );
};

export default FloatingDecoration;
