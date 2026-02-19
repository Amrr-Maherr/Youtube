import { Bell, Share, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChannelHeaderProps {
  channelName: string;
  customUrl?: string;
  subscriberCount: string;
  fullSubscriberCount: string;
  videoCount: string;
  totalViews: string;
  isSubscribed: boolean;
  showFullDescription: boolean;
  description: string;
  onSubscribe: () => void;
  onShare: () => void;
  onToggleDescription: () => void;
}

export function ChannelHeader({
  channelName,
  customUrl,
  subscriberCount,
  fullSubscriberCount,
  videoCount,
  totalViews,
  isSubscribed,
  showFullDescription,
  description,
  onSubscribe,
  onShare,
  onToggleDescription,
}: ChannelHeaderProps) {
  return (
    <div className="flex-1 pt-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            {channelName}
            <svg className="size-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </h1>
          {customUrl && (
            <p className="text-sm text-muted-foreground mt-1">
              {customUrl}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={isSubscribed ? "outline" : "default"}
            size="sm"
            className="rounded-full"
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
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full"
            onClick={onShare}
          >
            <Share className="mr-2 size-4" />
            Share
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full">
            <MoreVertical className="size-4" />
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
        <span className="font-medium text-foreground">{fullSubscriberCount}</span>
        <span className="text-muted-foreground">{subscriberCount}</span>
        <span className="text-muted-foreground">{videoCount} videos</span>
        <span className="text-muted-foreground">{totalViews} views</span>
      </div>

      <div
        className={`mt-4 text-sm text-foreground ${showFullDescription ? "" : "line-clamp-2"}`}
      >
        <pre className="whitespace-pre-wrap font-sans">
          {description}
        </pre>
      </div>
      {description.length > 200 && (
        <Button
          variant="link"
          size="sm"
          className="mt-2 h-auto p-0 text-sm font-medium"
          onClick={onToggleDescription}
        >
          {showFullDescription ? "Show less" : "...more"}
        </Button>
      )}
    </div>
  );
}
