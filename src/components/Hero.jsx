import React, { useState } from "react";
import Term from "./Term";
import ResearchModal from "./ResearchModal";
import { motion } from "framer-motion";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-[var(--space-l)] pb-[var(--space-m)] md:pt-[var(--space-xl)] md:pb-[var(--space-l)] overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-m)] lg:gap-[var(--space-xl)] items-center">
          {/* ── Right: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-right"
          >
            <div className="academic-badge mb-6">
              <span className="glow-dot"></span>
              مشروع بحثي طلابي — محاكاة أنظمة دعم القرار
            </div>

            <h1
              className="font-black text-white leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "var(--text-huge)" }}
            >
              محاكي أنظمة <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to left, #38bdf8, #0ea5e9, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                دعم القرار البحثي
              </span>
            </h1>

            <p
              className="text-slate-400 leading-relaxed max-w-xl font-light mb-10 opacity-90"
              style={{ fontSize: "var(--text-lg)" }}
            >
              أدوات بصرية لاستعراض منهجية تحويل{" "}
              <Term
                term="البيانات الرقمية"
                explanation="المعلومات المستمدة من الحساسات أو السجلات الرقمية التي تعمل كمدخلات للنموذج المحاكي"
                className="text-sky-400"
              />{" "}
              إلى توصيات استباقية — كنموذج بحثي نظري.
            </p>

            <div className="flex flex-col sm:flex-row-reverse gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-sky-600 text-white rounded-2xl font-bold hover:bg-sky-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:scale-[1.03] active:scale-95"
                style={{ fontSize: "var(--text-base)" }}
              >
                عرض تفاصيل البحث
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("problem")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-slate-300 border border-slate-800 rounded-2xl font-bold hover:bg-slate-800 hover:text-white hover:border-slate-700 active:scale-95"
                style={{ fontSize: "var(--text-base)" }}
              >
                ابدأ الجولة التعليمية
              </button>
            </div>
          </motion.div>

          {/* ── Left: Visual Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div
              className="premium-card aspect-[4/3] flex items-center justify-center p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,165,233,0.07), transparent 50%, rgba(99,102,241,0.07))",
              }}
            >
              <div className="relative z-10 text-center w-full">
                <div
                  className="hover-lift w-20 h-20 rounded-full flex items-center justify-center mb-5 mx-auto border cursor-default"
                  style={{
                    backgroundColor: "rgba(14,165,233,0.1)",
                    borderColor: "rgba(14,165,233,0.2)",
                  }}
                >
                  <svg
                    className="w-10 h-10 text-sky-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p
                  className="text-sky-400 font-bold mb-1"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  نموذج محاكاة بحثي
                </p>
                <p
                  className="text-slate-600"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  Research Simulation · Not a Live System
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="hover-lift h-10 rounded-xl cursor-default"
                      style={{
                        backgroundColor: "rgba(30,41,59,0.5)",
                        border: "1px solid rgba(51,65,85,0.5)",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ResearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
