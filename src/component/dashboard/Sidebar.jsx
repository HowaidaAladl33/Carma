import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Users, 
  Bell, 
  BarChart2, 
  User, 
  Settings, 
  LogOut,
  X,
  ChevronRight,
  ChevronLeft,
  PanelLeftOpen,
  PanelLeftClose
} from 'lucide-react';
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const menuItems = [
    { name: 'الرئيسية', icon: Home, path: '/admin', end: true },
    { name: 'الطلبات', icon: FileText, path: '/admin/orders' },
    { name: 'الفنيون', icon: Users, path: '/admin/technicians' },
    { name: 'الإشعارات', icon: Bell, path: '/admin/notifications', badge: 5 },
    { name: 'التقارير', icon: BarChart2, path: '/admin/reports' },
    { name: 'الملف الشخصي', icon: User, path: '/admin/profile' },
    { name: 'الإعدادات', icon: Settings, path: '/admin/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className={`fixed inset-y-0 right-0 z-50 ${isCollapsed ? 'w-24' : 'w-72'} bg-primary-dark text-white transition-all duration-300 transform font-tajawal 
      ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:static md:inset-auto h-screen flex flex-col`}>
      
      {/* Sidebar Header */}
      <div className={`flex items-center ${isCollapsed ? 'justify-center p-6' : 'justify-between p-8'}`}>
        {!isCollapsed && (
          <div className="flex flex-col overflow-hidden whitespace-nowrap">
            <h1 className="text-3xl font-black tracking-tight">كار سيرفس</h1>
            <p className="text-sm text-blue-300/80 font-medium mt-1">لوحة التحكم الإدارية</p>
          </div>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="hidden md:block p-2 hover:bg-white/10 rounded-xl transition-colors shrink-0"
        >
           {isCollapsed ? (
              <PanelLeftOpen className="w-5 h-5 shrink-0 mx-auto" />
            ) : (
              <PanelLeftClose className="w-5 h-5 shrink-0" />
            )}
        </button>
        <button onClick={onClose} className="md:hidden p-2 hover:bg-white/10 rounded-xl transition-colors shrink-0">
          <X size={28} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-3 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.end}
            onClick={() => window.innerWidth < 768 && onClose()}
            className={({ isActive }) => `
              flex items-center justify-between py-4 rounded-full transition-all duration-300
              ${isCollapsed ? 'px-0 justify-center' : 'px-6'}
              ${isActive 
                ? 'bg-white text-[#172554] shadow-xl scale-[1.02]' 
                : 'text-white/60 hover:bg-white/10 hover:text-white'}
            `}
          >
            {({ isActive }) => (
              <>
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'}`}>
                  <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
                  {!isCollapsed && (
                    <span className={`text-lg whitespace-nowrap transition-all duration-300 ${isActive ? 'font-bold' : 'font-medium opacity-90'}`}>
                      {item.name}
                    </span>
                  )}
                </div>
                {!isCollapsed && item.badge && (
                  <span className="bg-[#ef4444] text-white text-[11px] font-black h-6 w-6 flex items-center justify-center rounded-full shadow-lg ring-2 ring-white/10 shrink-0">
                    {item.badge}
                  </span>
                )}
                {/* Badge indicator when collapsed */}
                {isCollapsed && item.badge && (
                  <span className="absolute top-2 right-4 bg-[#ef4444] h-3 w-3 rounded-full border-2 border-primary-dark"></span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Sidebar Footer - Logout */}
      <div className={`p-6 border-t border-white/5 ${isCollapsed ? 'flex justify-center px-4' : ''}`}>
        <button 
          onClick={handleLogout}
          className={`flex items-center text-[#ff987d] hover:bg-white/5 rounded-full transition-all duration-300 group
            ${isCollapsed ? 'p-3 justify-center' : 'gap-4 w-full px-6 py-3'}
          `}
        >
          <LogOut size={20} className="shrink-0 group-hover:-translate-x-1 transition-transform" />
          {!isCollapsed && (
            <span className="text-lg font-bold whitespace-nowrap">تسجيل الخروج</span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
