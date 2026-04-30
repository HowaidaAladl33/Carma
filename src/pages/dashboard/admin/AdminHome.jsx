import { useAuth } from "../../../context/AuthContext";
import {
  HiOutlinePlusCircle,
  HiOutlineMapPin,
  HiOutlineArrowPath,
  HiOutlineCreditCard,
  HiOutlineWrench,
  HiOutlineCog6Tooth,
  HiOutlineTruck,
  HiOutlineSparkles,
  HiOutlineExclamationTriangle,
  HiOutlineBolt,
  HiOutlineChatBubbleOvalLeft,
  HiOutlinePhone,
  HiOutlineQuestionMarkCircle,
  HiOutlineCheckCircle,
  HiOutlineArrowLeft,
} from "react-icons/hi2";

/* ─── Quick Actions Config ─── */
const quickActions = [
  { label: "احجز خدمة جديدة", icon: HiOutlinePlusCircle, color: "#10b981" },
  { label: "تتبع الطلب", icon: HiOutlineMapPin, color: "#3b82f6" },
  { label: "إعادة طلب خدمة", icon: HiOutlineArrowPath, color: "#f59e0b" },
  { label: "شحن المحفظة", icon: HiOutlineCreditCard, color: "#8b5cf6" },
];

/* ─── Quick Services Config ─── */
const quickServices = [
  { label: "تغيير البطارية", icon: HiOutlineBolt, bg: "#ede9fe", color: "#7c3aed" },
  { label: "تغيير الزيت", icon: HiOutlineWrench, bg: "#dbeafe", color: "#2563eb" },
  { label: "خدمة الإطارات", icon: HiOutlineCog6Tooth, bg: "#e0e7ff", color: "#4f46e5" },
  { label: "غسيل السيارة", icon: HiOutlineSparkles, bg: "#d1fae5", color: "#059669" },
  { label: "خدمة الطوارئ", icon: HiOutlineExclamationTriangle, bg: "#fee2e2", color: "#dc2626" },
  { label: "خدمة الونش", icon: HiOutlineTruck, bg: "#fef3c7", color: "#d97706" },
];

/* ─── Support Links Config ─── */
const supportLinks = [
  { label: "الأسئلة الشائعة", icon: HiOutlineQuestionMarkCircle, bg: "#dbeafe", color: "#2563eb" },
  { label: "محادثة مباشرة", icon: HiOutlineChatBubbleOvalLeft, bg: "#d1fae5", color: "#059669" },
  { label: "اتصل بنا 19777", icon: HiOutlinePhone, bg: "#ede9fe", color: "#7c3aed" },
];

/* ─── Status badge mapper ─── */
const statusMap = {
  completed: { label: "مكتمل", className: "completed" },
  pending: { label: "معلق", className: "pending" },
  "in-progress": { label: "قيد التنفيذ", className: "in-progress" },
  cancelled: { label: "ملغي", className: "cancelled" },
};

