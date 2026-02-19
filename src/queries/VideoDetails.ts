import { useQuery } from "@tanstack/react-query";
import { GetVideoDetails, GetRelatedVideos, GetVideoComments } from "@/api/VideoDetails";
import type { Video } from "@/types/Video";

export const FetchVideoDetails = (videoId: string) => {
  return useQuery<Video>({
    queryKey: ["video-details", videoId],
    queryFn: () => GetVideoDetails(videoId),
    staleTime: 1000 * 60 * 5,
    enabled: !!videoId,
  });
};

export const FetchRelatedVideos = (videoId: string) => {
  return useQuery<Video[]>({
    queryKey: ["related-videos", videoId],
    queryFn: () => GetRelatedVideos(videoId),
    staleTime: 1000 * 60 * 10,
    enabled: !!videoId,
  });
};

export const FetchVideoComments = (videoId: string) => {
  return useQuery({
    queryKey: ["video-comments", videoId],
    queryFn: () => GetVideoComments(videoId),
    staleTime: 1000 * 60 * 2,
    enabled: !!videoId,
  });
};
