import React from "react";
import { motion } from "framer-motion";
import Term from "./Term";

const Hypothesis = () => {
  return (
    <section
      id="hypothesis"
      className="py-[var(--space-l)] md:py-[var(--space-xl)] bg-transparent relative"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-m)] items-start">
          {/* Main hypothesis card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="premium-card text-right"
          >
            <div className="academic-badge mb-5">
              <span className="glow-dot"></span>
              فرضية بحثية — مشروع طلابي
            </div>
            <h2
              className="font-black text-white mb-5 leading-tight"
              style={{ fontSize: "var(--text-huge)" }}
            >
              فرضية البحث: <br />
              <span className="text-sky-400">الاستباقية الرقمية</span>
            </h2>
            <p
              className="text-slate-300 leading-relaxed font-light mb-7"
              style={{ fontSize: "var(--text-lg)" }}
            >
              نفترض أن تحويل المدخلات الحية إلى نماذج منطقية (Logic Models) يقلل
              من زمن الاستجابة بنسبة تتجاوز{" "}
              <span className="font-bold text-sky-400">70%</span> مقارنة
              بالأنظمة التقليدية.
            </p>
            <div
              className="flex items-center gap-4 p-4 rounded-2xl"
              style={{
                backgroundColor: "rgba(14,165,233,0.05)",
                border: "1px solid rgba(14,165,233,0.1)",
              }}
            >
              <div className="hover-lift w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white font-black text-xl shrink-0 cursor-default">
                ?
              </div>
              <p
                className="text-slate-400 font-semibold"
                style={{ fontSize: "var(--text-base)" }}
              >
                هل يمكن للخوارزمية أن تعزز العدالة الاجتماعية؟
              </p>
            </div>
          </motion.div>

          {/* Side cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="premium-card group">
              <h4
                className="text-sky-400 font-bold mb-3 flex items-center gap-2"
                style={{ fontSize: "var(--text-base)" }}
              >
                <span className="w-2 h-2 bg-sky-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                عنصر الابتكار
              </h4>
              <p
                className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300"
                style={{ fontSize: "var(--text-base)" }}
              >
                دمج{" "}
                <Term
                  term="التفكير المنظومي"
                  explanation="رؤية المشكلة كجزء من نظام أكبر متصل، بدلاً من التعامل معها كحدث معزول"
                />{" "}
                مع تقنيات معالجة البيانات الضخمة — كنموذج محاكاة بحثي.
              </p>
            </div>
            <div className="premium-card group">
              <h4
                className="text-emerald-400 font-bold mb-3 flex items-center gap-2"
                style={{ fontSize: "var(--text-base)" }}
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                الهدف الأسمى
              </h4>
              <p
                className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300"
                style={{ fontSize: "var(--text-base)" }}
              >
                بناء "مدن مرنة" قادرة على امتصاص الصدمات والأزمات عبر استشعار
                المخاطر قبل حدوثها — رؤية مستقبلية مقترحة.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hypothesis;
