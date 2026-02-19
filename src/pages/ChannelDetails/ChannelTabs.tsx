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

export function ChannelTabs({
  activeTab,
  videos,
  isLoadingVideos,
}: ChannelTabsProps) {
  return (
    <div className="mt-6">
      {activeTab === "videos" && (
        <div>
          {isLoadingVideos ? (
            <Loader />
          ) : videos && videos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
    </div>
  );
}
