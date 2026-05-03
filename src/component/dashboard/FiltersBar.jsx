import React from "react";
import {
  NOTIFICATION_TYPE,
  NOTIFICATION_STATUS,
  NOTIFICATION_TYPE_LABELS,
  NOTIFICATION_STATUS_LABELS,
} from "../../data/mockNotifications";

const FiltersBar = ({
  typeFilter,
  statusFilter,
  onTypeChange,
  onStatusChange,
}) => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {/* Type Filter */}
      <div className="flex items-center gap-2">
        <span className="text-[#4a5565] text-sm font-medium">النوع:</span>
        <div className="flex items-center gap-2">
          {Object.values(NOTIFICATION_TYPE).map((type) => (
            <button
              key={type}
              onClick={() => onTypeChange(type)}
              className={`h-10 px-4 rounded-[14px] flex items-center gap-2 text-sm font-medium transition-all ${
                typeFilter === type
                  ? "bg-linear-to-l from-primary to-[#1e40af] text-white shadow-[0px_10px_15px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)]"
                  : "bg-[#f3f4f6] text-[#364153] hover:bg-gray-200"
              }`}
            >
              <span>{NOTIFICATION_TYPE_LABELS[type]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div className="flex items-center gap-2">
        <span className="text-[#4a5565] text-sm font-medium">الحالة:</span>
        <div className="flex items-center gap-2">
          {Object.values(NOTIFICATION_STATUS).map((status) => (
            <button
              key={status}
              onClick={() => onStatusChange(status)}
              className={`h-10 px-4 rounded-[14px] flex items-center gap-2 text-sm font-medium transition-all ${
                statusFilter === status
                  ? "bg-linear-to-l from-primary to-[#1e40af] text-white shadow-[0px_10px_15px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)]"
                  : "bg-[#f3f4f6] text-[#364153] hover:bg-gray-200"
              }`}
            >
              <span>{NOTIFICATION_STATUS_LABELS[status]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
