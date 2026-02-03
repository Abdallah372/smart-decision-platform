import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpeedComparison = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'running', 'finished'
  const [fastProgress, setFastProgress] = useState(0);
  const [slowProgress, setSlowProgress] = useState(0);

  const startRace = () => {
    setStatus('running');
    setFastProgress(0);
    setSlowProgress(0);
  };

  useEffect(() => {
    if (status !== 'running') return;

    // Fast timer (0.5s)
    const fastTimer = setInterval(() => {
      setFastProgress(prev => {
        if (prev >= 100) {
            clearInterval(fastTimer);
            return 100;
        }
        return prev + 10;
      });
    }, 50);

    // Slow timer (6s)
    const slowTimer = setInterval(() => {
      setSlowProgress(prev => {
        if (prev >= 100) {
            clearInterval(slowTimer);
            setStatus('finished');
            return 100;
        }
        return prev + 1;
      });
    }, 60);

    return () => {
        clearInterval(fastTimer);
        clearInterval(slowTimer);
    };
  }, [status]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-xl p-6 sm:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
      
      <div className="space-y-12">
        
        {/* Row 1: Smart System */}
        <div className="relative">
          <div className="flex justify-between items-center mb-4">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400 border border-teal-500/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                   <h4 className="text-white font-bold">نظام منصتنا (الاستباقي)</h4>
                   <p className="text-teal-400/60 text-xs">تحليل لحظي + قرار فوري</p>
                </div>
             </div>
             <div className="text-right">
                <span className="text-2xl font-black text-teal-400">0.5s</span>
             </div>
          </div>
          
          {/* Progress Track */}
          <div className="h-4 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: `${fastProgress}%` }}
               className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 shadow-[0_0_15px_rgba(20,184,166,0.5)]"
            />
            <AnimatePresence>
                {fastProgress === 100 && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-black text-white px-2 bg-emerald-600 rounded-full"
                    >
                        DONE
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>

        {/* Row 2: Traditional System */}
        <div className="relative">
          <div className="flex justify-between items-center mb-4">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-700/30 rounded-xl flex items-center justify-center text-slate-400 border border-white/5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                   <h4 className="text-slate-300 font-bold">الأنظمة التقليدية</h4>
                   <p className="text-slate-500 text-xs">انتظار البلاغات + دورة ورقية</p>
                </div>
             </div>
             <div className="text-right">
                <span className="text-2xl font-black text-slate-500">6.0s</span>
             </div>
          </div>
          
          {/* Progress Track */}
          <div className="h-4 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: `${slowProgress}%` }}
               className="h-full bg-slate-600 shadow-[0_0_10px_rgba(255,255,255,0.05)]"
            />
            {status === 'running' && slowProgress < 100 && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                    <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
            )}
          </div>
        </div>

      </div>

      {/* Result Card */}
      <AnimatePresence>
          {status === 'finished' && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl text-center"
              >
                  <p className="text-white text-lg font-bold mb-1">لقد وفرنا <span className="text-teal-400">92%</span> من الوقت الضائع*</p>
                  <p className="text-slate-400 text-sm">في الأزمات، الوقت ليس مالاً فقط.. الوقت هو حياة.</p>
                  <p className="text-[10px] text-slate-500 mt-4 italic">* نسبة محاكاة مبنية على فارق معالجة البيانات بين الأنظمة اليدوية والرقمية.</p>
              </motion.div>
          )}
      </AnimatePresence>

      {/* Control Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={startRace}
          disabled={status === 'running'}
          className={`
            px-10 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 active:scale-95
            ${status === 'running' 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                : 'bg-white text-blue-900 shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)]'}
          `}
        >
          {status === 'running' ? 'يتم التحليل الرقمي...' : 'بدء تجربة المحاكاة'}
        </button>
      </div>

    </div>
  );
};

export default SpeedComparison;
