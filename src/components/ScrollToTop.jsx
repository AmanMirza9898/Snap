import React, { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          flex items-center justify-center w-12 h-12 rounded-full
          bg-primary border border-primary/20
          text-white text-3xl shadow-2xl shadow-blue-500/20
          transition-all duration-500 transform
          hover:bg-primary-hover hover:-translate-y-2 hover:shadow-blue-500/40
          ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}
        `}
        aria-label="Scroll to top"
      >
        <BsArrowUpShort />
      </button>
    </div>
  );
};

export default ScrollToTop;
