import React, { useState } from 'react';
import { Menu, X, Car } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Car className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900">سيارتك</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">الرئيسية</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">خدماتنا</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">كيف نعمل</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">الأسعار</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">آراء العملاء</a>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition">
              احجز الآن
            </button>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary-600 focus:outline-none">
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full border-t">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">الرئيسية</a>
            <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">خدماتنا</a>
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">كيف نعمل</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">الأسعار</a>
            <button className="w-full mt-4 bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">
              احجز الآن
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
