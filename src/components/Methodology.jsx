import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'Deep dive into your business, goals, and target audience to find the unique angle.',
    color: '#E31E24'
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Crafting premium visual languages and high-end user experiences that resonate.',
    color: '#FFFFFF'
  },
  {
    number: '03',
    title: 'Development',
    desc: 'Turning concepts into high-performance digital products with military-grade precision.',
    color: '#E31E24'
  },
  {
    number: '04',
    title: 'Deployment',
    desc: 'Seamless launch and continuous optimization for long-term digital growth.',
    color: '#FFFFFF'
  }
];

const Methodology = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.step-item');
      
      items.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">Our Process</span>
            </div>
            <h2 className="text-5xl md:text-8xl text-white mb-8 tracking-tighter font-heading font-black uppercase">
              The Snap <span className="text-primary italic">Methodology</span>
            </h2>
          </motion.div>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-item group relative p-10 rounded-[32px] bg-bg-light border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 text-[120px] font-black text-white/5 group-hover:text-primary/10 transition-colors duration-500 select-none">
                {step.number}
              </div>
              
              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500"
                  style={{ color: step.color, backgroundColor: 'rgba(255,255,255,0.03)' }}
                >
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {step.desc}
                </p>
              </div>

              {/* Progress Line Decoration */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-[1px] bg-white/5 z-0" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Methodology;
