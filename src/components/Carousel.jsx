import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import jobsynccImg from '../assets/jobsyncc.png';
import lawnationImg from '../assets/lawnation.png';
import myskytripImg from '../assets/myskytrip.png';

const slides = [
  {
    id: 1,
    title: 'Job Syncc',
    description: 'AI-powered modern recruitment board',
    bg: '#eff6ff',
    image: jobsynccImg
  },
  {
    id: 2,
    title: 'Law Nation',
    description: 'Prime Times Journal for legal professionals',
    bg: '#fef2f2',
    image: lawnationImg
  },
  {
    id: 3,
    title: 'My Sky Trips',
    description: 'Premium travel experiences across India',
    bg: '#f0fdf4',
    image: myskytripImg
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-md bg-bg-white group">
      <div className="h-full relative overflow-hidden">
        <ul className="p-0 m-0 list-none flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <li className="min-w-full h-full flex items-center justify-center p-0" key={slide.id}>
              {slide.image ? (
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-center text-text-dark" style={{ backgroundColor: slide.bg }}>
                   <div className="p-10">
                      <h3 className="text-3xl mb-2 text-primary font-heading font-semibold">{slide.title}</h3>
                      <p className="text-base text-text-light mb-4">{slide.description}</p>
                   </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <button className="absolute top-1/2 -translate-y-1/2 bg-white/80 border-none cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-xl text-primary shadow-sm transition-all duration-150 z-10 hover:bg-white hover:shadow-md hover:text-primary-hover left-4 opacity-0 group-hover:opacity-100" onClick={goToPrevious}>
        <BsChevronLeft />
      </button>
      <button className="absolute top-1/2 -translate-y-1/2 bg-white/80 border-none cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-xl text-primary shadow-sm transition-all duration-150 z-10 hover:bg-white hover:shadow-md hover:text-primary-hover right-4 opacity-0 group-hover:opacity-100" onClick={goToNext}>
        <BsChevronRight />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-10">
        {slides.map((slide, slideIndex) => (
          <button
            key={slideIndex}
            className={`border-0 rounded-full w-2.5 h-2.5 cursor-pointer p-0 transition-all duration-150 ${currentIndex === slideIndex ? 'bg-primary scale-125' : 'bg-black/20'}`}
            onClick={() => goToSlide(slideIndex)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
