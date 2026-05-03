import { useState, useMemo, useCallback } from "react";
import { mockNotifications, NOTIFICATION_TYPE, NOTIFICATION_STATUS } from "../data/mockNotifications";
// import notificationsService from "../services/notifications.service";

export default function useNotifications() {
  const [notifications] = useState(mockNotifications);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState(NOTIFICATION_TYPE.ALL);
  const [statusFilter, setStatusFilter] = useState(NOTIFICATION_STATUS.ALL);
  const [loading, _setLoading] = useState(false);
  const [error, _setError] = useState(null);

  // Compute stats
  const stats = useMemo(() => {
    return {
      total: notifications.length,
      unread: notifications.filter((n) => n.status === "unread").length,
      urgent: notifications.filter((n) => n.type === "urgent").length,
      read: notifications.filter((n) => n.status === "read").length,
    };
  }, [notifications]);

  // Filter + search
  const filteredNotifications = useMemo(() => {
    let result = notifications;

    if (typeFilter !== NOTIFICATION_TYPE.ALL) {
      result = result.filter((n) => n.type === typeFilter);
    }

    if (statusFilter !== NOTIFICATION_STATUS.ALL) {
      result = result.filter((n) => n.status === statusFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (n) => n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q)
      );
    }

    return result;
  }, [notifications, typeFilter, statusFilter, searchQuery]);

  // Handlers
  const handleSelect = useCallback((id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedIds(filteredNotifications.map((n) => n.id));
  }, [filteredNotifications]);

  const handleMarkAsRead = useCallback(async (id) => {
    // TODO: await notificationsService.markAsRead(id);
    console.log("Mark as read:", id);
  }, []);

  const handleMarkAllAsRead = useCallback(async () => {
    // TODO: await notificationsService.markAllAsRead();
    console.log("Mark all as read");
  }, []);

  const handleDelete = useCallback(async (id) => {
    // TODO: await notificationsService.deleteNotification(id);
    console.log("Delete notification:", id);
  }, []);

  const handleAction = useCallback((notification) => {
    console.log("Action clicked:", notification);
  }, []);

  return {
    notifications: filteredNotifications,
    stats,
    selectedIds,
    searchQuery,
    typeFilter,
    statusFilter,
    loading,
    error,
    handleSelect,
    handleSelectAll,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDelete,
    handleAction,
    setSearchQuery,
    setTypeFilter,
    setStatusFilter,
  };
}
