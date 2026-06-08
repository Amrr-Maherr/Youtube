import { lazy, Suspense, memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";
import { FetchVideosByCategory } from "@/queries/FetchCategories";
import type { Video } from "@/types/Video";

const Loader = lazy(() => import("./shared/loader"));
const VideoCard = lazy(() => import("./VideoCard"));

const LoadingFallback = memo(() => (
  <div className="flex min-h-[400px] items-center justify-center">
    <Suspense fallback={null}>
      <Loader />
    </Suspense>
  </div>
));

LoadingFallback.displayName = "LoadingFallback";

const MemoizedVideoCard = memo(({ video }: { video: Video }) => (
  <Suspense
    fallback={
      <div className="animate-pulse rounded-lg bg-muted aspect-video" />
    }
  >
    <VideoCard video={video} />
  </Suspense>
));

MemoizedVideoCard.displayName = "MemoizedVideoCard";

const EmptyState = memo(() => (
  <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
    <div className="flex size-20 items-center justify-center rounded-full bg-muted">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-10 text-muted-foreground"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18" />
        <path d="M3 7.5h4" />
        <path d="M3 12h18" />
        <path d="M3 16.5h4" />
        <path d="M17.5 3L21 7.5 17.5 12" />
        <path d="M17.5 12L21 16.5 17.5 21" />
      </svg>
    </div>
    <div className="text-center">
      <h3 className="text-lg font-medium">No videos available</h3>
      <p className="text-muted-foreground text-sm">
        There are no videos in this category yet
      </p>
    </div>
  </div>
));

EmptyState.displayName = "EmptyState";

const ErrorState = memo(() => (
  <div className="flex min-h-[400px] items-center justify-center">
    <p className="text-muted-foreground">Failed to load videos</p>
  </div>
));

ErrorState.displayName = "ErrorState";

export default memo(function VideosSection() {
  const categoryId = useSelector((state: RootState) => state.category.value);
  const { isPending, error, data } = FetchVideosByCategory(categoryId);

  if (isPending) {
    return <LoadingFallback />;
  }

  if (error || !data) {
    return <ErrorState />;
  }

  if (data.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="w-full p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((video: Video) => (
          <MemoizedVideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
});
