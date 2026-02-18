import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { id: "problem", label: "المشكلة" },
    { id: "solution", label: "الحل" },
    { id: "scenario", label: "السيناريو" },
    { id: "impact", label: "الأثر" },
    { id: "ethics", label: "الأخلاقيات" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-[#020617]/90 backdrop-blur-xl shadow-2xl border-b border-white/5"
          : "bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div
            className="flex flex-col items-start cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <h1 className="text-base md:text-xl font-black text-white tracking-tight group-hover:text-sky-400 transition-colors duration-300">
              عبدالله العبادي — بحث 2026
            </h1>
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.18em] text-slate-500 font-bold mt-0.5">
              المريناب الثانوية · إدفو · أسوان
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <div className="flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 lg:px-4 py-2 text-sm font-bold rounded-xl transition-all duration-300 ${
                    scrolled
                      ? "text-slate-400 hover:text-white hover:bg-slate-800"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-800 mx-2"></div>

            <button
              onClick={() => scrollToSection("hypothesis")}
              className="px-6 py-2.5 text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] active:scale-95"
            >
              عرض الفرضية
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#020617]/98 backdrop-blur-2xl border-b border-white/5 shadow-2xl transition-all duration-500 ease-in-out origin-top overflow-hidden ${
          isOpen
            ? "max-h-[80vh] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-[var(--space-m)] py-[var(--space-m)] space-y-2 flex flex-col items-stretch">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-right px-6 py-4 text-[var(--text-lg)] font-bold text-slate-300 hover:text-sky-400 hover:bg-white/5 rounded-2xl transition-all duration-300 border-r-4 border-transparent hover:border-sky-500"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-6 mt-4 border-t border-white/5">
            <button
              onClick={() => scrollToSection("hypothesis")}
              className="w-full text-center px-6 py-5 text-lg font-black text-white bg-sky-600 hover:bg-sky-500 rounded-2xl shadow-[0_20px_40px_rgba(14,165,233,0.3)] transition-all duration-300"
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
