import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsList, BsX, BsChevronDown } from 'react-icons/bs';
import snapLogo from '../assets/snap_logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle scroll to top when changing routes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: null }, // Handled by dropdown/accordion
    { name: 'Process', path: '/#process' },
    { name: 'Work', path: '/#work' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Web Apps', path: '/services/web-apps' },
    { name: 'Custom Softwares', path: '/services/custom-softwares' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMenuOpen ? 'py-4 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'py-7 bg-transparent'}`}>
        <div className="container flex items-center justify-between mx-auto px-6 max-w-[1200px]">
          {/* Brand/Logo */}
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer group relative z-[110]">
            <img src={snapLogo} alt="Snap Logo" className="h-9 w-auto group-hover:scale-105 transition-transform" />
            <span className="font-heading font-black text-[26px] tracking-tighter bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400 bg-[length:300%_auto] animate-gradient bg-clip-text text-transparent ml-0.5 inline-block py-1">Snap</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-10">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link 
                    to={item.path || '#'} 
                    className="relative font-medium text-[15px] text-text-light group-hover:text-primary transition-colors duration-200 py-1 flex items-center gap-1"
                  >
                    {item.name}
                    {item.name === 'Services' && <BsChevronDown className="text-[10px] transform group-hover:rotate-180 transition-transform duration-300" />}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  
                  {/* Services Dropdown */}
                  {item.name === 'Services' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[220px] bg-white/90 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-xl shadow-blue-500/10 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <div className="flex flex-col gap-1">
                        {services.map((sub) => (
                          <Link 
                            key={sub.name} 
                            to={sub.path}
                            className="px-4 py-2.5 rounded-xl text-[14px] text-text-light hover:bg-blue-50 hover:text-primary transition-all duration-200 font-medium"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-7 py-2.5 rounded-full font-bold text-[14px] bg-primary text-white overflow-hidden group hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-text-dark text-2xl relative z-[110]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <BsX /> : <BsList />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Menu Content */}
        <div className={`absolute right-4 top-24 left-4 bg-white border border-slate-100 rounded-[32px] shadow-2xl p-8 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-10 scale-95 opacity-0'}`}>
          <nav>
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.name === 'Services' ? (
                    <div className="space-y-4">
                      <button 
                        onClick={() => setActiveAccordion(activeAccordion === 'services' ? null : 'services')}
                        className="flex items-center justify-between w-full text-2xl font-heading font-bold text-text-dark"
                      >
                        {item.name}
                        <BsChevronDown className={`text-sm transition-transform duration-300 ${activeAccordion === 'services' ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === 'services' ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col gap-4 pl-4 border-l-2 border-blue-50">
                          {services.map((sub) => (
                            <Link 
                              key={sub.name} 
                              to={sub.path}
                              className="text-lg font-medium text-text-light hover:text-primary transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.path}
                      className="text-2xl font-heading font-bold text-text-dark hover:text-primary transition-colors block"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <Link 
                to="/contact"
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg bg-primary text-white shadow-xl shadow-blue-500/25 active:scale-[0.98] transition-all"
              >
                Start Your Project
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
