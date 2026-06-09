import { lazy } from "react";
import PageHeader from "@/shared/components/PageHeader";

const VideosSection = lazy(() => import("../components/VideosSection"));
const HomePage = () => {
  return (
    <>
      <PageHeader
        title="Home | YouTube"
        description="Discover the latest videos, music, and trending content on YouTube. Watch, share, and explore videos from creators around the world."
      />
      <VideosSection />
    </>
  );
};

export default HomePage;
