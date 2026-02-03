import React from 'react';

const ProjectRoadmap = () => {
  return (
    <section id="roadmap" className="py-24 bg-slate-50 text-right" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">حدود النموذج وخارطة الطريق</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            من أجل المصداقية العلمية، نوضح هنا النطاق الحالي للنموذج الأولي والخطوات اللازمة لتحويله إلى نظام إنتاجي كامل.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Current Scope */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-slate-400"></div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">النطاق الحالي (Prototype)</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">●</span>
                <p className="text-slate-600 text-sm">يقدم تجربة مستخدم (UX) متكاملة لمحاكاة القرار.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">●</span>
                <p className="text-slate-600 text-sm">يعتمد على منطق برمجـي ثابـت (Static Logic) لشرح الفرضيات.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">●</span>
                <p className="text-slate-600 text-sm">الأرقام الإحصائية هي قيم افتراضية مرجعية لأغراض العرض.</p>
              </li>
            </ul>
          </div>

          {/* Future Growth */}
          <div className="bg-teal-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-teal-400"></div>
             <h3 className="text-xl font-bold mb-6">التطوير المستقبلي (Backend)</h3>
             <ul className="space-y-4">
              <li className="flex items-start gap-3 text-teal-100">
                <span className="text-teal-400 mt-1">✓</span>
                <p className="text-sm">بناء محرك معالجة (Node.js/Go) للبيانات الضخمة.</p>
              </li>
              <li className="flex items-start gap-3 text-teal-100">
                <span className="text-teal-400 mt-1">✓</span>
                <p className="text-sm">دمج نماذج التعلم الآلي للتنبؤ الفني بالأنماط.</p>
              </li>
              <li className="flex items-start gap-3 text-teal-100">
                <span className="text-teal-400 mt-1">✓</span>
                <p className="text-sm">ربط النظام بحساسات IoT حقيقية لنقل الحالة لحظياً.</p>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectRoadmap;
