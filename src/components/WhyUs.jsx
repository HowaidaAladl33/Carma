import React from 'react';
import { Home, ShieldCheck, MapPin, Zap, UserCheck, Smartphone } from 'lucide-react';

const features = [
  {
    title: 'الخدمة تصلك أينما كنت',
    desc: 'لا حاجة للذهاب لورشة الصيانة. نأتي إليك في منزلك أو عملك لتوفير وقتك وجهدك.',
    icon: <Home className="w-7 h-7 text-primary-600" />
  },
  {
    title: 'تتبع مباشر للطلب',
    desc: 'تابع موقع الفني والوقت المتوقع للوصول في الوقت الفعلي عبر الجوال بسهولة.',
    icon: <MapPin className="w-7 h-7 text-primary-600" />
  },
  {
    title: 'دفع آمن',
    desc: 'خيارات دفع متعددة وآمنة مع حماية كاملة لبياناتك الشخصية والمالية.',
    icon: <ShieldCheck className="w-7 h-7 text-primary-600" />
  },
  {
    title: 'فنيون موثوقون',
    desc: 'جميع فنيينا معتمدون ومدربون بأعلى المعايير المهنية لتلبية تطلعاتك بدقة.',
    icon: <UserCheck className="w-7 h-7 text-primary-600" />
  },
  {
    title: 'سرعة الاستجابة',
    desc: 'استجابة فورية وخدمة سريعة في أقل من 30 دقيقة للوصول إلى أقرب متخصص إليك.',
    icon: <Zap className="w-7 h-7 text-primary-600" />
  },
  {
    title: 'ضمان الجودة',
    desc: 'ضمان شامل على جميع الخدمات والقطع المستخدمة. الجودة هي أولويتنا القصوى.',
    icon: <ShieldCheck className="w-7 h-7 text-primary-600" />
  }
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-600 font-bold mb-2 uppercase tracking-wide text-sm">لماذا نحن</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لماذا تختار سيارتك؟</h2>
          <p className="text-gray-600 text-lg">
            نقدم لك تجربة متميزة تجمع بين الجودة والسرعة، والموثوقية، لتشعر براحة البال والاعتماد الكامل.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-start bg-gray-50 p-6 rounded-2xl hover:bg-primary-50 transition-colors duration-300 group">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100 group-hover:border-primary-200">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
