import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section
      id="team"
      className="bg-transparent py-[var(--space-l)] md:py-[var(--space-xl)] text-right relative"
    >
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[var(--space-l)]"
        >
          <h2
            className="font-black text-white mb-4 tracking-tight leading-tight"
            style={{ fontSize: "var(--text-huge)" }}
          >
            فريق البحث والتطوير
          </h2>
          <p
            className="text-slate-500"
            style={{ fontSize: "var(--text-base)" }}
          >
            مشروع بحثي طلابي — 2026
          </p>
        </motion.div>

        {/* Main Researcher Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="premium-card max-w-2xl mx-auto mb-[var(--space-m)] group"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-right">
            {/* Avatar */}
            <div
              className="shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] transition-all duration-500"
              style={{
                backgroundColor: "rgba(14,165,233,0.08)",
                border: "1px solid rgba(14,165,233,0.15)",
              }}
            >
              🧑‍🔬
            </div>
            {/* Info */}
            <div className="flex-1">
              <h3
                className="font-black text-white mb-1 group-hover:text-sky-400 transition-colors duration-300"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                عبدالله بن محمد العبادي
              </h3>
              <p
                className="text-sky-400 font-semibold mb-3"
                style={{ fontSize: "var(--text-base)" }}
              >
                باحث رئيسي — صياغة الفرضيات والنمذجة والتطوير
              </p>
              <div className="space-y-1.5">
                {[
                  { icon: "🏫", text: "مدرسة المريناب الثانوية" },
                  { icon: "📍", text: "قرية الغنيمية — إدفو — أسوان — مصر" },
                  { icon: "📅", text: "العام الدراسي 2025 / 2026" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span
                      className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                      style={{ fontSize: "var(--text-sm)" }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              role: "صياغة الفرضيات والنمذجة",
              icon: "🔬",
              color: "rgba(14,165,233,0.08)",
              border: "rgba(14,165,233,0.15)",
              glow: "rgba(14,165,233,0.2)",
              textHover: "group-hover:text-sky-400",
            },
            {
              role: "تصميم تجربة المحاكاة الرقمية",
              icon: "💻",
              color: "rgba(16,185,129,0.08)",
              border: "rgba(16,185,129,0.15)",
              glow: "rgba(16,185,129,0.2)",
              textHover: "group-hover:text-emerald-400",
            },
            {
              role: "تحليل البيانات والنمذجة الرياضية",
              icon: "📊",
              color: "rgba(245,158,11,0.08)",
              border: "rgba(245,158,11,0.15)",
              glow: "rgba(245,158,11,0.2)",
              textHover: "group-hover:text-amber-400",
            },
            {
              role: "التواصل البحثي والدفاع العلمي",
              icon: "🎤",
              color: "rgba(244,63,94,0.08)",
              border: "rgba(244,63,94,0.15)",
              glow: "rgba(244,63,94,0.2)",
              textHover: "group-hover:text-rose-400",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.4 }}
              className="premium-card group flex flex-col items-center text-center !py-6"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-400"
                style={{
                  backgroundColor: item.color,
                  border: `1px solid ${item.border}`,
                }}
              >
                {item.icon}
              </div>
              <p
                className={`text-slate-300 font-semibold leading-snug transition-colors duration-300 ${item.textHover}`}
                style={{ fontSize: "var(--text-sm)" }}
              >
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
