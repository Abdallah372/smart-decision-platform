import React from 'react';
import Term from './Term';
import DataFlowAnimation from './interactive/DataFlowAnimation';

const Solution = () => {
  return (
    <section id="solution" className="bg-white py-12 sm:py-24 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Data Flow Visualization */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 text-center leading-tight">
            كيف نحوّل البيانات إلى قرارات؟
          </h2>
          <DataFlowAnimation />
        </div>

        {/* Mobile: Stacked (Reverse), Desktop: Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
          
          {/* Visual Element (Bottom on mobile) */}
          <div className="relative order-2 md:order-1 w-full">
            <div className="bg-green-50 rounded-3xl sm:rounded-[50px] p-6 sm:p-12 relative overflow-hidden aspect-square sm:aspect-auto">
               <div className="w-full h-full border-4 border-dashed border-green-200 rounded-2xl sm:rounded-[40px] flex items-center justify-center p-4 sm:p-8">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Content (Top on mobile) */}
          <div className="order-1 md:order-2 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 leading-tight">بروتوكول البناء: من البيانات إلى التوصية</h2>
            <div className="space-y-6 sm:space-y-8">
              
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">1</div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">تكامل البيانات</h4>
                  <p className="text-base text-gray-600 leading-relaxed">ربط جميع المصادر اللحظية للبيانات (حساسات، سجلات رقمية) في قاعدة مركزية واحدة.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">2</div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">المعالجة الذكية</h4>
                  <p className="text-base text-gray-600 leading-relaxed">استخدام خوارزميات <Term term="تعلم الآلة" explanation="تدريب الكمبيوتر على التعلم من الأمثلة، مثل تعليمه التفريق بين صور القطط والكلاب" /> لتحليل الأنماط التاريخية.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">3</div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">دعم القرار</h4>
                  <p className="text-base text-gray-600 leading-relaxed">توليد تقارير ذكية وتنبيهات فورية تساعد المسؤولين على اتخاذ القرار الصحيح.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
