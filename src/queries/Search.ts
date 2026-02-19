import { useQuery } from "@tanstack/react-query";
import { SearchVideos, GetSearchSuggestions } from "@/api/Search";
import type { SearchItem } from "@/types/Search";

export const FetchSearchResults = (query: string) => {
  return useQuery<SearchItem[]>({
    queryKey: ["search", query],
    queryFn: () => SearchVideos(query),
    staleTime: 1000 * 60 * 5,
    enabled: !!query && query.trim().length > 0,
  });
};

export const FetchSearchSuggestions = (query: string) => {
  return useQuery<string[]>({
    queryKey: ["search-suggestions", query],
    queryFn: () => GetSearchSuggestions(query),
    staleTime: 1000 * 60 * 2,
    enabled: !!query && query.trim().length > 0,
  });
};
