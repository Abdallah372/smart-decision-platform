import React from 'react';
import { motion } from 'framer-motion';

const DecisionFlow = () => {
  const steps = [
    {
      title: "مدخلات البيانات",
      desc: "استقبال البيانات الخام من الحساسات الرقمية (IoT)",
      icon: "📥",
      color: "bg-blue-500"
    },
    {
      title: "المعالجة والمنطق",
      desc: "تطبيق بنية الـ If-Then وربطها بالبيانات التاريخية",
      icon: "⚙️",
      color: "bg-teal-500"
    },
    {
      title: "توصية القرار",
      desc: "توليد خيار استباقي مقترح لتقليل الضرر",
      icon: "💡",
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="flow" className="py-24 bg-white overflow-hidden text-right" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">منطق عمل المحاكي</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            يوضح هذا المخطط تسلسل العمليات البرمجية التي يتبعها النموذج الأولي لتحويل المدخلات الرقمية إلى توصيات قرار.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 text-center flex flex-col items-center group hover:border-teal-200 transition-colors"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:rotate-12 transition-transform`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                
                {/* Pseudocode Preview */}
                <div className="mt-6 p-4 bg-slate-50 rounded-xl w-full text-left font-mono text-[10px] text-slate-400 opacity-60">
                   <div className="text-blue-500">if</div> (input_data {'>'} threshold) <br/>
                   &nbsp;&nbsp;<span className="text-emerald-500">trigger</span>_alert(level_1); <br/>
                   <div className="text-blue-500">else</div> <br/>
                   &nbsp;&nbsp;<span className="text-slate-500">continue</span>_monitoring();
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionFlow;
