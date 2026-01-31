import React, { useState, useEffect, useRef } from 'react';

/**
 * Term Component - للمصطلحات التقنية مع شرح Hover (Desktop) و Tap (Mobile)
 * 
 * @param {string} term - المصطلح المراد شرحه
 * @param {string} explanation - الشرح المبسط (سطرين كحد أقصى)
 */
const Term = ({ term, explanation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const termRef = useRef(null);

  // Detect if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close on outside click (mobile only)
  useEffect(() => {
    if (!isMobile || !isOpen) return;
    
    const handleClickOutside = (e) => {
      if (termRef.current && !termRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('touchstart', handleClickOutside);
    return () => document.removeEventListener('touchstart', handleClickOutside);
  }, [isOpen, isMobile]);

  const handleInteraction = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <span className="relative inline-block" ref={termRef}>
      <span
        className="text-blue-700 border-b-2 border-dotted border-blue-400 cursor-help transition-colors duration-150 hover:text-blue-900 hover:border-blue-600"
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
        onClick={handleInteraction}
        onTouchStart={(e) => {
          e.stopPropagation();
          handleInteraction();
        }}
      >
        {term}
      </span>
      
      {isOpen && (
        <span
          className={`absolute ${isMobile ? 'top-full left-0 mt-2' : 'bottom-full left-1/2 -translate-x-1/2 mb-2'} w-64 max-w-[90vw] bg-gray-900 text-white text-sm px-4 py-3 rounded-lg shadow-xl z-50 ${isMobile ? '' : 'pointer-events-none'}`}
          style={{
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 150ms ease-in-out'
          }}
        >
          {explanation}
          {/* Arrow */}
          {!isMobile && (
            <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <span className="block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></span>
            </span>
          )}
          {isMobile && (
            <span className="absolute bottom-full left-4 -mb-px">
              <span className="block w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-900"></span>
            </span>
          )}
        </span>
      )}
    </span>
  );
};

export default Term;
