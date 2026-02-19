import axios from "axios";

const apiKey = import.meta.env.VITE_YOUTUB_API_KEY;

export interface SearchResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItem[];
}

export interface SearchItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export const SearchVideos = async (query: string, maxResults: number = 100) => {
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

export const GetSearchSuggestions = async (query: string) => {
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
