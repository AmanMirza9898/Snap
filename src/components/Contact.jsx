import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsEnvelope, BsTelephone, BsGeoAlt } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/2">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">Contact Us</span>
                </div>
                <h2 className="text-5xl md:text-8xl text-white font-heading font-black leading-[0.85] tracking-tighter uppercase mb-10">
                  Let's Build <br />
                  <span className="text-primary italic">Together</span>
                </h2>
                
                <div className="space-y-10 mt-16">
                   <div className="flex items-center gap-8 group">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                         <BsEnvelope />
                      </div>
                      <div>
                         <h4 className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1">Email Us</h4>
                         <p className="text-white text-xl font-bold">hello@snapstudio.com</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-8 group">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                         <BsTelephone />
                      </div>
                      <div>
                         <h4 className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1">Call Us</h4>
                         <p className="text-white text-xl font-bold">+1 (555) 000-0000</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-8 group">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                         <BsGeoAlt />
                      </div>
                      <div>
                         <h4 className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1">Visit Us</h4>
                         <p className="text-white text-xl font-bold">Dubai, UAE</p>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-1/2">
             <div className="bg-bg-light p-10 md:p-16 rounded-[48px] border border-white/5 shadow-2xl relative">
                <form className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-gray-500 text-[11px] font-bold uppercase tracking-widest ml-4">Name</label>
                         <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-gray-500 text-[11px] font-bold uppercase tracking-widest ml-4">Email</label>
                         <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all" placeholder="john@example.com" />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-gray-500 text-[11px] font-bold uppercase tracking-widest ml-4">Message</label>
                      <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                   </div>

                   <button className="w-full py-5 rounded-full bg-primary text-white font-extrabold uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-4">
                      Send Message
                      <BsArrowRight className="text-xl" />
                   </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
