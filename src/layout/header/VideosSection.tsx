import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";
import { FetchVideosByCategory } from "@/queries/FetchVideos";
import VideoCard from "@/components/shared/VideoCard";
import Loader from "@/components/shared/loader";

export default function VideosSection() {
  const categoryId = useSelector((state: RootState) => state.category.value);
  const { isPending, error, data } = FetchVideosByCategory(categoryId);

  if (isPending) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-muted-foreground">Failed to load videos</p>
      </div>
    );
  }

  return (
    <section className="w-full p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data?.map((video) => (
          <VideoCard key={video.id.videoId || video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
