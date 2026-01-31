import React from 'react';
import Term from './Term';

const Problem = () => {
  return (
    <section id="problem" className="bg-gray-50 py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 tracking-tight italic leading-tight">
            سؤال البحث: متى تتحول الوفرة المعلوماتية إلى "<Term term="العبء الإداري" explanation="كثرة البيانات والتقارير التي تستهلك وقت المسؤول بدل أن تساعده" />"؟
          </h2>
          <p className="text-base sm:text-l md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            لا تكمن المشكلة في نقص البيانات، بل في "<Term term="العمى المعلوماتي" explanation="وجود بيانات كثيرة لكن بدون أدوات ذكية تربطها وتحوّلها إلى قرار مفيد" />" الذي يصيب المؤسسات نتيجة غياب أدوات الفرز الذكي.
          </p>
        </div>
        
        {/* Mobile: Stacked Vertical, Desktop: Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 sm:gap-8 text-right">
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-150">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">هدر الموارد</h3>
            <p className="text-base text-gray-600 leading-relaxed">فقدان للطاقة والموارد المالية نتيجة تقديرات غير دقيقة وبيانات قديمة.</p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-150">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">بطء اتخاذ القرار</h3>
            <p className="text-base text-gray-600 leading-relaxed">الدورة المستندية الطويلة والاعتماد على التقارير المكتوبة بدلاً من <Term term="البيانات اللحظية" explanation="بيانات تُحدّث كل ثانية، مثل عدد المستخدمين الآن أو استهلاك الكهرباء الحالي" />.</p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-150">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">غياب <Term term="الرؤية التنبؤية" explanation="القدرة على توقع المشاكل قبل حدوثها، مثل توقع ازدحام مروري قبل ساعة" /></h3>
            <p className="text-base text-gray-600 leading-relaxed">صعوبة توقع الزيادات المفاجئة في الطلب على الخدمات العامة قبل وقوعها.</p>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-16 text-center px-2">
          <p className="text-red-600 font-bold text-base sm:text-lg md:text-xl leading-relaxed">
            "في عالم اليوم.. الوقت الضائع في التحليل الإداري التقليدي هو حياة ضائعة في الواقع."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
