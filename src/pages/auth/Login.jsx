import React, { useState } from 'react';
import Button from "../../component/ui/Button";
import Input from "../../component/ui/Input";
import { HiOutlineLockClosed, HiOutlineEnvelope, HiOutlineEye } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  const [userRole, setUserRole] = useState('client');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EFF6FF] p-4 font-sans select-none" dir="rtl">
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-[#1D4ED8] italic tracking-tighter">CarMA</h1>
        <p className="text-[11px] text-slate-400 font-bold tracking-[0.2em] mt-1 mr-1 text-center">خدمة صيانة السيارات</p>
      </div>

      <div className="w-full max-w-[500px] bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 lg:p-12 border border-white/50">
        
        <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1 mb-10">
          <button 
            onClick={() => setUserRole('client')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${userRole === 'client' ? 'bg-[#1D4ED8] text-white shadow-lg' : 'text-slate-400 hover:bg-slate-200'}`}
          >
            عميل 🚗
          </button>
          <button 
            onClick={() => setUserRole('tech')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${userRole === 'tech' ? 'bg-[#1D4ED8] text-white shadow-lg' : 'text-slate-400 hover:bg-slate-200'}`}
          >
            فني 🔧
          </button>
          <button 
            onClick={() => setUserRole('admin')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${userRole === 'admin' ? 'bg-[#1D4ED8] text-white shadow-lg' : 'text-slate-400 hover:bg-slate-200'}`}
          >
            مسؤول 🔑
          </button>
        </div>

        <h2 className="text-2xl font-black text-slate-800 text-center mb-2">مرحباً بعودتك! 👋</h2>
        <p className="text-slate-400 text-sm text-center mb-8 font-medium">سجل دخولك للوصول إلى حسابك</p>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <Input 
            label="البريد الإلكتروني" 
            icon={<HiOutlineEnvelope className="text-slate-300" size={20}/>} 
            placeholder="example@mail.com" 
            type="email"
          />

          <div className="relative">
            <Input 
              label="كلمة المرور" 
              type="password" 
              icon={<HiOutlineLockClosed className="text-slate-300" size={20}/>} 
              placeholder="********" 
            />
            <button type="button" className="absolute left-4 top-[45px] text-slate-400 hover:text-slate-600 transition-colors">
              <HiOutlineEye size={18}/>
            </button>
          </div>

          <div className="flex justify-between items-center px-1 text-xs">
             <label className="flex items-center gap-2 text-slate-400 cursor-pointer font-medium">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-200 text-[#1D4ED8]" />
                تذكرني
             </label>
             <a href="#" className="text-[#1D4ED8] font-bold hover:underline transition-all">نسيت كلمة المرور؟</a>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] h-14 rounded-2xl shadow-lg shadow-blue-100 text-lg font-bold mt-4 transition-all"
          >
            تسجيل الدخول
          </Button>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">أو سجل دخولك عبر</span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          <div className="flex gap-3">
             <button type="button" className="flex-1 h-14 border border-slate-100 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm">
                <FcGoogle size={20} />
                Google
             </button>
             <button type="button" className="flex-1 h-14 border border-slate-100 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm">
                <FaApple size={20} />
                Apple
             </button>
          </div>

          <p className="text-center mt-10 text-slate-400 font-medium text-sm">
            ليس لديك حساب؟ <a href="/register" className="text-[#1D4ED8] font-black hover:underline mr-1">سجل الآن</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;