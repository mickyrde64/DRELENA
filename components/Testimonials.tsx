import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Maria Papadopoulos',
      text: 'Dr. Elena is the most gentle dentist I have ever visited. The clinic is modern and the staff speaks perfect English and Greek.',
      rating: 5
    },
    {
      id: '2',
      name: 'Dmitry Ivanov',
      text: 'Excellent service! Very professional approach to implants. Highly recommended for anyone looking for quality treatment.',
      rating: 5
    },
    {
      id: '3',
      name: 'Sarah Jenkins',
      text: 'My kids actually enjoy going to the dentist now thanks to Dr. Elena. She has a wonderful way with children.',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-teal-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Patient Stories</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="text-teal-400 mb-4 opacity-50" size={32} />
              <p className="text-teal-50 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="font-bold text-white">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};