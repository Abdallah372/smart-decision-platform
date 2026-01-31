import React from 'react';
import Term from './Term';
import SpeedComparison from './interactive/SpeedComparison';

const Innovation = () => {
  return (
    <section id="innovation" className="bg-blue-900 py-12 sm:py-24 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 text-white text-right">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-tight">ما وراء العرض: الفرق بين الرؤية والبصيرة</h2>
          
          <div className="bg-white/10 p-6 sm:p-8 rounded-2xl border border-white/20 inline-block text-right w-full max-w-4xl mx-auto">
            <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed">
              <span className="font-bold text-green-400 block mb-2 sm:inline sm:mb-0">التشبيه الذكي:</span>{' '}
              <span className="block sm:inline">
              معظم <Term term="الأنظمة التقليدية" explanation="نظام يعتمد على البشر في كل خطوة، بطيء لكن مألوف" /> تعمل كـ <span className="underline decoration-green-400">"مرآة"</span>، تريك ما حدث بالفعل (<Term term="بيانات وصفية" explanation="بيانات تصف ما حدث في الماضي فقط، بدون توقع للمستقبل" />).
              </span>
              <span className="block mt-4 sm:mt-2">
              بينما تعمل منصتنا كـ <span className="underline decoration-green-400">"نظام ملاحة (GPS)"</span>، يحلل الطريق، يتوقع العقبات، ويقترح عليك "أفضل مسار" للوصول لهدفك (<Term term="نظام توصية بالقرار" explanation="نظام يقترح أفضل حل بناءً على تحليل البيانات، مثل Google Maps يقترح أسرع طريق" />).
              </span>
            </p>
          </div>
        </div>
        
        {/* Interactive Speed Comparison */}
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
