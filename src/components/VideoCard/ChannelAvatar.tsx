import { cn } from "@/lib/utils";
import { getChannelInitials } from "@/lib/video";

interface ChannelAvatarProps {
  channelName: string;
  className?: string;
}

export function ChannelAvatar({ channelName, className }: ChannelAvatarProps) {
  const initial = getChannelInitials(channelName);

  return (
    <div
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold",
        className
      )}
    >
      {initial}
    </div>
  );
}
