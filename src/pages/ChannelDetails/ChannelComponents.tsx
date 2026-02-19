interface ChannelBannerProps {
  bannerUrl: string | null;
  channelName: string;
  onError: () => void;
}

export function ChannelBanner({
  bannerUrl,
  channelName,
  onError,
}: ChannelBannerProps) {
  return (
    <div className="relative h-32 w-full bg-muted sm:h-48 md:h-56 lg:h-64">
      {bannerUrl ? (
        <img
          src={bannerUrl}
          alt="Channel banner"
          className="size-full object-cover"
          onError={onError}
        />
      ) : (
        <div className="flex size-full items-center justify-center bg-gradient-to-r from-primary/20 to-primary/40">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary">
            {channelName}
          </h1>
        </div>
      )}
    </div>
  );
}

interface ChannelAvatarProps {
  avatarUrl: string;
  channelName: string;
}

export function ChannelAvatar({
  avatarUrl,
  channelName,
}: ChannelAvatarProps) {
  return (
    <div className="flex shrink-0 items-center justify-center -mt-16 sm:-mt-20">
      <img
        src={avatarUrl}
        alt={channelName}
        className="size-24 rounded-full sm:size-32 border-4 border-background"
      />
    </div>
  );
}

interface ChannelStatsProps {
  fullSubscriberCount: string;
  subscriberCount: string;
  videoCount: string;
  totalViews: string;
}

export function ChannelStats({
  fullSubscriberCount,
  subscriberCount,
  videoCount,
  totalViews,
}: ChannelStatsProps) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
      <span className="font-medium text-foreground">{fullSubscriberCount}</span>
      <span className="text-muted-foreground">{subscriberCount}</span>
      <span className="text-muted-foreground">{videoCount} videos</span>
      <span className="text-muted-foreground">{totalViews} views</span>
    </div>
  );
}

interface ChannelTabButtonProps {
  tab: { id: string; label: string };
  isActive: boolean;
  onClick: () => void;
}

export function ChannelTabButton({
  tab,
  isActive,
  onClick,
}: ChannelTabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {tab.label}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
      )}
    </button>
  );
}
