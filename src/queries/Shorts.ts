import { useQuery } from "@tanstack/react-query";
import { GetShorts } from "@/api/Categories";
import type { Video } from "@/types/Video";

export const FetchShorts = (maxResults: number = 30) => {
  return useQuery<Video[]>({
    queryKey: ["shorts", maxResults],
    queryFn: () => GetShorts(maxResults),
    staleTime: 1000 * 60 * 30,
  });
};
