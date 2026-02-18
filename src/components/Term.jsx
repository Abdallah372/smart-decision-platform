import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Term Component - Premium Research Insights
 * Re-designed for high aesthetic value and clear UX.
 */
const Term = ({ term, explanation, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, align: "center" });
  const termRef = useRef(null);

  // Responsive Check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Interaction: Close on scroll or outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClose = () => setIsOpen(false);
    window.addEventListener("scroll", handleClose, { passive: true });
    return () => window.removeEventListener("scroll", handleClose);
  }, [isOpen]);

  // Position Logic
  const updatePosition = () => {
    if (!termRef.current) return;
    const rect = termRef.current.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let align = "center";
    let left = rect.left + rect.width / 2;
    let top = rect.top;

    // Boundary Detection
    if (left < 160) {
      align = "left";
      left = rect.left;
    } else if (left > screenWidth - 160) {
      align = "right";
      left = rect.right;
    }

    setCoords({
      top,
      left: Math.max(20, Math.min(screenWidth - 20, left)),
      align,
    });
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    updatePosition();
    setIsOpen(!isOpen);
  };

  // The Actual Insight Card
  const InsightCard = () => (
    <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center sm:block">
      {/* Dim Background on Mobile */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] pointer-events-auto"
          onClick={() => setIsOpen(false)}
        />
      )}

      <AnimatePresence>
        <motion.div
          initial={
            isMobile
              ? { y: 100, opacity: 0 }
              : { scale: 0.9, opacity: 0, y: 10 }
          }
          animate={
            isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1, y: 0 }
          }
          exit={
            isMobile
              ? { y: 100, opacity: 0 }
              : { scale: 0.9, opacity: 0, y: 10 }
          }
          className={`
            pointer-events-auto
            absolute 
            ${isMobile ? "bottom-8 left-4 right-4" : ""}
            bg-[#1e293b] shadow-[0_30px_60px_rgba(0,0,0,0.5)] 
            rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-3xl
          `}
          style={
            !isMobile
              ? {
                  top: coords.top,
                  left: coords.left,
                  transform: `translate(${coords.align === "center" ? "-50%" : coords.align === "right" ? "-100%" : "0"}, -100%) translateY(-20px)`,
                  width: "340px",
                }
              : {}
          }
        >
          {/* Scientific Header Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_10px_rgba(14,165,233,0.3)]" />

          <div className="p-7 text-right font-cairo" dir="rtl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-700/50 pb-3">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                Research Insight
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-white transition-colors p-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <h4 className="text-sky-400 font-black text-xl mb-3">{term}</h4>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              {explanation}
            </p>

            {/* Desktop Decorative Arrow */}
            {!isMobile && (
              <div
                className={`absolute -bottom-2 w-4 h-4 bg-[#1e293b] transform rotate-45 border-r border-b border-slate-700/50 ${
                  coords.align === "center"
                    ? "left-1/2 -translate-x-1/2"
                    : coords.align === "right"
                      ? "right-7"
                      : "left-7"
                }`}
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  return (
    <span className="relative inline" ref={termRef}>
      <button
        onClick={handleToggle}
        onMouseEnter={() => !isMobile && (updatePosition(), setIsOpen(true))}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
        className={`
          inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg
          transition-all duration-300 cursor-help
          ${
            isOpen
              ? "bg-sky-500/20 text-white border-sky-500/30"
              : "bg-white/5 hover:bg-white/10 text-sky-300/80 border-slate-800"
          }
          border shadow-sm
          font-bold whitespace-nowrap
          ${className}
        `}
      >
        <span>{term}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-400" : "opacity-40 text-sky-300/50"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {isOpen && createPortal(<InsightCard />, document.body)}
    </span>
  );
};

export default Term;
