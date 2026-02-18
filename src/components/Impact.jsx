import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./interactive/AnimatedCounter";

const Impact = () => {
  const stats = [
    {
      label: "تحسين سرعة الاستجابة",
      value: "92",
      suffix: "%",
      desc: "تقليل زمن اتخاذ القرار من ساعات إلى أجزاء من الثانية عبر النمذجة المنطقية — في المحاكاة.",
      color: "from-sky-400 to-blue-500",
      glow: "rgba(14,165,233,0.15)",
    },
    {
      label: "دقة التوقعات الاستباقية",
      value: "85",
      suffix: "%",
      desc: "قدرة النموذج على رصد الأنماط غير المرئية في البيانات — وفق افتراضات المحاكاة.",
      color: "from-emerald-400 to-teal-500",
      glow: "rgba(16,185,129,0.15)",
    },
    {
      label: "وفورات الموارد العامة",
      value: "40",
      suffix: "%",
      desc: "تقليل الهدر المالي عبر التوزيع المبني على احتياجات حقيقية — رقم مقترح للدراسة.",
      color: "from-amber-400 to-orange-500",
      glow: "rgba(245,158,11,0.15)",
    },
  ];

  return (
    <section
      id="impact"
      className="bg-transparent py-[var(--space-l)] md:py-[var(--space-xl)] text-right leading-relaxed relative"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        {/* Header */}
        <div className="text-center mb-[var(--space-l)]">
          <div className="academic-badge mx-auto mb-5 w-fit">
            <span className="glow-dot"></span>
            نتائج محاكاة — ليست بيانات تشغيلية حقيقية
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-black text-white mb-5 tracking-tight leading-tight"
            style={{ fontSize: "var(--text-huge)" }}
          >
            برهان الأثر: كيف نتأكد من صحة القرار؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ fontSize: "var(--text-lg)" }}
          >
            قياس النجاح في الأنظمة الذكية لا يعتمد على التخمين، بل على مؤشرات
            أداء رقمية صارمة وبحث معمّق.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-m)] mb-[var(--space-l)]">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="premium-card group h-full"
              style={{ "--glow": stat.glow }}
            >
              <div className="relative z-10 flex flex-col items-end h-full">
                <div
                  className={`font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r ${stat.color} group-hover:scale-105 transition-transform duration-300 origin-right`}
                  style={{ fontSize: "var(--text-huge)" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h4
                  className="text-white font-bold mb-3 group-hover:text-sky-400 transition-colors duration-300"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  {stat.label}
                </h4>
                <p
                  className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-300"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-[var(--space-l)]"
        >
          <p
            className="text-slate-500 font-bold uppercase tracking-widest leading-relaxed"
            style={{ fontSize: "var(--text-xs)" }}
          >
            * جميع النسب المذكورة هي تقديرات بحثية مبنية على نماذج محاكاة
            افتراضية (Simulation Data) <br />
            وليس مخرجات تشغيلية لجهات حكومية فعلية حتى تاريخه.
          </p>
        </motion.div>

        {/* Ethics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-m)] items-start border-t border-slate-800/60 pt-[var(--space-l)]">
          <motion.div
            id="ethics"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="premium-card text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
              <svg
                className="w-48 h-48"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
              </svg>
            </div>
            <h3
              className="font-bold mb-5 text-sky-400"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              حدود النظام وأخلاقيات القرار
            </h3>
            <p
              className="leading-relaxed text-slate-300 mb-5 font-light"
              style={{ fontSize: "var(--text-lg)" }}
            >
              نؤمن في هذا النموذج البحثي بأن{" "}
              <span className="font-bold text-sky-400">
                الذكاء الاصطناعي أداة تمكين وليس بديلاً عن الإنسانية.
              </span>{" "}
              خوارزمياتنا المقترحة مصممة لرفع التوصيات فقط، بينما يظل الإنسان هو
              صاحب السيادة والقرار النهائي.
            </p>
            <ul
              className="space-y-3 text-slate-400 font-medium"
              style={{ fontSize: "var(--text-base)" }}
            >
              {[
                "السيادة للبشر: النموذج لا ينفذ قرارات مصيرية تلقائياً.",
                'الشفافية: كل توصية مرفقة بـ "تفسير منطقي" (Explainable AI).',
                "الخصوصية: حماية بيانات المواطنين أولوية تسبق التحليل.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <span className="text-sky-500 mt-1 shrink-0 group-hover/item:scale-125 transition-transform duration-200">
                    •
                  </span>
                  <span className="group-hover/item:text-slate-300 transition-colors duration-200">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="premium-card"
          >
            <h3
              className="font-bold text-white mb-5 underline decoration-sky-500 underline-offset-[10px] decoration-2"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              التوافق الرقمي والوطني
            </h3>
            <p
              className="text-slate-400 leading-relaxed font-light italic"
              style={{ fontSize: "var(--text-lg)" }}
            >
              يتماشى هذا النموذج مع الاستراتيجية الوطنية للذكاء الاصطناعي في
              مصر، حيث يحقق التوازن بين التطور التقني والبعد الاجتماعي، مع
              التركيز على الهدف 11 من أهداف التنمية المستدامة (SDGs) لجعل المدن
              أكثر استدامة وذكاءً.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
