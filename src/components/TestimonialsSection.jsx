// components/TestimonialsSection.jsx
import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../portfolioData';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
            What People <span className="font-bold text-emerald-600">Say</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6 sm:mb-8"></div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Testimonials from colleagues, clients, and team members I've had the pleasure to work with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div key={testimonial.name} className="bg-slate-50 p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-emerald-400/20 hover:ring-2 hover:ring-emerald-400/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-slate-500">{testimonial.position}</div>
                  <div className="text-xs text-emerald-600">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex text-emerald-400 mt-3 sm:mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
