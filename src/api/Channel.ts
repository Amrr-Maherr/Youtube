import axios from "axios";
import type { Video } from "@/types/Video";
import type { Channel } from "@/types/Channel";

const apiKey = import.meta.env.VITE_YOUTUB_API_KEY;

export const GetChannelDetails = async (channelId: string): Promise<Channel> => {
  try {
    if (!channelId) {
      throw new Error("Channel ID is required");
    }

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${apiKey}`
    );

    if (!response.data.items || response.data.items.length === 0) {
      throw new Error("Channel not found");
    }

    return response.data.items[0];
  } catch (error) {
    console.error("Error fetching channel details:", error);
    throw error;
  }
};

export const GetChannelVideos = async (channelId: string, maxResults: number = 20): Promise<Video[]> => {
  try {
    if (!channelId) {
      return [];
    }

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=${maxResults}&key=${apiKey}`
    );

    const searchItems = response.data.items || [];
    
    if (searchItems.length === 0) {
      return [];
    }

    // Get video IDs from search results
    const videoIds = searchItems.map((item: any) => item.id.videoId).join(',');
    
    // Fetch full video details
    const videosResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${apiKey}`
    );

    return videosResponse.data.items || [];
  } catch (error) {
    console.error("Error fetching channel videos:", error);
    return [];
  }
};

export const GetChannelByCustomUrl = async (customUrl: string): Promise<Channel> => {
  try {
    if (!customUrl) {
      throw new Error("Channel custom URL is required");
    }

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&forUsername=${customUrl}&key=${apiKey}`
    );

    if (!response.data.items || response.data.items.length === 0) {
      throw new Error("Channel not found");
    }

    return response.data.items[0];
  } catch (error) {
    console.error("Error fetching channel by custom URL:", error);
    throw error;
  }
};
