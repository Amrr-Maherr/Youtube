import { useState, useMemo, useCallback, memo } from "react";
import { useSearchParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { FetchChannelDetails, FetchChannelVideos } from "@/queries/Channel";
import {
  ChannelBanner,
  ChannelAvatar,
  ChannelTabButton,
} from "./ChannelComponents";
import { ChannelHeader } from "./ChannelHeader";
import { ChannelAbout } from "./ChannelAbout";
import { ChannelTabs } from "./ChannelTabs";
import type { ChannelTab } from "./ChannelTabs";
import { NotFound } from "@/components/shared/NotFound";
import Loader from "@/components/shared/loader";
import PageHeader from "@/components/PageHeader";
import {
  formatSubscriberCount,
  formatFullSubscriberCount,
  formatFullViewCount,
  formatVideoCount,
  extractEmail,
  formatDateLong,
} from "@/lib/video";

function ChannelDetails() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<ChannelTab>("videos");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const channelId = searchParams.get("channelId") || "";

  const {
    data: channel,
    isLoading: isLoadingChannel,
    error: channelError,
  } = FetchChannelDetails(channelId);
  const { data: videos, isLoading: isLoadingVideos } =
    FetchChannelVideos(channelId);

  const handleSubscribe = useCallback(() => {
    setIsSubscribed(prev => !prev);
  }, []);

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: channel?.snippet.title || "",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  }, [channel?.snippet.title]);

  const handleToggleDescription = useCallback(() => {
    setShowFullDescription(prev => !prev);
  }, []);

  const handleTabChange = useCallback((tab: ChannelTab) => {
    setActiveTab(tab);
  }, []);

  const {
    subscriberCount,
    fullSubscriberCount,
    videoCount,
    totalViews,
    email,
    bannerUrl,
    tabs,
  } = useMemo(() => {
    return {
      subscriberCount: formatSubscriberCount(channel?.statistics?.subscriberCount),
      fullSubscriberCount: formatFullSubscriberCount(channel?.statistics?.subscriberCount),
      videoCount: formatVideoCount(channel?.statistics?.videoCount),
      totalViews: formatFullViewCount(channel?.statistics?.viewCount),
      email: extractEmail(channel?.snippet.description || ""),
      bannerUrl: channel?.brandingSettings?.image?.bannerExternalUrl || null,
      tabs: [
        { id: "videos" as ChannelTab, label: "Videos" },
        { id: "shorts" as ChannelTab, label: "Shorts" },
        { id: "playlists" as ChannelTab, label: "Playlists" },
        { id: "community" as ChannelTab, label: "Community" },
        { id: "about" as ChannelTab, label: "About" },
      ] as { id: ChannelTab; label: string }[],
    };
  }, [channel]);

  if (isLoadingChannel) {
    return <Loader />;
  }

  if (channelError || !channel) {
    return (
      <NotFound
        message="Channel not found"
        description="The channel you're looking for doesn't exist or has been removed"
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title={`${channel.snippet.title} - YouTube Channel`}
        description={channel.snippet.description || `Watch videos from ${channel.snippet.title}`}
      />
      <ChannelBanner
        bannerUrl={bannerUrl}
        channelName={channel.snippet.title}
        onError={() => {}}
      />

      <div className="mx-auto w-full px-4 sm:px-6 py-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <ChannelAvatar
            avatarUrl={
              channel.snippet.thumbnails.high?.url ||
              channel.snippet.thumbnails.medium?.url
            }
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
            onToggleDescription={handleToggleDescription}
          />
        </div>

        <Separator className="my-6" />

        <div className="flex gap-1 overflow-x-auto border-b scrollbar-thin">
          {tabs.map((tab) => (
            <ChannelTabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => handleTabChange(tab.id)}
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

export default memo(ChannelDetails);
