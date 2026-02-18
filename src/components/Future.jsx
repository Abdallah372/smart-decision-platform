import React from "react";
import { motion } from "framer-motion";

const Future = () => {
  const items = [
    {
      year: "2026",
      title: "مرحلة الربط الشامل",
      desc: "تغطية كافة قطاعات الخدمات الحيوية (مرور، طوارئ، بيئة) في العاصمة الإدارية والمدن الذكية الجديدة.",
    },
    {
      year: "2027",
      title: "الذكاء التوليدي للسياسات",
      desc: "استخدام نماذج ذكاء اصطناعي لتقديم مقترحات لسياسات عامة استباقية لمواجهة التغيرات السكانية المتوقعة.",
    },
    {
      year: "2030",
      title: "التحول القومي للنموذج",
      desc: "تحويل المنصة إلى نموذج قياسي سيادي يطبق في كافة محافظات الجمهورية لدعم الاقتصاد الرقمي.",
    },
  ];

  return (
    <section
      id="future"
      className="py-[var(--space-l)] md:py-[var(--space-xl)] text-right overflow-hidden bg-transparent relative"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-black text-white mb-[var(--space-l)] tracking-tight text-center leading-tight"
          style={{ fontSize: "var(--text-huge)" }}
        >
          الرؤية المستقبلية 2026-2030
        </motion.h2>

        <div className="space-y-5">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="premium-card flex flex-col md:flex-row gap-6 md:gap-10 group items-start md:items-center"
            >
              <div
                className="hover-lift shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center font-black italic border cursor-default"
                style={{
                  backgroundColor: "rgba(14,165,233,0.08)",
                  color: "#38bdf8",
                  borderColor: "rgba(14,165,233,0.2)",
                  fontSize: "var(--text-xl)",
                  boxShadow: "0 0 20px rgba(14,165,233,0.08)",
                }}
              >
                {item.year}
              </div>
              <div className="flex-1">
                <h4
                  className="font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300"
                  style={{ fontSize: "var(--text-2xl)" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300"
                  style={{ fontSize: "var(--text-lg)" }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Future;
