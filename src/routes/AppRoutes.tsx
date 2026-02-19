import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Profile from "../pages/Profile/Profile";
import { TooltipProvider } from "../components/ui/tooltip";
import NotFound from "@/pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </TooltipProvider>
  );
}
