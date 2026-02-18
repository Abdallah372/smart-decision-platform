import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * DataFlowAnimation - A reimagined, ultra-stable visualizer.
 * Fixes alignment issues by using a single SVG-based path or consistent relative positioning.
 */
const DataFlowAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const steps = [
    { id: "raw", label: "بيانات خام", icon: "📊", color: "bg-slate-700" },
    { id: "analysis", label: "تحليل ذكي", icon: "🧠", color: "bg-sky-500" },
    { id: "decision", label: "قرار فوري", icon: "✅", color: "bg-emerald-500" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 font-cairo" dir="rtl">
      <div
        className={`flex ${isMobile ? "flex-col" : "flex-row-reverse"} items-center justify-between relative gap-8 md:gap-0`}
      >
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            {/* The Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.4 }}
              className="flex flex-col items-center z-10"
            >
              <div
                className={`${step.color} w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center text-4xl md:text-5xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-4 border-slate-800 transform rotate-3 hover:rotate-0 transition-transform duration-300`}
              >
                {step.icon}
              </div>
              <span className="mt-5 font-black text-white text-base md:text-xl">
                {step.label}
              </span>
            </motion.div>

            {/* The Connector */}
            {idx < steps.length - 1 && (
              <div
                className={`relative flex items-center justify-center ${isMobile ? "h-24 w-1" : "flex-1 h-1 mx-10"}`}
              >
                {/* Visual Path */}
                <div
                  className={`absolute inset-0 bg-slate-800 rounded-full ${isMobile ? "w-2 h-full" : "h-2 w-full"}`}
                />

                {/* Moving Particles */}
                {[0, 1, 2].map((p) => (
                  <motion.div
                    key={p}
                    className="absolute w-4 h-4 md:w-5 md:h-5 bg-sky-400 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.8)] z-20"
                    animate={
                      isMobile
                        ? {
                            top: ["0%", "100%"],
                            opacity: [0, 1, 1, 0],
                            scale: [0.8, 1.2, 0.8],
                          }
                        : {
                            // Desktop: Right to Left
                            right: ["0%", "100%"],
                            opacity: [0, 1, 1, 0],
                            scale: [0.8, 1.2, 0.8],
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.5 + p * 0.6,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Modern Insight Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-24 text-center"
      >
        <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-[#1e293b] text-white px-10 py-5 rounded-[2.5rem] shadow-2xl border border-slate-700/50">
          <span className="text-sky-400 font-black text-2xl">
            "البيانات هي الوقود، والقرار هو المحرك"
          </span>
          <div className="hidden md:block w-px h-8 bg-slate-700"></div>
          <span className="text-slate-400 text-base font-light">
            نظام SDP يحول المدخلات إلى أفعال في أجزاء من الثانية.
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default DataFlowAnimation;
