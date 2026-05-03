import React from 'react';
import { Search, MapPin, Navigation, CreditCard, ArrowLeft } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'اختر الخدمة',
    desc: 'اختر الخدمة التي تحتاجها من بين خدماتنا المتنوعة.',
    icon: <Search className="w-8 h-8 text-primary-600" />
  },
  {
    id: '02',
    title: 'حدد موقعك',
    desc: 'أدخل موقعك وسنرسل لك أقرب فني متاح في أسرع وقت.',
    icon: <MapPin className="w-8 h-8 text-primary-600" />
  },
  {
    id: '03',
    title: 'تتبع الفني',
    desc: 'تابع موقع الفني في الوقت الفعلي حتى وصوله إليك.',
    icon: <Navigation className="w-8 h-8 text-primary-600" />
  },
  {
    id: '04',
    title: 'ادفع وقيّم الخدمة',
    desc: 'ادفع بأمان وقيّم تجربتك مع الفني بكل شفافية ومصداقية.',
    icon: <CreditCard className="w-8 h-8 text-primary-600" />
  }
];

const Steps = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-bold mb-2 uppercase tracking-wide text-sm">كيف يعمــل</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">احجز خدمتك في 4 خطوات بسيطة</h2>
            <p className="text-gray-600 text-lg">
              عملية سهلة وسريعة تضمن لك الحصول على أفضل خدمة في أسرع وقت ممكن.
            </p>
          </div>
          <button className="flex items-center text-primary-600 font-bold hover:text-primary-700 bg-primary-50 px-6 py-3 rounded-lg w-max transition">
            ابدأ الآن - إنه سهل!
            <ArrowLeft className="w-5 h-5 mr-3" />
          </button>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 border-t-2 border-dashed border-gray-300 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="relative group">
                <div className="bg-white w-24 h-24 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform duration-300 mx-auto lg:mx-0">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {step.id}
                  </div>
                </div>
                
                <div className="text-center lg:text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
