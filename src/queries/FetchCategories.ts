import { useQuery } from "@tanstack/react-query";
import { GetAllCategories, GetSingleCategory, GetVideosByCategory } from "@/api/Categories";

export const FetchCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: GetAllCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const FetchSingleCategory = (id: string) => {
  return useQuery({
    queryKey: ["Single categories", id],
    queryFn: () => GetSingleCategory({ id }),
    staleTime: 1000 * 60 * 5,
  });
}

export const FetchVideosByCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ["videos", categoryId],
    queryFn: () => GetVideosByCategory(categoryId),
    staleTime: 1000 * 60 * 5,
    enabled: !!categoryId,
  });
};