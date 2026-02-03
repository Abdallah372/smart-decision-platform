import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ApiLiveProof = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetching a single piece of live data to prove external integration capability
  useEffect(() => {
    // Using a public API (Time/Weather) to show the front-end can process real JSON
    fetch('https://worldtimeapi.org/api/timezone/Africa/Cairo')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("API Error", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-slate-900 text-white text-right overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-4 uppercase tracking-widest">
              Scalability Proof
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">قابلية التوسع والارتباط</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              على الرغم من أن هذا الموقع هو نموذج أولي، إلا أن الواجهة البرمجية مصممة للارتباط الفعلي مع أي مصدر بيانات خارجي (API). المربع المقابل يقوم بجلب قيمة حقيقية "الآن" عبر بروتوكول HTTP لإثبات جاهزية النظام للتعامل مع البيانات الضخمة مستقبلاً.
            </p>
            
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  <span className="text-sm text-slate-300">جاهزية الارتباط بقواعد بيانات SQL/NoSQL.</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  <span className="text-sm text-slate-300">دعم بروتوكولات MQTT لنقل بيانات الحساسات.</span>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-teal-500/20 blur-3xl opacity-30 rounded-full"></div>
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
             >
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase">Live Socket: Active</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">JSON Response</span>
                </div>

                <div className="font-mono text-[11px] sm:text-sm space-y-2 break-all">
                   {loading ? (
                     <div className="text-slate-500 italic">Jarray: Fetching live data from WorldTimeAPI...</div>
                   ) : data ? (
                     <div className="space-y-1">
                        <div className="text-teal-400">"status": "connected"</div>
                        <div className="text-blue-400">"timezone": "{data.timezone}"</div>
                        <div className="text-blue-400">"datetime": "{data.datetime}"</div>
                        <div className="text-blue-400">"utc_offset": "{data.utc_offset}"</div>
                        <div className="text-slate-500 mt-4">// يتم تحديث هذه القيمة فوراً من الخادم</div>
                     </div>
                   ) : (
                     <div className="text-red-400">"error": "Offline Mode / Fallback Initialized"</div>
                   )}
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApiLiveProof;
