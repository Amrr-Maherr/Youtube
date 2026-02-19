import { cn } from "@/lib/utils";

interface VideoThumbnailProps {
  thumbnailUrl: string;
  duration?: string;
  title: string;
  className?: string;
}

export function VideoThumbnail({
  thumbnailUrl,
  duration,
  title,
  className,
}: VideoThumbnailProps) {
  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-xl", className)}>
      <img
        src={thumbnailUrl}
        alt={title}
        className="size-full object-cover transition-transform duration-200 group-hover:scale-105"
        loading="lazy"
      />

      {duration && (
        <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
          {duration}
        </div>
      )}

      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
    </div>
  );
}
