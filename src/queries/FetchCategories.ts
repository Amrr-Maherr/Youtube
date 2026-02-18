import { useQuery } from "@tanstack/react-query";
import { GetAllCategories } from "@/api/Categories";

export const FetchCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: GetAllCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
