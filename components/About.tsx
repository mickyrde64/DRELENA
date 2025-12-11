import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          <div className="md:w-1/2 relative">
             {/* Decorative frames */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-teal-200 rounded-3xl z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" 
              alt="Dr Elena Georgiou Portrait" 
              className="relative z-10 rounded-3xl shadow-lg w-full object-cover aspect-[3/4]"
            />
          </div>

          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Meet Dr. Elena Georgiou
            </h2>
            <h3 className="text-xl text-teal-700 font-medium">Principal Dentist • Стоматолог</h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dr. Elena Georgiou graduated with honors from the Medical University and has over 15 years of clinical experience in general and restorative dentistry.
              </p>
              <p>
                Her philosophy is simple: treat every patient like family. She believes in minimally invasive dentistry and keeping up with the latest technologies to ensure pain-free and effective treatments.
              </p>
              <p>
                Dr. Elena is fluent in <strong>English, Greek, and Russian</strong>, allowing her to serve the diverse community of our city with clear communication and understanding.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                 <div className="text-3xl font-bold text-teal-600 mb-1">DDS</div>
                 <div className="text-xs text-gray-500 uppercase tracking-wider">Doctor of Dental Surgery</div>
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                 <div className="text-3xl font-bold text-teal-600 mb-1">MSc</div>
                 <div className="text-xs text-gray-500 uppercase tracking-wider">Orthodontics Master</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};