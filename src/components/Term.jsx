import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Term Component - Smart Tooltip
 * - Mobile: Fixed bottom sheet (always visible, never clipped)
 * - Desktop: Smart positioning (detects screen edges)
 */
const Term = ({ term, explanation, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, align: 'center' });
  const termRef = useRef(null);

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle Outside Click
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (termRef.current && !termRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutside);
    // Also close on scroll to prevent detached tooltips
    window.addEventListener('scroll', () => setIsOpen(false), { capture: true }); 
    return () => {
        document.removeEventListener('touchstart', handleClickOutside);
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('scroll', () => setIsOpen(false));
    };
  }, [isOpen]);

  // Calculate position on open (Desktop only logic mostly, but used for anchor)
  useEffect(() => {
    if (isOpen && termRef.current) {
        const rect = termRef.current.getBoundingClientRect();
        const screenWidth = window.innerWidth;
        
        // Default Logic (Center top)
        let top = rect.top - 10; // 10px padding above
        let left = rect.left + (rect.width / 2);
        let align = 'center';

        // Edge Detection
        if (left < 150) { // Too close to left
            align = 'left';
            left = rect.left; 
        } else if (left > screenWidth - 150) { // Too close to right
            align = 'right';
            left = rect.right;
        }

        setCoords({ top, left, height: rect.height, align });
    }
  }, [isOpen]);

  const toggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Tooltip Content Portal
  const TooltipContent = () => (
    <div 
        className="fixed z-[9999] pointer-events-none"
        style={{
            top: 0, left: 0, width: '100%', height: '100%' 
        }}
    >
        {isMobile ? (
            // Mobile: Bottom Sheet Style
            <div className="absolute bottom-6 left-4 right-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
                <div className="bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-slate-700/50 text-center">
                    <p className="font-bold text-teal-400 mb-1 text-sm">{term}</p>
                    <p className="text-sm leading-relaxed text-slate-200">{explanation}</p>
                </div>
            </div>
        ) : (
            // Desktop: Popover Style attached to coords
            <div 
                className="absolute transition-all duration-200 ease-out"
                style={{
                    top: coords.top,
                    left: coords.left,
                    transform: `translate(${coords.align === 'center' ? '-50%' : coords.align === 'right' ? '-100%' : '0'}, -100%) translateY(-8px)`
                }}
            >
                <div className="w-72 bg-slate-900 text-white text-sm p-4 rounded-xl shadow-2xl border border-slate-700 relative">
                    <p className="leading-relaxed font-medium text-slate-200">{explanation}</p>
                    
                    {/* Arrow */}
                    <div 
                        className={`absolute -bottom-1.5 w-3 h-3 bg-slate-900 border-b border-r border-slate-700 transform rotate-45 ${
                            coords.align === 'center' ? 'left-1/2 -translate-x-1/2' :
                            coords.align === 'right' ? 'right-4' : 'left-4'
                        }`}
                    ></div>
                </div>
            </div>
        )}
    </div>
  );

  return (
    <>
      <span 
        ref={termRef}
        className={`bg-teal-50/50 px-1 rounded cursor-help transition-colors duration-200 hover:bg-teal-100 decoration-dotted decoration-teal-400 underline-offset-4 ${className} ${isOpen ? 'bg-teal-100' : ''}`}
        onClick={toggle}
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        {term}
      </span>
      {isOpen && createPortal(<TooltipContent />, document.body)}
    </>
  );
};

export default Term;
