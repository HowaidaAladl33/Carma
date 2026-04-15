import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminView = () => {
  const location = useLocation();
  const email = location.state?.email ?? "admin@carma.com";

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center space-y-4">
        <p className="text-sm text-blue-700 font-bold">لوحة المسؤول</p>
        <h1 className="text-3xl font-black text-slate-900">مرحباً بك في صفحة الأدمن</h1>
        <p className="text-slate-500">
          تم تسجيل الدخول بحساب: <span className="font-bold text-slate-700">{email}</span>
        </p>
        <Link
          to="/login"
          className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition-colors"
        >
          رجوع إلى تسجيل الدخول
        </Link>
      </div>
    </div>
  );
};

export default AdminView;
