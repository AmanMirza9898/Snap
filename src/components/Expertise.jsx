import React from 'react';
import { BsCodeSlash, BsCart, BsGrid1X2, BsServer, BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <BsCodeSlash />,
    title: 'Custom Web\nDevelopment',
    description: 'Bespoke websites and enterprise applications tailored to your specific business infrastructure and goals.',
    path: '/services/web-development'
  },
  {
    icon: <BsServer />,
    title: 'Modern\nWeb Apps',
    description: 'Scalable, secure, and conversion-optimized interactive platforms that drive growth.',
    path: '/services/web-apps'
  },
  {
    icon: <BsCart />,
    title: 'Custom\nSoftwares',
    description: 'Seamless connectivity between your platforms and essential third-party services and data.',
    path: '/services/custom-softwares'
  }
];

const Expertise = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Soft Gradient Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/40 blur-[150px] -z-10 rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-50/30 blur-[130px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-[800px] mx-auto mb-20 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-50/80 backdrop-blur-sm text-primary border border-blue-100/50 text-[11px] font-bold tracking-[0.2em] uppercase">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl text-text-dark mb-6 tracking-tight font-heading font-extrabold leading-[1.1]">
            Digital Solutions <span className="text-primary">Redefined</span>
          </h2>
          <p className="text-text-light text-lg md:text-xl leading-relaxed font-medium opacity-80">
            We blend aesthetic precision with technical excellence to build <br className="hidden md:block" /> the next generation of digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative p-10 bg-white border border-slate-100 rounded-[40px] flex flex-col shadow-sm animate-[fadeInUp_0.8s_ease-out_forwards]" 
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10 w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-primary text-2xl shadow-sm">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl mb-5 text-text-dark font-heading font-bold leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
                
                <p className="text-[16px] text-text-light leading-[1.8] mb-10 font-medium opacity-80">
                  {service.description}
                </p>
                
                <Link 
                  to={service.path}
                  className="mt-auto flex items-center text-primary font-bold text-xs tracking-[0.1em] uppercase hover:underline"
                >
                  Explore Service <BsArrowRight className="ml-2 text-lg" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
