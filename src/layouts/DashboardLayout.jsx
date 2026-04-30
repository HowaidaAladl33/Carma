import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      {/* Sidebar & header will be added later */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
