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
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        scrolled && !isOpen
          ? "glass-nav floating-nav h-16 md:h-18"
          : "top-0 left-0 right-0 h-20 md:h-24 bg-transparent"
      } ${isOpen ? "top-0 left-0 right-0 h-20 bg-[#020617]" : ""}`}
      dir="rtl"
    >
      <div className="h-full max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="flex flex-col items-start cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h1 className="text-sm md:text-base lg:text-lg font-black text-white tracking-tight group-hover:text-sky-400 transition-all duration-300">
            عبدالله العبادي{" "}
            <span className="text-sky-500/50 mx-1 hidden sm:inline">/</span>{" "}
            <span className="text-slate-400 font-medium group-hover:text-white hidden sm:inline">
              بحث 2026
            </span>
          </h1>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-slate-500 font-bold">
              المريناب الثانوية · إدفو
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center p-1 bg-white/5 rounded-xl border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-1.5 text-xs lg:text-sm font-bold text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("hypothesis")}
            className="px-5 py-2 text-xs lg:text-sm font-black text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all duration-300 shadow-lg shadow-sky-900/20 active:scale-95"
          >
            الفرضية
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all active:scale-90"
          >
            {isOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-nav border-t border-white/5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
          isOpen
            ? "max-h-[100vh] opacity-100 py-8"
            : "max-h-0 opacity-0 pointer-events-none py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 px-8">
          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full py-4 text-center text-lg font-black text-slate-300 hover:text-sky-400 hover:bg-white/5 rounded-2xl transition-all duration-300"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("hypothesis")}
            className="w-full mt-4 py-5 text-xl font-black text-white bg-sky-600 rounded-2xl shadow-2xl shadow-sky-900/40"
          >
            عرض الفرضية المختصرة
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
