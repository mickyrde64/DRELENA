import React from 'react';
import { Button } from './Button';
import { Calendar, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-teal-50/50">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-teal-100 rounded-full shadow-sm text-teal-800 text-xs font-semibold uppercase tracking-wide">
              <ShieldCheck size={14} />
              <span>Certified Dental Expert</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              A Healthy Smile <br/> Starts Here.
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Experience gentle, state-of-the-art dentistry with Dr. Elena Georgiou. 
              We speak English, Greek, and Russian. Your smile is our priority.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="w-full sm:w-auto shadow-teal-200 shadow-lg">
                  Book Appointment <Calendar className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Services
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4 border-t border-gray-200/60">
              <div>
                <span className="block text-2xl font-bold text-teal-700">15+</span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-teal-700">2k+</span>
                <span className="text-sm text-gray-500">Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[4/3] transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Elena Georgiou smiling" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-lg font-medium">Dr. Elena Georgiou</p>
                <p className="text-sm opacity-90">Lead Dentist & Surgeon</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};