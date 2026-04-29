import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthLayout from "./layouts/AuthLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import AdminHome from "./pages/dashboard/admin/AdminHome.jsx";
import Technicians from "./pages/dashboard/admin/Technicians.jsx";
import AdminOrders from "./pages/dashboard/admin/AdminOrders.jsx";
import Reports from "./pages/dashboard/admin/Reports.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="technicians" element={<Technicians />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="reports" element={<Reports />} />
          {/* Add more dashboard routes here */}
        </Route>

        
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}