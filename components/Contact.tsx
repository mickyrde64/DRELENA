import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-10">
              Ready for a brighter smile? Visit us at our clinic or call to schedule your appointment. We welcome new patients!
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-full text-teal-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Visit Us</h4>
                  <p className="text-gray-600">123 Health Avenue, Medical District<br/>Nicosia, Cyprus 2000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-full text-teal-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">26 322266</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-full text-teal-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">contact@drgeorgiou.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 h-64 bg-gray-100 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                <span className="flex items-center gap-2"><MapPin size={20}/> Google Maps Embed</span>
              </div>
              {/* Actual iframe would go here in prod */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="+357..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white">
                  <option>General Checkup</option>
                  <option>Cleaning / Whitening</option>
                  <option>Tooth Pain / Emergency</option>
                  <option>Implants</option>
                  <option>For Child</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="Tell us about your needs..."></textarea>
              </div>

              <Button type="button" size="lg" className="w-full mt-4">
                Request Appointment
              </Button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                We will contact you to confirm your appointment time.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};