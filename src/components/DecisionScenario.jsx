import React from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "./interactive/BeforeAfterSlider";

const DecisionScenario = () => {
  return (
    <section
      id="scenario"
      className="relative py-[var(--space-l)] md:py-[var(--space-xl)] text-right overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[var(--space-m)]"
        >
          {/* Academic badge */}
          <div className="academic-badge mx-auto mb-6 w-fit">
            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
            سيناريو محاكاة — نموذج بحثي تعليمي
          </div>
          <h2 className="text-[var(--text-2xl)] md:text-[var(--text-huge)] font-black text-white mb-6 tracking-tight leading-tight">
            تخيّل: أنت صانع القرار الآن
          </h2>
          <div
            className="p-5 md:p-8 rounded-3xl inline-block max-w-3xl mx-auto"
            style={{
              backgroundColor: "rgba(14,165,233,0.07)",
              border: "1px solid rgba(14,165,233,0.15)",
            }}
          >
            <p className="text-[var(--text-base)] md:text-[var(--text-xl)] text-slate-300 leading-relaxed">
              <span className="font-black text-sky-400">السيناريو:</span> أزمة
              مياه صامتة تبدأ الساعة 4 فجرًا.
              <br />
              <span className="text-xs md:text-sm font-bold text-slate-500 mt-2 block">
                بدّل بين الأنظمة أدناه لملاحظة الفرق في الاستجابة — محاكاة
                تعليمية.
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-[var(--space-m)]"
        >
          <BeforeAfterSlider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          <div className="premium-card border-r-4 border-rose-500/40 flex flex-col items-start lg:items-end">
            <h4 className="font-bold text-rose-400 text-[var(--text-xl)] mb-3 flex items-center gap-3">
              <span className="text-2xl">📄</span>
              <span>النظام التقليدي</span>
            </h4>
            <p className="text-[var(--text-base)] text-slate-400 leading-relaxed font-light">
              يحل المشكلة{" "}
              <span className="font-bold text-rose-400 underline decoration-2 underline-offset-4">
                بعد وقوعها
              </span>{" "}
              • يعتمد على الشكاوى • متأثر بالضغط البشري
            </p>
          </div>

          <div className="premium-card border-r-4 border-sky-500/40 flex flex-col items-start lg:items-end">
            <h4 className="font-bold text-sky-400 text-[var(--text-xl)] mb-3 flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span>النموذج الاستباقي المقترح</span>
            </h4>
            <p className="text-[var(--text-base)] text-slate-400 leading-relaxed font-light">
              يمنع المشكلة{" "}
              <span className="font-bold text-sky-400 underline decoration-2 underline-offset-4">
                من الوجود
              </span>{" "}
              • يرصد الأنماط الخفية • بارد تحليليًا في الأزمات
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-[var(--space-m)] text-center"
        >
          <p className="text-sky-400/80 text-[var(--text-xl)] md:text-[var(--text-2xl)] font-black italic max-w-3xl mx-auto leading-relaxed">
            "نحن لا نستبدل القادة، بل نزودهم بعيون ترى ما وراء الأفق"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DecisionScenario;
