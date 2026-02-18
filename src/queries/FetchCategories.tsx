import { GetAllCategories } from "@/api/Categories";
import { useQuery } from "@tanstack/react-query";

export const FetchCategories = () => {
    const { isPending, error, data, isLoading } = useQuery({
      queryKey: ["Categories"],
      queryFn: () => GetAllCategories(),
    });
    return {
        isPending,
        error,
        data,
        isLoading
    }
}

