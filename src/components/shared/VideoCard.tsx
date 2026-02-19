import { Link } from "react-router-dom";

interface Video {
  id: {
    videoId?: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium?: {
        url: string;
      };
      high?: {
        url: string;
      };
    };
    channelTitle: string;
  };
}

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const videoId = video.id.videoId;
  const thumbnail = video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url || "";
  const title = video.snippet.title;
  const channel = video.snippet.channelTitle;

  return (
    <Link to={`/watch?v=${videoId}`} className="group cursor-pointer">
      <div className="overflow-hidden rounded-xl">
        <div className="relative aspect-video">
          <img
            src={thumbnail}
            alt={title}
            className="size-full object-cover transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="mt-3 flex gap-3">
          <div className="flex flex-1 flex-col">
            <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-foreground group-hover:text-primary">
              {title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">{channel}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
