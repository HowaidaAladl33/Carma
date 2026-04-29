import React, { useState, useEffect } from 'react';
import StatCard from '../../../component/dashboard/StatCard';
import DashboardHeader from '../../../component/dashboard/DashboardHeader';
import OrderApprovalCard from '../../../component/dashboard/OrderApprovalCard';
import AlertCard from '../../../component/dashboard/AlertCard';
import TechnicianCard from '../../../component/dashboard/TechnicianCard';
import { dashboardService, orderService } from '../../../services/api';
import CurrentOrderRow from '../../../component/dashboard/CurrentOrderRow';
import { 
  Users, 
  ShoppingBag, 
  Clock, 
  Settings, 
  CheckCircle, 
  TrendingUp,
  Droplets,
  Battery,
  AlertCircle,
  UserCheck,
  CreditCard,
  Truck,
  Wind,
  CircleSlash,
  Target
} from 'lucide-react';

const AdminHome = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [currentOrders, setCurrentOrders] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [adminRes, ordersRes, notificationsRes] = await Promise.all([
          dashboardService.getAdminData(),
          orderService.getOrders(),
          dashboardService.getNotifications()
        ]);

        const adminPayload = adminRes.data?.data || {};
        const statsData = adminPayload.stats || {};
        
        // Map Stats
        setStats([
          { title: 'إجمالي الطلبات', value: statsData.totalOrders || 0, trend: '', icon: TrendingUp, iconBg: 'bg-blue-100', trendUp: true },
          { title: 'قيد المراجعة', value: statsData.pendingOrders || 0, trend: '', icon: Clock, iconBg: 'bg-yellow-100', trendUp: true },
          { title: 'جاري التنفيذ', value: statsData.activeOrders || 0, trend: '', icon: Settings, iconBg: 'bg-cyan-100', trendUp: true },
          { title: 'مكتملة اليوم', value: statsData.todayOrders || 0, trend: '', icon: CheckCircle, iconBg: 'bg-green-100', trendUp: true },
          { title: 'الفنيون المتاحون', value: adminPayload.technicians?.length || 0, subValue: '', icon: Users, iconBg: 'bg-purple-100', trendUp: true },
          { title: 'إيرادات اليوم', value: statsData.totalRevenue || 0, subValue: 'جنيه', trend: '', icon: ShoppingBag, iconBg: 'bg-emerald-100', trendUp: true },
        ]);

        // Map Orders
        const ordersPayload = ordersRes.data?.data || [];
        const mappedOrders = ordersPayload.map(order => ({
          ...order,
          customer: `العميل #${order.userId}`, 
          service: `خدمة #${order.serviceId}`,
          phone: order.phoneNumber,
          time: new Date(order.createdAt).toLocaleTimeString('ar-EG'),
          location: order.address,
          price: order.price || '---',
          status: order.orderStatus,
          icon: Droplets
        }));

        setPendingOrders(mappedOrders.filter(o => o.status === 'New' || o.status === 'pending' || o.status === 0));
        setCurrentOrders(mappedOrders.filter(o => o.status !== 'New' && o.status !== 'pending' && o.status !== 0));

        // Map Alerts
        const notificationsPayload = notificationsRes.data?.data || [];
        const mappedAlerts = notificationsPayload.map((note, idx) => ({
          title: note,
          description: '',
          time: '',
          icon: AlertCircle,
          type: 'info'
        }));
        setAlerts(mappedAlerts);

        // Map Technicians
        const techsPayload = adminPayload.technicians || [];
        const mappedTechs = techsPayload.map(tech => ({
          name: tech.name,
          initial: tech.name ? tech.name.charAt(0) : 'ف',
          specialty: tech.category || 'عام',
          location: tech.city || 'غير محدد',
          rating: tech.rating || 'N/A',
          orders: tech.ordersCount || 0,
          available: tech.status === 'Available'
        }));
        setTechnicians(mappedTechs.slice(0, 5));

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="font-tajawal">
      <DashboardHeader 
        title="الرئيسية" 
        subtitle={new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} 
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Right Column: New Orders (Takes 2/3 space) */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-blue-600 text-sm font-bold hover:underline">عرض الكل</a>
            <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
              طلبات جديدة تحتاج موافقة (4)
            </h2>
          </div>
          
          <div className="space-y-4 mb-10">
            {pendingOrders.map((order) => (
              <OrderApprovalCard key={order.id} {...order} />
            ))}
          </div>

          {/* Current Orders Section */}
          <section className="mt-10">
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-blue-600 text-sm font-bold hover:underline">عرض الكل</a>
              <h2 className="text-2xl font-black text-slate-800">الطلبات الحالية</h2>
            </div>
            
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="space-y-1">
                {currentOrders.map((order) => (
                  <CurrentOrderRow key={order.id} {...order} />
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Left Column: Side Info (Takes 1/3 space) */}
        <div className="lg:col-span-1 order-1 lg:order-2 space-y-8">
          
          {/* Alerts Section */}
          <section>
            <div className="mb-6 h-[2.5rem] flex items-center justify-end">
              <h2 className="text-2xl font-black text-slate-800">التنبيهات والإشعارات</h2>
            </div>
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="space-y-1">
                {alerts.map((alert, index) => (
                  <AlertCard key={index} {...alert} />
                ))}
              </div>
            </div>
          </section>

          {/* Technicians Section */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <a href="#" className="text-blue-600 text-sm font-bold hover:underline">عرض الكل</a>
              <h2 className="text-2xl font-black text-slate-800">الفنيون المتاحون (5)</h2>
            </div>
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="space-y-1">
                {technicians.map((tech, index) => (
                  <TechnicianCard key={index} {...tech} />
                ))}
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default AdminHome;
