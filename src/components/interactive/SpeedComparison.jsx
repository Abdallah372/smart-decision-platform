import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpeedComparison = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const startComparison = () => {
    setIsAnimating(true);
    setShowResult(false);
    
    // Show result after smart system completes
    setTimeout(() => {
      setShowResult(true);
    }, 500);

    // Reset for replay
    setTimeout(() => {
      setIsAnimating(false);
    }, 7000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        
        {/* Traditional Dashboard */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-white relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">نظام عرض البيانات</h3>
            <svg className="w-6 h-6 text-red-100 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>

          {/* Animation Timeline */}
          <div className="h-32 flex items-center justify-center relative">
            <AnimatePresence>
              {isAnimating && (
                <>
                  {/* Document appears slowly */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute"
                  >
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </motion.div>

                  {/* Arrow moves slowly */}
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 30, opacity: [0, 1, 1, 0] }}
                    transition={{ delay: 2, duration: 2 }}
                    className="absolute"
                  >
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>

                  {/* Person thinking */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 4, duration: 1.5 }}
                    className="absolute"
                  >
                    <div className="relative">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-2 -right-2 text-yellow-400 text-xl"
                      >
                        ?
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Question mark result */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 5.5, duration: 0.5 }}
                    className="absolute"
                  >
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl text-red-400">?</span>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <p className="text-sm opacity-60 font-bold border-t border-white/10 pt-4 mt-4">
            ⏱️ المدة: <span className="text-red-400">6 ثوانٍ</span>
          </p>
        </motion.div>

        {/* Smart Recommendation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-green-600 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 left-0 w-32 h-32 bg-white/10 -translate-x-16 -translate-y-16 rounded-full blur-2xl"
          />

          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="text-xl font-bold">نظام التوصية بالقرار</h3>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          {/* Animation Timeline */}
          <div className="h-32 flex items-center justify-center relative">
            <AnimatePresence>
              {isAnimating && (
                <>
                  {/* Lightning appears instantly */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="absolute"
                  >
                    <svg className="w-16 h-16 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>

                  {/* Checkmark appears quickly */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.2, type: "spring" }}
                    className="absolute"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" 
                          d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <p className="text-sm border-t border-white/20 pt-4 mt-4 font-bold relative z-10">
            ⏱️ المدة: <span className="text-yellow-300">0.5 ثانية</span>
          </p>
        </motion.div>
      </div>

      {/* Time Saved Result */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-2xl shadow-2xl">
              <p className="text-white font-black text-2xl">
                ⏱️ توفير: <span className="text-yellow-300">5.5 ثانية</span>
              </p>
              <p className="text-white/80 text-sm mt-2">
                في الأزمات، كل ثانية = حياة
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Start Button */}
      <div className="text-center mt-8">
        <button
          onClick={startComparison}
          disabled={isAnimating}
          className="bg-white text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg cursor-pointer"
        >
          {isAnimating ? 'جاري المقارنة...' : 'شاهد الفرق'}
        </button>
      </div>
    </div>
  );
};

export default SpeedComparison;
