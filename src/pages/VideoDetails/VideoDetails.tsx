import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  ThumbsUp,
  ThumbsDown,
  Share,
  Download,
  MoreVertical,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FetchVideoDetails, FetchRelatedVideos, FetchVideoComments } from "@/queries/VideoDetails";
import { formatDuration, formatViews, timeAgo, getThumbnailUrl } from "@/lib/video";
import type { Video } from "@/types/Video";
import type { CommentThread } from "@/types/Comment";

export default function VideoDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [commentText, setCommentText] = useState("");

  const videoId = searchParams.get("v") || "";
  const { data: video, isLoading: isLoadingVideo, error: videoError } = FetchVideoDetails(videoId);
  const { data: relatedVideos } = FetchRelatedVideos(videoId);
  const { data: commentsData } = FetchVideoComments(videoId);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: video?.snippet.title || "",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
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

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto flex w-full max-w-[1700px] gap-6 p-6">
        {/* Main Content */}
        <div className="flex-1">
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
          <h1 className="mt-4 text-xl font-semibold text-foreground">
            {video.snippet.title}
          </h1>

          {/* Video Actions Bar */}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Channel Info */}
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                {video.snippet.channelTitle.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {video.snippet.channelTitle}
                </p>
                <p className="text-xs text-muted-foreground">1.2M subscribers</p>
              </div>
              <Button
                variant={isSubscribed ? "outline" : "default"}
                size="sm"
                className="ml-4 rounded-full"
                onClick={handleSubscribe}
              >
                {isSubscribed ? (
                  <>
                    <Bell className="mr-2 size-4" />
                    Subscribed
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-full bg-secondary">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`rounded-l-full border-r border-secondary-foreground/10 ${isLiked ? "text-primary" : ""}`}
                  onClick={handleLike}
                >
                  <ThumbsUp className="mr-2 size-4" />
                  {likeCount}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`rounded-r-full ${isDisliked ? "text-primary" : ""}`}
                  onClick={handleDislike}
                >
                  <ThumbsDown className="size-4" />
                </Button>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full"
                onClick={handleShare}
              >
                <Share className="mr-2 size-4" />
                Share
              </Button>
              <Button variant="secondary" size="sm" className="rounded-full">
                <Download className="mr-2 size-4" />
                Download
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <MoreVertical className="size-4" />
              </Button>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Video Description */}
          <div className="rounded-xl bg-secondary p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium">
              <span>{views}</span>
              <span>•</span>
              <span>{publishedTime}</span>
              {duration && (
                <>
                  <span>•</span>
                  <span>{duration}</span>
                </>
              )}
            </div>
            <div
              className={`text-sm text-foreground ${showFullDescription ? "" : "line-clamp-2"}`}
            >
              <pre className="whitespace-pre-wrap font-sans">
                {video.snippet.description}
              </pre>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 h-auto p-0 text-sm font-medium"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Show less" : "...more"}
            </Button>
          </div>

          {/* Comments Section */}
          <div className="mt-6">
            <div className="mb-4 flex items-center gap-2">
              <h2 className="text-lg font-semibold">
                {commentCount} Comments
              </h2>
            </div>

            {/* Add Comment */}
            <div className="mb-6 flex gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                U
              </div>
              <div className="flex-1">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full resize-none rounded-lg border border-input bg-background p-3 text-sm outline-none focus:border-ring min-h-[100px]"
                />
                <div className="mt-2 flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCommentText("")}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    disabled={!commentText.trim()}
                  >
                    Comment
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments List */}
            {commentsData && commentsData.length > 0 ? (
              <div className="space-y-4">
                {commentsData.map((commentThread: CommentThread) => {
                  const comment = commentThread.snippet.topLevelComment;
                  return (
                    <div key={comment.id} className="flex gap-3">
                      <img
                        src={comment.snippet.authorProfileImageUrl}
                        alt={comment.snippet.authorDisplayName}
                        className="size-10 shrink-0 rounded-full"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            {comment.snippet.authorDisplayName}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {timeAgo(comment.snippet.publishedAt)}
                          </span>
                        </div>
                        <p
                          className="mt-1 text-sm text-foreground"
                          dangerouslySetInnerHTML={{ __html: comment.snippet.textDisplay }}
                        />
                        <div className="mt-2 flex items-center gap-4">
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                            <ThumbsUp className="size-3" />
                            {comment.snippet.likeCount}
                          </button>
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                            <ThumbsDown className="size-3" />
                          </button>
                          <button className="text-xs font-medium hover:text-foreground">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No comments yet. Be the first to comment!</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Related Videos */}
        <div className="hidden w-[350px] shrink-0 lg:block">
          <h3 className="mb-4 text-lg font-semibold">Related Videos</h3>
          {relatedVideos && relatedVideos.length > 0 ? (
            <div className="flex flex-col gap-3">
              {relatedVideos.map((relatedVideo: Video) => (
                <div
                  key={relatedVideo.id}
                  className="flex cursor-pointer gap-2"
                  onClick={() => navigate(`/watch?v=${relatedVideo.id}`)}
                >
                  <div className="relative aspect-video w-[168px] shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={getThumbnailUrl(relatedVideo.snippet.thumbnails)}
                      alt={relatedVideo.snippet.title}
                      className="size-full object-cover"
                    />
                    {relatedVideo.contentDetails?.duration && (
                      <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                        {formatDuration(relatedVideo.contentDetails.duration)}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h4 className="line-clamp-2 text-sm font-semibold">
                      {relatedVideo.snippet.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {relatedVideo.snippet.channelTitle}
                    </p>
                    <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <span>{formatViews(relatedVideo.statistics?.viewCount)}</span>
                      <span>•</span>
                      <span>{timeAgo(relatedVideo.snippet.publishedAt)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">No related videos found</p>
          )}
        </div>
      </div>
    </div>
  );
}
