import React, { useState } from "react";
import Term from "./Term";
import ResearchModal from "./ResearchModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        className="bg-white pt-28 sm:pt-36 md:pt-44 pb-12 md:pb-24 text-right relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            <div className="w-full text-right order-2 lg:order-1">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.2] mb-6">
                محاكي أنظمة <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  دعم القرار الذكي
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium mb-10 mr-0 ml-auto">
                أدوات بصرية لاستعراض منهجية تحويل <Term term="البيانات الرقمية" explanation="المعلومات المستمدة من الحساسات أو السجلات الرقمية التي تعمل كمدخلات للنظام" /> إلى قرارات استباقية دقيقة، عبر تقليل هوامش الخطأ البشري.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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

                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="bg-slate-800 text-white text-[10px] py-1 px-3 rounded-full">
                      يتم فتح مصدر حكومي رسمي
                    </span>
                  </div>
                </div>
              </div>
            </div>

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
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 left-9 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-4 left-14 w-3 h-3 bg-green-400 rounded-full"></div>

                <div className="text-blue-600 text-center space-y-3 sm:space-y-5 mt-4">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2 2z"
                    />
                  </svg>

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

      <ResearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Hero;
