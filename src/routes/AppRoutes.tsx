import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Profile from "../pages/Profile/Profile";
import { TooltipProvider } from "../components/ui/tooltip";

export default function AppRoutes() {
  return (
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </TooltipProvider>
  );
}
