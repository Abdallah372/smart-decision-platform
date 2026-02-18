import React from "react";
import { motion } from "framer-motion";
import Term from "./Term";

const Problem = () => {
  const problems = [
    {
      title: "بطء اتخاذ القرار",
      desc: "تعتمد الأنظمة التقليدية على العنصر البشري بشكل كلي، مما يؤدي لتأخير قاتل في لحظات الأزمات.",
      icon: (
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
      ),
      color: "bg-rose-500/10 text-rose-400",
      border: "group-hover:border-rose-500/30",
    },
    {
      title: "تشتت البيانات الضخمة",
      desc: "مع الانفجار التكنولوجي، أصبح من الصعب على العقل البشري وحده معالجة آلاف الإشارات اللحظية بدقة.",
      icon: (
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "bg-amber-500/10 text-amber-400",
      border: "group-hover:border-amber-500/30",
    },
    {
      title: "ارتفاع هوامش الخطأ",
      desc: "التحيز والضغط النفسي يؤثران على موضوعية القرار، مما قد يسبب خسائر مادية وبشرية فادحة.",
      icon: (
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      color: "bg-sky-500/10 text-sky-400",
      border: "group-hover:border-sky-500/30",
    },
  ];

  return (
    <section
      id="problem"
      className="py-[var(--space-l)] md:py-[var(--space-xl)] bg-transparent relative"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        <div className="text-center mb-[var(--space-m)]">
          <h2
            className="font-black text-white mb-4 tracking-tight leading-tight"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            لماذا نحتاج <span className="text-sky-400">نظاماً أذكى؟</span>
          </h2>
          <p
            className="text-slate-400 font-light max-w-2xl mx-auto"
            style={{ fontSize: "var(--text-lg)" }}
          >
            ثلاثة تحديات جوهرية تواجه الأنظمة التقليدية في إدارة الأزمات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-m)]">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`premium-card group h-full ${problem.border}`}
            >
              <div className="relative z-10 text-right h-full flex flex-col items-end">
                <div
                  className={`hover-lift w-14 h-14 ${problem.color} rounded-2xl flex items-center justify-center mb-5 border border-white/5 cursor-default`}
                >
                  {problem.icon}
                </div>
                <h3
                  className="font-black text-white mb-3 group-hover:text-sky-400 transition-colors duration-300"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  {problem.title}
                </h3>
                <p
                  className="text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {problem.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
