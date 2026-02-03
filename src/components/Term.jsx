import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Term Component - Premium Research Insights
 * Re-designed for high aesthetic value and clear UX.
 */
const Term = ({ term, explanation, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, align: 'center' });
  const termRef = useRef(null);

  // Responsive Check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Interaction: Close on scroll or outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClose = () => setIsOpen(false);
    window.addEventListener('scroll', handleClose, { passive: true });
    return () => window.removeEventListener('scroll', handleClose);
  }, [isOpen]);

  // Position Logic
  const updatePosition = () => {
    if (!termRef.current) return;
    const rect = termRef.current.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let align = 'center';
    let left = rect.left + rect.width / 2;
    let top = rect.top;

    // Boundary Detection
    if (left < 160) {
      align = 'left';
      left = rect.left;
    } else if (left > screenWidth - 160) {
      align = 'right';
      left = rect.right;
    }

    setCoords({ top, left: Math.max(20, Math.min(screenWidth - 20, left)), align });
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
          initial={isMobile ? { y: 100, opacity: 0 } : { scale: 0.9, opacity: 0, y: 10 }}
          animate={isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1, y: 0 }}
          exit={isMobile ? { y: 100, opacity: 0 } : { scale: 0.9, opacity: 0, y: 10 }}
          className={`
            pointer-events-auto
            absolute 
            ${isMobile ? 'bottom-8 left-4 right-4' : ''}
            bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
            rounded-2xl overflow-hidden border border-slate-100
          `}
          style={!isMobile ? {
            top: coords.top,
            left: coords.left,
            transform: `translate(${coords.align === 'center' ? '-50%' : coords.align === 'right' ? '-100%' : '0'}, -100%) translateY(-15px)`,
            width: '320px'
          } : {}}
        >
          {/* Scientific Header Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-teal-400 to-blue-500" />
          
          <div className="p-5 text-right" dir="rtl">
            <div className="flex items-center justify-between mb-3 border-b border-slate-50 pb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Research Insight</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-slate-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            
            <h4 className="text-teal-700 font-bold text-lg mb-2">{term}</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {explanation}
            </p>
            
            {/* Desktop Decorative Arrow */}
            {!isMobile && (
              <div 
                className={`absolute -bottom-2 w-4 h-4 bg-white transform rotate-45 border-r border-b border-slate-100 ${
                  coords.align === 'center' ? 'left-1/2 -translate-x-1/2' :
                  coords.align === 'right' ? 'right-6' : 'left-6'
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
          inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md
          transition-all duration-300 cursor-help
          ${isOpen 
            ? 'bg-teal-100 text-teal-900 border-teal-200' 
            : 'bg-white/5 hover:bg-white/20 text-blue-100 border-white/10'}
          border ring-1 ring-white/5
          font-medium whitespace-nowrap
          ${className}
        `}
      >
        <span>{term}</span>
        <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : 'opacity-40 text-blue-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {isOpen && createPortal(<InsightCard />, document.body)}
    </span>
  );
};

export default Term;
