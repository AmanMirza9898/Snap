import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "The level of technical expertise and design sophistication Snap brought to our project exceeded all expectations. They are true partners in innovation.",
    name: "Marcus Sterling",
    title: "CEO, NEXA SOLUTIONS",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "Working with Snap transformed our digital presence. Our conversion rates increased by 45% within the first three months of launching the new site.",
    name: "Elena Rodriguez",
    title: "FOUNDER, GLOBACENTRIC",
    avatar: "https://i.pravatar.cc/150?img=47"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl text-text-dark font-heading font-semibold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-text-light text-base">
            Real results from exceptional partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div className="bg-bg-light p-12 rounded-2xl transition-transform duration-300 flex flex-col hover:-translate-y-2 hover:shadow-lg animate-[fadeIn_0.6s_ease-out_forwards]" key={index} style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}>
              <div className="flex text-blue-200 text-2xl mb-6">
                 <FaQuoteLeft />
                 <FaQuoteLeft className="-ml-2 opacity-50" />
              </div>
              <p className="text-base leading-[1.6] italic mb-10 text-text-dark grow">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex flex-col">
                  <h4 className="font-heading font-bold text-sm text-text-dark">{testimonial.name}</h4>
                  <span className="text-[10px] text-text-light tracking-[0.5px] uppercase">{testimonial.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
