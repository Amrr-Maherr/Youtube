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

    // Use JSONP to fetch suggestions from Google
    const url = `https://suggestqueries.google.com/complete/search?client=youtube&hl=en&q=${encodeURIComponent(query)}&callback=handleSuggestions`;
    
    // Create a script element for JSONP
    return new Promise((resolve) => {
      (window as any).handleSuggestions = (data: any[]) => {
        resolve(data?.[1]?.map((item: any) => item[0]) || []);
        // Cleanup
        delete (window as any).handleSuggestions;
      };

      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);

      // Cleanup after 2 seconds
      setTimeout(() => {
        script.remove();
        if ((window as any).handleSuggestions) {
          resolve([]);
          delete (window as any).handleSuggestions;
        }
      }, 2000);
    });
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};
