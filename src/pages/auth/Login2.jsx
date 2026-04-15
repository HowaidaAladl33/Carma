import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Button from "../../component/ui/Button";
import Input from "../../component/ui/Input";
import { HiOutlineLockClosed, HiOutlineEnvelope, HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const loginSchema = z.object({
  email: z.string().trim().email("من فضلك أدخل بريد إلكتروني صحيح."),
  password: z
    .string()
    .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل."),
  role: z.enum(["client", "tech", "admin"]),
  rememberMe: z.boolean(),
});

const Login = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState('client');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const ADMIN_EMAIL = "admin@carma.com";

  const handleRoleSelect = (role) => {
    setUserRole(role);
    setErrors({});
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    const result = loginSchema.safeParse({
      email,
      password,
      role: userRole,
      rememberMe,
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0] ?? "",
        password: fieldErrors.password?.[0] ?? "",
        form: "تحقق من البيانات ثم حاول مرة أخرى.",
      });
      return;
    }

    const loginPayload = {
      ...result.data,
      isAdminEmail: result.data.email.toLowerCase() === ADMIN_EMAIL,
    };

    // This is the data to send to API.
    console.log("Login payload:", loginPayload);

    if (loginPayload.role === "admin") {
      navigate("/admin", { state: { email: loginPayload.email } });
      return;
    }

    // Temporary feedback until client/tech routes are implemented.
    setSuccessMessage(`تم تسجيل الدخول بنجاح كـ ${loginPayload.role === "tech" ? "فني" : "عميل"}.`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EFF6FF] p-4 font-sans select-none" dir="rtl">
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-[#1D4ED8] italic tracking-tighter">CarMA</h1>
        <p className="text-[11px] text-slate-400 font-bold tracking-[0.2em] mt-1 mr-1 text-center">خدمة صيانة السيارات</p>
      </div>

      <div className="w-full max-w-[500px] bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 lg:p-12 border border-white/50">
        
        <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1 mb-10">
          <button 
            onClick={() => handleRoleSelect('client')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${userRole === 'client' ? 'bg-[#1D4ED8] text-white shadow-lg' : 'text-slate-400 hover:bg-slate-200'}`}
          >
            عميل 🚗
          </button>
          <button 
            onClick={() => handleRoleSelect('tech')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${userRole === 'tech' ? 'bg-[#1D4ED8] text-white shadow-lg' : 'text-slate-400 hover:bg-slate-200'}`}
          >
            فني 🔧
          </button>
          <button 
            onClick={() => handleRoleSelect('admin')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${userRole === 'admin' ? 'bg-[#1D4ED8] text-white shadow-lg' : 'text-slate-400 hover:bg-slate-200'}`}
          >
            مسؤول 🔑
          </button>
        </div>

        <h2 className="text-2xl font-black text-slate-800 text-center mb-2">مرحباً بعودتك! 👋</h2>
        <p className="text-slate-400 text-sm text-center mb-8 font-medium">سجل دخولك للوصول إلى حسابك</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input 
            label="البريد الإلكتروني" 
            icon={<HiOutlineEnvelope className="text-slate-300" size={20}/>} 
            placeholder="example@mail.com" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email ? (
            <p className="text-red-500 text-xs font-medium text-right -mt-3">{errors.email}</p>
          ) : null}

          <div className="relative">
            <Input 
              label="كلمة المرور" 
              type={showPassword ? "text" : "password"}
              icon={<HiOutlineLockClosed className="text-slate-300" size={20}/>} 
              placeholder="********" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute left-4 top-[45px] text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? <HiOutlineEyeSlash size={18} /> : <HiOutlineEye size={18} />}
            </button>
          </div>
          {errors.password ? (
            <p className="text-red-500 text-xs font-medium text-right -mt-3">{errors.password}</p>
          ) : null}

          {errors.form ? (
            <p className="text-red-500 text-sm font-medium text-center">{errors.form}</p>
          ) : null}
          {successMessage ? (
            <p className="text-green-600 text-sm font-medium text-center">{successMessage}</p>
          ) : null}

          <div className="flex justify-between items-center px-1 text-xs">
             <label className="flex items-center gap-2 text-slate-400 cursor-pointer font-medium">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-200 text-[#1D4ED8]"
                />
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
            <div className="grow border-t border-slate-100"></div>
            <span className="shrink mx-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">أو سجل دخولك عبر</span>
            <div className="grow border-t border-slate-100"></div>
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