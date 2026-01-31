import React, { useState } from "react";
import Term from "./Term";
import ResearchModal from "./ResearchModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Smooth scroll handler
  const scrollToHypothesis = () => {
    const element = document.getElementById("hypothesis");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="bg-white py-8 sm:py-12 md:py-24 text-right relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile: Single column, Desktop: 2 columns */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="w-full text-right order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-blue-900 leading-tight mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-l from-blue-900 to-teal-800">
                ماذا لو كان{" "}
                <Term
                  term="القرار الحيادي"
                  explanation="قرار مبني على بيانات وحقائق فقط، بدون تأثر بمشاعر أو ضغوط شخصية"
                />{" "}
                علميًا هو أسرع طريق للاستدامة؟
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 lg:ml-0">
                نحن لا نطوّر برمجيات؛ نحن نختبر فرضية علمية: هل يمكن للذكاء
                الاصطناعي أن يدير الموارد العامة بكفاءة تتجاوز حدود التقدير
                البشري؟
              </p>

              {/* Buttons - Stack on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Reveal Research Details Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-teal-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-teal-700 transition-colors duration-150 shadow-lg shadow-teal-100 border-2 border-teal-600 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <svg
                    className="w-5 h-5 opacity-80 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  عرض تفاصيل البحث
                </button>

                {/* Egypt Vision 2030 Button */}
                <div className="relative group w-full sm:w-auto">
                  <a
                    href="https://mped.gov.eg/DynamicPage?id=115&lang=ar&رؤية-مصر-2030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-blue-50 text-blue-700 px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-blue-100 transition-colors duration-150 border-2 border-blue-100 cursor-pointer flex items-center justify-center gap-2"
                  >
                    رؤية مصر 2030
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="bg-slate-800 text-white text-[10px] py-1 px-3 rounded-full">
                      يتم فتح مصدر حكومي رسمي
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="w-full order-1 lg:order-2 flex justify-center">
              <div
                className="
                  bg-gradient-to-br from-blue-50 to-teal-50
                  border-2 border-white
                  shadow-xl shadow-blue-100
                  rounded-2xl
                  px-4 py-6 sm:p-8 md:p-12
                  w-full
                  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                  flex items-center justify-center
                  relative
                "
              >
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 left-9 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-4 left-14 w-3 h-3 bg-green-400 rounded-full"></div>

                <div className="text-blue-600 text-center space-y-3 sm:space-y-5 mt-4">
                  {/* Icon */}
                  <svg
                    className="
                      w-16 h-16
                      sm:w-24 sm:h-24
                      md:w-32 md:h-32
                      lg:w-44 lg:h-44
                      mx-auto
                      opacity-90
                      text-teal-600
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
                    <p className="font-extrabold text-base sm:text-lg md:text-xl uppercase tracking-wider text-slate-700">
                      <Term
                        term="Data Intelligence"
                        explanation="تحويل البيانات الخام إلى معلومات تساعد على اتخاذ قرار صحيح في الوقت المناسب"
                      />
                    </p>

                    <div className="flex justify-center gap-2">
                      <div className="w-8 sm:w-10 h-1 bg-teal-600 rounded-full"></div>
                      <div className="w-3 h-1 bg-teal-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Injection */}
      <ResearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Hero;
