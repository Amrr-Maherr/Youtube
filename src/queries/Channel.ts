import { useQuery } from "@tanstack/react-query";
import { GetChannelDetails, GetChannelVideos, GetChannelByCustomUrl } from "@/api/Channel";
import type { Channel } from "@/types/Channel";
import type { Video } from "@/types/Video";

export const FetchChannelDetails = (channelId: string) => {
  return useQuery<Channel>({
    queryKey: ["channel-details", channelId],
    queryFn: () => GetChannelDetails(channelId),
    staleTime: 1000 * 60 * 10,
    enabled: !!channelId,
  });
};

export const FetchChannelVideos = (channelId: string) => {
  return useQuery<Video[]>({
    queryKey: ["channel-videos", channelId],
    queryFn: () => GetChannelVideos(channelId),
    staleTime: 1000 * 60 * 5,
    enabled: !!channelId,
  });
};

export const FetchChannelByCustomUrl = (customUrl: string) => {
  return useQuery<Channel>({
    queryKey: ["channel-custom", customUrl],
    queryFn: () => GetChannelByCustomUrl(customUrl),
    staleTime: 1000 * 60 * 10,
    enabled: !!customUrl,
  });
};
