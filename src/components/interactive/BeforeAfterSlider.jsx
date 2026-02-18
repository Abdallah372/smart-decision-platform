import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ScenarioSwitcher - Replaces the old slider with a high-end "Reality Toggle"
 * Focuses on clarity, impact, and mobile responsiveness.
 */
const ScenarioSwitcher = () => {
  const [mode, setMode] = useState("smart"); // 'trad' or 'smart'

  const scenarios = {
    trad: {
      id: "trad",
      title: "النظام التقليدي",
      subtitle: "رد فعل (Reactive)",
      desc: "يعتمد على البلاغات اليدوية بعد وقوع الأزمة، مما يؤدي لتضاعف الخسائر.",
      color: "from-rose-50 to-white",
      accent: "rose-600",
      metrics: [
        { label: "زمن الكشف", value: "4 ساعات", status: "critical" },
        { label: "نسبة الخسارة", value: "85%", status: "critical" },
        { label: "التكلفة الإضافية", value: "عالية جداً", status: "critical" },
      ],
      icon: (
        <svg
          className="w-12 h-12 text-rose-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    smart: {
      id: "smart",
      title: "نظام القرار الذكي",
      subtitle: "فعل استباقي (Proactive)",
      desc: "يرصد المؤشرات الأولية قبل وقوع الأزمة، ويقوم بأتمتة الحلول فورياً.",
      color: "from-teal-900 to-slate-900",
      accent: "teal-400",
      metrics: [
        { label: "زمن الكشف", value: "0.2 ثانية", status: "perfect" },
        { label: "نسبة الخسارة", value: "0%", status: "perfect" },
        { label: "التكلفة الإضافية", value: "صفرية", status: "perfect" },
      ],
      icon: (
        <svg
          className="w-12 h-12 text-teal-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  };

  const current = scenarios[mode];

  return (
    <div className="w-full max-w-5xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)]">
      {/* 1. Professional Toggle Button */}
      <div className="flex justify-center mb-[var(--space-m)]">
        <div className="bg-[#1e293b] p-1.5 rounded-2xl flex flex-col sm:flex-row gap-1.5 shadow-2xl border border-slate-700 w-full sm:w-auto">
          <button
            onClick={() => setMode("smart")}
            className={`px-4 sm:px-10 py-3 sm:py-4 rounded-xl text-sm md:text-base font-bold transition-all duration-300 flex items-center justify-center gap-3 ${mode === "smart" ? "bg-sky-600 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] transform scale-[1.02]" : "text-slate-400 hover:text-slate-200"}`}
          >
            <div
              className={`w-2 h-2 rounded-full ${mode === "smart" ? "bg-white animate-pulse" : "bg-slate-600"}`}
            ></div>
            القرار الذكي
          </button>
          <button
            onClick={() => setMode("trad")}
            className={`px-4 sm:px-10 py-3 sm:py-4 rounded-xl text-sm md:text-base font-bold transition-all duration-300 flex items-center justify-center gap-3 ${mode === "trad" ? "bg-rose-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)] transform scale-[1.02]" : "text-slate-400 hover:text-slate-200"}`}
          >
            <div
              className={`w-2 h-2 rounded-full ${mode === "trad" ? "bg-white animate-pulse" : "bg-slate-600"}`}
            ></div>
            الوضع التقليدي
          </button>
        </div>
      </div>

      {/* 2. Main Reality Card */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`relative w-full overflow-hidden rounded-[2.5rem] sm:rounded-[4rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)] border ${mode === "smart" ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-sky-950 border-white/5" : "bg-gradient-to-br from-[#1e1e1e] via-[#2d1b1b] to-rose-950 border-white/5"}`}
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-20">
              <div
                className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,${mode === "smart" ? "#0ea5e9" : "#f43f5e"},transparent_40%)]`}
              ></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="relative z-10 p-6 sm:p-12 md:p-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              {/* Left: Illustrative Pulse */}
              <div className="relative shrink-0 hidden md:block">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute inset-0 blur-[80px] opacity-40 rounded-full ${mode === "smart" ? "bg-sky-400" : "bg-rose-500"}`}
                />
                <div
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center shadow-2xl transform rotate-3 bg-[#020617]/40 backdrop-blur-3xl border ${mode === "smart" ? "border-sky-500/30" : "border-rose-500/30"}`}
                >
                  {current.icon}
                </div>
              </div>

              {/* Middle: Key Text Content */}
              <div className="flex-1 text-right w-full">
                <div className="mb-6">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border ${mode === "smart" ? "bg-sky-500/10 text-sky-400 border-sky-500/20" : "bg-rose-500/10 text-rose-400 border-rose-500/20"}`}
                  >
                    {current.subtitle}
                  </span>
                  <h3
                    className={`text-[var(--text-xl)] md:text-[var(--text-2xl)] lg:text-5xl font-black mb-6 leading-tight ${mode === "smart" ? "text-white" : "text-slate-100"}`}
                  >
                    {current.title}
                  </h3>
                  <p
                    className={`text-[var(--text-base)] md:text-lg lg:text-xl leading-relaxed font-light ${mode === "smart" ? "text-slate-400" : "text-slate-400"}`}
                  >
                    {current.desc}
                  </p>
                </div>
              </div>

              {/* Right: Real-time Stats */}
              <div className="w-full lg:w-72 space-y-4">
                {current.metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="p-4 md:p-6 rounded-2xl bg-[#020617]/40 border border-white/5 backdrop-blur-sm"
                  >
                    <div className="text-[10px] font-bold mb-1 uppercase tracking-widest text-slate-500">
                      {m.label}
                    </div>
                    <div
                      className={`text-xl md:text-2xl font-black ${mode === "smart" ? "text-sky-400" : "text-rose-500"}`}
                    >
                      {m.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Notification */}
            <div
              className={`px-8 py-4 text-center text-[10px] font-black tracking-[0.1em] uppercase border-t ${mode === "smart" ? "bg-sky-500/5 border-white/5 text-sky-500/60" : "bg-rose-500/5 border-white/5 text-rose-500/60"}`}
            >
              {mode === "smart"
                ? "محاكاة: حالة النظام مستقرة"
                : "محاكاة: مخاطر عالية"}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScenarioSwitcher;
