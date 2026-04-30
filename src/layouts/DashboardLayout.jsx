import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/dashboard/Sidebar";
import DashboardHeader from "../component/dashboard/DashboardHeader";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-tajawal" dir="rtl">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-100 px-4 sm:px-8 py-2 sticky top-0 z-30">
          <DashboardHeader 
            title="لوحة التحكم" 
            onMenuClick={() => setIsSidebarOpen(true)} 
          />
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
