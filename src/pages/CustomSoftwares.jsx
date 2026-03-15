import React from 'react';
import { BsArrowRight, BsGear, BsGraphUp, BsShieldCheck, BsTerminal } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import heroImg from '../assets/custom_software.png';

const CustomSoftwares = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-blue-100/30 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-[60%] animate-[fadeInLeft_0.8s_ease-out_forwards]">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-primary border border-blue-200 text-xs font-bold tracking-wider uppercase">
                Operational Excellence
              </div>
              <h1 className="text-[40px] sm:text-[48px] md:text-[64px] font-heading font-semibold text-text-dark mb-6 leading-[1.1] tracking-[-1px]">
                Bespoke <span className="text-primary">Software Solutions</span> Tailored to You
              </h1>
              <p className="text-[16px] sm:text-[18px] text-text-light leading-[1.6] mb-12 max-w-[600px]">
                We build custom software that automates workflows, integrates legacy systems, and provides the competitive edge your business needs.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 gap-3"
              >
                Start Free Consultation <BsArrowRight />
              </Link>
            </div>
            <div className="md:w-[40%] relative group animate-[fadeInRight_0.8s_ease-out_forwards] flex justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-[40px] blur-3xl group-hover:blur-[100px] transition-all duration-700 opacity-20"></div>
              <div className="relative rounded-[40px] overflow-hidden border border-white shadow-2xl max-w-[450px]">
                <img 
                  src={heroImg} 
                  alt="Custom Software Solutions" 
                  className="w-full h-auto object-cover transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex gap-8 group">
              <div className="shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                <BsGear />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-text-dark mb-3">Workflow Automation</h3>
                <p className="text-text-light leading-relaxed">
                  Eliminate repetitive tasks and human error. We build intelligent systems that handle your day-to-day operations automatically.
                </p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                <BsGraphUp />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-text-dark mb-3">Data Analytics & Reporting</h3>
                <p className="text-text-light leading-relaxed">
                  Turn your raw data into actionable insights with custom dashboards and real-time reporting tools tailored to your KPIs.
                </p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                <BsTerminal />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-text-dark mb-3">Legacy Integration</h3>
                <p className="text-text-light leading-relaxed">
                  Bridge the gap between your existing systems and new technologies. We ensure seamless data flow across your entire infrastructure.
                </p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                <BsShieldCheck />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-text-dark mb-3">Enterprise Security</h3>
                <p className="text-text-light leading-relaxed">
                  Bank-grade security for your internal tools. We implement rigorous testing and security protocols to protect your proprietary data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50/30">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="bg-white p-12 md:p-20 rounded-[32px] md:rounded-[64px] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-[500px]">
              <h2 className="text-4xl font-heading font-bold text-text-dark mb-6">Need a custom solution?</h2>
              <p className="text-text-light text-lg">
                Let's architect a software system that perfectly aligns with your business processes and scales with your growth.
              </p>
            </div>
            <Link 
              to="/contact"
              className="shrink-0 inline-flex items-center px-10 py-5 bg-primary text-white rounded-full font-bold shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-300 gap-3"
            >
              Book a Strategy Call <BsArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwares;
