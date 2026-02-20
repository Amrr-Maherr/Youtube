import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, ThumbsUp, MessageSquare, Share2, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetShorts } from "@/api/Categories";
import type { Video } from "@/types/Video";
import { formatViews } from "@/lib/video";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/shared/loader";

interface ShortCardProps {
  short: Video;
  onClick: (videoId: string) => void;
}

function ShortCard({ short, onClick }: ShortCardProps) {
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

export default function Shorts() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const { data: shorts, isLoading, error } = useQuery({
    queryKey: ["shorts"],
    queryFn: () => GetShorts(30),
    staleTime: 1000 * 60 * 30,
  });

  const handleShortClick = (videoId: string) => {
    navigate(`/watch?v=${videoId}`);
  };

  const categories = [
    { id: "all", label: "All" },
    { id: "music", label: "Music" },
    { id: "gaming", label: "Gaming" },
    { id: "comedy", label: "Comedy" },
    { id: "sports", label: "Sports" },
  ];

  if (isLoading) {
    return <Loader />;
  }

  if (error || !shorts || shorts.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-medium">No shorts available</h3>
          <p className="text-muted-foreground text-sm mt-1">
            Please try again later
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-14 z-10 bg-background/95 backdrop-blur border-b px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎬</span>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">Shorts</h1>
              <p className="text-xs text-muted-foreground">
                {shorts.length} videos
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-thin">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className="rounded-full whitespace-nowrap shrink-0"
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6">
        {/* Shorts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {shorts.map((short: Video) => (
            <ShortCard
              key={short.id}
              short={short}
              onClick={handleShortClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
