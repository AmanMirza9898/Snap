import React from 'react';
import { BsSearch, BsPencilSquare, BsCodeSlash, BsRocketTakeoff } from 'react-icons/bs';

const steps = [
  { number: '01', title: 'Discovery', icon: <BsSearch /> },
  { number: '02', title: 'Design', icon: <BsPencilSquare /> },
  { number: '03', title: 'Develop', icon: <BsCodeSlash /> },
  { number: '04', title: 'Deploy', icon: <BsRocketTakeoff /> }
];

const Methodology = () => {
  return (
    <section id="process" className="py-28 bg-bg-light relative overflow-hidden">
      {/* Decorative background grid (subtle) */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="text-center flex flex-col items-center mb-24">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100/50 text-blue-700 text-[10px] font-bold tracking-widest uppercase">
            Workflow
          </div>
          <h2 className="text-4xl md:text-5xl text-text-dark font-heading font-bold tracking-tight">
            Our Strategic <span className="text-primary">Process</span>
          </h2>
          <div className="w-16 h-[4px] bg-primary rounded-full mt-6 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative max-w-[1000px] mx-auto gap-12 md:gap-0">
          {/* Animated Gradient Line */}
          <div className="absolute top-0 bottom-0 left-1/2 md:top-8 md:left-[10%] md:right-[10%] w-[2px] md:w-auto md:h-[2px] bg-slate-200 md:bg-gradient-to-r md:from-blue-200 md:via-primary md:to-blue-200 z-0">
            <div className="absolute inset-0 bg-primary/30 blur-sm"></div>
          </div>
          
          {steps.map((step, index) => (
            <div 
              className="flex flex-col items-center relative z-10 flex-1 animate-[fadeIn_0.6s_ease-out_forwards]" 
              key={index} 
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
            >
              {/* Step Number Circle */}
              <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center font-heading text-base text-slate-400 font-bold mb-8">
                 {step.number}
              </div>
              
              {/* Icon Container */}
              <div className="w-20 h-20 bg-white shadow-sm rounded-3xl flex items-center justify-center text-primary text-2xl mb-6">
                 {step.icon}
              </div>
              
              <span className="text-lg font-bold text-text-dark">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
