import { ThumbsUp, ThumbsDown, Share, Download, MoreVertical, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoActionsProps {
  channelName: string;
  channelAvatarUrl: string;
  subscriberCount: string;
  likeCount: string;
  isLiked: boolean;
  isDisliked: boolean;
  isSubscribed: boolean;
  onLike: () => void;
  onDislike: () => void;
  onSubscribe: () => void;
  onShare: () => void;
  onChannelClick: () => void;
}

export function VideoActions({
  channelName,
  channelAvatarUrl,
  subscriberCount,
  likeCount,
  isLiked,
  isDisliked,
  isSubscribed,
  onLike,
  onDislike,
  onSubscribe,
  onShare,
  onChannelClick,
}: VideoActionsProps) {
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onChannelClick} className="shrink-0">
          <img
            src={channelAvatarUrl}
            alt={channelName}
            className="size-10 rounded-full"
          />
        </button>
        <div>
          <button
            onClick={onChannelClick}
            className="font-medium text-foreground hover:underline text-left"
          >
            {channelName}
          </button>
          <p className="text-xs text-muted-foreground">
            {subscriberCount || "Subscribe"}
          </p>
        </div>
        <Button
          variant={isSubscribed ? "outline" : "default"}
          size="sm"
          className="ml-4 rounded-full"
          onClick={onSubscribe}
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

      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-full bg-secondary">
          <Button
            variant="ghost"
            size="sm"
            className={`rounded-l-full border-r border-secondary-foreground/10 ${isLiked ? "text-primary" : ""}`}
            onClick={onLike}
          >
            <ThumbsUp className="mr-2 size-4" />
            {likeCount}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`rounded-r-full ${isDisliked ? "text-primary" : ""}`}
            onClick={onDislike}
          >
            <ThumbsDown className="size-4" />
          </Button>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full"
          onClick={onShare}
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
  );
}
