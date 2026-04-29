import React, { useEffect, useRef } from 'react';
import { BsArrowRight, BsLayers, BsLock, BsSpeedometer2, BsAward, BsLightningCharge, BsCheck2Circle, BsCode, BsGlobe2, BsTerminal, BsDatabase } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import saasImg from '../assets/saas_dashboard.png';
import securityImg from '../assets/security_auth.png';

const WebApps = () => {
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
    <div className="pt-24 min-h-screen bg-[#F8FAFC] selection:bg-indigo-500/30 selection:text-indigo-900 overflow-hidden">
      
      {/* Decorative Background */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-indigo-600 text-sm font-bold tracking-wider uppercase animate-[fadeInDown_0.8s_ease-out_forwards]">
            <BsCode className="text-lg" />
            <span>Advanced Web Applications</span>
          </div>
          
          <h1 className="text-[44px] sm:text-[56px] md:text-[72px] font-heading font-extrabold text-slate-900 mb-8 leading-[1.05] tracking-tight max-w-[900px] mx-auto animate-[fadeInUp_1s_ease-out_forwards]">
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Digital Platforms</span> for Modern Business
          </h1>
          
          <p className="text-[18px] sm:text-[20px] text-slate-600 leading-[1.7] mb-12 max-w-[700px] mx-auto font-medium animate-[fadeInUp_1.2s_ease-out_forwards]">
            We architect complex logic, seamless user interfaces, and powerful backend systems. Turn your ambitious ideas into scalable, functional digital products.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 animate-[fadeInUp_1.4s_ease-out_forwards]">
            <Link 
              to="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-indigo-600 rounded-full overflow-hidden hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_8px_40px_rgba(79,70,229,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center gap-3">
                Consult an Architect <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col gap-32">
            
            {/* SaaS Dashboards - Dark Theme Panel */}
            <div className="flex flex-col lg:flex-row items-center gap-16 bg-slate-900 rounded-[48px] p-10 lg:p-16 border border-slate-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group scroll-animate opacity-0 translate-y-10">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[100px] rounded-full group-hover:bg-indigo-500/30 transition-colors duration-700"></div>
              
              <div className="lg:w-1/2 relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-indigo-400 text-3xl mb-8 backdrop-blur-md border border-white/5">
                  <BsLayers />
                </div>
                <h2 className="text-[36px] md:text-[44px] font-heading font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                  Enterprise SaaS <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Dashboards & Portals</span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  We specialize in building heavy-duty applications that handle high-concurrency and complex state management. Our dashboards provide clear, actionable insights from massive datasets.
                </p>
                <div className="space-y-5 mb-8">
                  {[
                    'Real-time data synchronization with WebSockets',
                    'Complex multi-level user permissions & RBAC',
                    'Customizable widget-based interface systems',
                    'Seamless third-party API & service integrations'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-200 font-medium bg-white/5 p-3 rounded-xl border border-white/5">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm shrink-0">
                        <BsCheck2Circle />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 relative z-10">
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)] transition-shadow duration-700">
                  <img 
                    src={saasImg} 
                    alt="SaaS Dashboard" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 border-[4px] border-indigo-500/20 rounded-[32px] pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Advanced Security - Light/Glass Theme */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 relative scroll-animate opacity-0 translate-y-10">
              <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/10 blur-[100px] rounded-full -translate-y-1/2"></div>
              
              <div className="lg:w-1/2 relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-violet-600 text-3xl mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100">
                  <BsLock />
                </div>
                <h2 className="text-[36px] md:text-[44px] font-heading font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  Military Grade <br /><span className="text-violet-600">Security Architecture</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  With cyber threats evolving daily, we build software with a "Security First" mindset. Every application undergoes rigorous penetration testing and follows the highest industry standards.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'OAuth 2.1 / SAML', desc: 'Advanced auth systems', bg: 'bg-white' },
                    { title: 'AES-256 Encryption', desc: 'End-to-end protection', bg: 'bg-white' },
                    { title: 'Compliance Ready', desc: 'GDPR, HIPAA, & SOC2', bg: 'bg-violet-50' },
                    { title: 'XSS/CSRF Protection', desc: 'Hardened API defense', bg: 'bg-violet-50' }
                  ].map((card, i) => (
                    <div key={i} className={`p-5 ${card.bg} border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow`}>
                      <h4 className="font-bold text-slate-900 mb-1">{card.title}</h4>
                      <p className="text-sm text-slate-500">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 relative z-10 group">
                <div className="relative rounded-[40px] overflow-hidden border-[8px] border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                  <img 
                    src={securityImg} 
                    alt="Advanced Security" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-slate-900 p-5 rounded-2xl shadow-xl border border-slate-700 hidden md:flex items-center gap-4 animate-[bounce_4s_infinite]">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xl">
                        <BsLock />
                    </div>
                    <div>
                        <div className="text-white font-bold">Encrypted</div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider">End-to-End</div>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Stack Section - Bento Style */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 scroll-animate opacity-0 translate-y-10">
              <h2 className="text-[36px] md:text-[48px] font-heading font-extrabold text-slate-900 mb-6 leading-tight">
                The Technology <br />Behind Our Apps
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We use a curated stack of modern technologies designed for performance, reliability, and developer experience. This ensures your application stays fast and maintainable for years to come.
              </p>
              
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/60 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10">Architecture Highlights</h3>
                  <div className="space-y-5 relative z-10">
                    {[
                      { title: 'Blazing Fast Performance', desc: 'Optimized bundle sizes and server-side rendering.' },
                      { title: 'Offline-First Capabilities', desc: 'Progressive Web App (PWA) features.' },
                      { title: 'Universal Accessibility', desc: 'WCAG 2.1 compliant interfaces for all users.' }
                    ].map((feature, idx) => (
                      <div key={idx} className="border-l-4 border-indigo-500 pl-5">
                        <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 scroll-animate opacity-0 translate-y-10 delay-200">
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:pl-10">
                   {[
                       { icon: BsGlobe2, label: 'Frontend', tech: 'React / Next.js', color: 'text-blue-500', bg: 'bg-blue-50' },
                       { icon: BsTerminal, label: 'Backend', tech: 'Node / Python', color: 'text-green-600', bg: 'bg-green-50' },
                       { icon: BsDatabase, label: 'Database', tech: 'PostgreSQL', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                       { icon: BsLayers, label: 'Caching', tech: 'Redis', color: 'text-red-500', bg: 'bg-red-50' },
                       { icon: BsCode, label: 'Language', tech: 'TypeScript', color: 'text-blue-600', bg: 'bg-blue-50' },
                       { icon: BsLightningCharge, label: 'Cloud', tech: 'AWS / Vercel', color: 'text-yellow-600', bg: 'bg-yellow-50' },
                   ].map((item, i) => (
                       <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                           <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                               <item.icon className={`text-2xl ${item.color}`} />
                           </div>
                           <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</div>
                           <div className="font-bold text-slate-900">{item.tech}</div>
                       </div>
                   ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
                { icon: BsSpeedometer2, value: '99.9%', label: 'Uptime Optimization' },
                { icon: BsAward, value: 'Modern', label: 'Tech Traditions' },
                { icon: BsLightningCharge, value: '< 1s', label: 'Initial Load Time' },
                { icon: BsCheck2Circle, value: '24/7', label: 'Seamless Monitoring' }
            ].map((metric, i) => (
                <div key={i} className="scroll-animate opacity-0 translate-y-10" style={{ transitionDelay: `${i * 100}ms` }}>
                    <metric.icon className="text-3xl text-indigo-400 mx-auto mb-4 opacity-80" />
                    <div className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-2">{metric.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{metric.label}</div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-[1000px]">
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-900 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.3)] scroll-animate opacity-0 translate-y-10">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[80px] rounded-full"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-violet-400/20 blur-[80px] rounded-full"></div>
                
                <div className="relative z-10">
                    <h2 className="text-[40px] md:text-[56px] font-heading font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                        Have a breakthrough idea?
                    </h2>
                    <p className="text-indigo-100 mb-10 text-xl max-w-[600px] mx-auto leading-relaxed">
                        Let's discuss how we can turn your concept into a market-leading, highly scalable web application.
                    </p>
                    <Link 
                        to="/contact"
                        className="inline-flex items-center px-10 py-5 bg-white text-indigo-900 rounded-full font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 gap-3 text-lg"
                    >
                        Launch Your Project <BsArrowRight />
                    </Link>
                </div>
            </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default WebApps;
