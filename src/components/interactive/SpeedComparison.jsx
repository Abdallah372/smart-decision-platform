import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SpeedComparison = () => {
  const [status, setStatus] = useState("idle"); // 'idle', 'running', 'finished'
  const [fastProgress, setFastProgress] = useState(0);
  const [slowProgress, setSlowProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  const messages = [
    "بدء تحليل البيانات المعقدة...",
    "فحص الأنماط المكانية والزمنية...",
    "محاكاة سيناريوهات القرار البديلة...",
    "تحسين كفاءة الاستجابة الرقمية...",
    "تم توليد القرار الأمثل بنجاح ✓",
  ];

  const startRace = () => {
    setStatus("running");
    setFastProgress(0);
    setSlowProgress(0);
    setStatusMessage(messages[0]);
  };

  useEffect(() => {
    if (status !== "running") return;

    let msgIdx = 0;
    const msgInterval = setInterval(() => {
      msgIdx = Math.min(msgIdx + 1, messages.length - 1);
      setStatusMessage(messages[msgIdx]);
    }, 1200);

    // Fast timer (0.5s)
    const fastTimer = setInterval(() => {
      setFastProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fastTimer);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    // Slow timer (6s)
    const slowTimer = setInterval(() => {
      setSlowProgress((prev) => {
        if (prev >= 100) {
          clearInterval(slowTimer);
          clearInterval(msgInterval);
          setStatus("finished");
          return 100;
        }
        return prev + 1;
      });
    }, 60);

    return () => {
      clearInterval(fastTimer);
      clearInterval(slowTimer);
      clearInterval(msgInterval);
    };
  }, [status]);

  return (
    <div className="w-full max-w-5xl mx-auto premium-card !p-8 sm:!p-16 overflow-hidden">
      {status === "running" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 text-xs md:text-sm font-bold border border-sky-500/20 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
            {statusMessage}
          </span>
        </motion.div>
      )}

      <div className="space-y-[var(--space-m)] md:space-y-16">
        {/* Row 1: Smart System */}
        <div className="relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-500/20 rounded-2xl flex items-center justify-center text-sky-400 border border-sky-500/30 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white text-lg md:text-xl font-bold">
                  نظام منصتنا (الاستباقي)
                </h4>
                <p className="text-sky-400/60 text-xs md:text-sm tracking-wide">
                  تحليل لحظي + قرار فوري
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl md:text-3xl font-black text-sky-400">
                0.5s
              </span>
            </div>
          </div>

          {/* Progress Track */}
          <div className="h-5 md:h-6 bg-slate-900 rounded-full overflow-hidden relative border border-slate-800 shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${fastProgress}%` }}
              className="h-full bg-gradient-to-r from-sky-500 to-blue-500 shadow-[0_0_30px_rgba(14,165,233,0.5)]"
            />
            <AnimatePresence>
              {fastProgress === 100 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] md:text-[10px] font-black text-white px-2 md:px-3 py-0.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                >
                  DONE
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Row 2: Traditional System */}
        <div className="relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800/50 rounded-2xl flex items-center justify-center text-slate-500 border border-slate-700">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-slate-400 text-lg md:text-xl font-bold">
                  الأنظمة التقليدية
                </h4>
                <p className="text-slate-600 text-xs md:text-sm tracking-wide">
                  انتظار البلاغات + دورة ورقية
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl md:text-3xl font-black text-slate-600">
                6.0s
              </span>
            </div>
          </div>

          {/* Progress Track */}
          <div className="h-5 md:h-6 bg-slate-900 rounded-full overflow-hidden relative border border-slate-800 shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${slowProgress}%` }}
              className="h-full bg-slate-700"
            />
          </div>
        </div>
      </div>

      {/* Result Card */}
      <AnimatePresence>
        {status === "finished" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 md:mt-16 bg-sky-500/5 border border-sky-500/10 p-8 md:p-10 rounded-[2.5rem] text-center shadow-inner"
          >
            <p className="text-white text-[var(--text-xl)] md:text-3xl font-black mb-3 leading-tight tracking-tight">
              لقد وفرنا <span className="text-sky-400">92%</span> من الوقت
              الضائع*
            </p>
            <p className="text-[var(--text-base)] md:text-lg text-slate-400 font-light leading-relaxed">
              في الأزمات، الوقت ليس مالاً فقط.. الوقت هو حياة.
            </p>
            <div className="h-px w-24 bg-slate-800 mx-auto mt-8 mb-4"></div>
            <p className="text-[10px] text-slate-600 italic tracking-wide uppercase font-bold text-center">
              * نسبة محاكاة مبنية على فارق المعالجة الرقمية.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Button */}
      <div className="mt-12 md:mt-16 flex justify-center w-full">
        <button
          onClick={startRace}
          disabled={status === "running"}
          className={`
            w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl
            ${
              status === "running"
                ? "bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700"
                : "bg-white text-[#020617] hover:bg-sky-50 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            }
          `}
        >
          {status === "running"
            ? "يتم التحليل الرقمي..."
            : "بدء تجربة المحاكاة"}
        </button>
      </div>
    </div>
  );
};

export default SpeedComparison;
