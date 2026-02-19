import axios from "axios";
import type { SearchItem } from "@/types/Search";

const apiKey = import.meta.env.VITE_YOUTUB_API_KEY;

export const SearchVideos = async (query: string, maxResults: number = 100): Promise<SearchItem[]> => {
  try {
    if (!query.trim()) {
      return [];
    }

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&regionCode=US&key=${apiKey}`
    );
    return response.data.items || [];
  } catch (error) {
    console.error("Error searching videos:", error);
    throw error;
  }
};

export const GetSearchSuggestions = async (query: string): Promise<string[]> => {
  try {
    if (!query.trim()) {
      return [];
    }

    const response = await axios.get(
      `https://suggestqueries.google.com/complete/search?client=youtube&hl=en&q=${encodeURIComponent(query)}&callback=?`
    );
    return response.data?.[1]?.map((item: any) => item[0]) || [];
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};
