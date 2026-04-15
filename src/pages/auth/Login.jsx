import React, { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Phone, Lock, Eye, EyeOff, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.365 21.435c-1.127.676-2.316.34-3.551-.237-1.408-.66-2.545-.632-4.004.032-1.353.616-2.433.864-3.415.2-1.442-.98-3.031-2.991-4.08-4.996C.193 14.28-.593 11.233.518 8.441c.365-.92 1.05-1.876 1.838-2.6A4.55 4.55 0 0 1 5.334 4.5c.823 0 2.224.512 3.385.512 1.25 0 2.392-.555 3.535-.555 1.229.02 2.37.387 3.328 1.002 1.036.666 1.815 1.579 1.815 1.579s-1.841 1.114-1.82 3.197c.018 1.954 1.564 2.825 1.83 2.946-.039.117-.811 2.827-2.632 5.485-.884 1.29-1.848 2.502-3.151 2.502a3.84 3.84 0 0 1-.259-.233zM15.114 4.148c.636-.8 1.109-1.92.981-3.048-1.026.046-2.222.714-2.906 1.554-.606.745-1.135 1.92-.981 3.003 1.135.093 2.223-.623 2.906-1.509z" />
  </svg>
);

const loginSchema = z.object({
  email: z.string().trim().email("من فضلك أدخل بريد إلكتروني صحيح."),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل."),
  role: z.enum(["customer", "tech", "admin"]),
  rememberMe: z.boolean(),
});

