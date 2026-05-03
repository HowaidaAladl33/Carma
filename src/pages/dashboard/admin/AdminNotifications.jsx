import React from "react";
import StatCard from "@/component/dashboard/StatCard";
import NotificationsList from "@/component/dashboard/Notifications";
import FiltersBar from "@/component/dashboard/FiltersBar";
import { Checkbox, FormControlLabel, TextField, InputAdornment } from "@mui/material";
import { Search, Check, UserPlus, Bell, BellDot, AlertTriangle, CheckCircle } from "lucide-react";
import useNotifications from "@/hooks/useNotifications";
import { statsData } from "@/data/mockNotifications";

const AdminNotifications = () => {
  const {
    notifications,
    stats,
    selectedIds,
    searchQuery,
    typeFilter,
    statusFilter,
    loading,
    error,
    handleSelect,
    handleSelectAll,
    handleMarkAllAsRead,
    handleAction,
    setSearchQuery,
    setTypeFilter,
    setStatusFilter,
  } = useNotifications();

  return (
    <div className="flex flex-col gap-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsData.map((stat) => {
          let IconComp = Bell;
          if (stat.key === "unread") IconComp = BellDot;
          if (stat.key === "urgent") IconComp = AlertTriangle;
          if (stat.key === "read") IconComp = CheckCircle;

          return (
            <StatCard
              key={stat.key}
              title={stat.label}
              value={stats[stat.key] ?? stat.count}
              icon={IconComp}
              iconBg={stat.iconBg}
            />
          );
        })}
      </div>

      {/* Search + Filters + Bulk Actions */}
      <div className="bg-white border border-[#f3f4f6] rounded-[14px] shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_2px_4px_rgba(0,0,0,0.1)] p-6 flex flex-col gap-4">
        {/* Search Row */}
        <div className="flex items-center gap-4">
          <TextField
            variant="outlined"
            placeholder="بحث عن إشعار..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search className="w-5 h-5 text-gray-500" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "14px",
                  height: "48px",
                  backgroundColor: "#f9fafb",
                  "& fieldset": { borderColor: "#f3f4f6" },
                  "&:hover fieldset": { borderColor: "#d1d5db" },
                  "&.Mui-focused fieldset": { borderColor: "#1e40af" },
                }
              },
            }}
          />
          <button className="bg-linear-to-l from-primary to-[#1e40af] text-white h-12 px-5 rounded-[14px] flex items-center gap-2 text-base font-medium shadow-[0px_10px_15px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity">
            <UserPlus className="w-5 h-5" />
            إرسال إشعار جديد
          </button>
        </div>

        {/* Filters */}
        <FiltersBar
          typeFilter={typeFilter}
          statusFilter={statusFilter}
          onTypeChange={setTypeFilter}
          onStatusChange={setStatusFilter}
        />

        {/* Bulk Actions */}
        <div className="flex items-center gap-4">
          <FormControlLabel
            control={
              <Checkbox
                checked={
                  selectedIds.length > 0 &&
                  selectedIds.length === notifications.length
                }
                onChange={handleSelectAll}
                sx={{
                  color: "#d1d5db",
                  "&.Mui-checked": {
                    color: "#155dfc",
                  },
                }}
              />
            }
            label="تحديد الكل"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
                fontWeight: 500,
                color: "#4a5565",
              },
            }}
          />
          <button
            onClick={handleMarkAllAsRead}
            className="flex items-center gap-2 text-[#155dfc] text-sm font-medium hover:underline"
          >
            <Check className="w-4 h-4" />
            تحديد الكل كمقروءة
          </button>
          {selectedIds.length > 0 && (
            <span className="text-[#4a5565] text-sm">
              تم تحديد {selectedIds.length} إشعار
            </span>
          )}
        </div>
      </div>

      {/* Loading / Error States */}
      {loading && (
        <div className="text-center py-8 text-[#4a5565]">جاري التحميل...</div>
      )}
      {error && <div className="text-center py-8 text-error">{error}</div>}

      {/* Notifications List */}
      {!loading && !error && (
        <NotificationsList
          notifications={notifications}
          selectedIds={selectedIds}
          onSelect={handleSelect}
          onAction={handleAction}
        />
      )}
    </div>
  );
};

export default AdminNotifications;
