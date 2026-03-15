import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#18181b]">
      <div className="container mx-auto px-6 max-w-[800px] flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-white font-heading font-semibold mb-4 tracking-tight">
            Ready to Transform Your Online<br />Presence?
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-base max-w-[500px] mx-auto">
            Send us a brief about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="w-full">
          <form className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] sm:text-[11px] font-semibold text-gray-500 tracking-[1.5px] uppercase ml-1">
                  FULL NAME
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  required 
                  className="bg-[#27272a] border border-[#3f3f46] text-white text-[15px] rounded-lg px-5 py-3.5 focus:outline-none focus:border-primary transition-colors placeholder:text-gray-500"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] sm:text-[11px] font-semibold text-gray-500 tracking-[1.5px] uppercase ml-1">
                  EMAIL ADDRESS
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@company.com" 
                  required 
                  className="bg-[#27272a] border border-[#3f3f46] text-white text-[15px] rounded-lg px-5 py-3.5 focus:outline-none focus:border-primary transition-colors placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-10">
              <label htmlFor="brief" className="text-[10px] sm:text-[11px] font-semibold text-gray-500 tracking-[1.5px] uppercase ml-1">
                PROJECT BRIEF
              </label>
              <textarea 
                id="brief" 
                rows="4" 
                placeholder="Tell us about your goals and timeline..." 
                required
                className="bg-[#27272a] border border-[#3f3f46] text-white text-[15px] rounded-lg px-5 py-4 focus:outline-none focus:border-primary transition-colors placeholder:text-gray-500 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button 
                type="submit" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-[15px] bg-primary text-white hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.2)] transition-all duration-150"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