const Login = () => {
  const navigate = useNavigate();
  const [authMethod, setAuthMethod] = useState("phone"); // 'phone' | 'email'
  const [role, setRole] = useState("customer"); // 'admin' | 'tech' | 'customer'
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const ADMIN_EMAIL = "admin@carma.com";

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setErrors({});
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clcike");

    setErrors({});
    setSuccessMessage("");

    const result = loginSchema.safeParse({
      email,
      password,
      role,
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
      authMethod,
      isAdminEmail: result.data.email.toLowerCase() === ADMIN_EMAIL,
    };

    console.log("Login payload:", loginPayload);

    if (loginPayload.role === "admin" || loginPayload.isAdminEmail) {
      navigate("/admin", { state: { email: loginPayload.email } });
      return;
    }

    setSuccessMessage(
      `تم تسجيل الدخول بنجاح كـ ${loginPayload.role === "tech" ? "فني" : "عميل"}.`,
    );
  };

  return (
    <div className=" rounded-3xl shadow-2xl relative z-10 w-full flex flex-col lg:flex-row  h-auto mx-auto ">
      {/* Left Side: Features (Blue Box) */}
      {/* Made static, taking space but overlayed slightly on desktop per Figma design if needed. But in figma it's directly side-by-side or overlapping. Let's make it sit cleanly side by side. */}
      <div className="hidden lg:flex flex-col justify-between w-[48%] bg-primary text-white p-12 relative overflow-hidden rounded-r-3xl m-4 ml-0 z-20">
        <div
          className="absolute inset-0 opacity-100 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(126deg, #1e3a8a 0%, #1e3b8f 14%, #1e3c94 28%, #1e3d9a 42%, #1e3e9f 57%, #1e3ea4 71%, #1e3faa 85%, #1e40af 100%)",
          }}
        ></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            خدماتنا في كل مكان 🚗
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-12">
            احصل على خدمات صيانة السيارات أينما كنت. فريقنا جاهز لخدمتك على مدار
            الساعة.
          </p>

          <div className="space-y-4">
            {[
              { title: "خدمة سريعة", desc: "نصل إليك في أقل من 30 دقيقة" },
              { title: "فنيون محترفون", desc: "فريق من الخبراء المعتمدين" },
              { title: "أسعار تنافسية", desc: "أفضل الأسعار في السوق" },
              { title: "ضمان الجودة", desc: "ضمان شامل على جميع الخدمات" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-center bg-white/10 p-5 rounded-xl border border-white/5 backdrop-blur-sm"
              >
                <div className="bg-white/20 p-2.5 rounded-lg shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-0.5">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/20 text-center">
          <div>
            <p className="text-3xl font-bold mb-1">4.9</p>
            <p className="text-white/80 text-sm">تقييم ممتاز</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-1">50+</p>
            <p className="text-white/80 text-sm">فني محترف</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-1">15K+</p>
            <p className="text-white/80 text-sm">عميل سعيد</p>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="shadow-xl border border-gray-200   rounded-l-3xl  relative z-10 w-full lg:w-[52%] m-4 mr-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
        <div className="text-center mb-10 ">
          <div className="inline-flex items-center  justify-center gap-2 mb-8 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            <Car className="w-10 h-10 text-primary" />
            <div className="text-right">
              <h1 className="text-3xl font-bold text-black">سيارتك</h1>
              <p className="text-gray-500 text-sm tracking-wide">
                خدمة صيانة السيارات
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            مرحباً بعودتك! 👋
          </h2>
          <p className="text-gray-500">سجل دخولك للوصول إلى حسابك</p>
        </div>

        <form
          className="max-w-md w-full mx-auto space-y-6  p-4 rounded-xl"
          onSubmit={handleSubmit}
        >
          {/* Phone / Email Toggle */}
          <div className="bg-gray-100 p-1 rounded-xl flex">
            <button
              type="button"
              onClick={() => setAuthMethod("phone")}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${authMethod === "phone" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              رقم الهاتف
            </button>
            <button
              type="button"
              onClick={() => setAuthMethod("email")}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${authMethod === "email" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              البريد الإلكتروني
            </button>
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3 text-right">
              تسجيل الدخول كـ
            </label>
            <div className="flex gap-3 h-12">
              <button
                type="button"
                onClick={() => handleRoleSelect("customer")}
                className={`flex-1 rounded-xl text-sm font-medium transition-all ${role === "customer" ? "bg-primary text-white border-primary shadow-md" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
              >
                عميل
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelect("tech")}
                className={`flex-1 rounded-xl text-sm font-medium transition-all ${role === "tech" ? "bg-primary text-white border-primary shadow-md" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
              >
                فني
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelect("admin")}
                className={`flex-1 rounded-xl text-sm font-medium transition-all ${role === "admin" ? "bg-primary text-white border-primary shadow-md" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
              >
                مسؤول
              </button>
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                {authMethod === "phone" ? "رقم الهاتف" : "البريد الإلكتروني"}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={authMethod === "phone" ? "tel" : "email"}
                  placeholder={
                    authMethod === "phone" ? "01xxxxxxxxx" : "example@mail.com"
                  }
                  dir="ltr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-4 pr-11 py-3.5 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-left bg-white text-gray-900 placeholder-gray-400 transition-colors focus:outline-none"
                />
              </div>
              {errors.email ? (
                <p className="text-red-500 text-xs font-medium text-right mt-2">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                كلمة المرور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  dir="ltr"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-11 py-3.5 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-left bg-white text-gray-900 placeholder-gray-400 transition-colors focus:outline-none"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              {errors.password ? (
                <p className="text-red-500 text-xs font-medium text-right mt-2">
                  {errors.password}
                </p>
              ) : null}
            </div>
          </div>

          {errors.form ? (
            <p className="text-red-500 text-sm font-medium text-center">
              {errors.form}
            </p>
          ) : null}
          {successMessage ? (
            <p className="text-green-600 text-sm font-medium text-center">
              {successMessage}
            </p>
          ) : null}

          {/* Options */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label
                htmlFor="remember-me"
                className="text-sm font-medium text-gray-700 select-none cursor-pointer"
              >
                تذكرني
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              نسيت كلمة المرور؟
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-4 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            تسجيل الدخول
          </button>

          {/* Separator / Social Login */}
          <div className="pt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                أو سجل دخولك باستخدام
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <AppleIcon />
              <span className="font-medium text-gray-700">Apple</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <GoogleIcon />
              <span className="font-medium text-gray-700">Google</span>
            </button>
          </div>

          <div className="text-center pt-2">
            <p className="text-gray-500">
              ليس لديك حساب؟{" "}
              <a
                href="#"
                className="font-bold text-primary hover:text-secondary transition-colors"
              >
                سجل الآن
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
