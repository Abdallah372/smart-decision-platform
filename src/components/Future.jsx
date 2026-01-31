import React from 'react';
import { motion } from 'framer-motion';

const Future = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="future" className="bg-gray-50 py-16 md:py-24 text-right overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12 md:mb-16 tracking-tight"
        >
          الرؤية المستقبلية 2026-2030
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-6 md:space-y-8"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row bg-white p-6 md:p-8 rounded-3xl border border-gray-100 gap-6 transition hover:shadow-lg">
            <div className="shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-sm italic">2026</div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-blue-900">مرحلة الربط الشامل</h4>
              <p className="text-gray-600 leading-relaxed font-medium">تغطية كافة قطاعات الخدمات الحيوية (مرور، طوارئ، بيئة) في العاصمة الإدارية والمدن الذكية الجديدة.</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row bg-white p-6 md:p-8 rounded-3xl border border-gray-100 gap-6 transition hover:shadow-lg">
            <div className="shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-sm italic">2027</div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-blue-900">الذكاء التوليدي للسياسات</h4>
              <p className="text-gray-600 leading-relaxed font-medium">استخدام نماذج ذكاء اصطناعي لتقديم مقترحات لسياسات عامة استباقية لمواجهة التغيرات السكانية المتوقعة.</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row bg-white p-6 md:p-8 rounded-3xl border border-gray-100 gap-6 transition hover:shadow-lg">
            <div className="shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-sm italic">2030</div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-blue-900">التحول القومي للنموذج</h4>
              <p className="text-gray-600 leading-relaxed font-medium">تحويل المنصة إلى نموذج قياسي سيادي يطبق في كافة محافظات الجمهورية لدعم الاقتصاد الرقمي.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Future;
