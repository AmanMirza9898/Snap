import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';

const projects = [
  {
    id: 1,
    title: 'Nexa Solutions',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    color: '#E31E24'
  },
  {
    id: 2,
    title: 'GlobeCentric',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    color: '#111111'
  },
  {
    id: 3,
    title: 'Apex Dynamics',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop',
    color: '#E31E24'
  },
  {
    id: 4,
    title: 'Cloud Nine',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    color: '#111111'
  }
];

const categories = ['All', 'E-commerce', 'SaaS', 'Web App', 'Brand Identity'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-grid-white opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-[600px]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">Our Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-8xl text-white font-heading font-black leading-[0.85] tracking-tighter uppercase">
              Showcasing <br />
              <span className="text-primary italic">Innovation</span>
            </h2>
          </motion.div>

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[12px] font-bold tracking-widest uppercase transition-all duration-300 ${activeCategory === cat ? 'bg-primary text-white' : 'bg-bg-light text-gray-400 border border-white/5 hover:border-white/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden bg-bg-light border border-white/5 cursor-pointer"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-2">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                      <BsArrowUpRight />
                    </div>
                  </div>
                </div>

                {/* Corner Label */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 text-xs font-bold group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                  0{project.id}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
          <button className="group inline-flex items-center gap-4 px-10 py-5 rounded-full border border-white/10 hover:border-primary/50 text-white font-extrabold uppercase tracking-widest text-[13px] transition-all duration-300">
            View All Projects
            <BsArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
