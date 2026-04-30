import { Outlet } from "react-router-dom";

export default function AuthLayout() {

  return (
    <div className="  flex items-center  max-h-screen overflow-hidden justify-center bg-[#EFF6FF] px-4">
      <div data-aos="fade-up" data-aos-duration="3000" className="  relative w-full max-w-md  bg-white p-4 h-fit my-[50%] rounded-2xl shadow-2xl shadow-gray-500 border border-gray-100 ">
        <Outlet />
      </div>
    </div>
  );
}