import axios from "axios";
const apiKey = import.meta.env.VITE_YOUTUB_API_KEY;

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

export const GetShorts = async (maxResults: number = 20) => {
    try {
        // Search for shorts videos
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=shorts&type=video&maxResults=${maxResults}&regionCode=US&key=${apiKey}`
        );
        
        const searchItems: any[] = response.data.items || [];
        
        if (searchItems.length === 0) {
            return [];
        }
        
        // Get video IDs
        const videoIds = searchItems.map((item) => item.id.videoId).join(',');
        
        // Fetch full video details
        const videosResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${apiKey}`
        );
        
        // Filter videos with duration <= 60 seconds (Shorts)
        const videos: any[] = videosResponse.data.items?.filter((video: any) => {
            const duration = video.contentDetails?.duration;
            if (!duration) return false;
            
            // Parse ISO 8601 duration
            const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
            if (!match) return false;
            
            const hours = parseInt(match[1] || '0');
            const minutes = parseInt(match[2] || '0');
            const seconds = parseInt(match[3] || '0');
            
            const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
            return totalSeconds <= 60;
        }) || [];
        
        // Fetch channel details for thumbnails
        const channelIds = [...new Set(videos.map((v) => v.snippet.channelId))];
        if (channelIds.length > 0) {
            const channelsResponse = await axios.get(
                `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(',')}&key=${apiKey}`
            );
            
            const channelsMap: Record<string, string> = {};
            channelsResponse.data.items?.forEach((channel: any) => {
                channelsMap[channel.id] = channel.snippet.thumbnails?.high?.url || channel.snippet.thumbnails?.default?.url;
            });
            
            // Add channel thumbnails to videos
            videos.forEach((video: any) => {
                if (channelsMap[video.snippet.channelId]) {
                    video.snippet.channelThumbnails = {
                        high: {
                            url: channelsMap[video.snippet.channelId],
                            width: 800,
                            height: 800,
                        },
                    };
                }
            });
        }
        
        return videos;
    } catch (error) {
        console.error("Error fetching shorts:", error);
        return [];
    }
};

export const GetVideosByCategory = async (categoryId: string) => {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=${categoryId}&maxResults=50&regionCode=US&key=${apiKey}`
        );
        
        const videos: any[] = response.data.items || [];
        
        // Fetch channel details for each unique channel
        const channelIds = [...new Set(videos.map((v) => v.snippet.channelId))];
        if (channelIds.length > 0) {
            const channelsResponse = await axios.get(
                `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(',')}&key=${apiKey}`
            );
            
            const channelsMap: Record<string, string> = {};
            channelsResponse.data.items?.forEach((channel: any) => {
                channelsMap[channel.id] = channel.snippet.thumbnails?.high?.url || channel.snippet.thumbnails?.default?.url;
            });
            
            // Add channel thumbnails to videos
            videos.forEach((video: any) => {
                if (channelsMap[video.snippet.channelId]) {
                    video.snippet.channelThumbnails = {
                        high: {
                            url: channelsMap[video.snippet.channelId],
                            width: 800,
                            height: 800,
                        },
                    };
                }
            });
        }
        
        return videos;
    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
};
