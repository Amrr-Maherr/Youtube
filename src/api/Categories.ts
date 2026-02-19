import axios from "axios";
const apiKey = import.meta.env.VITE_YOUTUB_API_KEY;
// const baseUrl = import.meta.env.YOUTUBE_API_BASE_URL;
// const videoCategories = import.meta.env.ENDPOINT_VIDEO_CATEGORIES_LIST_BY_REGION;

export const GetAllCategories = async() => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${apiKey}`);
        return response.data.items || [];
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

export const GetSingleCategory = async ({id}: {id:string}) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&id=${id}&regionCode=US&key=${apiKey}`);
        return response.data.items || [];
    } catch (error) {
        console.error("Error fetching single category:", error);
        return [];
    }
}

export const GetVideosByCategory = async (categoryId: string) => {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=${categoryId}&maxResults=50&regionCode=US&key=${apiKey}`
        );
        return response.data.items || [];
    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
};