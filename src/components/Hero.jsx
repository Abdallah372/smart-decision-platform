import React from 'react';
import Term from './Term';

const Hero = () => {
  return (
    <section id="hero" className="bg-white py-8 sm:py-12 md:py-24 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Single column, Desktop: 2 columns */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="w-full text-right order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-blue-900 leading-tight mb-6 sm:mb-8">
              ماذا لو كان <Term term="القرار الحيادي" explanation="قرار مبني على بيانات وحقائق فقط، بدون تأثر بمشاعر أو ضغوط شخصية" /> علميًا هو أسرع طريق للاستدامة؟
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 lg:ml-0">
              نحن لا نطوّر برمجيات؛ نحن نختبر فرضية: هل يمكن للذكاء الاصطناعي أن يدير الموارد العامة بكفاءة تتجاوز حدود التقدير البشري؟
            </p>
            
            {/* Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="w-full sm:w-auto bg-green-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-green-700 transition-colors duration-150 shadow-xl shadow-green-100 border-2 border-green-600 cursor-pointer">
                عرض تفاصيل البحث
              </button>
              <button className="w-full sm:w-auto bg-blue-50 text-blue-600 px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-blue-100 transition-colors duration-150 border-2 border-blue-100 cursor-pointer">
                رؤية مصر 2030
              </button>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="w-full order-1 lg:order-2 flex justify-center">
            <div
              className="
                bg-blue-50
                border-2 border-blue-100
                rounded-2xl sm:rounded-3xl md:rounded-[48px]
                px-4 py-6 sm:p-8 md:p-12
                w-full
                max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                flex items-center justify-center
              "
            >
              <div className="text-blue-600 text-center space-y-3 sm:space-y-5">

                {/* Icon */}
                <svg
                  className="
                    w-16 h-16
                    sm:w-24 sm:h-24
                    md:w-32 md:h-32
                    lg:w-44 lg:h-44
                    mx-auto
                    opacity-90
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>

                {/* Label */}
                <div className="space-y-2">
                  <p className="font-extrabold text-base sm:text-lg md:text-xl uppercase tracking-wider">
                    <Term
                      term="Data Intelligence"
                      explanation="تحويل البيانات الخام إلى معلومات تساعد على اتخاذ قرار صحيح في الوقت المناسب"
                    />
                  </p>

                  <div className="flex justify-center gap-2">
                    <div className="w-8 sm:w-10 h-1 bg-blue-600 rounded-full"></div>
                    <div className="w-3 h-1 bg-blue-300 rounded-full"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;
