import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Bell,
  Share,
  MoreVertical,
  PlaySquare,
  Grid3X3,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FetchChannelDetails, FetchChannelVideos } from "@/queries/Channel";
import { formatViews, timeAgo } from "@/lib/video";
import VideoCard from "@/components/VideoCard";
import type { Video } from "@/types/Video";

type ChannelTab = "videos" | "shorts" | "playlists" | "community" | "about";

export default function ChannelDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ChannelTab>("videos");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const channelId = searchParams.get("channelId") || "";

  const { data: channel, isLoading: isLoadingChannel, error: channelError } = FetchChannelDetails(channelId);
  const { data: videos, isLoading: isLoadingVideos } = FetchChannelVideos(channelId);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: channel?.snippet.title || "",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const formatSubscriberCount = (count?: string): string => {
    if (!count) return "0 subscribers";
    const num = parseInt(count);
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M subscribers`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K subscribers`;
    }
    return `${num} subscribers`;
  };

  if (isLoadingChannel) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <p className="text-muted-foreground">Loading channel...</p>
      </div>
    );
  }

  if (channelError || !channel) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center gap-4">
        <div className="text-center">
          <h3 className="text-lg font-medium">Channel not found</h3>
          <p className="text-muted-foreground text-sm">
            The channel you're looking for doesn't exist or has been removed
          </p>
        </div>
        <Button onClick={() => navigate("/")}>Go Home</Button>
      </div>
    );
  }

  const subscriberCount = formatSubscriberCount(channel.statistics?.subscriberCount);
  const videoCount = parseInt(channel.statistics?.videoCount || "0").toLocaleString();
  const viewCount = formatViews(channel.statistics?.viewCount);

  const tabs: { id: ChannelTab; label: string }[] = [
    { id: "videos", label: "Videos" },
    { id: "shorts", label: "Shorts" },
    { id: "playlists", label: "Playlists" },
    { id: "community", label: "Community" },
    { id: "about", label: "About" },
  ];
console.log();

  return (
    <div className="min-h-screen bg-background">
      {/* Channel Banner */}
      <div className="relative h-48 w-full bg-muted sm:h-64">
        {channel.brandingSettings?.image?.bannerExternalUrl ? (
          <img
            src={channel.brandingSettings.image.bannerExternalUrl}
            alt="Channel banner"
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-r from-primary/20 to-primary/40">
            <h1 className="text-4xl font-bold text-primary">
              {channel.snippet.title}
            </h1>
          </div>
        )}
      </div>

      {/* Channel Info */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* Channel Avatar */}
          <div className="flex shrink-0 items-center justify-center">
            <img
              src={channel.snippet.thumbnails.high?.url || channel.snippet.thumbnails.medium?.url}
              alt={channel.snippet.title}
              className="size-24 rounded-full sm:size-32"
            />
          </div>

          {/* Channel Details */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">
              {channel.snippet.title}
            </h1>
            {channel.snippet.customUrl && (
              <p className="text-sm text-muted-foreground">
                @{channel.snippet.customUrl}
              </p>
            )}

            {/* Stats */}
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>{subscriberCount}</span>
              <span>•</span>
              <span>{videoCount} videos</span>
              <span>•</span>
              <span>{viewCount}</span>
            </div>

            {/* Description Preview */}
            <p className="mt-4 line-clamp-2 text-sm text-foreground">
              {channel.snippet.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Button
                variant={isSubscribed ? "outline" : "default"}
                size="sm"
                className="rounded-full"
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
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full"
                onClick={handleShare}
              >
                <Share className="mr-2 size-4" />
                Share
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <MoreVertical className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full whitespace-nowrap ${
                activeTab === tab.id ? "font-medium" : ""
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "videos" && (
            <div>
              {isLoadingVideos ? (
                <div className="flex min-h-[400px] items-center justify-center">
                  <p className="text-muted-foreground">Loading videos...</p>
                </div>
              ) : videos && videos.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {videos.map((video: Video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
                  <div className="flex size-20 items-center justify-center rounded-full bg-muted">
                    <PlaySquare className="size-10 text-muted-foreground" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium">No videos yet</h3>
                    <p className="text-muted-foreground text-sm">
                      This channel hasn't uploaded any videos
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "shorts" && (
            <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
              <div className="flex size-20 items-center justify-center rounded-full bg-muted">
                <PlaySquare className="size-10 text-muted-foreground" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">Coming soon</h3>
                <p className="text-muted-foreground text-sm">
                  Shorts section is under development
                </p>
              </div>
            </div>
          )}

          {activeTab === "playlists" && (
            <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
              <div className="flex size-20 items-center justify-center rounded-full bg-muted">
                <Grid3X3 className="size-10 text-muted-foreground" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">Coming soon</h3>
                <p className="text-muted-foreground text-sm">
                  Playlists section is under development
                </p>
              </div>
            </div>
          )}

          {activeTab === "community" && (
            <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
              <div className="flex size-20 items-center justify-center rounded-full bg-muted">
                <List className="size-10 text-muted-foreground" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">Coming soon</h3>
                <p className="text-muted-foreground text-sm">
                  Community section is under development
                </p>
              </div>
            </div>
          )}

          {activeTab === "about" && (
            <div className="max-w-3xl space-y-6">
              <div className="rounded-xl bg-secondary p-6">
                <h3 className="mb-4 text-lg font-semibold">Description</h3>
                <p className="whitespace-pre-wrap text-sm text-foreground">
                  {channel.snippet.description || "No description available."}
                </p>
              </div>

              <div className="rounded-xl bg-secondary p-6">
                <h3 className="mb-4 text-lg font-semibold">Channel Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Channel Name</span>
                    <span className="text-foreground">{channel.snippet.title}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Custom URL</span>
                    <span className="text-foreground">
                      {channel.snippet.customUrl || "Not available"}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Joined Date</span>
                    <span className="text-foreground">
                      {timeAgo(channel.snippet.publishedAt)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Country</span>
                    <span className="text-foreground">
                      {channel.snippet.country || "Not available"}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Views</span>
                    <span className="text-foreground">{viewCount}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subscribers</span>
                    <span className="text-foreground">{subscriberCount}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
