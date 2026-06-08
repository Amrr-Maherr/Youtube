import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import type { Video } from "@/types/Video";
import { formatDuration, getThumbnailUrl } from "@/lib/video";
import { getVideoUrl } from "@/lib/slug";
import { VideoThumbnail } from "./VideoThumbnail";
import { ChannelAvatar } from "./ChannelAvatar";
import { VideoInfo } from "./VideoInfo";
import { MoreOptionsButton } from "./MoreOptionsButton";

interface VideoCardProps {
  video: Video;
}

function VideoCard({ video }: VideoCardProps) {
  const videoId = video.id;
  const thumbnail = getThumbnailUrl(video.snippet.thumbnails);
  const title = video.snippet.title;
  const channel = video.snippet.channelTitle;
  const channelId = video.snippet.channelId;
  const publishedAt = video.snippet.publishedAt;
  const duration = formatDuration(video.contentDetails?.duration);
  const views = video.statistics?.viewCount;
  const videoUrl = useMemo(() => getVideoUrl(videoId, title), [videoId, title]);

  return (
    <Link to={videoUrl} className="group cursor-pointer">
      <div className="flex flex-col gap-3">
        <VideoThumbnail
          thumbnailUrl={thumbnail}
          duration={duration}
          title={title}
        />

        <div className="flex gap-3">
          <ChannelAvatar channelName={channel} />
          <VideoInfo
            title={title}
            channel={channel}
            channelId={channelId}
            views={views}
            publishedAt={publishedAt}
          />
          <MoreOptionsButton />
        </div>
      </div>
    </Link>
  );
}
export default memo(VideoCard)