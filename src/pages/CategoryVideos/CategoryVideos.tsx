import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FetchCategories, FetchVideosByCategory } from "@/queries/FetchCategories";
import VideoCard from "@/components/VideoCard";
import type { VideoCategory } from "@/types/Category";
import type { Video } from "@/types/Video";
import { Separator } from "@/components/ui/separator";

export default function CategoryVideos() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryId = searchParams.get("id") || "";
  const [category, setCategory] = useState<VideoCategory | null>(null);

  const { data: categories } = FetchCategories();
  const { data: videos, isLoading, error } = FetchVideosByCategory(categoryId);

  useEffect(() => {
    if (categories && categories.length > 0 && categoryId) {
      const foundCategory = categories.find((c: VideoCategory) => c.id === categoryId);
      if (foundCategory) {
        setCategory(foundCategory);
      }
    }
  }, [categories, categoryId]);

  if (!categoryId) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center gap-4 p-6">
        <div className="text-center">
          <h3 className="text-lg font-medium">No category selected</h3>
          <p className="text-muted-foreground text-sm">
            Please select a category from the sidebar
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-primary hover:underline text-sm"
        >
          Go Home
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <p className="text-muted-foreground">Loading videos...</p>
      </div>
    );
  }

  if (error || !videos) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center gap-4 p-6">
        <div className="text-center">
          <h3 className="text-lg font-medium">Failed to load videos</h3>
          <p className="text-muted-foreground text-sm">
            Please try again later
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-primary hover:underline text-sm"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            {category?.snippet.title || "Category Videos"}
          </h1>
          {category && (
            <p className="text-sm text-muted-foreground mt-2">
              {videos.length} videos in this category
            </p>
          )}
        </div>

        <Separator className="mb-6" />

        {/* Videos Grid */}
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video: Video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
            <div className="text-center">
              <h3 className="text-lg font-medium">No videos found</h3>
              <p className="text-muted-foreground text-sm">
                There are no videos in this category yet
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
