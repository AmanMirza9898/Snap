import React from 'react';
import { motion } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs';

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Projects', value: '250+' },
  { label: 'Success Rate', value: '98%' },
  { label: 'Countries', value: '12' }
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none whitespace-nowrap leading-none">
        ABOUT SNAP • ABOUT SNAP • ABOUT SNAP
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image/Visual Side */}
          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10 rounded-[48px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
             </div>
             
             {/* Floating Achievement */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[32px] shadow-2xl hidden md:block"
             >
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white text-2xl">
                      <BsCheckCircleFill />
                   </div>
                   <div>
                      <h4 className="text-black font-black text-xl leading-none">AWARDS</h4>
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Winning Studio</span>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">Our Identity</span>
                </div>
                <h2 className="text-5xl md:text-8xl text-white font-heading font-black leading-[0.85] tracking-tighter uppercase mb-10">
                  Driven by <br />
                  <span className="text-primary italic">Creativity</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  Snap is more than a digital agency; we are a collective of visionaries, designers, and developers dedicated to creating high-end digital experiences that leave a mark. We believe in the power of aesthetics combined with technical excellence.
                </p>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                   {stats.map((stat, i) => (
                     <div key={i}>
                        <h4 className="text-4xl font-heading font-black text-white mb-1">{stat.value}</h4>
                        <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">{stat.label}</span>
                     </div>
                   ))}
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
