import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-teal-50 text-teal-600' : 'bg-white/10 text-teal-700'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold leading-none ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Dr. Elena Georgiou
            </span>
            <span className={`text-xs uppercase tracking-widest ${isScrolled ? 'text-teal-600' : 'text-teal-700'}`}>
              Dental Clinic • Стоматолог
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-teal-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-800'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="h-6 w-px bg-gray-300"></div>
          <a href="tel:26322266" className="flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800">
            <Phone size={18} />
            <span>26 322266</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:26322266" className="flex items-center gap-2 text-teal-600 font-bold py-2">
            <Phone size={20} />
            <span>Call Now</span>
          </a>
        </div>
      )}
    </header>
  );
};