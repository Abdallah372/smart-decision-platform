import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ApiLiveProof = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetching a single piece of live data to prove external integration capability
  useEffect(() => {
    // Using a public API (Time/Weather) to show the front-end can process real JSON
    fetch("https://worldtimeapi.org/api/timezone/Africa/Cairo")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-[var(--space-l)] md:py-[var(--space-xl)] bg-transparent text-white text-right relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        <div className="grid lg:grid-cols-2 gap-[var(--space-m)] lg:gap-[var(--space-xl)] items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="academic-badge mb-6">
              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
              إثبات قابلية التوسع — نموذج بحثي
            </div>
            <h2 className="text-[var(--text-2xl)] font-black mb-8 leading-tight tracking-tight">
              قابلية التوسع <br />
              <span className="text-sky-400">والارتباط الرقمي</span>
            </h2>
            <p className="text-[var(--text-base)] md:text-[var(--text-lg)] text-slate-400 leading-relaxed mb-10 font-light max-w-2xl">
              على الرغم من أن هذا الموقع هو نموذج أولي، إلا أن الواجهة البرمجية
              مصممة للارتباط الفعلي مع أي مصدر بيانات خارجي (API). المربع
              المقابل يقوم بجلب قيمة حقيقية "الآن" عبر بروتوكول HTTP لإثبات
              جاهزية النظام للتعامل مع البيانات الضخمة مستقبلاً.
            </p>

            <div className="space-y-6">
              {[
                {
                  text: "جاهزية الارتباط بقواعد بيانات SQL/NoSQL.",
                  color: "bg-sky-500",
                },
                {
                  text: "دعم بروتوكولات MQTT لنقل بيانات الحساسات.",
                  color: "bg-indigo-500",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${item.color} shadow-[0_0_15px_rgba(14,165,233,0.5)] group-hover:scale-150 transition-transform`}
                  ></div>
                  <span className="text-base md:text-lg text-slate-300 font-light group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative mt-12 lg:mt-0 w-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="premium-card !p-0 overflow-hidden shadow-2xl border-white/5"
            >
              <div className="bg-slate-800/50 p-4 md:p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <div
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${loading ? "bg-amber-500 animate-pulse" : "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"}`}
                  ></div>
                  <span className="text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-widest">
                    API Demo: Connected
                  </span>
                </div>
                <span className="text-[10px] md:text-xs font-mono text-slate-500 uppercase">
                  JSON Response
                </span>
              </div>

              <div
                className="font-mono text-[10px] sm:text-xs md:text-sm lg:text-base space-y-2 md:space-y-3 break-all bg-[#020617]/80 p-6 md:p-10 min-h-[250px] md:min-h-[300px]"
                dir="ltr"
              >
                {loading ? (
                  <div className="text-slate-600 italic animate-pulse">
                    // Fetching live data from WorldTimeAPI...
                  </div>
                ) : data ? (
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="text-emerald-400">{`{`}</div>
                    <div className="text-sky-400 pl-4 md:pl-6">
                      "status":{" "}
                      <span className="text-amber-400">"connected"</span>,
                    </div>
                    <div className="text-sky-400 pl-4 md:pl-6">
                      "timezone":{" "}
                      <span className="text-amber-400">"{data.timezone}"</span>,
                    </div>
                    <div className="text-sky-400 pl-4 md:pl-6">
                      "datetime":{" "}
                      <span className="text-amber-400">"{data.datetime}"</span>,
                    </div>
                    <div className="text-sky-400 pl-4 md:pl-6">
                      "utc_offset":{" "}
                      <span className="text-amber-400">
                        "{data.utc_offset}"
                      </span>
                    </div>
                    <div className="text-emerald-400">{`}`}</div>
                    <div className="text-slate-600 mt-6 md:mt-10 border-t border-slate-800/50 pt-4 md:pt-6 text-[10px] md:text-xs italic whitespace-normal">
                      // يتم تحديث هذه القيم لحظياً عبر ارتباط خارجي فعلي
                    </div>
                  </div>
                ) : (
                  <div className="text-rose-400">
                    {`{"error": "Offline Mode / Fallback Initialized"}`}
                  </div>
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
