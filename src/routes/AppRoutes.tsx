import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import { TooltipProvider } from "../components/ui/tooltip";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));
const Settings = lazy(() => import("@/pages/Settings/Settings"));
const ReportHistory = lazy(() => import("@/pages/ReportHistory/ReportHistory"));
const Help = lazy(() => import("@/pages/Help/Help"));
const SendFeedback = lazy(() => import("@/pages/SendFeedback/SendFeedback"));
const SearchResults = lazy(() => import("@/pages/SearchResults/SearchResults"));
const VideoDetails = lazy(() => import("@/pages/VideoDetails/VideoDetails"));
const ChannelDetails = lazy(() => import("@/pages/ChannelDetails/ChannelDetails"));
const SignIn = lazy(() => import("@/pages/Auth/SignIn"));
const SignUp = lazy(() => import("@/pages/Auth/SignUp"));
const Notifications = lazy(() => import("@/pages/Notifications/Notifications"));
const CategoryVideos = lazy(() => import("@/pages/CategoryVideos/CategoryVideos"));
const Shorts = lazy(() => import("@/pages/Shorts/Shorts"));
const Subscriptions = lazy(() => import("@/pages/Subscriptions/Subscriptions"));
const Library = lazy(() => import("@/pages/Library/Library"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

export default function AppRoutes() {
  return (
    <TooltipProvider>
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </TooltipProvider>
  );
}
