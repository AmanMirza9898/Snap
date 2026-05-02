import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import characterImg from '../assets/download.png';
import bgImg from '../assets/blue-sky-background-illustration-hand-painted-blue-sky-with-white-clouds-free-vector.jpg';
import cliffImg from '../assets/ledge-chasm-empty-template-cliff-in-middle-of-green-covered-road-banner-deep-dangerous-abyss-an-extreme-decision-motivation-decisive-last-jump-cartoon-graphic-fear-of-inevitable-vector-removebg-previe.png';

gsap.registerPlugin(ScrollTrigger);

const Bridge = () => {
  const containerRef = useRef(null);
  const characterRef = useRef(null);
  const bgRef = useRef(null);
  const leftCliffRef = useRef(null);
  const rightCliffRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
      });

      // Character jump animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Animation finishes at 150%
          scrub: 1,
        }
      });

      // 1. Character Jump (Separated X and Y for smoothness)
      tl.to(characterRef.current, {
        x: "80vw",
        duration: 3,
        ease: "none"
      }, 0)
      .to(characterRef.current, {
        y: -120,
        rotation: 20,
        duration: 1.5,
        ease: "power1.out"
      }, 0)
      .to(characterRef.current, {
        y: 0,
        rotation: 0,
        duration: 1.5,
        ease: "power1.in"
      }, 1.5);

      // Parallax Background
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Sync with jump
          scrub: 2,
        },
        x: "-5%", // Even less movement
        scale: 1.05
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-sky-50"
    >
      {/* Sky Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-[140%] h-full -left-[20%] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})`, opacity: 0.6 }}
      />

      {/* Content Overlay */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center z-20 w-full px-4">
        <p className="text-gray-500 font-bold mb-4 uppercase tracking-[0.3em] text-[10px]">Bridge between</p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[120px] font-heading font-black text-sky-400 uppercase tracking-tighter leading-[0.8] select-none"
        >
          Creativity <br /> & Functionality
        </motion.h2>
      </div>

      {/* Cliffs */}
      <div 
        ref={leftCliffRef}
        className="absolute left-0 bottom-0 z-10"
      >
        <img 
          src={cliffImg} 
          alt="Left Cliff" 
          className="w-auto h-[30vh] md:h-[50vh] object-contain"
        />
      </div>

      <div 
        ref={rightCliffRef}
        className="absolute right-0 bottom-0 z-10"
      >
        <img 
          src={cliffImg} 
          alt="Right Cliff" 
          className="w-auto h-[30vh] md:h-[50vh] object-contain"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>

      <div 
        ref={characterRef}
        className="absolute left-0 bottom-[10vh] md:bottom-[20vh] w-[220px] md:w-[400px] z-20 pointer-events-none"
      >
        <img 
          src={characterImg} 
          alt="Character" 
          className="w-full h-auto drop-shadow-2xl transform scale-x-[-1]" 
        />
      </div>

      {/* Bottom Gradient for transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-200/50 to-transparent z-30" />
    </section>
  );
};

export default Bridge;