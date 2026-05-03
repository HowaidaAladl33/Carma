import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-400 font-bold mb-2 uppercase tracking-wide text-sm">الأسعار</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">اختر الباقة المناسبة لك</h2>
          <p className="text-gray-400 text-lg">
            باقات مرنة تناسب احتياجاتك وميزانيتك مع ضمان أفضل خدمة لك ولأسرتك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-2">الباقة الأساسية</h3>
            <p className="text-gray-400 mb-6">مثالية للاستخدام الشخصي</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">999</span>
              <span className="text-gray-400"> جنيه / شهرياً</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>خصم 10% على جميع الخدمات</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>خدمة فحص دوري مجانية</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>دعم فني على مدار الساعة</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>أولوية في الحجز</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>تقارير الصيانة الشهرية</span>
              </li>
            </ul>
            <button className="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition">
              اشترك الآن
            </button>
          </div>

          {/* Premium Plan (Highlighted) */}
          <div className="bg-primary-600 rounded-2xl p-8 border border-primary-500 shadow-2xl relative transform md:-translate-y-4">
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white text-primary-600 px-4 py-1.5 rounded-full text-sm font-bold shadow flex items-center gap-1">
              <Star className="w-4 h-4 fill-current"/> الأكثر شعبية
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">الباقة المميزة</h3>
            <p className="text-primary-100 mb-6">الأكثر شعبية للعائلات</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">1,699</span>
              <span className="text-primary-200"> جنيه / شهرياً</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-white">
                <Check className="text-primary-200 w-5 h-5 shrink-0" />
                <span>خصم 20% على جميع الخدمات</span>
              </li>
              <li className="flex gap-3 text-white">
                <Check className="text-primary-200 w-5 h-5 shrink-0" />
                <span>خدمتين فحص مجانية شهرياً</span>
              </li>
              <li className="flex gap-3 text-white">
                <Check className="text-primary-200 w-5 h-5 shrink-0" />
                <span>دعم فني VIP على مدار الساعة</span>
              </li>
              <li className="flex gap-3 text-white">
                <Check className="text-primary-200 w-5 h-5 shrink-0" />
                <span>أولوية قصوى في الحجز</span>
              </li>
              <li className="flex gap-3 text-white">
                <Check className="text-primary-200 w-5 h-5 shrink-0" />
                <span>تقارير مفصلة وتوصيات</span>
              </li>
              <li className="flex gap-3 text-white">
                <Check className="text-primary-200 w-5 h-5 shrink-0" />
                <span>خدمة غسيل مجانية شهرياً</span>
              </li>
              <li className="flex gap-3 text-white">
                <Check className="text-primary-200 w-5 h-5 shrink-0" />
                <span>تأمين شامل على الخدمات</span>
              </li>
            </ul>
            <button className="w-full bg-white text-primary-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition shadow">
              اشترك الآن
            </button>
          </div>

          {/* Corporate Plan */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-2">باقة الشركات</h3>
            <p className="text-gray-400 mb-6">للشركات والأساطيل</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">3,499</span>
              <span className="text-gray-400"> جنيه / شهرياً</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>خصم 30% على جميع الخدمات</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>فحص دوري غير محدود</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>مدير حساب مخصص</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>أولوية قصوى وخدمة فورية</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>تقارير وإحصائيات تفصيلية</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>صيانة وقائية مجدولة</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Check className="text-primary-400 w-5 h-5 shrink-0" />
                <span>فاتورة موحدة شهرياً</span>
              </li>
            </ul>
            <button className="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition">
              اشترك الآن
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center flex flex-col md:flex-row justify-center items-center gap-4 bg-gray-800 p-6 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
          <p className="text-white text-lg">هل تحتاج باقة مخصصة؟</p>
          <button className="bg-transparent border border-primary-500 text-primary-400 font-bold py-2 px-6 rounded-lg hover:bg-primary-600 hover:text-white transition">
            تواصل معنا للحصول على عرض خاص
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
