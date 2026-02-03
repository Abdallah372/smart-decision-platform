import React from 'react';
import Term from './Term';
import SpeedComparison from './interactive/SpeedComparison';

const Innovation = () => {
  return (
    <section id="innovation" className="bg-blue-900 py-12 sm:py-24 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 text-white text-right">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-tight">ما وراء العرض: الفرق بين الرؤية والبصيرة</h2>
          
          <div className="bg-white/5 backdrop-blur-md p-8 sm:p-12 rounded-[2.5rem] border border-white/10 text-right w-full max-w-5xl mx-auto shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
               <div className="bg-teal-500/10 p-4 rounded-2xl border border-teal-500/20">
                  <span className="text-teal-400 font-black text-sm uppercase tracking-widest block mb-1">Concept</span>
                  <h3 className="text-white font-bold text-xl">التشبيه الذكي</h3>
               </div>
               
               <div className="flex-1 space-y-6">
                <p className="text-blue-50 text-xl md:text-2xl leading-relaxed font-medium">
                  معظم <Term term="الأنظمة التقليدية" explanation="نظام يعتمد على الإجراءات اليدوية والبشرية المتعاقبة، مما يسبب تأخيراً في كل خطوة" /> تعمل كـ <span className="text-teal-400 font-bold italic">"مرآة"</span>، تريك ما حدث بالفعل (<Term term="بيانات وصفية" explanation="معلومات تشرح الماضي فقط (ماذا حدث؟) ولكنها لا تملك القدرة على تفسير السبب أو توقع القادم" />).
                </p>
                
                <p className="text-blue-50 text-xl md:text-2xl leading-relaxed font-medium">
                  بينما تعمل <span className="text-emerald-400 font-bold italic">محاكاة منصتنا</span> كـ "نظام ملاحة (GPS)"، يحلل الطريق، يتوقع العقبات قبل وصولك، ويقترح عليك "أفضل مسار" للوصول لهدفك (<Term term="نظام توصية بالقرار" explanation="محرك ذكي يجمع التحليل التوقعي مع الأهداف الإستراتيجية ليطرح الحل الأمثل فور وقوع الأزمة" />).
                </p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
           <SpeedComparison />
        </div>
        
        <div className="mt-10 sm:mt-16 text-center px-4">
            <p className="text-blue-100 text-lg sm:text-2xl font-bold tracking-tight leading-relaxed">
                "الفرق ليس في امتلاك المعلومات، بل في امتلاك الجرأة على تحويلها إلى فعل استباقي."
            </p>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
