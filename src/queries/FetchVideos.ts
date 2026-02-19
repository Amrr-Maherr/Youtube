import { useQuery } from "@tanstack/react-query";
import { GetVideosByCategory } from "@/api/Videos";

export const FetchVideosByCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ["videos", categoryId],
    queryFn: () => GetVideosByCategory(categoryId),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!categoryId,
  });
};
