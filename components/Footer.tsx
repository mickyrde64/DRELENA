import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
             <div className="font-serif text-2xl text-white font-bold mb-4">Dr. Georgiou</div>
             <p className="text-sm text-gray-400">
               Creating beautiful smiles with modern technology and gentle care.
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-teal-400">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-400">Services</a></li>
              <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Services</h4>
             <ul className="space-y-2 text-sm">
               <li>Implants</li>
               <li>Whitening</li>
               <li>Pediatrics</li>
               <li>Emergency</li>
             </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-teal-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dr. Elena Georgiou. All rights reserved.
        </div>
      </div>
    </footer>
  );
};