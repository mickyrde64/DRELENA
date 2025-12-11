import React from 'react';
import { Sparkles, Activity, Users, ShieldPlus, Heart, Stethoscope } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: '1',
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers to boost your confidence.',
      icon: 'sparkles'
    },
    {
      id: '2',
      title: 'General Dentistry',
      description: 'Routine check-ups, cleanings, and fillings to maintain optimal oral health.',
      icon: 'shield'
    },
    {
      id: '3',
      title: 'Pediatric Dentistry',
      description: 'Gentle care for children, making their first visits fun and fearless.',
      icon: 'users'
    },
    {
      id: '4',
      title: 'Dental Implants',
      description: 'Permanent solutions for missing teeth that look and feel natural.',
      icon: 'activity'
    },
    {
      id: '5',
      title: 'Orthodontics',
      description: 'Clear aligners and traditional braces for a perfectly aligned smile.',
      icon: 'smile'
    },
    {
      id: '6',
      title: 'Emergency Care',
      description: 'Immediate attention for toothaches, accidents, and urgent dental needs.',
      icon: 'heart'
    }
  ];

  const getIcon = (name: string, className?: string) => {
    const cls = className || "w-8 h-8 text-teal-600";
    switch(name) {
      case 'sparkles': return <Sparkles className={cls} />;
      case 'shield': return <ShieldPlus className={cls} />;
      case 'users': return <Users className={cls} />;
      case 'activity': return <Activity className={cls} />;
      case 'smile': return <Stethoscope className={cls} />;
      case 'heart': return <Heart className={cls} />;
      default: return <Activity className={cls} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Comprehensive Care</h2>
          <p className="text-gray-600">
            We offer a wide range of dental services to ensure your family's oral health is always at its best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                {getIcon(service.icon, "w-7 h-7 transition-colors duration-300 group-hover:text-white text-teal-600")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};