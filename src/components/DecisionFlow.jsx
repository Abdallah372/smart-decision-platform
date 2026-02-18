import React from "react";
import { motion } from "framer-motion";

const DecisionFlow = () => {
  return (
    <section
      id="flow"
      className="py-[var(--space-l)] md:py-[var(--space-xl)] bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-m)] lg:gap-[var(--space-xl)] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-right"
          >
            <div className="academic-badge mb-6">
              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
              مخطط منطقي — نموذج مقترح
            </div>
            <h2 className="text-[var(--text-2xl)] md:text-[var(--text-huge)] font-black text-white mb-6 leading-tight tracking-tight">
              خرائط <span className="text-sky-400">التفكير المنطقي</span>
            </h2>
            <p className="text-[var(--text-lg)] text-slate-400 font-light mb-10 leading-relaxed">
              يوضح هذا المخطط تسلسل العمليات البرمجية التي يتبعها النموذج الأولي
              لتحويل المدخلات الرقمية إلى توصيات قرار.
            </p>
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  step: "01",
                  title: "مرحلة استلام المدخلات",
                  desc: "تجميع البيانات من المصادر الرقمية المعتمدة وتحويلها إلى أرقام منطقية.",
                },
                {
                  step: "02",
                  title: "مرحلة المحاكاة (Sandbox)",
                  desc: "اختبار تبعات القرار في بيئة افتراضية آمنة قبل إقراره في الواقع.",
                },
                {
                  step: "03",
                  title: "مرحلة القرار الاستباقي",
                  desc: "إصدار توصيات وإجراءات حمائية لمنع الأزمة قبل حدوثها.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 md:gap-5 items-start group"
                >
                  <div
                    className="shrink-0 w-10 h-10 md:w-11 md:h-11 bg-sky-500 text-white rounded-xl flex items-center justify-center font-black text-sm transition-transform group-hover:scale-110"
                    style={{ boxShadow: "0 0 15px rgba(14,165,233,0.3)" }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-[var(--text-base)] md:text-[var(--text-lg)] font-bold text-white mb-1.5 group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[var(--text-base)] text-slate-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Code Block - fully responsive */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="premium-card !p-0 overflow-hidden w-full mt-8 lg:mt-0"
          >
            <div
              className="p-3 md:p-4 border-b flex items-center gap-2"
              style={{
                backgroundColor: "rgba(30,41,59,0.5)",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              <span className="text-slate-500 text-[10px] md:text-xs font-mono ml-auto">
                logic-engine.v2 · Prototype
              </span>
            </div>
            <div
              className="p-5 md:p-8 font-mono text-xs md:text-sm overflow-x-auto"
              style={{ backgroundColor: "rgba(2,6,23,0.5)" }}
              dir="ltr"
            >
              <pre className="text-sky-400 whitespace-pre-wrap break-words">
                <code>{`if (inputs.riskLevel > threshold) {
  // Activate Protection Protocol
  simulator.run({
    scenario: "extreme_demand",
    duration: "24h",
    safety_margin: 0.15
  });
  
  return decision.PROACTIVE_RESOLUTION;
} else {
  return decision.CONTINUE_MONITORING;
}`}</code>
              </pre>
              <p className="text-slate-600 text-[10px] mt-6 italic border-t border-slate-800 pt-4">
                // نموذج كود مقترح للمحاكاة — ليس كوداً تشغيلياً فعلياً
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DecisionFlow;
