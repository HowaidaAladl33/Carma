import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full  bg-white ">
        <Outlet />
      </div>
    </div>
  );
}