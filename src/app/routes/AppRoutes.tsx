import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { TooltipProvider } from "../../shared/components/ui/tooltip";
import ErrorBoundaryWrapper from "../../shared/components/ErrorBoundaryWrapper/ErrorBoundaryWrapper";

const MainLayout = lazy(() => import("../layout/MainLayout/MainLayout"));
const HomePage = lazy(() => import("../../features/home/pages/HomePage"));
const Profile = lazy(() => import("../../features/profile/pages/Profile"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Settings = lazy(() => import("../../features/settings/pages/Settings"));
const ReportHistory = lazy(() => import("../../features/report/pages/ReportHistory"));
const Help = lazy(() => import("../../features/help/pages/Help"));
const SendFeedback = lazy(() => import("../../features/feedback/pages/SendFeedback"));
const SearchResults = lazy(() => import("../../features/search/pages/SearchResults"));
const VideoDetails = lazy(() => import("../../features/video/pages/VideoDetails"));
const ChannelDetails = lazy(() => import("../../features/channel/pages/ChannelDetails"));
const SignIn = lazy(() => import("../../features/auth/pages/SignIn"));
const SignUp = lazy(() => import("../../features/auth/pages/SignUp"));
const Notifications = lazy(() => import("../../features/notifications/pages/Notifications"));
const CategoryVideos = lazy(() => import("../../features/category/pages/CategoryVideos"));
const Shorts = lazy(() => import("../../features/shorts/pages/Shorts"));
const Subscriptions = lazy(() => import("../../features/subscriptions/pages/Subscriptions"));
const Library = lazy(() => import("../../features/library/pages/Library"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

export default function AppRoutes() {
  return (
    <TooltipProvider>
      <ErrorBoundaryWrapper>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="shorts" element={<Shorts />} />
              <Route path="subscriptions" element={<Subscriptions />} />
              <Route path="library" element={<Library />} />
              <Route path="results" element={<SearchResults />} />
              <Route path=":slug/:id" element={<VideoDetails />} />
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
      </ErrorBoundaryWrapper>
    </TooltipProvider>
  );
}
