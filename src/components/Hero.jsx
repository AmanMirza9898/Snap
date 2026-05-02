import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const RotatingWords = () => {
  const words = ['Design', 'Innovation', 'Growth', 'Impact'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[1.1em] overflow-visible inline-block align-bottom min-w-[150px] sm:min-w-[220px] md:min-w-[280px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 text-primary whitespace-nowrap font-medium italic"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden bg-bg-dark z-[1]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-grid-white opacity-40 pointer-events-none" />
      
      {/* Background Gradient Shapes */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent opacity-60 z-0" />

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px] py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400">
                  Premium Digital Studio
                </span>
              </div>

              <h1 className="text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[4.5vw] leading-[1.05] font-heading font-black text-white mb-6 tracking-tight uppercase">
                Defining the <br />
                Next Level of <br />
                <RotatingWords />
              </h1>

              <p className="text-[16px] sm:text-[18px] text-gray-400 font-medium leading-[1.5] mb-8 max-w-[500px]">
                At <span className="text-white font-black">Snap</span>, we craft high-end digital experiences that bridge the gap between 
                <span className="text-primary font-bold"> bold ideas</span> and 
                <span className="text-white font-black italic"> market leadership</span>.
              </p>

              <div className="flex wrap gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-bold text-[13px] tracking-widest bg-primary text-white shadow-lg shadow-primary/20 uppercase transition-all hover:bg-white hover:text-black"
                >
                  START A PROJECT
                  <BsArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <div className="w-full lg:w-2/5 relative flex justify-center items-center h-[300px] md:h-[450px]">
             <div className="relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, -2, 2, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                   <svg width="250" height="180" viewBox="0 0 200 150" className="drop-shadow-2xl">
                      <path d="M20 100 L100 130 L180 100 L100 80 Z" fill="#E31E24" stroke="#8B0000" strokeWidth="2" />
                      <path d="M100 80 L100 30 L150 85 Z" fill="#FF4D4D" />
                      <path d="M100 80 L100 40 L60 85 Z" fill="#B30000" />
                   </svg>
                </motion.div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-white/5 rounded-full animate-rotate-slow opacity-40" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-white/5 rounded-full animate-spin-reverse opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
