import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Profile from "../pages/Profile/Profile";
import { TooltipProvider } from "../components/ui/tooltip";
import NotFound from "@/pages/NotFound/NotFound";
import Settings from "@/pages/Settings/Settings";
import ReportHistory from "@/pages/ReportHistory/ReportHistory";
import Help from "@/pages/Help/Help";
import SendFeedback from "@/pages/SendFeedback/SendFeedback";
import SearchResults from "@/pages/SearchResults/SearchResults";

export default function AppRoutes() {
  return (
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="results" element={<SearchResults />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="report" element={<ReportHistory />} />
          <Route path="help" element={<Help />} />
          <Route path="feedback" element={<SendFeedback />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </TooltipProvider>
  );
}
