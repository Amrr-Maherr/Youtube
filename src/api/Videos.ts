import axios from "axios";

const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

export const GetVideosByCategory = async (categoryId: string) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&videoCategoryId=${categoryId}&type=video&maxResults=20&regionCode=US&key=${apiKey}`
    );
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
