import React from 'react';
import { motion } from 'framer-motion';

const Impact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="impact" className="bg-white py-24 text-right leading-relaxed overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 tracking-tight">برهان الأثر: كيف نتأكد من صحة القرار؟</h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">قياس النجاح في الأنظمة الذكية لا يعتمد على التخمين، بل على مؤشرات أداء رقمية صارمة وبحث معمّق.</p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants} className="text-center p-8 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-md transition">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">30%</div>
            <div className="text-gray-600 font-bold mb-2">تقليل الهدر المالي</div>
            <p className="text-[10px] text-blue-400 font-bold">أموال تُعاد لخدمة المواطن</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-8 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-md transition">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">50%</div>
            <div className="text-gray-600 font-bold mb-2">سرعة الاستجابة الزمنية</div>
            <p className="text-[10px] text-blue-400 font-bold">الدقائق التي تنقذ الأرواح</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-8 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-md transition">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600 font-bold mb-2">دقة التنبؤ المسبق</div>
            <p className="text-[10px] text-blue-400 font-bold">اليقين بدلاً من التخمين</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-8 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-md transition">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">8X</div>
            <div className="text-gray-600 font-bold mb-2">كفاءة تشغيل الموارد</div>
            <p className="text-[10px] text-blue-400 font-bold">تعظيم الأثر بأقل المتاح</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
              * جميع النسب المذكورة هي تقديرات بحثية مبنية على نماذج محاكاة افتراضية (Simulation Data) <br /> وليست مخرجات تشغيلية لجهات حكومية فعلية حتى تاريخه.
            </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center border-t border-gray-100 pt-16">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">حدود النظام وأخلاقيات القرار</h3>
            <p className="leading-relaxed opacity-90 mb-6 font-medium">
              نؤمن في هذه المنصة بأن <span className="font-bold border-b-2 border-green-500">الذكاء الاصطناعي أداة تمكين وليس بديلاً عن الإنسانية.</span> خوارزمياتنا مصممة لرفع التوصيات فقط، بينما يظل الإنسان هو صاحب السيادة والقرار النهائي.
            </p>
            <ul className="text-sm space-y-3 opacity-70">
              <li>• السيادة للبشر: النظام لا ينفذ قرارات مصيرية تلقائياً.</li>
              <li>• الشفافية: كل توصية يقدمها النظام مرفقة بـ "تفسير منطقي" (Explainable AI).</li>
              <li>• الخصوصية: حماية بيانات المواطنين أولوية تسبق التحليل.</li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6 underline decoration-green-600 underline-offset-8">التوافق الرقمي والوطني</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              يتماشى هذا النموذج مع الاستراتيجية الوطنية للذكاء الاصطناعي في مصر، حيث يحقق التوازن بين التطور التقني والبعد الاجتماعي، مع التركيز على الهدف 11 من أهداف التنمية المستدامة (SDGs) لجعل المدن أكثر استدامة وذكاءً.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
