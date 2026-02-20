import { Play, ThumbsUp, MessageSquare, Share2, MoreVertical } from "lucide-react";
import type { Video } from "@/types/Video";
import { formatViews } from "@/lib/video";
import { Error } from "@/components/shared/Error";

interface ShortCardProps {
  short?: Video | null;
  onClick: (videoId: string) => void;
}

export default function ShortCard({ short, onClick }: ShortCardProps) {
  if (!short) {
    return (
      <Error
        message="Video unavailable"
        description="This short is no longer available"
      />
    );
  }

  const { title, thumbnails, channelTitle } = short.snippet;
  const views = formatViews(short.statistics?.viewCount);

  return (
    <div
      className="cursor-pointer group"
      onClick={() => onClick(short.id)}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-muted">
        {/* Thumbnail */}
        <img
          src={thumbnails.medium?.url || thumbnails.default?.url}
          alt={title}
          className="size-full object-cover transition-transform duration-200 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play Icon on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="size-16 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm">
            <Play className="size-8 text-white fill-white" />
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white font-semibold text-sm line-clamp-2 mb-2">
            {title}
          </h3>
          <div className="flex items-center justify-between text-white/90 text-xs">
            <span className="truncate max-w-[120px]">{channelTitle}</span>
            <span>{views}</span>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="absolute right-2 bottom-20 flex flex-col items-center gap-3">
          <button className="flex flex-col items-center gap-1 text-white hover:text-white/80 transition-colors">
            <div className="size-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
              <ThumbsUp className="size-4" />
            </div>
            <span className="text-xs">{parseInt(short.statistics?.likeCount || "0").toLocaleString()}</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white hover:text-white/80 transition-colors">
            <div className="size-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
              <MessageSquare className="size-4" />
            </div>
            <span className="text-xs">{parseInt(short.statistics?.commentCount || "0").toLocaleString()}</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white hover:text-white/80 transition-colors">
            <div className="size-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
              <Share2 className="size-4" />
            </div>
            <span className="text-xs">Share</span>
          </button>
          <button className="text-white hover:text-white/80 transition-colors">
            <div className="size-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
              <MoreVertical className="size-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
