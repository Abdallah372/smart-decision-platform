import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BeforeAfterSlider = () => {
  // Single source of truth: 0 = Traditional (left), 100 = Smart (right)
  const [sliderValue, setSliderValue] = useState(50);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-play effect: moves slider automatically
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setSliderValue(prev => {
        // Move from 50 -> 0 -> 100 -> 50 (cycle)
        if (prev >= 100) return 0;
        return prev + 2; // Smooth increment
      });
    }, 50); // Update every 50ms for smooth animation
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  // Stop auto-play when user interacts
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
  };
  
  
  // Derived states
  const isTraditional = sliderValue < 50;
  const isSmart = sliderValue >= 50;
  const smartIntensity = Math.max(0, (sliderValue - 50) / 50); // 0 to 1
  const traditionalIntensity = Math.max(0, (50 - sliderValue) / 50); // 0 to 1

  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border-2 border-gray-200">
      {/* Background Layer */}
      <div className="absolute inset-0 transition-colors duration-700"
        style={{
          background: isTraditional 
            ? `rgb(${243 - traditionalIntensity * 50}, ${244 - traditionalIntensity * 50}, ${246 - traditionalIntensity * 50})`
            : `rgb(${30 - smartIntensity * 10}, ${58 + smartIntensity * 20}, ${138 - smartIntensity * 40})`
        }}
      />

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center px-8">
        <div className="w-full max-w-4xl">
          
          {/* Traditional System View */}
          <AnimatePresence>
            {isTraditional && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: traditionalIntensity }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
              >
                {/* Hourglass Animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mb-6 text-gray-400"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>

                {/* Time Progression */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 mb-6"
                >
                  <motion.p 
                    className="text-gray-600 font-bold text-xl"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    الساعة 4 صباحًا... 6 صباحًا... 8 صباحًا
                  </motion.p>
                  <p className="text-gray-500">شكاوى المواطنين تبدأ بالوصول</p>
                </motion.div>

                {/* Affected Counter */}
                <motion.div
                  className="bg-red-100 px-8 py-4 rounded-2xl border-2 border-red-300"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <p className="text-red-700 font-bold text-2xl">
                    عدد المتضررين: 
                    <motion.span
                      className="mr-2"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      890
                    </motion.span>
                  </p>
                </motion.div>

                {/* Paper Icon */}
                <motion.div 
                  className="mt-6 flex items-center gap-3 text-gray-500"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-medium">تقرير ورقي قيد الإعداد...</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Smart System View */}
          <AnimatePresence>
            {isSmart && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: smartIntensity }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
              >
                {/* Radar Pulse */}
                <div className="relative w-32 h-32 mb-6">
                  <motion.div
                    className="absolute inset-0 border-4 border-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 border-4 border-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>

                {/* Instant Detection */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="space-y-3 mb-6"
                >
                  <p className="text-white font-bold text-xl">الساعة 4:03 صباحًا</p>
                  <motion.div
                    className="bg-yellow-400 text-yellow-900 px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <span>⚠️</span>
                    <span>احتمال عطل: 87%</span>
                  </motion.div>
                </motion.div>

                {/* Action Arrow */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <motion.svg 
                    className="w-12 h-12 text-green-400"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                  <span className="text-green-300 font-bold text-lg">إعادة توجيه تلقائية</span>
                </motion.div>

                {/* Zero Affected */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.6 }}
                  className="bg-green-500 px-8 py-4 rounded-2xl"
                >
                  <p className="text-white font-bold text-2xl">
                    عدد المتضررين: 
                    <span className="mr-2">0</span>
                  </p>
                </motion.div>

                {/* AI Icon */}
                <motion.div 
                  className="mt-6 flex items-center gap-3 text-green-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-medium">قرار فوري مدعوم بالبيانات</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Control */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] max-w-md">
        <div className="relative">
          {/* Track */}
          <div className="h-2 bg-white/30 rounded-full backdrop-blur-sm" />
          
          {/* Progress Fill */}
          <motion.div 
            className="absolute top-0 right-0 h-2 rounded-full"
            style={{ 
              width: `${sliderValue}%`,
              background: isSmart ? 'rgb(34, 197, 94)' : 'rgb(156, 163, 175)'
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Slider Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => {
              handleUserInteraction();
              setSliderValue(Number(e.target.value));
            }}
            onMouseDown={handleUserInteraction}
            onTouchStart={handleUserInteraction}
            className="absolute top-1/2 -translate-y-1/2 w-full h-8 opacity-0 cursor-grab active:cursor-grabbing z-10"
          />

          {/* Handle */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-pointer border-4 pointer-events-none"
            style={{ 
              right: `calc(${sliderValue}% - 24px)`,
              borderColor: isSmart ? 'rgb(34, 197, 94)' : 'rgb(156, 163, 175)'
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl">⚡</span>
          </motion.div>
        </div>

        {/* Labels */}
        <div className="flex justify-between mt-4 text-sm font-bold">
          <span className={`transition-colors ${isTraditional ? 'text-gray-700' : 'text-white/50'}`}>
            نظام تقليدي
          </span>
          <span className={`transition-colors ${isSmart ? 'text-green-300' : 'text-white/50'}`}>
            نظام ذكي
          </span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
