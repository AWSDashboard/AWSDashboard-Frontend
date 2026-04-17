import { Outlet } from "react-router-dom";
import { BottomBar } from "./BottomBar";

export function MainLayout() {
  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden bg-gray-50">
      <BottomBar />
      
      <main className="flex-1 overflow-auto pb-16 lg:pb-0 lg:pl-20">
        <Outlet />
      </main>
    </div>
  );
}