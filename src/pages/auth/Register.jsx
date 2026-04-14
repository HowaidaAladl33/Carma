import React, { useState } from 'react';
import Button from "../../component/ui/Button";
import Input from "../../component/ui/Input";
import { HiOutlineLockClosed, HiOutlineUser, HiOutlineEnvelope } from "react-icons/hi2";

const Register = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('client');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EFF6FF] p-4 font-sans select-none" dir="rtl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-[#1D4ED8] italic tracking-tighter">CarMA</h1>
        <h2 className="text-2xl font-bold mt-4 text-slate-800">إنشاء حساب جديد ✨</h2>
      </div>

      <div className="w-full max-w-[500px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white/50 p-8 lg:p-12">
        
        <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1 mb-10">
          <button 
            onClick={() => setUserType('client')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${userType === 'client' ? 'bg-[#1D4ED8] text-white shadow-lg' : 'text-slate-400 hover:bg-slate-200'}`}
          >
            عميل 🚗
          </button>
          <button 
            onClick={() => setUserType('technician')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${userType === 'technician' ? 'bg-[#1D4ED8] text-white shadow-lg' : 'text-slate-400 hover:bg-slate-200'}`}
          >
            فني 🔧
          </button>
        </div>

        <div className="flex justify-between items-center max-w-xs mx-auto mb-12 relative px-2">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-100 -z-0"></div>
          {[1, 2, 3].map((s) => (
            <div key={s} className="relative z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 border-4 ${step === s ? 'bg-[#1D4ED8] text-white border-blue-100 scale-110 shadow-md' : step > s ? 'bg-green-500 text-white border-green-50' : 'bg-white text-slate-300 border-slate-50'}`}>
                {step > s ? '✓' : s}
              </div>
            </div>
          ))}
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-left-4 duration-300">
              <Input label="الاسم بالكامل *" icon={<HiOutlineUser size={20} className="text-slate-300"/>} placeholder="محمد أحمد" />
              <Input label="البريد الإلكتروني *" icon={<HiOutlineEnvelope size={20} className="text-slate-300"/>} placeholder="example@email.com" />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-left-4 duration-300">
              <Input label="كلمة المرور *" type="password" icon={<HiOutlineLockClosed size={20} className="text-slate-300"/>} placeholder="********" />
              <Input label="تأكيد كلمة المرور *" type="password" icon={<HiOutlineLockClosed size={20} className="text-slate-300"/>} placeholder="********" />
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-10 animate-in fade-in slide-in-from-left-4 duration-300">
              <p className="text-slate-500 font-medium text-lg">كل شيء جاهز! اضغط إنشاء حساب للمتابعة.</p>
            </div>
          )}

          <div className="flex gap-3 pt-6">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="flex-1 border-slate-200 rounded-2xl h-14 font-bold">السابق</Button>
            )}
            <Button 
              type="button" 
              onClick={() => step < 3 ? setStep(step + 1) : alert('تم!')} 
              className="bg-[#1D4ED8] flex-[2] h-14 rounded-2xl shadow-lg shadow-blue-100 font-bold"
            >
              {step === 3 ? 'إنشاء الحساب' : 'التالي'}
            </Button>
          </div>
        </form>

        <p className="text-center mt-10 text-sm text-slate-400 font-medium">
          لديك حساب بالفعل؟ <a href="/login" className="text-[#1D4ED8] font-bold hover:underline">سجل دخولك</a>
        </p>
      </div>
    </div>
  );
};

export default Register;