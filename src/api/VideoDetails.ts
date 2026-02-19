import axios from "axios";
import type { Video } from "@/types/Video";

const apiKey = import.meta.env.VITE_YOUTUB_API_KEY;

export const GetVideoDetails = async (videoId: string): Promise<Video> => {
  try {
    if (!videoId) {
      throw new Error("Video ID is required");
    }

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`
    );

    if (!response.data.items || response.data.items.length === 0) {
      throw new Error("Video not found");
    }

    return response.data.items[0];
  } catch (error) {
    console.error("Error fetching video details:", error);
    throw error;
  }
};

export const GetRelatedVideos = async (videoId: string, maxResults: number = 10): Promise<Video[]> => {
  try {
    if (!videoId) {
      return [];
    }

    // First, get the video details to find its category
    const videoResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
    );

    if (!videoResponse.data.items || videoResponse.data.items.length === 0) {
      return [];
    }

    const categoryId = videoResponse.data.items[0].snippet.categoryId;

    // Then get related videos by category
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=${categoryId}&maxResults=${maxResults}&regionCode=US&key=${apiKey}`
    );

    // Filter out the current video
    return response.data.items.filter((v: Video) => v.id !== videoId) || [];
  } catch (error) {
    console.error("Error fetching related videos:", error);
    return [];
  }
};

export const GetVideoComments = async (videoId: string, maxResults: number = 20) => {
  try {
    if (!videoId) {
      return [];
    }

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&maxResults=${maxResults}&key=${apiKey}`
    );

    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};
