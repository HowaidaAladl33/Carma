import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-20 bg-primary-600 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary-500 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-700 opacity-50 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          جاهز لتجربة خدمة صيانة <br className="hidden md:block"/> مختلفة تماماً؟
        </h2>
        <p className="text-primary-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          انضم إلى أكثر من 50,000 عميل راضٍ واحجز خدمتك الآن. سيارتك في أيدٍ أمينة مع فريقنا المحترف.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2">
            ابدأ الحجز الآن
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="bg-transparent border border-primary-300 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors flex items-center justify-center">
            تحدث مع الدعم الفني
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
