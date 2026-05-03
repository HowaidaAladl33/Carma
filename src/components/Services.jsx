import React from 'react';
import { Battery, Droplet, Disc, Droplets, AlertTriangle, Truck, ArrowLeft } from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: 'تغيير البطارية',
    desc: 'تبديل بطارية سيارتك بأفضل الأنواع المتوفرة بمنتهى الأمان.',
    price: '500',
    icon: <Battery className="w-8 h-8 text-primary-600" />,
    color: 'bg-blue-50'
  },
  {
    id: 2,
    title: 'تغيير الزيت',
    desc: 'تغيير زيت المحرك والفلتر بزيوت أصلية ومعتمدة لسيارتك.',
    price: '350',
    icon: <Droplet className="w-8 h-8 text-orange-600" />,
    color: 'bg-orange-50'
  },
  {
    id: 3,
    title: 'خدمة الإطارات',
    desc: 'فحص وتبديل وإصلاح جميع أنواع الإطارات بأحدث المعدات.',
    price: '250',
    icon: <Disc className="w-8 h-8 text-slate-600" />,
    color: 'bg-slate-50'
  },
  {
    id: 4,
    title: 'غسيل السيارة',
    desc: 'غسيل شامل وتنظيف داخلي وخارجي احترافي يحافظ على الطلاء.',
    price: '200',
    icon: <Droplets className="w-8 h-8 text-cyan-600" />,
    color: 'bg-cyan-50'
  },
  {
    id: 5,
    title: 'خدمة الطوارئ',
    desc: 'استجابة سريعة لجميع حالات الطوارئ على الطريق على مدار 24 ساعة.',
    price: '300',
    icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
    color: 'bg-red-50'
  },
  {
    id: 6,
    title: 'خدمة الونش',
    desc: 'نقل سيارتك بأمان إلى أي مكان تريد داخل أو خارج المدينة.',
    price: '600',
    icon: <Truck className="w-8 h-8 text-indigo-600" />,
    color: 'bg-indigo-50'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-600 font-bold mb-2 uppercase tracking-wide text-sm">خدماتنا</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدمات شاملة لسيارتك</h2>
          <p className="text-gray-600 text-lg">
            نوفر لك مجموعة واسعة من خدمات الصيانة والإصلاح بأعلى المعايير، لتكن مطمئناً على طريقك دائمًا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed h-12">
                {service.desc}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <div>
                  <p className="text-sm text-gray-500 mb-1">يبدأ من</p>
                  <p className="font-bold text-gray-900 text-lg">{service.price} جنيه</p>
                </div>
                <button className="flex items-center justify-center text-primary-600 font-bold hover:text-primary-700 group/btn">
                  احجز الآن
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
