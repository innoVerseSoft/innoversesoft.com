'use client';

import { Mail, MapPin, Phone, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:contact@innoversesoft.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@innoversesoft.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:lorian@innoversesoft.com" className="text-gray-300 hover:text-white transition-colors">
                  lorian.k@innoversesoft.com
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Address</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
              <p className="text-gray-300">
                Barbaros, Billur Sk. No:5, D: 7<br />
                06680 Çankaya/Ankara
              </p>
            </div>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Phone</h3>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <a href="tel:+905539590395" className="text-gray-300 hover:text-white transition-colors">
                +90 553 959 03 95
              </a>
            </div>
          </div>


          {/* <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
           */}
        </div>

        {/* Navigation Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-light tracking-wider relative select-none">
                <span className="absolute -inset-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 blur-[2px]">
                  INNOVERSE
                </span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  INNOVERSE
                </span>
                <span
                  className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                  style={{
                    WebkitTextStroke: "1px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  INNOVERSE
                </span>
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Innoverse LTD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 