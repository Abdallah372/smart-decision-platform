import React from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from './interactive/BeforeAfterSlider';

const DecisionScenario = () => {
  return (
    <section id="scenario" className="bg-gradient-to-b from-white to-gray-50 py-24 text-right overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            تخيّل: أنت صانع القرار الآن
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            <span className="font-bold text-blue-700">السيناريو:</span> أزمة مياه صامتة الساعة 4 فجرًا. 
            <br />
            اسحب الشريط لترى الفرق بين النظامين.
          </p>
        </motion.div>

        {/* Interactive Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <BeforeAfterSlider />
        </motion.div>

        {/* Key Insights - Condensed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border-r-4 border-red-500">
            <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
              <span>📄</span>
              <span>النظام التقليدي</span>
            </h4>
            <p className="text-gray-700 text-sm">
              يحل المشكلة <span className="font-bold underline">بعد وقوعها</span> • 
              يعتمد على الشكاوى • 
              متأثر بالضغط البشري
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border-r-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
              <span>⚡</span>
              <span>نظام القرار الذكي</span>
            </h4>
            <p className="text-gray-700 text-sm">
              يمنع المشكلة <span className="font-bold underline">من الوجود</span> • 
              يرصد الأنماط الخفية • 
              بارد تحليليًا في الأزمات
            </p>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-blue-900 text-xl font-black italic max-w-2xl mx-auto">
            "نحن لا نستبدل القادة، بل نزودهم بعيون ترى ما وراء الأفق"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DecisionScenario;
