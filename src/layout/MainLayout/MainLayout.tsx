import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Suspense, lazy } from "react";
import Loader from "@/components/shared/loader";

// Lazy load components
const Header = lazy(() => import("../header/Header"));
const YouTubeSidebar = lazy(() => import("../sideBar/SideBar"));


const LoadingFallback = () => (
  <Loader/>
);

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <div className="flex flex-1">
          {/* Sidebar */}
          <Suspense fallback={<LoadingFallback />}>
            <YouTubeSidebar />
          </Suspense>

          {/* Main Content */}
          <SidebarInset className="flex-1 overflow-auto">
            <Suspense fallback={<LoadingFallback />}>
              <Header />
            </Suspense>
            <Outlet />
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
