import React, { useEffect, useRef } from 'react';
import { BsArrowRight, BsGear, BsGraphUp, BsShieldCheck, BsTerminal, BsBuilding, BsCommand } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import heroImg from '../assets/custom_software.png';

const CustomSoftwares = () => {
  const observerRef = useRef(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 selection:bg-teal-500/30 selection:text-teal-900 overflow-hidden font-sans">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Soft Glowing Orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-400/20 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-400/20 blur-[150px] rounded-full mix-blend-multiply pointer-events-none -z-10"></div>

        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="flex-1 lg:max-w-[650px] animate-[fadeInLeft_1s_ease-out_forwards]">
              <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white shadow-sm border border-slate-200 text-teal-700 text-sm font-bold tracking-wider uppercase">
                <BsCommand className="text-lg" />
                <span>Enterprise Architecture</span>
              </div>
              
              <h1 className="text-[44px] sm:text-[56px] md:text-[68px] font-heading font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Engineered for <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Scale & Impact</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-teal-100/50 -z-0 -rotate-1"></span>
                </span>
              </h1>
              
              <p className="text-[18px] sm:text-[20px] text-slate-600 leading-[1.7] mb-12 max-w-[600px] font-medium">
                We build bespoke software ecosystems that automate workflows, integrate legacy infrastructure, and provide a definitive competitive edge.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  to="/contact"
                  className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-slate-900 rounded-full overflow-hidden hover:scale-105 active:scale-95 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative flex items-center gap-3">
                    Start Strategic Consultation <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
                  <BsBuilding className="text-xl text-slate-400" />
                  <span>Trusted by 50+ Enterprises</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative animate-[fadeInRight_1.2s_ease-out_forwards]">
              <div className="relative w-full aspect-square max-w-[550px] mx-auto group perspective-1000">
                {/* Backdrop Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-emerald-300 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                
                {/* Image Container with 3D Float Effect */}
                <div className="relative h-full w-full rounded-[40px] overflow-hidden border-[8px] border-white/80 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] animate-[float_6s_ease-in-out_infinite]">
                  <img 
                    src={heroImg} 
                    alt="Custom Software Solutions" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Data Card */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <div className="text-xs text-teal-300 font-bold tracking-widest uppercase mb-1">System Efficiency</div>
                            <div className="text-3xl font-bold">+84.5%</div>
                        </div>
                        <BsGraphUp className="text-3xl text-emerald-400" />
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 w-[85%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Capabilities - Elegant Cards */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-20 scroll-animate opacity-0 translate-y-10">
            <h2 className="text-[36px] md:text-[48px] font-heading font-extrabold text-slate-900 mb-6">Enterprise Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-[700px] mx-auto leading-relaxed">
              We architect resilient systems designed to solve complex operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: BsGear, title: 'Workflow Automation', desc: 'Eliminate repetitive tasks and human error. We build intelligent systems that handle your day-to-day operations automatically, freeing your team for high-value work.', delay: 0 },
              { icon: BsGraphUp, title: 'Data Analytics & Reporting', desc: 'Turn your raw data into actionable insights with custom dashboards and real-time reporting tools tailored precisely to your specific KPIs.', delay: 100 },
              { icon: BsTerminal, title: 'Legacy Integration', desc: 'Bridge the gap between your existing systems and new technologies. We ensure seamless data flow across your entire fragmented infrastructure.', delay: 200 },
              { icon: BsShieldCheck, title: 'Enterprise Security', desc: 'Bank-grade security for your internal tools. We implement rigorous testing and security protocols to protect your proprietary data from modern threats.', delay: 300 }
            ].map((feature, i) => (
              <div key={i} className="group relative bg-white rounded-[32px] p-10 border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden scroll-animate opacity-0 translate-y-10" style={{ transitionDelay: `${feature.delay}ms` }}>
                {/* Decorative hover gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
                
                <div className="relative z-10 flex gap-8">
                  <div className="shrink-0 w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-900 text-4xl group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-inner border border-slate-100 group-hover:scale-110">
                    <feature.icon />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Strategy CTA */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="bg-slate-900 p-12 md:p-24 rounded-[40px] md:rounded-[64px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-16 scroll-animate opacity-0 translate-y-10">
            {/* Dark Mode Decor */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-500/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full"></div>

            <div className="max-w-[600px] relative z-10">
              <h2 className="text-[40px] md:text-[56px] font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
                Architecting your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Digital Future</span>
              </h2>
              <p className="text-slate-300 text-xl leading-relaxed">
                Let's architect a software system that perfectly aligns with your business processes and scales with your growth. No off-the-shelf limits.
              </p>
            </div>
            
            <div className="shrink-0 relative z-10">
                <Link 
                to="/contact"
                className="inline-flex items-center px-10 py-6 bg-white text-slate-900 rounded-full font-extrabold shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 gap-4 text-lg"
                >
                Book a Strategy Call <BsArrowRight className="text-xl" />
                </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
      `}} />
    </div>
  );
};

export default CustomSoftwares;
