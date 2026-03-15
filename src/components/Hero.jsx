import React, { useState, useEffect } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import Carousel from './Carousel';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate Parallax offsets
  const parallaxX = (mousePos.x - window.innerWidth / 2) / 30; // Increased factor
  const parallaxY = (mousePos.y - window.innerHeight / 2) / 30; // Increased factor

  return (
    <section 
      className=" mt-8 pt-[180px] pb-[100px] relative overflow-hidden transition-colors duration-500"
      style={{ 
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.25) 1px, transparent 0),
          linear-gradient(to right, rgba(148, 163, 184, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        backgroundPosition: `${parallaxX * 0.2}px ${parallaxY * 0.2}px` // Grid Parallax
      }}
    >
      {/* Dynamic Mesh Glows with Parallax - Wrapped */}
      <div 
        className="absolute top-[-10%] right-[-5%] -z-10 transition-transform duration-300 ease-out pointer-events-none"
        style={{ transform: `translate(${parallaxX * -2}px, ${parallaxY * -2}px)` }}
      >
        <div className="w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px] animate-pulse duration-[10s]"></div>
      </div>
      
      <div 
        className="absolute bottom-[-10%] left-[-5%] -z-10 transition-transform duration-300 ease-out pointer-events-none"
        style={{ transform: `translate(${parallaxX * 1}px, ${parallaxY * 1}px)` }}
      >
        <div className="w-[700px] h-[700px] rounded-full bg-indigo-500/5 blur-[150px] animate-pulse duration-[12s]"></div>
      </div>
      
      {/* Floating Glass Badges with Parallax - Wrapped */}
      <div 
        className="absolute top-[20%] left-[5%] hidden lg:block z-20 transition-transform duration-300 ease-out pointer-events-none"
        style={{ transform: `translate(${parallaxX * 1.5}px, ${parallaxY * 1.5}px)` }}
      >
        <div className="glass-card p-4 rounded-3xl animate-float-slow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <span className="text-xs font-bold">100+</span>
            </div>
            <div>
              <p className="text-[10px] text-text-light uppercase font-bold tracking-wider">Projects</p>
              <p className="text-xs font-heading font-bold text-text-dark">Delivered</p>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute top-[35%] right-[5%] hidden lg:block z-20 transition-transform duration-300 ease-out pointer-events-none"
        style={{ transform: `translate(${parallaxX * -1.2}px, ${parallaxY * -1.2}px)` }}
      >
        <div className="glass-card p-4 rounded-3xl animate-float-slow [animation-delay:2s]">
          <div className="flex items-center gap-3">
            <div className="text-primary text-xl">
              <BsCodeSlash />
            </div>
            <div>
              <p className="text-[10px] text-text-light uppercase font-bold tracking-wider">Success Rate</p>
              <p className="text-xs font-heading font-bold text-text-dark">99.9% Happy Client</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container flex flex-col items-center text-center mx-auto px-6 max-w-[1200px] relative z-10">
        
        <div className="animate-[fadeIn_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] relative w-full">
          
          <h1 className="text-[40px] sm:text-[48px] md:text-[64px] leading-[1.1] tracking-[-1px] mb-6 text-text-dark font-heading font-semibold relative z-10">
            We Build the Digital<br />Future of Business
          </h1>
          
          <p className="text-[16px] sm:text-[18px] text-text-light leading-[1.6] mb-12 max-w-[600px] mx-auto relative z-10">
            Premium Web Development & Strategy for Forward-Thinking Brands<br/>seeking unparalleled digital experiences.
          </p>
          
          {/* Badge-style CTA button as requested */}
          <div className="flex justify-center gap-4 mb-16 relative z-10">
            <button className="inline-block bg-blue-50 text-blue-700 px-8 py-3 rounded-full text-[13px] font-bold tracking-[1px] uppercase hover:bg-blue-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-blue-100">
              Our Client Projects
            </button>
          </div>
        </div>

        {/* Added z-10 and -mt-4 to move it up slightly more */}
        <div className="w-full max-w-[1000px] mx-auto opacity-0 animate-[fadeIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards] relative z-10 -mt-2">
          {/* HEIGHT DECREASED as requested */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-white rounded-[20px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex justify-center">
             <Carousel />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
