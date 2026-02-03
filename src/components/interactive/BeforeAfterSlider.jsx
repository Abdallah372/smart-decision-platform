import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ScenarioSwitcher - Replaces the old slider with a high-end "Reality Toggle"
 * Focuses on clarity, impact, and mobile responsiveness.
 */
const ScenarioSwitcher = () => {
  const [mode, setMode] = useState('smart'); // 'trad' or 'smart'

  const scenarios = {
    trad: {
        id: 'trad',
        title: 'النظام التقليدي',
        subtitle: 'رد فعل (Reactive)',
        desc: 'يعتمد على البلاغات اليدوية بعد وقوع الأزمة، مما يؤدي لتضاعف الخسائر.',
        color: 'from-rose-50 to-white',
        accent: 'rose-600',
        metrics: [
            { label: 'زمن الكشف', value: '4 ساعات', status: 'critical' },
            { label: 'نسبة الخسارة', value: '85%', status: 'critical' },
            { label: 'التكلفة الإضافية', value: 'عالية جداً', status: 'critical' }
        ],
        icon: (
            <svg className="w-12 h-12 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    smart: {
        id: 'smart',
        title: 'نظام القرار الذكي',
        subtitle: 'فعل استباقي (Proactive)',
        desc: 'يرصد المؤشرات الأولية قبل وقوع الأزمة، ويقوم بأتمتة الحلول فورياً.',
        color: 'from-teal-900 to-slate-900',
        accent: 'teal-400',
        metrics: [
            { label: 'زمن الكشف', value: '0.2 ثانية', status: 'perfect' },
            { label: 'نسبة الخسارة', value: '0%', status: 'perfect' },
            { label: 'التكلفة الإضافية', value: 'صفرية', status: 'perfect' }
        ],
        icon: (
            <svg className="w-12 h-12 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    }
  };

  const current = scenarios[mode];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      
      {/* 1. Professional Toggle Button */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 p-1 rounded-xl sm:rounded-2xl flex gap-1 shadow-inner border border-slate-200">
            <button 
                onClick={() => setMode('smart')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${mode === 'smart' ? 'bg-white text-teal-700 shadow-md transform scale-[1.02]' : 'text-slate-500 hover:text-slate-700'}`}
            >
                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${mode === 'smart' ? 'bg-teal-500 animate-pulse' : 'bg-slate-300'}`}></div>
                القرار الذكي
            </button>
            <button 
                onClick={() => setMode('trad')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${mode === 'trad' ? 'bg-white text-rose-700 shadow-md transform scale-[1.02]' : 'text-slate-500 hover:text-slate-700'}`}
            >
                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${mode === 'trad' ? 'bg-rose-500 animate-pulse' : 'bg-slate-300'}`}></div>
                الوضع التقليدي
            </button>
        </div>
      </div>

      {/* 2. Main Reality Card */}
      <div className="relative">
        <AnimatePresence mode="wait">
            <motion.div
                key={mode}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border ${mode === 'smart' ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 border-white/5' : 'bg-gradient-to-br from-white via-rose-50/30 to-rose-50/50 border-rose-100'}`}
            >
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,${mode === 'smart' ? '#2dd4bf' : '#e11d48'},transparent_40%)]`}></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                </div>

                <div className="relative z-10 p-6 sm:p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    
                    {/* Left: Illustrative Pulse */}
                    <div className="relative shrink-0">
                        <motion.div 
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className={`absolute inset-0 blur-3xl opacity-20 rounded-full ${mode === 'smart' ? 'bg-teal-400' : 'bg-rose-500'}`}
                        />
                        <div className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center shadow-lg transform rotate-3 bg-white/5 backdrop-blur-md border ${mode === 'smart' ? 'border-teal-500/30' : 'border-rose-200 shadow-rose-100'}`}>
                            {current.icon}
                        </div>
                    </div>

                    {/* Middle: Key Text Content */}
                    <div className="flex-1 text-right">
                        <div className="mb-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border ${mode === 'smart' ? 'bg-teal-500/10 text-teal-400 border-teal-500/20' : 'bg-rose-500/10 text-rose-600 border-rose-500/20'}`}>
                                {current.subtitle}
                            </span>
                            <h3 className={`text-3xl md:text-5xl font-black mb-4 ${mode === 'smart' ? 'text-white' : 'text-slate-800'}`}>
                                {current.title}
                            </h3>
                            <p className={`text-base md:text-xl leading-relaxed font-medium ${mode === 'smart' ? 'text-slate-400' : 'text-slate-500'}`}>
                                {current.desc}
                            </p>
                        </div>
                    </div>

                    {/* Right: Real-time Stats */}
                    <div className="w-full md:w-72 space-y-4">
                        {current.metrics.map((m, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className={`p-4 rounded-2xl border ${mode === 'smart' ? 'bg-white/5 border-white/5' : 'bg-white border-rose-100 shadow-sm'}`}
                            >
                                <div className={`text-[10px] font-bold mb-1 uppercase tracking-wider ${mode === 'smart' ? 'text-slate-500' : 'text-rose-300'}`}>{m.label}</div>
                                <div className={`text-xl md:text-2xl font-black ${mode === 'smart' ? 'text-teal-400' : 'text-rose-600'}`}>
                                    {m.value}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Bottom Notification */}
                <div className={`px-8 py-3 text-center text-[10px] font-bold tracking-tight uppercase border-t ${mode === 'smart' ? 'bg-teal-400/5 border-white/5 text-teal-500/50' : 'bg-rose-500/5 border-rose-100 text-rose-400'}`}>
                    {mode === 'smart' ? 'محاكاة: حالة النظام مستقرة بنسبة 100%' : 'محاكاة: مخاطر عالية وتأخر في المعالجة'}
                </div>

            </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default ScenarioSwitcher;
