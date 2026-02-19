import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FetchChannelDetails, FetchChannelVideos } from "@/queries/Channel";
import { ChannelBanner, ChannelAvatar, ChannelTabButton } from "./ChannelComponents";
import { ChannelHeader } from "./ChannelHeader";
import { ChannelAbout } from "./ChannelAbout";
import { ChannelTabs } from "./ChannelTabs";
import type { ChannelTab } from "./ChannelTabs";
import {
  formatSubscriberCount,
  formatFullSubscriberCount,
  formatFullViewCount,
  formatVideoCount,
  extractEmail,
  formatDateLong,
} from "@/lib/video";

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

  const subscriberCount = formatSubscriberCount(channel?.statistics?.subscriberCount);
  const fullSubscriberCount = formatFullSubscriberCount(channel?.statistics?.subscriberCount);
  const videoCount = formatVideoCount(channel?.statistics?.videoCount);
  const totalViews = formatFullViewCount(channel?.statistics?.viewCount);
  const email = extractEmail(channel?.snippet.description || "");
  const bannerUrl = channel?.brandingSettings?.image?.bannerExternalUrl || null;

  const tabs: { id: ChannelTab; label: string }[] = [
    { id: "videos", label: "Videos" },
    { id: "shorts", label: "Shorts" },
    { id: "playlists", label: "Playlists" },
    { id: "community", label: "Community" },
    { id: "about", label: "About" },
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <ChannelBanner
        bannerUrl={bannerUrl}
        channelName={channel.snippet.title}
        onError={() => {}}
      />

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <ChannelAvatar
            avatarUrl={channel.snippet.thumbnails.high?.url || channel.snippet.thumbnails.medium?.url}
            channelName={channel.snippet.title}
          />

          <ChannelHeader
            channelName={channel.snippet.title}
            customUrl={channel.snippet.customUrl}
            subscriberCount={subscriberCount}
            fullSubscriberCount={fullSubscriberCount}
            videoCount={videoCount}
            totalViews={totalViews}
            isSubscribed={isSubscribed}
            showFullDescription={showFullDescription}
            description={channel.snippet.description}
            onSubscribe={handleSubscribe}
            onShare={handleShare}
            onToggleDescription={() => setShowFullDescription(!showFullDescription)}
          />
        </div>

        <Separator className="my-6" />

        <div className="flex gap-1 overflow-x-auto border-b">
          {tabs.map((tab) => (
            <ChannelTabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        {activeTab === "about" ? (
          <ChannelAbout
            description={channel.snippet.description}
            email={email}
            country={channel.snippet.country}
            joinedDate={formatDateLong(channel.snippet.publishedAt)}
            totalViews={totalViews}
            fullSubscriberCount={fullSubscriberCount}
            videoCount={videoCount}
            keywords={channel.brandingSettings?.channel?.keywords}
          />
        ) : (
          <ChannelTabs
            activeTab={activeTab}
            videos={videos}
            isLoadingVideos={isLoadingVideos}
          />
        )}
      </div>
    </div>
  );
}
