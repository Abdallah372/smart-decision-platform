import React from "react";
import Term from "./Term";
import DataFlowAnimation from "./interactive/DataFlowAnimation";

const Solution = () => {
  return (
    <section
      id="solution"
      className="py-[var(--space-l)] md:py-[var(--space-xl)] bg-transparent relative text-right"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        {/* Data Flow Animation Header */}
        <div className="mb-[var(--space-l)] text-center">
          <h2
            className="font-black text-white mb-8 leading-tight tracking-tight"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            كيف نحوّل <span className="text-sky-400">البيانات إلى قرارات؟</span>
          </h2>
          <div className="premium-card !p-1">
            <div
              className="rounded-[1.25rem] p-5 md:p-12"
              style={{ backgroundColor: "rgba(2,6,23,0.4)" }}
            >
              <DataFlowAnimation />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-m)] lg:gap-[var(--space-xl)] items-center">
          {/* Visual icon card */}
          <div className="relative order-2 lg:order-1 w-full max-w-sm mx-auto lg:mx-0">
            <div className="premium-card aspect-square !p-1">
              <div
                className="w-full h-full rounded-[1.25rem] flex items-center justify-center p-8 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0f172a, #020617)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.15), transparent 70%)",
                  }}
                ></div>
                <div
                  className="hover-lift p-10 rounded-[2rem] relative z-10 cursor-default"
                  style={{
                    backgroundColor: "#020617",
                    border: "1px solid rgba(255,255,255,0.05)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <svg
                    className="w-16 h-16 text-sky-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Steps list */}
          <div className="order-1 lg:order-2 w-full">
            <h2
              className="font-black text-white mb-8 leading-tight"
              style={{ fontSize: "var(--text-huge)" }}
            >
              بروتوكول البناء <br />
              <span className="text-sky-400">من البيانات للتمكين</span>
            </h2>
            <div className="space-y-7">
              {[
                {
                  id: 1,
                  title: "تكامل البيانات",
                  desc: "ربط جميع المصادر اللحظية للبيانات (حساسات، سجلات رقمية) في قاعدة مركزية واحدة.",
                },
                {
                  id: 2,
                  title: "المعالجة المنطقية",
                  desc: "استخدام خوارزميات المحاكاة المنطقية لتحليل الأنماط التاريخية واستنتاج الروابط.",
                  term: {
                    name: "تعلم الآلة",
                    desc: "مفهوم بحثي: تدريب الأنظمة على اكتشاف الأنماط تلقائياً — يُستخدم هنا كنموذج محاكاة نظري.",
                  },
                },
                {
                  id: 3,
                  title: "دعم القرار التفاعلي",
                  desc: "توليد تقارير وتنبيهات تساعد المسؤولين على اختيار المسار الأمثل.",
                },
              ].map((step) => (
                <div
                  key={step.id}
                  className="flex gap-4 md:gap-5 group items-start"
                >
                  <div
                    className="hover-lift shrink-0 w-11 h-11 bg-sky-500 text-white rounded-xl flex items-center justify-center font-black cursor-default"
                    style={{
                      fontSize: "var(--text-lg)",
                      boxShadow: "0 8px 20px rgba(14,165,233,0.3)",
                    }}
                  >
                    {step.id}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-white mb-1.5 group-hover:text-sky-400 transition-colors duration-300"
                      style={{ fontSize: "var(--text-xl)" }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300"
                      style={{ fontSize: "var(--text-base)" }}
                    >
                      {step.desc}
                      {step.term && (
                        <>
                          {" "}
                          <Term
                            term={step.term.name}
                            explanation={step.term.desc}
                            className="text-sky-400"
                          />
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
