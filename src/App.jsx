import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Login2 from "./pages/auth/Login2.jsx";
import Register from "./pages/auth/Register.jsx";
import AdminView from "./pages/admin/AdminView.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminView />} />

        
        <Route path="/" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}