import React from "react";
import Term from "./Term";

const Hypothesis = () => {
  return (
    <section id="hypothesis" className="bg-slate-50 py-20 text-right font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-teal-600 font-bold text-sm tracking-widest uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Design of Experiment
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-2">
            منهجية البحث
          </h2>
          <p className="text-slate-600">الإطار النظري الذي تقوم عليه المنصة</p>
        </div>

        {/* Hypothesis Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 ">
          {/* Main Hypothesis Statement */}
          <div className="p-8 border-b border-slate-100 bg-gradient-to-l from-white to-slate-50">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-teal-500">H1</span>
              <span>الفرضية الأساسية:</span>
            </h3>
            <p className="text-lg leading-relaxed text-slate-700 font-medium">
              "دمج{" "}
              <Term
                term="البيانات اللحظية (Real-time Data)"
                explanation="بيانات تُحدّث بشكل فوري وتلقائي من المصدر دون تدخل بشري"
                className="text-teal-700 font-bold border-b-2 border-teal-100 hover:border-teal-500 transition-colors cursor-help"
              />{" "}
              مع خوارزميات دعم القرار يقلل من{" "}
              <Term
                term="التحيز المعرفي البشري"
                explanation="الميل غير الواعي لاتخاذ قرارات بناءً على الخبرة الشخصية أو العاطفة بدلاً من الحقائق المجردة"
                className="text-red-600 font-bold border-b-2 border-red-100 hover:border-red-500 transition-colors cursor-help"
              />{" "}
              في إدارة الموارد العامة بنسبة لا تقل عن 40% مقارنة بالطرق
              التقليدية."
            </p>
          </div>

          {/* Variables & Validation */}
          <div className="grid md:grid-cols-2 divide-x divide-x-reverse divide-slate-100">
            {/* Variables */}
            <div className="p-8">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                متغيرات الدراسة (Variables)
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-teal-500 shrink-0"></div>
                  <div>
                    <Term
                      term="المتغير المستقل:"
                      explanation="العامل الذي نقم بتغييره في التجربة (إدخال النظام الذكي) لملاحظة تأثيره"
                      className="font-bold text-slate-800 block text-sm border-b border-dashed border-slate-300 hover:border-slate-800 cursor-help w-fit"
                    />
                    <span className="text-slate-600 text-sm">
                      {" "}
                      استخدام نظام القرار الذكي (Auto-Governance).
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                  <div>
                    <Term
                      term="المتغير التابع:"
                      explanation="النتيجة التي نقيسها (الكفاءة والسرعة) لنرى كيف تأثرت بالمتغير المستقل"
                      className="font-bold text-slate-800 block text-sm border-b border-dashed border-slate-300 hover:border-slate-800 cursor-help w-fit"
                    />
                    <span className="text-slate-600 text-sm">
                      {" "}
                      كفاءة توزيع الموارد (Cost & Time Efficiency).
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Testable? */}
            <div className="p-8 bg-slate-50/50">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <Term
                  term="قابلية الاختبار (Falsifiability)"
                  explanation="مبدأ علمي يعني أن الفرضية يجب أن تكون مصاغة بحيث يمكن إثبات خطئها بالتجربة والقياس"
                  className="border-b border-dashed border-slate-400 hover:border-slate-900 cursor-help"
                />
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                هذه الفرضية قابلة للدحض والقياس الكمي من خلال:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>مقارنة زمن الاستجابة (A/B Testing).</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>قياس الانحراف المالي المعياري.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hypothesis;
