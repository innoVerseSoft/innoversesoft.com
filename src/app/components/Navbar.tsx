"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Services", 
    href: "#services"
  },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setIsScrolled(scrollTop > 50);
      setScrollProgress(scrollPercent);
    };

    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 z-[60] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform-gpu transition-transform duration-300 hover:scale-110"
                >
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <span className="text-2xl font-light tracking-wider relative select-none">
                  {/* Reduce number of layers and optimize blur */}
                  <span className="absolute -inset-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 blur-[2px]">
                    INNOVERSE
                  </span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    INNOVERSE
                  </span>
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600" style={{ WebkitTextStroke: '1px rgba(59, 130, 246, 0.3)' }}>
                    INNOVERSE
                  </span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
              {navItems.map((item, index) => (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => {
                      if (item.subItems) {
                        toggleDropdown(item.label);
                      } else {
                        scrollToSection(item.href);
                      }
                    }}
                    className="flex items-center space-x-1 px-4 py-2 text-slate-700 hover:text-indigo-600 font-medium transform-gpu transition-all duration-200 rounded-lg hover:bg-white/20 hover:translate-y-[-2px] relative group"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#a800ed] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                    </span>
                    {item.subItems && (
                      <ChevronDown className="w-4 h-4 transform-gpu transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <>
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform-gpu">
                          <div className="py-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <button
                                key={subItem.label}
                                onClick={() => scrollToSection(subItem.href)}
                                className="w-full text-left px-4 py-3 text-slate-700 hover:text-indigo-600 transform-gpu transition-all duration-200 flex items-center space-x-3 hover:bg-gray-50 hover:translate-x-1"
                              >
                                <div 
                                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform-gpu transition-transform duration-200 hover:scale-125"
                                />
                                <span>{subItem.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg transform-gpu transition-all duration-200 hover:shadow-xl hover:translate-y-[-2px]"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transform-gpu transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t overflow-hidden">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      if (item.subItems) {
                        toggleDropdown(item.label);
                      } else {
                        scrollToSection(item.href);
                      }
                    }}
                    className="w-full text-left flex items-center justify-between py-3 px-4 text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 rounded-lg hover:bg-white/30"
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`} 
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.subItems && (
                    <>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <button
                              key={subItem.label}
                              onClick={() => scrollToSection(subItem.href)}
                              className="w-full text-left flex items-center space-x-3 py-2 px-4 text-slate-600 hover:text-indigo-600 transition-all duration-300 rounded-lg hover:bg-white/30"
                            >
                              <div 
                                className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-transform duration-300 hover:scale-150"
                              />
                              <span>{subItem.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg btn-gradient"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
} 