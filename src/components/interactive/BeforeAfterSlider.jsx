import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Motion values for smooth physics
  const x = useSpring(50, { stiffness: 300, damping: 30 }); // 0 to 100

  // RTL Logic: 0 (Left) -> 100 (Right)
  // We want Traditional (Before) on the RIGHT.
  // We want Smart (After) on the LEFT.
  // The 'Handle' moves from 0 to 100.
  // Area to the RIGHT of handle = Traditional.
  // Area to the LEFT of handle = Smart.

  // Clip Path for Top Layer (Traditional/Right Side)
  // We need to clip the LEFT side of the Traditional layer based on slider position.
  // inset(top right bottom left) -> inset(0 0 0 val%)
  const clipPathVal = useTransform(x, (val) => `inset(0 0 0 ${val}%)`);
  
  // Handle Position: simply left: val%
  const handlePosition = useTransform(x, (val) => `${val}%`);

  // Parallax: 
  // Smart (Left): As x goes 0->100 (Revealing more), text stays or enters? 
  // Text should move slightly to oppose the wipe for depth.
  const textX_Smart = useTransform(x, [0, 100], [50, 0]); 
  const textX_Traditional = useTransform(x, [0, 100], [0, -50]);

  // Handle Drag Interactivity
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percent = Math.min(Math.max(0, clientX - rect.left), rect.width) / rect.width * 100;
    x.set(percent);
    setSliderPosition(percent);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => { isDragging.current = false; };
    const handleGlobalMouseMove = (e) => {
      if (isDragging.current) handleMove(e.clientX);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] rounded-[2.5rem] overflow-hidden cursor-ew-resize select-none shadow-2xl border-4 border-slate-100 group bg-slate-900"
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
    >
      
      {/* ------------------------------------------------------ */}
      {/* LAYER 1: BOTTOM (SMART SYSTEM - LEFT SIDE)            */}
      {/* Visible by default, covers the whole area but gets    */}
      {/* covered by Layer 2 on the right.                      */}
      {/* ------------------------------------------------------ */}
      <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden z-10 text-right">
        
        {/* Background */}
        <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-teal-900/20"></div>
        </div>

        {/* Content */}
        <motion.div 
          style={{ x: textX_Smart }}
          className="relative z-10 text-center px-4"
        >
          <div className="inline-flex p-5 rounded-full bg-teal-500/10 border border-teal-500/30 mb-8 relative shadow-[0_0_30px_rgba(20,184,166,0.3)]">
            <div className="absolute inset-0 rounded-full bg-teal-400 blur-xl opacity-20 animate-pulse"></div>
            <svg className="w-16 h-16 text-teal-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-teal-200 mb-4 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]">
            القرار الذكي
          </h3>
          <p className="text-teal-200/80 text-xl font-medium tracking-wide mb-10">
            تنبؤ دقيق. استجابة فورية. صفر خسائر.
          </p>

          <div className="flex gap-6 justify-center">
            <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl w-36 shadow-lg">
                <div className="text-teal-400 text-3xl font-black mb-1">0ms</div>
                <div className="text-slate-400 text-sm font-bold">زمن التأخير</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl w-36 shadow-lg">
                <div className="text-teal-400 text-3xl font-black mb-1">100%</div>
                <div className="text-slate-400 text-sm font-bold">دقة البيانات</div>
            </div>
          </div>
        </motion.div>
      </div>


      {/* ------------------------------------------------------ */}
      {/* LAYER 2: TOP (TRADITIONAL SYSTEM - RIGHT SIDE)        */}
      {/* Clipped from LEFT to reveal Bottom Layer.             */}
      {/* ------------------------------------------------------ */}
      <motion.div 
        className="absolute inset-0 bg-slate-100 flex items-center justify-center overflow-hidden z-20"
        style={{ clipPath: clipPathVal }}
      >
        {/* Background */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-slate-200">
             {/* Simple noise pattern */}
             <svg className='absolute inset-0 w-full h-full opacity-20' xmlns='http://www.w3.org/2000/svg'>
                 <filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter>
                 <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
             </svg>
        </div>
        
        {/* Content */}
        <motion.div 
          style={{ x: textX_Traditional }}
          className="relative z-10 text-center px-4"
        >
           <div className="inline-flex p-5 rounded-full bg-slate-200 border border-slate-300 mb-8 grayscale opacity-60">
            <svg className="w-16 h-16 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h3 className="text-4xl md:text-6xl font-black text-slate-400 mb-4 blur-[0.5px]">
            النظام التقليدي
          </h3>
          <p className="text-slate-500 text-xl font-medium tracking-wide mb-10">
            روتين. بيروقراطية. بيانات مفقودة.
          </p>

          <div className="flex gap-6 justify-center opacity-60">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl w-36">
                <div className="text-red-900/50 text-3xl font-black mb-1">4h+</div>
                <div className="text-slate-400 text-sm font-bold">زمن التأخير</div>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-2xl w-36">
                <div className="text-red-900/50 text-3xl font-black mb-1">???</div>
                <div className="text-slate-400 text-sm font-bold">دقة البيانات</div>
            </div>
          </div>
        </motion.div>

        {/* Shadow Overlay at the cut line for depth */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>

      </motion.div>


      {/* ------------------------------------------------------ */}
      {/* SLIDER HANDLE                                         */}
      {/* ------------------------------------------------------ */}
      <motion.div 
        className="absolute inset-y-0 w-1.5 bg-white z-30 shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: handlePosition }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border-[6px] border-slate-50 text-slate-400">
            <svg className="w-6 h-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
        </div>
      </motion.div>

    </div>
  );
};

export default BeforeAfterSlider;
