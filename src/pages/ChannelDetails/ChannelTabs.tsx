import { memo, useMemo } from "react";
import { PlaySquare, Grid3X3, List } from "lucide-react";
import VideoCard from "@/components/VideoCard";
import type { Video } from "@/types/Video";
import Loader from "@/components/shared/loader";

export type ChannelTab = "videos" | "shorts" | "playlists" | "community" | "about";

interface ChannelTabsProps {
  activeTab: ChannelTab;
  videos?: Video[];
  isLoadingVideos?: boolean;
}

export const ChannelTabs = memo(function ChannelTabs({
  activeTab,
  videos,
  isLoadingVideos,
}: ChannelTabsProps) {
  const emptyState = useMemo(() => {
    const states: Record<ChannelTab, { icon: React.ElementType; title: string; description: string }> = {
      videos: {
        icon: PlaySquare,
        title: "No videos yet",
        description: "This channel hasn't uploaded any videos",
      },
      shorts: {
        icon: PlaySquare,
        title: "Coming soon",
        description: "Shorts section is under development",
      },
      playlists: {
        icon: Grid3X3,
        title: "Coming soon",
        description: "Playlists section is under development",
      },
      community: {
        icon: List,
        title: "Coming soon",
        description: "Community section is under development",
      },
      about: {
        icon: PlaySquare,
        title: "Coming soon",
        description: "About section placeholder",
      },
    };
    return states;
  }, []);

  const renderVideos = useMemo(() => {
    if (isLoadingVideos) return <Loader />;
    
    if (videos && videos.length > 0) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video: Video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      );
    }
    
    return null;
  }, [isLoadingVideos, videos]);

  const renderTabContent = useMemo(() => {
    if (activeTab === "videos") {
      return renderVideos || (
        <EmptyState {...emptyState.videos} />
      );
    }
    
    if (activeTab === "shorts") {
      return <EmptyState {...emptyState.shorts} />;
    }
    
    if (activeTab === "playlists") {
      return <EmptyState {...emptyState.playlists} />;
    }
    
    if (activeTab === "community") {
      return <EmptyState {...emptyState.community} />;
    }
    
    return null;
  }, [activeTab, renderVideos, emptyState]);

  return (
    <div className="mt-6">
      {renderTabContent}
    </div>
  );
});

function EmptyState({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
      <div className="flex size-20 items-center justify-center rounded-full bg-muted">
        <Icon className="size-10 text-muted-foreground" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}
