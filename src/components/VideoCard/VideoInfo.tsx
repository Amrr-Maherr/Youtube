import { cn } from "@/lib/utils";
import { formatViews, timeAgo } from "@/lib/video";

interface VideoInfoProps {
  title: string;
  channel: string;
  channelId?: string;
  views?: string;
  publishedAt?: string;
  className?: string;
}

export function VideoInfo({
  title,
  channel,
  channelId,
  views,
  publishedAt,
  className,
}: VideoInfoProps) {
  const formattedViews = formatViews(views);
  const time = timeAgo(publishedAt);

  return (
    <div className={cn("flex flex-1 flex-col gap-1", className)}>
      <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-foreground group-hover:text-primary">
        {title.slice(0, 50)}
        {title.length > 50 && "..."}
      </h3>

      <div className="flex flex-col text-xs text-muted-foreground">
        {channelId ? (
          <a
            href={`/channel?channelId=${channelId}`}
            className="hover:text-foreground transition-colors hover:underline"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/channel?channelId=${channelId}`;
            }}
          >
            {channel}
          </a>
        ) : (
          <span className="hover:text-foreground transition-colors">
            {channel}
          </span>
        )}
        <div className="flex items-center gap-1">
          <span>{formattedViews}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