export default function AdminHome() {
  const { user } = useAuth();

  // TODO: Replace with real API data
  const activeOrder = null;
  const recentOrders = [];
  const walletBalance = null;
  const notifications = [];

  return (
    <div dir="rtl">
      {/* ─── Welcome Banner ─── */}
      <div className="welcome-banner">
        <h2>مرحباً، {user?.name || "أحمد"}! 👋</h2>
        <p>نتمنى لك يوم سعيد. كيف يمكننا مساعدتك اليوم؟</p>
        <span className="car-icon">🚗</span>
      </div>

      {/* ─── Active Order ─── */}
      <div className="section-header">
        <h3>الطلب النشط</h3>
      </div>

      <div className="active-order-card">
        {activeOrder ? (
          <>
            <div className="active-order-header">
              <span style={{ fontSize: "0.8rem", color: "#64748b" }}>
                #{activeOrder.id}
              </span>
              <span className={`status-badge ${statusMap[activeOrder.status]?.className || ""}`}>
                {statusMap[activeOrder.status]?.label || activeOrder.status}
              </span>
            </div>
            <div className="active-order-body">
              <div className="active-order-service">
                <p style={{ fontWeight: 700, color: "#1e293b", marginBottom: 4 }}>{activeOrder.serviceName}</p>
                <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{activeOrder.serviceDetails}</p>
              </div>
              <div className="active-order-tech">
                <p style={{ fontWeight: 700, color: "#1e293b", marginBottom: 4 }}>{activeOrder.techName}</p>
                <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{activeOrder.techRole}</p>
              </div>
            </div>
            <div className="active-order-actions">
              <button style={{ background: "#f1f5f9", color: "#334155" }}>تفاصيل الطلب</button>
              <button style={{ background: "#1e40af", color: "white" }}>
                <HiOutlineMapPin /> تتبع الطلب
              </button>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <p>لا يوجد طلب نشط حالياً</p>
          </div>
        )}
      </div>

      {/* ─── Quick Actions ─── */}
      <div className="quick-actions">
        {quickActions.map((action, i) => (
          <button key={i} className="quick-action-btn">
            <div className="action-icon" style={{ background: action.color }}>
              <action.icon />
            </div>
            <span>{action.label}</span>
          </button>
        ))}
      </div>

      {/* ─── Quick Services ─── */}
      <div className="section-header">
        <h3>الخدمات السريعة</h3>
      </div>

      <div className="services-grid">
        {quickServices.map((svc, i) => (
          <div key={i} className="service-card">
            <div className="service-icon" style={{ background: svc.bg, color: svc.color }}>
              <svc.icon size={22} />
            </div>
            <div className="service-name">{svc.label}</div>
            {/* Price will come from API */}
          </div>
        ))}
      </div>

      {/* ─── Bottom Grid: Orders + Side Widgets ─── */}
      <div className="content-grid">
        {/* Recent Orders */}
        <div>
          <div className="section-header">
            <h3>الطلبات الأخيرة</h3>
            <a href="#">
              عرض الكل <HiOutlineArrowLeft size={14} />
            </a>
          </div>

          <div className="orders-list">
            {recentOrders.length > 0 ? (
              recentOrders.map((order, i) => (
                <div key={i} className="order-item">
                  <div className="order-info">
                    <div className="order-icon" style={{ background: "#dbeafe", color: "#2563eb" }}>
                      <HiOutlineWrench />
                    </div>
                    <div className="order-details">
                      <h4>{order.serviceName}</h4>
                      <p>{order.date}</p>
                    </div>
                  </div>
                  <div className="order-meta">
                    <span className={`status-badge ${statusMap[order.status]?.className || ""}`}>
                      {statusMap[order.status]?.label || order.status}
                    </span>
                    <span className="order-price">{order.price} جنيه</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-icon">📦</div>
                <p>لا توجد طلبات حتى الآن</p>
              </div>
            )}
          </div>
        </div>

        {/* Side Widgets */}
        <div>
          {/* Wallet */}
          <div className="wallet-card">
            <div className="wallet-header">
              <h4>المحفظة</h4>
              <HiOutlineCreditCard size={20} />
            </div>
            <div className="wallet-balance">
              {walletBalance !== null ? `${walletBalance}` : "---"} <span style={{ fontSize: "1rem" }}>جنيه</span>
            </div>
            <div className="wallet-label">الرصيد الحالي</div>
            <div className="wallet-actions">
              <button className="btn-primary">شحن الرصيد</button>
              <button className="btn-secondary">العمليات</button>
            </div>
          </div>

          {/* Support */}
          <div className="support-card">
            <h4>الدعم</h4>
            <p className="support-subtitle">هل تحتاج مساعدة؟ نحن هنا لخدمتك</p>
            {supportLinks.map((link, i) => (
              <a key={i} href="#" className="support-link">
                <div className="support-icon" style={{ background: link.bg, color: link.color }}>
                  <link.icon size={16} />
                </div>
                {link.label}
              </a>
            ))}
          </div>

          {/* Notifications */}
          <div className="notifications-card">
            <div className="section-header" style={{ marginBottom: 12 }}>
              <h3>التنبيهات</h3>
            </div>
            {notifications.length > 0 ? (
              notifications.map((notif, i) => (
                <div key={i} className="notification-item">
                  <span className="notification-dot" style={{ background: notif.read ? "#d1d5db" : "#ef4444" }} />
                  <div>
                    <h5>{notif.title}</h5>
                    <p>{notif.body}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state" style={{ padding: "20px 10px" }}>
                <div className="empty-icon">🔔</div>
                <p>لا توجد تنبيهات</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
