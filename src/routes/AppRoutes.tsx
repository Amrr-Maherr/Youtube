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
import VideoDetails from "@/pages/VideoDetails/VideoDetails";
import ChannelDetails from "@/pages/ChannelDetails/ChannelDetails";
import SignIn from "@/pages/Auth/SignIn";
import SignUp from "@/pages/Auth/SignUp";
import Notifications from "@/pages/Notifications/Notifications";
import CategoryVideos from "@/pages/CategoryVideos/CategoryVideos";
import Shorts from "@/pages/Shorts/Shorts";
import Subscriptions from "@/pages/Subscriptions/Subscriptions";
import Library from "@/pages/Library/Library";

export default function AppRoutes() {
  return (
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="library" element={<Library />} />
          <Route path="results" element={<SearchResults />} />
          <Route path="watch" element={<VideoDetails />} />
          <Route path="channel" element={<ChannelDetails />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="category" element={<CategoryVideos />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="report" element={<ReportHistory />} />
          <Route path="help" element={<Help />} />
          <Route path="feedback" element={<SendFeedback />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </TooltipProvider>
  );
}
