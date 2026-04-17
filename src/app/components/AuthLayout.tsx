import { Outlet } from "react-router-dom";
import { BottomBar } from "./BottomBar";

export function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="w-full sm:max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-cyan-100/50">
        <div className="p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Bienvenido a <span className="text-[#FF9900]">CPM</span>
            </h1>
          </div>
          <div className="mt-4 flex-col items-start text-left w-full">
            {<Outlet />}
          </div>
        </div>
      </div>
    </div>
  );
}
