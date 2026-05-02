import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImmersiveScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = ['#hero', '#expertise', '#bridge', '#process', '#work', '#about', '#contact'];
    
    sections.forEach((section, i) => {
      const bgMap = {
        '#hero': '#050816',
        '#expertise': '#000000',
        '#bridge': '#050816',
        '#process': '#050816',
        '#work': '#050816',
        '#about': '#050816',
        '#contact': '#050816'
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => {
          gsap.to('body', {
            backgroundColor: bgMap[section],
            duration: 1,
            ease: "power2.inOut"
          });
        },
        onEnterBack: () => {
          gsap.to('body', {
            backgroundColor: bgMap[section],
            duration: 1,
            ease: "power2.inOut"
          });
        }
      });
    });
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none -z-10" />;
};

export default ImmersiveScroll;
