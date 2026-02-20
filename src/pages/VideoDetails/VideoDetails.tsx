import { memo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  FetchVideoDetails,
  FetchRelatedVideos,
  FetchVideoComments,
} from "@/queries/VideoDetails";
import { FetchChannelDetails } from "@/queries/Channel";
import {
  formatDuration,
  formatViews,
  timeAgo,
  formatFullSubscriberCount,
} from "@/lib/video";
import { VideoActions } from "./VideoActions";
import { VideoDescription } from "./VideoDescription";
import { VideoComments } from "./VideoComments";
import { RelatedVideos } from "./RelatedVideos";
import Loader from "@/components/shared/loader";
import { NotFound } from "@/components/shared/NotFound";
import { useVideoActions } from "@/lib/useVideoActions";
import PageHeader from "@/components/PageHeader";

function VideoDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const videoId = searchParams.get("v") || "";

  const {
    data: video,
    isLoading: isLoadingVideo,
    error: videoError,
  } = FetchVideoDetails(videoId);
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
    return <Loader />;
  }

  if (videoError || !video) {
    return <NotFound />;
  }

  const duration = formatDuration(video.contentDetails?.duration);
  const views = formatViews(video.statistics?.viewCount);
  const publishedTime = timeAgo(video.snippet.publishedAt);
  const likeCount = parseInt(
    video.statistics?.likeCount || "0",
  ).toLocaleString();
  const commentCount = parseInt(
    video.statistics?.commentCount || "0",
  ).toLocaleString();
  const subscriberCount = channel?.statistics?.subscriberCount
    ? `${formatFullSubscriberCount(channel.statistics.subscriberCount)} subscribers`
    : "Subscribe";
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PageHeader
        title={`${video.snippet.title} - YouTube`}
        description={video.snippet.description}
      />
      <div className="mx-auto w-full max-w-[1700px] p-4 sm:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Video Player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Video player"
                className="size-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Title */}
            <h1 className="mt-4 text-lg sm:text-xl font-semibold text-foreground line-clamp-2">
              {video.snippet.title}
            </h1>

            {/* Video Actions */}
            <VideoActions
              channelName={video.snippet.channelTitle}
              channelAvatarUrl={
                channel?.snippet.thumbnails.medium?.url ||
                channel?.snippet.thumbnails.default?.url ||
                ""
              }
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

            {/* Video Description */}
            <VideoDescription
              views={views}
              publishedTime={publishedTime}
              duration={duration}
              description={video.snippet.description}
              showFull={showFullDescription}
              onToggle={toggleDescription}
            />

            {/* Comments */}
            <VideoComments
              commentCount={commentCount}
              comments={commentsData}
            />
          </div>

          {/* Related Videos Sidebar */}
          <div className="w-full hidden md:block lg:w-[350px] lg:shrink-0">
            <RelatedVideos videos={relatedVideos} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(VideoDetails);