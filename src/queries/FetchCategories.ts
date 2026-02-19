import { useQuery } from "@tanstack/react-query";
import { GetAllCategories, GetSingleCategory } from "@/api/Categories";

export const FetchCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: GetAllCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const FetchSingleCategory = ({id}: {id:string}) => {
  return useQuery({
    queryKey: ["Single categories",id],
    queryFn: () => { GetSingleCategory({ id }) },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}