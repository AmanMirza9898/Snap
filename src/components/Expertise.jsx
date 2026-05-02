import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsLayers, BsBullseye, BsPalette, BsLaptop, BsMegaphone, BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <BsBullseye />,
    title: 'Digital Strategy',
    description: 'We define your path to success through deep market analysis and strategic planning.',
    path: '/services/strategy',
    suit: '♦',
    color: '#E31E24',
  },
  {
    icon: <BsPalette />,
    title: 'Brand Identity',
    description: 'Creating visual languages that speak volumes about your brand values and mission.',
    path: '/services/brand',
    suit: '♠',
    color: '#111111',
  },
  {
    icon: <BsLaptop />,
    title: 'Web Aesthetics',
    description: 'High-end website design and development with focus on performance and experience.',
    path: '/services/web-development',
    suit: '♥',
    color: '#E31E24',
  },
  {
    icon: <BsLayers />,
    title: 'UI/UX Design',
    description: 'User-centric interfaces designed to convert and provide seamless interactions.',
    path: '/services/ui-ux',
    suit: '♣',
    color: '#111111',
  },
  {
    icon: <BsMegaphone />,
    title: 'Digital Marketing',
    description: 'Amplifying your brand reach through targeted performance marketing and SEO.',
    path: '/services/marketing',
    suit: '♦',
    color: '#E31E24',
  },
];

const Expertise = () => {
  const sectionRef = useRef(null);
  const deckRef = useRef(null);

  useEffect(() => {
    const cards = deckRef.current.querySelectorAll('.playing-card');
    
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%', 
          scrub: 1,
          pin: true,
        }
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.fromTo(card, 
          { 
            x: '100vw', 
            rotation: 20, 
            opacity: 0,
          },
          { 
            x: i * 8, 
            y: i * -5, 
            rotation: i % 2 === 0 ? 5 : -5, 
            opacity: 1,
            ease: 'power2.out',
            duration: 1
          }, 
          (i - 1) * 0.5
        );

        tl.to(cards[i-1], {
          scale: 0.95,
          opacity: 0.7,
          duration: 0.5
        }, (i - 1) * 0.5);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-white">Full-Service Agency</span>
            </div>
            <h2 className="text-5xl md:text-8xl text-white font-heading font-black leading-[0.9] uppercase mb-8">
              Expertise <br />
              <span className="text-primary italic">Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
              We specialize in creating high-end digital products that set new standards in design and performance.
            </p>
            
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-primary text-white font-bold uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-primary/20"
            >
              Start Your Journey
              <BsArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right Side (Cards) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center h-[400px] md:h-[600px] relative">
           <div 
             ref={deckRef} 
             className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px]"
           >
              {services.map((service, index) => (
                <div 
                   key={index}
                   className="playing-card absolute inset-0 rounded-[30px] border border-white/10 shadow-2xl overflow-hidden"
                   style={{ 
                     background: service.color,
                     zIndex: index + 10,
                   }}
                >
                  <div className="h-full p-8 md:p-12 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                       <span className="text-4xl font-black">{service.suit}</span>
                       <div className="text-3xl opacity-20 font-black">0{index + 1}</div>
                    </div>

                    <div>
                       <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-3xl mb-6">
                          {service.icon}
                       </div>
                       <h3 className="text-3xl md:text-5xl font-heading font-black uppercase leading-none mb-4">
                          {service.title}
                       </h3>
                       <p className="text-sm opacity-70 leading-relaxed max-w-[250px]">
                          {service.description}
                       </p>
                    </div>

                    <div className="flex items-center justify-between">
                       <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Snap Creative</span>
                       <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                          <BsArrowRight />
                       </div>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;