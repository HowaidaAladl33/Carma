import React from 'react';
import DashboardHeader from '../../../component/dashboard/DashboardHeader';
import { 
  Users, 
  CheckCircle, 
  Activity, 
  XCircle, 
  Star, 
  Briefcase,
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Phone,
  MapPin
} from 'lucide-react';

const TechnicianStatCard = ({ title, value, icon: Icon, colorClass, bgClass }) => {
  return (
    <div className="bg-white p-4 lg:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-full">
      <div className={`p-2.5 rounded-2xl mb-3 ${bgClass} ${colorClass}`}>
        <Icon size={22} strokeWidth={2.5} />
      </div>
      <p className="text-slate-500 font-bold text-[13px] mb-1">{title}</p>
      <h3 className="text-[28px] font-black text-slate-800 tracking-tight leading-none mt-1">{value}</h3>
    </div>
  );
};

const TechnicianGridCard = ({ tech }) => {
  const isAvailable = tech.status === 'متاح';
  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Header Profile Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4">
          <div className="bg-[#254BA6] text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold text-2xl shadow-md shadow-blue-100 shrink-0">
            {tech.initial}
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className={`text-[10px] px-3 py-1 rounded-full font-bold ${
              isAvailable ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-slate-500'
            }`}>
              {tech.status}
            </span>
            <h3 className="font-black text-slate-800 text-lg leading-tight mt-1">{tech.name}</h3>
            <p className="text-xs text-slate-500 font-medium">{tech.specialty}</p>
          </div>
        </div>
        
        {/* Action Icons */}
        <div className="flex items-center gap-2">
          <button className="p-1.5 text-blue-500 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <Eye size={16} strokeWidth={2.5} />
          </button>
          <button className="p-1.5 text-amber-500 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors">
            <Pencil size={16} strokeWidth={2.5} />
          </button>
          <button className="p-1.5 text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
            <Trash2 size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Stats Box */}
      <div className="bg-gray-50/70 rounded-2xl p-4 mb-6 grid grid-cols-3 divide-x divide-x-reverse divide-gray-200">
        <div className="flex flex-col items-center justify-center px-2">
          <span className="text-2xl font-black text-blue-600">{tech.completed}</span>
          <span className="text-[11px] text-slate-500 font-bold mt-1">مكتمل</span>
        </div>
        <div className="flex flex-col items-center justify-center px-2">
          <span className="text-2xl font-black text-cyan-500">{tech.active}</span>
          <span className="text-[11px] text-slate-500 font-bold mt-1">نشط</span>
        </div>
        <div className="flex flex-col items-center justify-center px-2">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black text-slate-800">{tech.rating}</span>
            <Star size={16} className="text-amber-400 fill-amber-400" />
          </div>
          <span className="text-[11px] text-slate-500 font-bold mt-1">التقييم</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 mb-6 px-1">
        <div className="flex items-center gap-3 text-slate-500">
          <Phone size={16} />
          <span className="text-sm font-medium" dir="ltr">{tech.phone}</span>
        </div>
        <div className="flex items-start gap-3 text-slate-500">
          <MapPin size={16} className="shrink-0 mt-0.5" />
          <span className="text-sm font-medium leading-tight">{tech.location}</span>
        </div>
      </div>

      {/* Progress Bar border-t added for separation similar to line in image */}
      <div className="pt-5 border-t border-gray-100">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-slate-600">معدل الإنجاز</span>
          <span className="text-sm font-black text-green-500">{tech.progress}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full" 
            style={{ width: `${tech.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Technicians = () => {
  const stats = [
    { title: 'إجمالي الفنيين', value: '6', icon: Users, colorClass: 'text-blue-500', bgClass: 'bg-blue-50' },
    { title: 'متاحون', value: '4', icon: CheckCircle, colorClass: 'text-emerald-500', bgClass: 'bg-emerald-50' },
    { title: 'مشغولون', value: '1', icon: Activity, colorClass: 'text-blue-400', bgClass: 'bg-blue-50' },
    { title: 'غير متصلين', value: '1', icon: XCircle, colorClass: 'text-slate-400', bgClass: 'bg-slate-50' },
    { title: 'متوسط التقييم', value: '4.7', icon: Star, colorClass: 'text-amber-500', bgClass: 'bg-amber-50' },
    { title: 'إجمالي الطلبات', value: '1332', icon: Briefcase, colorClass: 'text-purple-500', bgClass: 'bg-purple-50' },
  ];

  const filters = [
    { id: 'all', label: 'الكل', count: 6, active: true },
    { id: 'available', label: 'متاحون', count: 4, active: false },
    { id: 'busy', label: 'مشغولون', count: 1, active: false },
    { id: 'offline', label: 'غير متصلين', count: 1, active: false },
  ];

  const techniciansList = [
    {
      id: 1,
      name: 'يوسف حسن إبراهيم',
      initial: 'ي',
      status: 'متاح',
      specialty: 'الإطارات والفرامل',
      completed: '271',
      active: '2',
      rating: '4.9',
      phone: '01234567890',
      location: 'القاهرة، مصر الجديدة',
      progress: 98.2
    },
    {
      id: 2,
      name: 'حسام الدين عمر',
      initial: 'ح',
      status: 'متاح',
      specialty: 'خدمات الونش والطوارئ',
      completed: '139',
      active: '1',
      rating: '4.6',
      phone: '01187654321',
      location: 'الجيزة، الهرم',
      progress: 95.9
    },
    {
      id: 3,
      name: 'عمر سعيد محمد',
      initial: 'ع',
      status: 'غير متصل',
      specialty: 'صيانة عامة',
      completed: '160',
      active: '0',
      rating: '4.5',
      phone: '01076543210',
      location: 'القاهرة، النزهة',
      progress: 95.8
    }
  ];

  return (
    <div className="font-tajawal">
      <DashboardHeader 
        title="الفنيون" 
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {stats.map((stat, index) => (
          <TechnicianStatCard key={index} {...stat} />
        ))}
      </div>

      {/* Toolbar Layer */}
      <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 mb-6">
        {/* Top Row: Search & Action */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Action Button (Right in RTL) */}
          <button className="flex items-center justify-center gap-2 bg-[#254BA6] hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-bold transition-colors whitespace-nowrap shadow-md shadow-blue-200 order-2 md:order-1">
            <Plus size={20} strokeWidth={2.5} />
            إضافة فني جديد
          </button>
          
          {/* Search Input (Left/Stretch in RTL) */}
          <div className="relative flex-1 order-1 md:order-2">
            <input 
              type="text" 
              placeholder="ابحث باسم الفني، التخصص، أو الموقع..." 
              className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
            />
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* Bottom Row: Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl font-bold text-sm transition-all whitespace-nowrap ${
                filter.active 
                  ? 'bg-[#254BA6] text-white shadow-md shadow-blue-200' 
                  : 'bg-gray-50 text-slate-600 hover:bg-gray-100'
              }`}
            >
              <span className={`flex items-center justify-center h-6 min-w-[24px] px-2 text-[11px] rounded-full font-black ${
                filter.active ? 'bg-white/20 text-white' : 'bg-gray-200 text-slate-500'
              }`}>
                {filter.count}
              </span>
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area - Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techniciansList.map((tech) => (
          <TechnicianGridCard key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default Technicians;
