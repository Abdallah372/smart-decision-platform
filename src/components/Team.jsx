import React from 'react';

const Team = () => {
  return (
    <section id="team" className="bg-white py-16 md:py-24 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12 md:mb-20 text-center tracking-tight">فريق البحث والتطوير</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center group">
            <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto mb-4 border border-blue-100 flex items-center justify-center text-4xl group-hover:bg-blue-600 transition duration-300 group-hover:text-white">🧑‍🔬</div>
            <h4 className="font-bold">جنان</h4>
            <p className="text-gray-500 text-sm font-medium italic">صياغة الفرضيات والنمذجة</p>
          </div>
          <div className="text-center group">
            <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto mb-4 border border-blue-100 flex items-center justify-center text-4xl group-hover:bg-blue-600 transition duration-300 group-hover:text-white">💻</div>
            <h4 className="font-bold">جنان</h4>
            <p className="text-gray-500 text-sm font-medium italic">تصميم تجربة المحاكاة الرقمية</p>
          </div>
          <div className="text-center group">
            <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto mb-4 border border-blue-100 flex items-center justify-center text-4xl group-hover:bg-blue-600 transition duration-300 group-hover:text-white">📊</div>
            <h4 className="font-bold">جنان</h4>
            <p className="text-gray-500 text-sm font-medium italic">تحليل البيانات والنمذجة الرياضية</p>
          </div>
          <div className="text-center group">
            <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto mb-4 border border-blue-100 flex items-center justify-center text-4xl group-hover:bg-blue-600 transition duration-300 group-hover:text-white">🎤</div>
            <h4 className="font-bold">جنان</h4>
            <p className="text-gray-500 text-sm font-medium italic">التواصل البحثي والدفاع العلمي</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
