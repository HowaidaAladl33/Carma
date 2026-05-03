import React from "react";
import { AlertTriangle, UserX, CreditCard, Bell } from "lucide-react";

const typeIconMap = {
  emergency: AlertTriangle,
  technician: UserX,
  payment: CreditCard,
};

const Notifications = ({ notifications }) => {
  return (
    <div className="bg-white border border-[#f3f4f6] rounded-[14px] shadow-[0px_10px_15px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] p-[25px] flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[#101828] text-xl font-bold">
          الإشعارات ({notifications.length})
        </h2>
        <button className="text-[#155dfc] text-sm font-medium hover:underline">عرض الكل</button>
      </div>

      <div className="flex flex-col gap-3">
        {notifications.length === 0 ? (
          <p className="text-center text-[#4a5565] py-4 text-sm">لا توجد إشعارات</p>
        ) : (
          notifications.map((notif) => {
            const Icon = typeIconMap[notif.type] || Bell;
            return (
              <div key={notif.id} className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-gray-50 transition-colors">
                <div className={`${notif.iconBg} w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${notif.iconColor}`} />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#4a5565] text-xs">{notif.time}</span>
                    <h4 className="text-[#101828] text-sm font-bold text-right">{notif.title}</h4>
                  </div>
                  <p className="text-[#4a5565] text-xs text-right">{notif.description}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Notifications;
