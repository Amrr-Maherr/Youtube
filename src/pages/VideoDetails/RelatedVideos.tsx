import { useNavigate } from "react-router-dom";
import { formatViews, timeAgo, getThumbnailUrl, formatDuration } from "@/lib/video";
import type { Video } from "@/types/Video";

interface RelatedVideosProps {
  videos?: Video[];
}

export function RelatedVideos({ videos }: RelatedVideosProps) {
  const navigate = useNavigate();

  if (!videos || videos.length === 0) {
    return (
      <div className="w-full">
        <h3 className="mb-4 text-lg font-semibold">Related Videos</h3>
        <p className="text-muted-foreground text-sm">No related videos found</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h3 className="mb-4 text-lg font-semibold hidden lg:block">Related Videos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {videos.map((video: Video) => (
          <div
            key={video.id}
            className="flex cursor-pointer gap-2"
            onClick={() => navigate(`/watch?v=${video.id}`)}
          >
            <div className="relative aspect-video w-full sm:w-[168px] shrink-0 overflow-hidden rounded-lg">
              <img
                src={getThumbnailUrl(video.snippet.thumbnails)}
                alt={video.snippet.title}
                className="size-full object-cover"
              />
              {video.contentDetails?.duration && (
                <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 rounded bg-black/80 px-1 sm:px-1.5 py-0.5 text-xs font-medium text-white">
                  {formatDuration(video.contentDetails.duration)}
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col min-w-0">
              <h4 className="line-clamp-2 text-sm font-semibold">
                {video.snippet.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">
                {video.snippet.channelTitle}
              </p>
              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <span>{formatViews(video.statistics?.viewCount)}</span>
                <span>•</span>
                <span>{timeAgo(video.snippet.publishedAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
