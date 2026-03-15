import React from 'react';
import { BsArrowRight, BsLayers, BsLock, BsSpeedometer2, BsAward, BsLightningCharge, BsCheck2Circle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import saasImg from '../assets/saas_dashboard.png';
import securityImg from '../assets/security_auth.png';

const WebApps = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-blue-100/30 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-primary border border-blue-200 text-xs font-bold tracking-wider uppercase">
            Modern Platforms
          </div>
          <h1 className="text-[40px] sm:text-[48px] md:text-[64px] font-heading font-semibold text-text-dark mb-6 leading-[1.1] tracking-[-1px] max-w-[900px] mx-auto">
            Interactive <span className="text-primary">Web Applications</span> for SaaS & Business
          </h1>
          <p className="text-[16px] sm:text-[18px] text-text-light leading-[1.6] mb-12 max-w-[700px] mx-auto">
            Complex logic, seamless user interfaces, and powerful backend systems. We turn your ambitious ideas into functional digital products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 gap-3"
            >
              Consult an Expert <BsArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col gap-32">
            {/* SaaS Dashboards */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 animate-[fadeInLeft_0.8s_ease-out_forwards]">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 shadow-sm">
                  <BsLayers />
                </div>
                <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 tracking-tight">Enterprise SaaS <br />Dashboards & Portals</h2>
                <p className="text-lg text-text-light leading-relaxed mb-6">
                  We specialize in building heavy-duty applications that handle high-concurrency and complex state management. Our dashboards are designed to provide clear, actionable insights from massive datasets.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Real-time data synchronization with WebSockets',
                    'Complex multi-level user permissions & RBAC',
                    'Customizable widget-based interface systems',
                    'Seamless third-party API & service integrations'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-text-dark font-medium">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-primary text-xs">
                        <BsCheck2Circle />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative group animate-[fadeInRight_0.8s_ease-out_forwards]">
                <div className="absolute inset-0 bg-primary/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-30"></div>
                <div className="relative overflow-hidden rounded-[40px] border border-slate-100 shadow-2xl">
                  <img 
                    src={saasImg} 
                    alt="SaaS Dashboard" 
                    className="w-full h-auto object-cover transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Security */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="md:w-1/2 animate-[fadeInRight_0.8s_ease-out_forwards]">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 shadow-sm">
                  <BsLock />
                </div>
                <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 tracking-tight">Military Grade <br />Security Architecture</h2>
                <p className="text-lg text-text-light leading-relaxed mb-6">
                  With cyber threats evolving daily, we build software with a "Security First" mindset. Every application undergoes rigorous penetration testing and follows the highest industry standards.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <h4 className="font-bold text-text-dark mb-1">OAuth 2.1 / SAML</h4>
                    <p className="text-xs text-text-light">Advanced authentication systems.</p>
                  </li>
                  <li className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <h4 className="font-bold text-text-dark mb-1">AES-256 Encryption</h4>
                    <p className="text-xs text-text-light">End-to-end data protection.</p>
                  </li>
                  <li className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
                    <h4 className="font-bold text-text-dark mb-1">Compliance Ready</h4>
                    <p className="text-xs text-text-light">GDPR, HIPAA, & SOC2 focal points.</p>
                  </li>
                  <li className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
                    <h4 className="font-bold text-text-dark mb-1">XSS/CSRF Protection</h4>
                    <p className="text-xs text-text-light">Hardened frontend & API defensive.</p>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 relative group animate-[fadeInLeft_0.8s_ease-out_forwards]">
                <div className="absolute inset-0 bg-blue-400/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-30"></div>
                <div className="relative overflow-hidden rounded-[40px] border border-slate-100 shadow-2xl">
                  <img 
                    src={securityImg} 
                    alt="Advanced Security" 
                    className="w-full h-auto object-cover transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-text-dark mb-6">The Technology <br />Behind Our Apps</h2>
              <p className="text-lg text-text-light leading-relaxed mb-8">
                We use a curated stack of modern technologies designed for performance, reliability, and developer experience. This ensures your application stays fast and maintainable for years to come.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary font-bold">FE</div>
                  <div className="text-sm font-bold text-text-dark">React / Next.js</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary font-bold">BE</div>
                  <div className="text-sm font-bold text-text-dark">Node / Python</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary font-bold">DB</div>
                  <div className="text-sm font-bold text-text-dark">PostgreSQL / Redis</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary font-bold">CL</div>
                  <div className="text-sm font-bold text-text-dark">AWS / Vercel</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-2xl shadow-blue-500/5 border border-slate-100">
              <h3 className="text-2xl font-bold text-text-dark mb-6">Why Choose Our Apps?</h3>
              <div className="space-y-6">
                {[
                  { title: 'Blazing Fast Performance', desc: 'Optimized bundle sizes and server-side rendering for instant page transitions.' },
                  { title: 'Offline-First Capabilities', desc: 'Progressive Web App (PWA) features that keep your app running without stable internet.' },
                  { title: 'Universal Accessibility', desc: 'WCAG 2.1 compliant interfaces that provide an inclusive experience for all users.' }
                ].map((feature, idx) => (
                  <div key={idx} className="border-l-4 border-primary pl-6">
                    <h4 className="font-bold text-text-dark mb-1">{feature.title}</h4>
                    <p className="text-sm text-text-light leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <BsSpeedometer2 className="text-4xl text-primary mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-text-dark mb-2">99.9%</div>
              <div className="text-sm font-bold text-text-light uppercase tracking-widest">Uptime Optimization</div>
            </div>
            <div>
              <BsAward className="text-4xl text-primary mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-text-dark mb-2">Modern</div>
              <div className="text-sm font-bold text-text-light uppercase tracking-widest">Tech Traditions</div>
            </div>
            <div>
              <BsLightningCharge className="text-4xl text-primary mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-text-dark mb-2">&lt; 1s</div>
              <div className="text-sm font-bold text-text-light uppercase tracking-widest">Initial Load Time</div>
            </div>
            <div>
              <BsCheck2Circle className="text-4xl text-primary mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-text-dark mb-2">24/7</div>
              <div className="text-sm font-bold text-text-light uppercase tracking-widest">Seamless Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[900px] text-center bg-slate-900 py-20 rounded-[48px] shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
          
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Have a breakthrough idea?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Let's discuss how we can turn your concept into a market-leading web application.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-10 py-4 bg-primary text-white rounded-full font-bold shadow-xl hover:-translate-y-1 transition-all duration-300 gap-3"
          >
            Launch Your Project <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebApps;
