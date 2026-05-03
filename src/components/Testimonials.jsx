import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'أحمد المصري',
    role: 'رجل أعمال',
    text: 'خدمة ممتازة والفني جه في الميعاد بالظبط. شغل احترافي صراحة ومريح جداً لأنك مبتضطرش تنزل تسيب مصلحتك.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'فاطمة حسن',
    role: 'مديرة تسويق',
    text: 'ريحوني جداً، الفني جه لحد البيت وعمل الصيانة وأنا بشرب القهوة. وفروا عليا زحمة الصنايعية والورش. شكراً لجهودكم!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'محمد علي',
    role: 'مهندس',
    text: 'التطبيق سهل جداً في الاستخدام والحجز. حلوا مشكلة البطارية في أقل من ساعة. أسعارهم معقولة جداً مقابل الراحة.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'نورا إبراهيم',
    role: 'طبيبة',
    text: 'أحسن خدمة صيانة عربيات جربتها. الفنيين محترفين وواضح انهم فاهمين شغلهم، كمان الأسعار واضحة بدون مفاجآت.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-600 font-bold mb-2 uppercase tracking-wide text-sm">آراء العملاء</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-gray-600 text-lg">
            آراء حقيقية من عملاء سعداء بخدماتنا، انضم إليهم واستمتع بتجربة فريدة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative">
              <Quote className="absolute top-6 left-6 text-primary-100 w-12 h-12 rotate-180 -z-0" />
              
              <div className="flex text-yellow-400 mb-4 z-10">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              
              <p className="text-gray-700 mb-8 italic z-10 grow">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
