import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import type { Video } from "@/types/Video";

// Mock data for demo - replace with actual API call
const mockVideo: Video = {
  kind: "youtube#video",
  etag: "test",
  id: "test123",
  snippet: {
    publishedAt: "2024-01-15T10:00:00Z",
    channelId: "UC123",
    title: "Amazing Video Title - You Won't Believe This!",
    description: `This is the video description. It can contain multiple paragraphs.

Links and more information:
- Website: https://example.com
- Social Media: @channel

Don't forget to like and subscribe!`,
    thumbnails: {
      default: { url: "", width: 120, height: 90 },
      medium: { url: "", width: 320, height: 180 },
      high: { url: "", width: 480, height: 360 },
    },
    channelTitle: "Channel Name",
    categoryId: "22",
    liveBroadcastContent: "none",
    localized: {
      title: "Amazing Video Title",
      description: "Description",
    },
  },
  contentDetails: {
    duration: "PT10M30S",
    dimension: "2d",
    definition: "hd",
    caption: "false",
    licensedContent: true,
    contentRating: {},
    projection: "rectangular",
  },
  statistics: {
    viewCount: "1234567",
    likeCount: "50000",
    favoriteCount: "0",
    commentCount: "1234",
  },
};

const mockRelatedVideos: Video[] = Array(10).fill(mockVideo);

function formatViews(views?: string): string {
  if (!views) return "0 views";
  const viewCount = parseInt(views);
  if (viewCount >= 1000000) {
    return `${(viewCount / 1000000).toFixed(1)}M views`;
  }
  if (viewCount >= 1000) {
    return `${(viewCount / 1000).toFixed(1)}K views`;
  }
  return `${viewCount} views`;
}

function timeAgo(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  if (seconds < 2592000) return `${Math.floor(seconds / 86400)} days ago`;
  if (seconds < 31536000) return `${Math.floor(seconds / 2592000)} months ago`;
  return `${Math.floor(seconds / 31536000)} years ago`;
}

export default function VideoDetails() {
  const { videoId } = useParams<{ videoId: string }>();
  const navigate = useNavigate();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [commentText, setCommentText] = useState("");

  const video = mockVideo;
  const relatedVideos = mockRelatedVideos;

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
        title: video.snippet.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

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
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
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
                  {parseInt(video.statistics?.likeCount || "0").toLocaleString()}
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
              <span>{formatViews(video.statistics?.viewCount)}</span>
              <span>•</span>
              <span>{timeAgo(video.snippet.publishedAt)}</span>
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
                {video.statistics?.commentCount || "0"} Comments
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

            {/* Sample Comments */}
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted font-semibold">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">User {i}</span>
                      <span className="text-xs text-muted-foreground">
                        {i} day{i > 1 ? "s" : ""} ago
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-foreground">
                      Great video! Really enjoyed watching this. Keep up the good
                      work! 👍
                    </p>
                    <div className="mt-2 flex items-center gap-4">
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                        <ThumbsUp className="size-3" />
                        {i * 100}
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
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Related Videos */}
        <div className="hidden w-[350px] shrink-0 lg:block">
          <h3 className="mb-4 text-lg font-semibold">Related Videos</h3>
          <div className="flex flex-col gap-3">
            {relatedVideos.map((video, index) => (
              <div
                key={index}
                className="flex cursor-pointer gap-2"
                onClick={() => navigate(`/watch?v=${video.id}`)}
              >
                <div className="relative aspect-video w-[168px] shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={
                      video.snippet.thumbnails.medium?.url ||
                      video.snippet.thumbnails.default?.url
                    }
                    alt={video.snippet.title}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
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
      </div>
    </div>
  );
}
