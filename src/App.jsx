import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import AdminHome from "./pages/dashboard/admin/AdminHome.jsx";
import AdminOrders from "./pages/dashboard/admin/AdminOrders.jsx";
import Technicians from "./pages/dashboard/admin/Technicians.jsx";
import Reports from "./pages/dashboard/admin/Reports.jsx";
import LandingPage from "./pages/landingpage/LandingPage.jsx";
import AdminNotifications from "./pages/dashboard/admin/AdminNotifications.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

          {/* Auth */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Dashboard (protected) */}
          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/technicians" element={<Technicians />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/notifications" element={<AdminNotifications />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}