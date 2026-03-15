import React from 'react';
import { BsEnvelope, BsTelephone, BsGeoAlt, BsArrowRight } from 'react-icons/bs';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Info */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-primary border border-blue-200 text-xs font-bold tracking-wider uppercase">
              Get in Touch
            </div>
            <h1 className="text-[40px] sm:text-[48px] md:text-[64px] font-heading font-semibold text-text-dark mb-6 leading-[1.1] tracking-[-1px]">
              Let's build something <span className="text-primary">extraordinary</span> together.
            </h1>
            <p className="text-[16px] sm:text-[18px] text-text-light leading-[1.6] mb-12 max-w-[500px]">
              Ready to take your business to the next level? Our team is standing by to help you navigate your digital transformation.
            </p>

            <div className="space-y-8">
              <a href="mailto:aman.workk786@gmail.com" className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <BsEnvelope />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-light uppercase tracking-widest mb-1">Email Us</h3>
                  <p className="text-xl font-heading font-bold text-text-dark">aman.workk786@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918076993834" className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <BsTelephone />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-light uppercase tracking-widest mb-1">Call Us</h3>
                  <p className="text-xl font-heading font-bold text-text-dark">+91 8076993834</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-1/2">
            <div className="bg-slate-50/50 p-10 md:p-12 rounded-[32px] border border-slate-100 backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-dark/70 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-text-dark"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-dark/70 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-text-dark"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-dark/70 ml-1">Service Interested In</label>
                  <select className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-text-dark appearance-none">
                    <option>Web Development</option>
                    <option>Websites</option>
                    <option>Web Apps</option>
                    <option>Custom Softwares</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-dark/70 ml-1">Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-text-dark resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98]">
                  Send Message <BsArrowRight className="text-lg" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
