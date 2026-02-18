import React from "react";

const ProjectRoadmap = () => {
  return (
    <section
      id="roadmap"
      className="py-[var(--space-l)] md:py-[var(--space-xl)] bg-transparent relative text-right"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-[var(--text-2xl)] font-black text-white mb-8 tracking-tight leading-tight">
            حدود النموذج <span className="text-sky-400">وخارطة الطريق</span>
          </h2>
          <p className="text-[var(--text-base)] md:text-[var(--text-xl)] text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            من أجل المصداقية العلمية، نوضح هنا النطاق الحالي للنموذج الأولي
            والخطوات اللازمة لتحويله إلى نظام إنتاجي متكامل.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Current Scope */}
          <div className="premium-card !p-8 md:!p-12 relative overflow-hidden group flex flex-col items-start lg:items-end">
            <div className="absolute top-0 right-0 w-1 md:w-1.5 h-full bg-slate-700/50"></div>
            <h3 className="text-xl font-bold text-white mb-8 md:mb-10 flex items-center gap-3">
              <span className="p-2 bg-slate-800 rounded-lg text-lg">🔬</span>
              النطاق الحالي (Prototype)
            </h3>
            <ul className="space-y-6 md:space-y-8">
              {[
                "يقدم تجربة مستخدم (UX) متكاملة لمحاكاة القرار.",
                "يعتمد على منطق برمجـي ثابـت (Static Logic) لشرح الفرضيات.",
                "الأرقام الإحصائية هي قيم افتراضية مرجعية لأغراض العرض المستندي.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-slate-600 mt-2 text-xs">●</span>
                  <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Growth */}
          <div className="premium-card !p-8 md:!p-12 relative overflow-hidden group border-sky-500/20 flex flex-col items-start lg:items-end">
            <div className="absolute top-0 right-0 w-1 md:w-1.5 h-full bg-sky-500"></div>
            <h3 className="text-xl font-bold text-white mb-8 md:mb-10 flex items-center gap-3">
              <span className="p-2 bg-sky-500/10 rounded-lg text-lg">🚀</span>
              التطوير المستقبلي (Backend)
            </h3>
            <ul className="space-y-6 md:space-y-8">
              {[
                "بناء محرك معالجة (Node.js/Go) للبيانات الضخمة.",
                "دمج نماذج التعلم الآلي للتنبؤ الفني بالأنماط السلوكية.",
                "ربط النظام بحساسات IoT حقيقية لنقل الحالة لحظياً وبدقة عالية.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-300">
                  <span className="text-sky-500 mt-1 text-lg font-black">
                    ✓
                  </span>
                  <p className="text-base md:text-lg leading-relaxed font-light">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectRoadmap;
