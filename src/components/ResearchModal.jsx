import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Term from './Term';

const ResearchModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" dir="rtl">
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
        >
          
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <div>
              <h3 className="text-xl font-bold text-slate-800">تفاصيل البحث ومنهجية الدراسة</h3>
              <p className="text-sm text-slate-500 mt-1">Research Methodology & Framework</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 bg-white rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors border border-slate-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <div className="p-6 overflow-y-auto text-right space-y-8">
            
            <section>
              <h4 className="text-teal-700 font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                منهجية البحث (Methodology)
              </h4>
              <p className="text-slate-600 text-sm leading-7">
                تم اعتماد <Term term="المنهج التجريبي المقارن (Comparative Experimental Design)" explanation="طريقة بحثية تقارن بين مجموعتين (تقليدية وذكية) في ظروف متشابهة لقياس الفرق بدقة" className="font-bold text-slate-800 border-b border-slate-300 hover:border-slate-800 cursor-help" />، حيث يتم محاكاة بيئتين لاتخاذ القرار: الأولى تعتمد على التسلسل الهرمي التقليدي، والثانية تعتمد على <Term term="نظام دعم القرار الذكي (SDP Model)" explanation="نظام خوارزمي يجمع البيانات ويحللها ليقدم توصيات لصناع القرار" className="font-bold text-teal-600 border-b border-teal-200 hover:border-teal-600 cursor-help" />. واجهة الويب الحالية هي **نموذج أولي (Prototype)** يعكس منطق محاكاة تم بناؤه سابقاً باستخدام لغة بايثون (Python) لمعالجة البيانات التاريخية.
              </p>
            </section>

            <section>
              <h4 className="text-teal-700 font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                افتراضات النموذج (Key Assumptions)
              </h4>
              <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
                <li>
                    توفر بنية تحتية رقمية قادرة على نقل البيانات لحظياً (<Term term="5G/IoT" explanation="تقنيات الاتصال فائقة السرعة وإنترنت الأشياء التي تسمح بنقل البيانات من الحساسات فورياً" className="font-bold text-slate-700 border-b border-dashed border-slate-300 cursor-help" />).
                </li>
                <li>
                    <Term term="حيادية الخوارزميات" explanation="تصميم النماذج الرياضية بحيث لا تميز ضد أي فئة وتعتمد فقط على المعايير الموضوعية" className="font-bold text-slate-700 border-b border-dashed border-slate-300 cursor-help" /> (تم تحييد التحيزات في مرحلة التدريب).
                </li>
                <li>الاستجابة البشرية للتنبيهات تكون ضمن إطار زمني لا يتجاوز 15 دقيقة.</li>
              </ul>
            </section>

            <section>
              <h4 className="text-teal-700 font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                حدود الدراسة (Limitations)
              </h4>
              <p className="text-slate-600 text-sm leading-7">
                تقتصر الدراسة الحالية على قطاعي <span className="font-bold">المياه والطاقة</span> فقط، ولا تشمل الجوانب الاجتماعية المعقدة التي لا يمكن قياسها رقمياً (<Term term="Qualitative Factors" explanation="العوامل النوعية غير القابلة للقياس الرقمي المباشر، مثل الرضا النفسي أو القيم الاجتماعية" className="font-bold text-slate-700 border-b border-dashed border-slate-300 cursor-help" />). النتائج هي محاكاة وليست تجربة ميدانية واقعية.
              </p>
            </section>

            <section className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h4 className="text-slate-800 font-bold mb-3 text-sm">مراجع ومصادر بيانات مفتوحة:</h4>
              <div className="flex flex-wrap gap-2">
                <a href="https://data.worldbank.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs text-blue-600 hover:text-blue-800 hover:border-blue-300 transition-colors">
                  World Bank Open Data
                </a>
                <a href="https://stats.oecd.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs text-blue-600 hover:text-blue-800 hover:border-blue-300 transition-colors">
                  OECD Statistics
                </a>
                <a href="http://data.un.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs text-blue-600 hover:text-blue-800 hover:border-blue-300 transition-colors">
                  UN Data
                </a>
                <a href="https://scholar.google.com/scholar?q=AI+in+Public+Administration" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs text-blue-600 hover:text-blue-800 hover:border-blue-300 transition-colors">
                  Google Scholar (AI Gov)
                </a>
              </div>
            </section>

          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
            <button 
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-slate-800 text-white text-sm font-semibold rounded-lg hover:bg-slate-900 transition-colors"
            >
              إغلاق النافذة
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResearchModal;
