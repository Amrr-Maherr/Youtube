import { useNavigate } from "react-router-dom";
import { useVideoInteractions } from "@/hooks/useVideoInteractions";
import { ThumbsUp, ThumbsDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VideoCard from "@/components/VideoCard";
import type { VideoInteraction } from "@/store/VideoInteractionsSlice";
import { useState } from "react";

export default function Library() {
  const navigate = useNavigate();
  const { likedVideos, dislikedVideos } = useVideoInteractions();
  const [activeTab, setActiveTab] = useState<"liked" | "disliked">("liked");

  const interactionToVideo = (interaction: VideoInteraction) => ({
    kind: "youtube#video" as const,
    etag: "",
    id: interaction.videoId,
    snippet: {
      publishedAt: interaction.interactedAt || new Date().toISOString(),
      channelId: interaction.channelId,
      title: interaction.videoTitle,
      description: "",
      thumbnails: {
        default: {
          url: interaction.videoThumbnail || "",
          width: 120,
          height: 90,
        },
        medium: {
          url: interaction.videoThumbnail || "",
          width: 320,
          height: 180,
        },
        high: {
          url: interaction.videoThumbnail || "",
          width: 480,
          height: 360,
        },
      },
      channelTitle: interaction.channelName,
      categoryId: "",
      liveBroadcastContent: "none",
      localized: {
        title: interaction.videoTitle,
        description: "",
      },
    },
    contentDetails: {
      duration: "PT0S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "0",
      likeCount: "0",
      favoriteCount: "0",
      commentCount: "0",
    },
  });

  const likedVideosList = likedVideos.map(interactionToVideo);
  const dislikedVideosList = dislikedVideos.map(interactionToVideo);

  const hasAnyVideos = likedVideos.length > 0 || dislikedVideos.length > 0;

  if (!hasAnyVideos) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="flex size-20 items-center justify-center rounded-full bg-muted mx-auto mb-4">
            <ThumbsUp className="size-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground">No liked or disliked videos yet</h3>
          <p className="text-muted-foreground text-sm mt-2 mb-4">
            Videos you like or dislike will appear here
          </p>
          <Button onClick={() => navigate("/")}>
            Explore Videos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary">
              <ThumbsUp className="size-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Your Library
              </h1>
              <p className="text-sm text-muted-foreground">
                {likedVideos.length} liked • {dislikedVideos.length} disliked
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 border-b">
            <button
              onClick={() => setActiveTab("liked")}
              className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors ${
                activeTab === "liked"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ThumbsUp className="size-4" />
              Liked Videos ({likedVideos.length})
            </button>
            <button
              onClick={() => setActiveTab("disliked")}
              className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors ${
                activeTab === "disliked"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ThumbsDown className="size-4" />
              Disliked Videos ({dislikedVideos.length})
            </button>
          </div>
        </div>

        {/* Liked Videos Tab */}
        {activeTab === "liked" && (
          <div>
            {likedVideosList.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {likedVideosList.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <ThumbsUp className="size-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground">No liked videos yet</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Videos you like will appear here
                </p>
              </div>
            )}
          </div>
        )}

        {/* Disliked Videos Tab */}
        {activeTab === "disliked" && (
          <div>
            {dislikedVideosList.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {dislikedVideosList.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <ThumbsDown className="size-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground">No disliked videos yet</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Videos you dislike will appear here
                </p>
              </div>
            )}
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-8 p-4 rounded-lg bg-muted/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="size-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Total Interactions</p>
                <p className="text-xs text-muted-foreground">
                  {likedVideos.length + dislikedVideos.length} video{likedVideos.length + dislikedVideos.length !== 1 ? 's' : ''} interacted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
