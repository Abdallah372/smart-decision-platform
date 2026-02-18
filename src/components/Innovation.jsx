import React from "react";
import { motion } from "framer-motion";
import Term from "./Term";
import SpeedComparison from "./interactive/SpeedComparison";

const Innovation = () => {
  return (
    <section
      id="innovation"
      className="py-[var(--space-l)] md:py-[var(--space-xl)] bg-transparent relative"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-m)] lg:gap-[var(--space-xl)] items-center mb-[var(--space-l)]">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-right"
          >
            <div className="academic-badge mb-5">
              <span className="glow-dot"></span>
              نموذج بحثي أولي — 2026
            </div>
            <h2
              className="font-black text-white mb-5 leading-tight tracking-tight"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              الابتكار في <span className="text-sky-400">جوهر القرار</span>
            </h2>
            <p
              className="text-slate-400 leading-relaxed font-light mb-8"
              style={{ fontSize: "var(--text-lg)" }}
            >
              لا نكتفي بتحليل الماضي، بل نستخدم{" "}
              <Term
                term="الذكاء التنبؤي"
                explanation="قدرة النموذج المحاكي على استقراء المستقبل بناءً على تحليل الأنماط المتكررة في البيانات — كمفهوم بحثي"
                className="text-sky-400"
              />{" "}
              لمواجهة التحديات قبل تحولها إلى أزمات حقيقية.
            </p>
            <div className="space-y-3">
              {[
                { label: "محرك الاحتمالات المنطقية (محاكاة)", icon: "🧠" },
                { label: "معالجة البيانات في النموذج الأولي", icon: "⚡" },
                { label: "تشفير القرارات — مفهوم مقترح", icon: "🛡️" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="premium-card !rounded-2xl !py-3 flex items-center gap-4 group"
                >
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span
                    className="text-white font-semibold group-hover:text-sky-400 transition-colors duration-300"
                    style={{ fontSize: "var(--text-base)" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="premium-card aspect-square flex items-center justify-center p-1 max-w-lg mx-auto lg:mx-0 w-full"
            style={{ background: "rgba(15,23,42,0.3)" }}
          >
            <div
              className="w-full h-full rounded-[1.5rem] flex flex-col items-center justify-center relative overflow-hidden gap-4"
              style={{ backgroundColor: "rgba(2,6,23,0.4)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(14,165,233,0.05), transparent 50%, rgba(99,102,241,0.05))",
                }}
              ></div>
              <div
                className="hover-lift relative z-10 w-28 h-28 md:w-36 md:h-36 border-2 border-dashed rounded-full flex items-center justify-center cursor-default"
                style={{ borderColor: "rgba(14,165,233,0.2)" }}
              >
                <div
                  className="w-16 h-16 md:w-22 md:h-22 rounded-full flex items-center justify-center text-4xl md:text-5xl"
                  style={{ backgroundColor: "rgba(14,165,233,0.1)" }}
                >
                  🔬
                </div>
              </div>
              <div className="relative z-10 text-center px-4">
                <p
                  className="text-sky-400 font-bold"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  نموذج محاكاة بحثي
                </p>
                <p
                  className="text-slate-500 mt-1"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  Research Simulation Prototype
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Speed Simulation */}
        <div className="mt-[var(--space-m)]">
          <SpeedComparison />
        </div>

        <div className="mt-[var(--space-m)] text-center">
          <p
            className="text-slate-400 font-semibold italic opacity-80 max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: "var(--text-xl)" }}
          >
            "الفرق ليس في امتلاك المعلومات، بل في امتلاك الجرأة على تحويلها إلى
            فعل استباقي."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
