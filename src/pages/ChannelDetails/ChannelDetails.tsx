import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Bell,
  Share,
  MoreVertical,
  PlaySquare,
  Grid3X3,
  List,
  Mail,
  Globe,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FetchChannelDetails, FetchChannelVideos } from "@/queries/Channel";
import VideoCard from "@/components/VideoCard";
import type { Video } from "@/types/Video";

type ChannelTab = "videos" | "shorts" | "playlists" | "community" | "about";

export default function ChannelDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ChannelTab>("videos");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
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

  const formatFullSubscriberCount = (count?: string): string => {
    if (!count) return "0";
    return parseInt(count).toLocaleString();
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
  const fullSubscriberCount = formatFullSubscriberCount(channel.statistics?.subscriberCount);
  const videoCount = parseInt(channel.statistics?.videoCount || "0").toLocaleString();
  const totalViews = parseInt(channel.statistics?.viewCount || "0").toLocaleString();

  const tabs: { id: ChannelTab; label: string }[] = [
    { id: "videos", label: "Videos" },
    { id: "shorts", label: "Shorts" },
    { id: "playlists", label: "Playlists" },
    { id: "community", label: "Community" },
    { id: "about", label: "About" },
  ];

  // Extract email from description
  const extractEmail = (description: string): string | null => {
    const emailMatch = description.match(/[\w.-]+@[\w.-]+\.\w+/);
    return emailMatch ? emailMatch[0] : null;
  };

  const email = extractEmail(channel.snippet.description);
console.log(
  channel.brandingSettings?.image?.bannerExternalUrl,
  "channel.brandingSettings?.image?.bannerExternalUrl",
);

  return (
    <div className="min-h-screen bg-background">
      {/* Channel Banner */}
      <div className="relative h-32 w-full bg-muted sm:h-48 md:h-56 lg:h-64">
        {channel.brandingSettings?.image?.bannerExternalUrl ? (
          <img
            src={channel.brandingSettings.image.bannerExternalUrl}
            alt="Channel banner"
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-r from-primary/20 to-primary/40">
            <h1 className="text-2xl sm:text-4xl font-bold text-primary">
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
              className="size-24 rounded-full sm:size-32 border-4 border-background"
            />
          </div>

          {/* Channel Details */}
          <div className="flex-1 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  {channel.snippet.title}
                  <svg className="size-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </h1>
                {channel.snippet.customUrl && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {channel.snippet.customUrl}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2">
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

            {/* Stats */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="font-medium text-foreground">{fullSubscriberCount}</span>
              <span className="text-muted-foreground">{subscriberCount}</span>
              <span className="text-muted-foreground">{videoCount} videos</span>
              <span className="text-muted-foreground">{totalViews} views</span>
            </div>

            {/* Description Preview */}
            <div
              className={`mt-4 text-sm text-foreground ${showFullDescription ? "" : "line-clamp-2"}`}
            >
              <pre className="whitespace-pre-wrap font-sans">
                {channel.snippet.description}
              </pre>
            </div>
            {channel.snippet.description.length > 200 && (
              <Button
                variant="link"
                size="sm"
                className="mt-2 h-auto p-0 text-sm font-medium"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? "Show less" : "...more"}
              </Button>
            )}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
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
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Left Column - Channel Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description Card */}
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold">Description</h3>
                  <pre className="whitespace-pre-wrap text-sm text-foreground font-sans">
                    {channel.snippet.description || "No description available."}
                  </pre>
                </div>

                {/* Channel Details Card */}
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold">Channel details</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="size-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">
                          {email || "Not available"}
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-3">
                      <Globe className="size-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Country</p>
                        <p className="text-muted-foreground">
                          {channel.snippet.country || "Not available"}
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-3">
                      <Calendar className="size-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Joined</p>
                        <p className="text-muted-foreground">
                          {new Date(channel.snippet.publishedAt).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="space-y-6">
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold">Stats</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total views</p>
                      <p className="text-2xl font-semibold">{totalViews}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm text-muted-foreground">Subscribers</p>
                      <p className="text-2xl font-semibold">{fullSubscriberCount}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm text-muted-foreground">Total videos</p>
                      <p className="text-2xl font-semibold">{videoCount}</p>
                    </div>
                  </div>
                </div>

                {/* Channel Links */}
                {channel.brandingSettings?.channel?.keywords && (
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="mb-4 text-lg font-semibold">Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {channel.brandingSettings.channel.keywords
                        .split('"')
                        .filter((_, i) => i % 2 === 1)
                        .slice(0, 10)
                        .map((keyword, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-secondary px-3 py-1 text-xs"
                          >
                            {keyword}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
