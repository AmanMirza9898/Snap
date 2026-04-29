import React, { useEffect, useRef } from 'react';
import { BsCodeSlash, BsCheck2Circle, BsArrowRight, BsCpu, BsDatabase, BsLightningCharge, BsDisplay, BsMegaphone, BsPalette, BsStars } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import websitesImg from '../assets/websites.jpg';

const WebDevelopment = () => {
  // Simple intersection observer for scroll animations
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
    <div className="pt-24 min-h-screen bg-[#F8FAFC] selection:bg-primary/20 selection:text-primary overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/10 blur-[120px] pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="flex-1 lg:max-w-[650px] animate-[fadeInLeft_1s_ease-out_forwards]">
              <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] text-primary text-sm font-bold tracking-wider uppercase">
                <BsStars className="text-lg" />
                <span>Premium Web Solutions</span>
              </div>
              <h1 className="text-[44px] sm:text-[56px] md:text-[72px] font-heading font-extrabold text-slate-900 mb-8 leading-[1.05] tracking-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital</span> Excellence
              </h1>
              <p className="text-[18px] sm:text-[20px] text-slate-600 leading-[1.7] mb-12 max-w-[600px] font-medium">
                We design and engineer high-performance business websites and enterprise digital platforms that demand attention and drive extraordinary results.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  to="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-primary rounded-full overflow-hidden hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:shadow-[0_8px_40px_rgb(59,130,246,0.5)]"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative flex items-center gap-3">
                    Start Your Project <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <div className="flex items-center gap-4 text-sm font-semibold text-slate-500">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm z-[${4-i}]`}>
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Avatar" className="w-full h-full rounded-full" />
                      </div>
                    ))}
                  </div>
                  <span>Trusted by 100+ brands</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative animate-[fadeInRight_1.2s_ease-out_forwards]">
              <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto group">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[40px] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                
                {/* Main Image Container */}
                <div className="relative h-full w-full rounded-[40px] overflow-hidden border-[8px] border-white/80 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] backdrop-blur-xl">
                  <img 
                    src={websitesImg} 
                    alt="Premium Web Development" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Floating Elements overlaying image */}
                  <div className="absolute top-6 left-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 animate-[bounce_4s_infinite]">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </div>
                      <span className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">Optimized</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-slate-700 animate-[bounce_5s_infinite_1s]">
                    <div className="flex items-center gap-3">
                      <BsLightningCharge className="text-yellow-400 text-lg" />
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Performance</div>
                        <div className="text-sm text-white font-extrabold">99.9% Score</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-20 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-[36px] md:text-[48px] font-heading font-extrabold text-slate-900 mb-6 tracking-tight">
              Engineering <span className="text-primary">Perfection</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-[700px] mx-auto leading-relaxed">
              We don't just build websites; we architect digital experiences designed for speed, scale, and uncompromising security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Large Card 1 */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[32px] bg-white border border-slate-200/60 shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 p-10 scroll-animate opacity-0 translate-y-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full opacity-50 -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-primary text-3xl mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                  <BsCpu />
                </div>
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4">Modern Tech Stack</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-md">
                  Leveraging React, Next.js, and modern CSS frameworks to deliver lightning-fast, highly interactive applications that outpace the competition.
                </p>
                <div className="mt-auto flex flex-wrap gap-3">
                  {['React', 'Next.js', 'Tailwind CSS', 'TypeScript'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full bg-slate-50 text-sm font-bold text-slate-700 border border-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="group relative overflow-hidden rounded-[32px] bg-slate-900 border border-slate-800 shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.2)] transition-all duration-500 p-10 scroll-animate opacity-0 translate-y-10 delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <BsDatabase className="text-4xl text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-heading font-bold text-white mb-3">Data Security</h3>
                <p className="text-slate-400 leading-relaxed">
                  Enterprise-grade encryption and secure architecture patterns out of the box.
                </p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200/60 shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 p-10 scroll-animate opacity-0 translate-y-10 delay-200">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-100/50 rounded-tl-full -z-0"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <BsLightningCharge className="text-4xl text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">Hyper Optimized</h3>
                <p className="text-slate-600 leading-relaxed">
                  Perfect Core Web Vitals scores and sub-second load times.
                </p>
              </div>
            </div>

            {/* Medium Card */}
            <div className="md:col-span-3 lg:col-span-1 group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 p-10 scroll-animate opacity-0 translate-y-10 delay-300">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10 h-full flex flex-col">
                <BsCodeSlash className="text-4xl text-white/80 mb-6 group-hover:rotate-12 transition-transform duration-500" />
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Clean Architecture</h3>
                <p className="text-blue-100/80 leading-relaxed text-lg">
                  Maintainable, readable codebases built for long-term scalability and seamless team handoffs.
                </p>
                <div className="mt-auto">
                  <Link to="/contact" className="inline-flex items-center text-white font-bold group-hover:underline underline-offset-4 gap-2">
                    Review our practices <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            
             <div className="md:col-span-3 lg:col-span-2 group relative overflow-hidden rounded-[32px] bg-white border border-slate-200/60 shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 p-10 flex items-center scroll-animate opacity-0 translate-y-10 delay-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div>
                        <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4">Tailored Solutions</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Every business operates differently. We build custom logic and unique interfaces that map perfectly to your specific operational workflows.
                        </p>
                        <ul className="space-y-3">
                            {['Custom CRM Integrations', 'E-commerce Platforms', 'Internal Tooling'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                                    <BsCheck2Circle className="text-primary text-xl" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden md:flex justify-end items-center relative">
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl"></div>
                        <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-slate-100 w-full max-w-sm rotate-3 group-hover:rotate-0 transition-transform duration-500">
                             <div className="w-full h-4 bg-slate-100 rounded-full mb-4"></div>
                             <div className="w-3/4 h-4 bg-slate-100 rounded-full mb-6"></div>
                             <div className="flex gap-4">
                                 <div className="w-12 h-12 bg-blue-100 rounded-lg"></div>
                                 <div className="flex-1 space-y-2">
                                     <div className="w-full h-3 bg-slate-100 rounded-full"></div>
                                     <div className="w-1/2 h-3 bg-slate-100 rounded-full"></div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Development Process - Stepper */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-20 scroll-animate opacity-0 translate-y-10">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Methodology</span>
            <h2 className="text-[36px] md:text-[48px] font-heading font-extrabold text-slate-900 mb-6">The Path to Launch</h2>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[50%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-slate-100 via-primary/50 to-slate-100 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {[
                { step: '01', title: 'Discovery', desc: 'Deep dive into your business goals and technical requirements.' },
                { step: '02', title: 'Architecture', desc: 'Designing the database schema and system architecture.' },
                { step: '03', title: 'Development', desc: 'Agile sprints with weekly deliverables and feedback loops.' },
                { step: '04', title: 'Deployment', desc: 'Rigorous testing and seamless deployment to production.' }
              ].map((item, i) => (
                <div key={i} className="relative z-10 text-center group scroll-animate opacity-0 translate-y-10" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="w-24 h-24 mx-auto bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-[2rem] flex items-center justify-center text-primary font-heading font-extrabold text-3xl mb-8 border border-slate-100 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-500 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600">
                        {item.step}
                    </span>
                    <div className="absolute inset-0 border-2 border-primary/0 rounded-[2rem] group-hover:border-primary/20 transition-colors duration-500"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Website Excellence */}
      <section className="py-32 bg-slate-50 border-t border-slate-200/50">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-20 scroll-animate opacity-0 translate-y-10">
            <h2 className="text-[36px] md:text-[48px] font-heading font-extrabold text-slate-900 mb-6">Website Excellence</h2>
            <p className="text-xl text-slate-600 max-w-[700px] mx-auto leading-relaxed">
              We obsess over the details that transform a good website into a great one.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: BsDisplay, title: 'Responsive Design', desc: 'Flawless execution across all devices, ensuring your brand looks perfect on mobile, tablet, and desktop.', features: ['Fluid Grid Layouts', 'Adaptive Media', 'Touch Optimized'] },
                { icon: BsMegaphone, title: 'SEO Optimized', desc: 'Built from the ground up to rank. Clean semantic HTML and blazing fast load times that Google loves.', features: ['Semantic HTML5', 'Core Web Vitals', 'Structured Data'] },
                { icon: BsPalette, title: 'Brand Identity', desc: 'Custom UI/UX that captures your unique brand voice and drives higher engagement and conversion rates.', features: ['Custom UI Systems', 'Micro-Interactions', 'Typography Scales'] }
            ].map((card, i) => (
                <div key={i} className="group p-10 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 scroll-animate opacity-0 translate-y-10" style={{ transitionDelay: `${i * 150}ms` }}>
                    <div className="w-16 h-16 bg-blue-50/50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-500">
                        <card.icon className="text-3xl text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-8 h-24">{card.desc}</p>
                    <ul className="space-y-3">
                        {card.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact / CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <div className="max-w-[800px] mx-auto scroll-animate opacity-0 translate-y-10">
            <h2 className="text-[40px] md:text-[64px] font-heading font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">extraordinary?</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-[600px] mx-auto">
              Join the dozens of companies that trust us to build their mission-critical digital infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-20">
                <Link 
                  to="/contact"
                  className="px-10 py-5 bg-white text-slate-900 rounded-full font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
                >
                  Schedule a Consultation <BsArrowRight />
                </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">100+</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">98%</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">24/7</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default WebDevelopment;

