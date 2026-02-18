import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-[var(--space-l)] bg-transparent text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(51,65,85,0.5), transparent)",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-[var(--space-s)] sm:px-[var(--space-m)] lg:px-8 relative z-10">
        {/* Academic Disclaimer */}
        <div className="academic-badge mx-auto mb-8 w-fit">
          <span className="glow-dot"></span>
          مشروع بحثي طلابي — مدرسة المريناب الثانوية — 2026
        </div>

        <p
          className="text-slate-400 font-semibold mb-8 italic max-w-4xl mx-auto leading-relaxed opacity-90 tracking-tight"
          style={{ fontSize: "var(--text-xl)" }}
        >
          "السؤال الحقيقي ليس هل يمكن للآلة أن تفكر؟ بل: هل يمكن للبشر أن يثقوا
          في عدالة الخوارزمية؟"
        </p>

        <div
          className="w-16 h-0.5 mx-auto mb-8 rounded-full"
          style={{ backgroundColor: "rgba(14, 165, 233, 0.2)" }}
        ></div>

        <div className="space-y-2">
          <p
            className="text-slate-500 font-semibold tracking-tight"
            style={{ fontSize: "var(--text-base)" }}
          >
            © {new Date().getFullYear()} عبدالله بن محمد العبادي — مشروع محاكاة
            دعم القرار
          </p>
          <p
            className="text-slate-600 font-bold tracking-[0.25em] uppercase opacity-50"
            style={{ fontSize: "var(--text-xs)" }}
          >
            مدرسة المريناب الثانوية · قرية الغنيمية · إدفو · أسوان · مصر
          </p>
          <p
            className="text-slate-700 font-bold tracking-[0.2em] uppercase opacity-40"
            style={{ fontSize: "var(--text-xs)" }}
          >
            Student Research Project · Not a Real Government System · For
            Academic Purposes Only
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
