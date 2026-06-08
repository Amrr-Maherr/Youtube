import { lazy } from "react";

const VideosSection = lazy(() => import("../components/VideosSection"));
const HomePage = () => {
  return (
    <>
      <VideosSection />
    </>
  );
};

export default HomePage;
