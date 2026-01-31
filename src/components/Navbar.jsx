import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Approximate height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { id: 'problem', label: 'المشكلة' },
    { id: 'solution', label: 'الحل' },
    { id: 'scenario', label: 'السيناريو' },
    { id: 'impact', label: 'الأثر' },
    { id: 'ethics', label: 'الأخلاقيات' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
        scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div 
            className="flex flex-col items-start cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight group-hover:text-teal-700 transition-colors duration-300">
              منصة القرار الذكي
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-medium mt-0.5">
              Smart Decision Platform
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-1">
               {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    scrolled ? 'text-slate-600 hover:text-teal-700 hover:bg-slate-50' : 'text-slate-700 hover:text-teal-700 hover:bg-white/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('hypothesis')}
              className="px-5 py-2 text-sm font-semibold text-teal-800 bg-teal-50 border border-teal-200 hover:bg-teal-100 rounded-full transition-all duration-300 shadow-sm hover:shadow"
            >
              عرض الفرضية
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg transition-all duration-300 origin-top overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-2 flex flex-col items-stretch">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-right px-4 py-3 text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-slate-50 rounded-lg transition-colors border-l-4 border-transparent hover:border-teal-500"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 mt-2 border-t border-slate-100">
            <button 
              onClick={() => scrollToSection('hypothesis')}
              className="w-full text-center px-4 py-3 text-base font-bold text-teal-800 bg-teal-50 rounded-lg border border-teal-100 hover:bg-teal-100 transition-colors"
            >
              عرض الفرضية
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
