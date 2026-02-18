import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import { TooltipProvider } from "../components/ui/tooltip";
export default function AppRoutes() {
  return (
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </TooltipProvider>
  );
}
