import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FetchVideoDetails, FetchRelatedVideos, FetchVideoComments } from "@/queries/VideoDetails";
import { FetchChannelDetails } from "@/queries/Channel";
import { formatDuration, formatViews, timeAgo } from "@/lib/video";
import { VideoActions } from "./VideoActions";
import { VideoDescription } from "./VideoDescription";
import { VideoComments } from "./VideoComments";
import { RelatedVideos } from "./RelatedVideos";
import { useVideoActions } from "./useVideoActions";

export default function VideoDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const videoId = searchParams.get("v") || "";

  const { data: video, isLoading: isLoadingVideo, error: videoError } = FetchVideoDetails(videoId);
  const { data: relatedVideos } = FetchRelatedVideos(videoId);
  const { data: commentsData } = FetchVideoComments(videoId);
  const { data: channel } = FetchChannelDetails(video?.snippet.channelId || "");

  const {
    isSubscribed,
    isLiked,
    isDisliked,
    showFullDescription,
    handleSubscribe,
    handleLike,
    handleDislike,
    handleShare,
    toggleDescription,
  } = useVideoActions();

  const handleChannelClick = () => {
    if (video?.snippet.channelId) {
      navigate(`/channel?channelId=${video.snippet.channelId}`);
    }
  };

  if (isLoadingVideo) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <p className="text-muted-foreground">Loading video...</p>
      </div>
    );
  }

  if (videoError || !video) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center gap-4">
        <div className="text-center">
          <h3 className="text-lg font-medium">Video not found</h3>
          <p className="text-muted-foreground text-sm">
            The video you're looking for doesn't exist or has been removed
          </p>
        </div>
        <Button onClick={() => navigate("/")}>Go Home</Button>
      </div>
    );
  }

  const duration = formatDuration(video.contentDetails?.duration);
  const views = formatViews(video.statistics?.viewCount);
  const publishedTime = timeAgo(video.snippet.publishedAt);
  const likeCount = parseInt(video.statistics?.likeCount || "0").toLocaleString();
  const commentCount = parseInt(video.statistics?.commentCount || "0").toLocaleString();
  const subscriberCount = channel?.statistics?.subscriberCount
    ? `${parseInt(channel.statistics.subscriberCount).toLocaleString()} subscribers`
    : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto flex w-full max-w-[1700px] gap-6 p-6">
        <div className="flex-1">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Video player"
              className="size-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h1 className="mt-4 text-xl font-semibold text-foreground">
            {video.snippet.title}
          </h1>

          <VideoActions
            channelName={video.snippet.channelTitle}
            channelAvatarUrl={channel?.snippet.thumbnails.medium?.url || channel?.snippet.thumbnails.default?.url || ""}
            subscriberCount={subscriberCount}
            likeCount={likeCount}
            isLiked={isLiked}
            isDisliked={isDisliked}
            isSubscribed={isSubscribed}
            onLike={handleLike}
            onDislike={handleDislike}
            onSubscribe={handleSubscribe}
            onShare={handleShare}
            onChannelClick={handleChannelClick}
          />

          <VideoDescription
            views={views}
            publishedTime={publishedTime}
            duration={duration}
            description={video.snippet.description}
            showFull={showFullDescription}
            onToggle={toggleDescription}
          />

          <VideoComments
            commentCount={commentCount}
            comments={commentsData}
          />
        </div>

        <RelatedVideos videos={relatedVideos} />
      </div>
    </div>
  );
}
