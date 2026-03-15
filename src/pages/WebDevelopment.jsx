import React from 'react';
import { BsCodeSlash, BsCheck2Circle, BsArrowRight, BsCpu, BsDatabase, BsLightningCharge, BsDisplay, BsMegaphone, BsPalette } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import websitesImg from '../assets/websites.jpg';

const WebDevelopment = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-100/20 blur-[120px] rounded-full translate-y-1/2"></div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 lg:max-w-[600px] animate-[fadeInLeft_0.8s_ease-out_forwards]">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-primary border border-blue-200 text-xs font-bold tracking-wider uppercase">
                Core Expertise
              </div>
              <h1 className="text-[40px] sm:text-[48px] md:text-[64px] font-heading font-semibold text-text-dark mb-6 leading-[1.1] tracking-[-1px]">
                Enterprise <span className="text-primary">Web & Digital</span> Solutions
              </h1>
              <p className="text-[16px] sm:text-[18px] text-text-light leading-[1.6] mb-12 max-w-[600px]">
                From high-converting business websites to complex enterprise applications, we build robust digital infrastructures that drive growth and operational excellence.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 gap-3"
              >
                Start Your Project <BsArrowRight />
              </Link>
            </div>

            <div className="flex-1 relative animate-[fadeInRight_1s_ease-out_forwards]">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full animate-pulse [animation-delay:1s]"></div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
                <div className="relative overflow-hidden rounded-[40px] border border-white/50 shadow-2xl shadow-blue-500/10">
                  <img 
                    src={websitesImg} 
                    alt="Web Development" 
                    className="w-full h-auto object-cover transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-[bounce_3s_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-[10px] font-bold text-text-dark uppercase tracking-wider">Live Preview</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-[bounce_3.5s_infinite_1s]">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-[10px] font-bold text-text-dark uppercase tracking-wider">Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="animate-[fadeInLeft_0.8s_ease-out_forwards]">
              <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 leading-tight">
                Our Approach to <br />Custom Development
              </h2>
              <p className="text-lg text-text-light leading-[1.8] mb-8">
                Every business is unique, and your software should be too. We don't believe in one-size-fits-all solutions. Our development process is deeply collaborative, ensuring that every line of code serves your strategic objectives.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Scalable Microservices', desc: 'Architecture that grows with your user base without performance hits.' },
                  { title: 'High-Performance Frontends', desc: 'React & Next.js applications that load in under a second.' },
                  { title: 'Secure Backend Systems', desc: 'Robust Node.js & Python environments with military-grade security.' },
                  { title: 'Cloud-Native Deployment', desc: 'Fully automated CI/CD pipelines on AWS, Azure, or Google Cloud.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-primary mt-1">
                      <BsCheck2Circle />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-dark">{item.title}</h4>
                      <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-[fadeInRight_0.8s_ease-out_forwards]">
              <div className="p-8 bg-blue-50/50 rounded-[32px] border border-blue-100 hover:bg-blue-100/50 transition-colors duration-300">
                <BsCpu className="text-3xl text-primary mb-4" />
                <h4 className="font-bold text-text-dark mb-2">Modern Stack</h4>
                <p className="text-sm text-text-light">Using the latest tech for longevity and speed.</p>
              </div>
              <div className="p-8 bg-slate-50/50 rounded-[32px] border border-slate-100 mt-8 hover:bg-slate-100/50 transition-colors duration-300">
                <BsDatabase className="text-3xl text-primary mb-4" />
                <h4 className="font-bold text-text-dark mb-2">Secure Data</h4>
                <p className="text-sm text-text-light">Enterprise encryption and data safety first.</p>
              </div>
              <div className="p-8 bg-slate-50/50 rounded-[32px] border border-slate-100 hover:bg-slate-100/50 transition-colors duration-300">
                <BsLightningCharge className="text-3xl text-primary mb-4" />
                <h4 className="font-bold text-text-dark mb-2">Optimized</h4>
                <p className="text-sm text-text-light">Lightning fast performance out of the box.</p>
              </div>
              <div className="p-8 bg-blue-50/50 rounded-[32px] border border-blue-100 mt-8 hover:bg-blue-100/50 transition-colors duration-300">
                <BsCodeSlash className="text-3xl text-primary mb-4" />
                <h4 className="font-bold text-text-dark mb-2">Clean Code</h4>
                <p className="text-sm text-text-light">Maintainable, readable, and scalable patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-slate-50 overflow-hidden relative border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-4">Our Strategic Process</h2>
            <p className="text-text-light text-lg max-w-[600px] mx-auto">A systematic approach to turning your ideas into a digital reality.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"></div>
            
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your business goals, target audience, and core requirements.' },
              { step: '02', title: 'Strategy', desc: 'Defining the tech stack, architecture, and UI/UX roadmap for your project.' },
              { step: '03', title: 'Build', desc: 'Agile development with continuous feedback loops and quality assurance.' },
              { step: '04', title: 'Deploy', desc: 'Seamless launch with cloud optimization and post-delivery support.' }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white shadow-lg shadow-blue-500/5 rounded-2xl flex items-center justify-center text-primary font-heading font-bold text-2xl mb-6 mx-auto border border-slate-100">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-text-dark mb-3">{item.title}</h4>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Excellence */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-4">Website Excellence</h2>
            <p className="text-text-light text-lg max-w-[600px] mx-auto">Providing a perfect balance between stunning aesthetics and peak performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[32px] hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group">
              <BsDisplay className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-text-dark mb-4">Responsive Design</h3>
              <p className="text-text-light leading-relaxed mb-6">
                We ensure your website looks and functions perfectly across all devices, from massive 4K monitors to the latest mobile phones.
              </p>
              <ul className="space-y-2 text-sm text-text-light italic">
                <li>• Fluid Grid Layouts</li>
                <li>• Adaptive Image Loading</li>
                <li>• Touch-Optimized Navigation</li>
              </ul>
            </div>

            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[32px] hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group">
              <BsMegaphone className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-text-dark mb-4">SEO & Conversion</h3>
              <p className="text-text-light leading-relaxed mb-6">
                A beautiful site is useless if it can't be found. We bake SEO best practices into every line of code to help you rank higher.
              </p>
              <ul className="space-y-2 text-sm text-text-light italic">
                <li>• Semantic HTML5 Markup</li>
                <li>• Core Web Vitals Optimization</li>
                <li>• Local & Technical SEO</li>
              </ul>
            </div>

            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[32px] hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group">
              <BsPalette className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-text-dark mb-4">Brand Identity</h3>
              <p className="text-text-light leading-relaxed mb-6">
                Your website is your digital storefront. We create unique, custom designs that capture your brand's unique voice and values.
              </p>
              <ul className="space-y-2 text-sm text-text-light italic">
                <li>• Targeted UI Elements</li>
                <li>• Engaging Micro-Interactions</li>
                <li>• Custom Typography & Icons</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact / Final Note */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-dark mb-8 tracking-tight">
              We don't just write code.<br /> We <span className="text-primary">solve business problems.</span>
            </h2>
            <p className="text-lg text-text-light leading-relaxed mb-10">
              Our team of expert developers and designers are committed to delivering excellence. Whether you're a startup looking for an MVP or an established enterprise needing a complex system overhaul, we have the skills and experience to bring your vision to life.
            </p>
            <div className="flex justify-center gap-12 text-center border-t border-slate-200 pt-10">
              <div>
                <div className="text-3xl font-heading font-bold text-primary">100+</div>
                <div className="text-xs font-bold text-text-light uppercase tracking-widest mt-1">Projects Launched</div>
              </div>
              <div className="w-[1px] bg-slate-200"></div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">98%</div>
                <div className="text-xs font-bold text-text-light uppercase tracking-widest mt-1">Client Satisfaction</div>
              </div>
              <div className="w-[1px] bg-slate-200"></div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">24/7</div>
                <div className="text-xs font-bold text-text-light uppercase tracking-widest mt-1">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;
