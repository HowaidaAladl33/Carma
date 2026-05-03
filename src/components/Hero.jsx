import React from 'react';
import { Calendar, Info, Star, CheckCircle, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-primary-50 py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-primary-600 font-medium mb-6 shadow-sm border border-primary-100">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              خدمة صيانة السيارات في موقعك
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              صيانة عربيتك <br />
              <span className="text-primary-600">في أي مكان</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              فنيون محترفون يصلون إليك أينما كنت، مع حجز سريع وتجربة مريحة تماماً لحل كافة أعطال سيارتك باحترافية.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-primary-700 shadow-md transition-colors">
                <Calendar className="w-5 h-5" />
                احجز الآن
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors">
                <Info className="w-5 h-5" />
                عرض الخدمات
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8 max-w-lg gap-4">
              <div>
                <p className="text-3xl font-bold text-gray-900 flex flex-col mb-1"><Users className="text-primary-500 w-6 h-6 mb-1"/> +50K</p>
                <p className="text-gray-600 text-sm">عميل راضٍ</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900 flex flex-col mb-1"><CheckCircle className="text-primary-500 w-6 h-6 mb-1"/> +1000</p>
                <p className="text-gray-600 text-sm">خدمة منجزة</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900 flex flex-col mb-1"><Star className="text-yellow-400 fill-current w-6 h-6 mb-1"/> 4.9/5</p>
                <p className="text-gray-600 text-sm">متوسط التقييم</p>
              </div>
            </div>
          </div>

          {/* Image side - Placeholder mapped */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl -z-10"></div>
            
            <div className="bg-white rounded-3xl p-2 shadow-2xl relative">
              <div className="absolute top-8 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 z-20">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">نجاح</p>
                  <p className="text-sm font-bold text-gray-900">+2,500 طلب اليوم</p>
                </div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200" 
                alt="Car Repair" 
                className="rounded-2xl w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
