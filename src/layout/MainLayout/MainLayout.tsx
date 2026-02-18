import { Outlet } from "react-router-dom";
import { YouTubeSidebar } from "../sideBar/SideBar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <div className="flex flex-1">
          {/* Sidebar */}
          <YouTubeSidebar />

          {/* Main Content */}
          <SidebarInset className="flex-1 p-6 overflow-auto">
            <Outlet />
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
