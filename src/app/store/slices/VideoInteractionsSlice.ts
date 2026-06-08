import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface VideoInteraction {
  videoId: string;
  videoTitle: string;
  videoThumbnail?: string;
  channelName: string;
  channelId: string;
  isLiked: boolean;
  isDisliked: boolean;
  interactedAt?: string;
}

export interface VideoInteractionsState {
  likedVideos: VideoInteraction[];
  dislikedVideos: VideoInteraction[];
  likedVideoIds: Record<string, boolean>;
  dislikedVideoIds: Record<string, boolean>;
}

const initialState: VideoInteractionsState = {
  likedVideos: [],
  dislikedVideos: [],
  likedVideoIds: {},
  dislikedVideoIds: {},
}

export const VideoInteractionsSlice = createSlice({
  name: 'videoInteractions',
  initialState,
  reducers: {
    likeVideo: (state, action: PayloadAction<VideoInteraction>) => {
      const video = action.payload;
      
      // Remove from disliked if exists
      state.dislikedVideos = state.dislikedVideos.filter(
        (v) => v.videoId !== video.videoId
      );
      delete state.dislikedVideoIds[video.videoId];
      
      // Add to liked
      if (!state.likedVideoIds[video.videoId]) {
        state.likedVideos.push({ ...video, isLiked: true, isDisliked: false, interactedAt: new Date().toISOString() });
        state.likedVideoIds[video.videoId] = true;
      }
    },
    unlikeVideo: (state, action: PayloadAction<string>) => {
      const videoId = action.payload;
      state.likedVideos = state.likedVideos.filter(
        (v) => v.videoId !== videoId
      );
      delete state.likedVideoIds[videoId];
    },
    dislikeVideo: (state, action: PayloadAction<VideoInteraction>) => {
      const video = action.payload;
      
      // Remove from liked if exists
      state.likedVideos = state.likedVideos.filter(
        (v) => v.videoId !== video.videoId
      );
      delete state.likedVideoIds[video.videoId];
      
      // Add to disliked
      if (!state.dislikedVideoIds[video.videoId]) {
        state.dislikedVideos.push({ ...video, isLiked: false, isDisliked: true, interactedAt: new Date().toISOString() });
        state.dislikedVideoIds[video.videoId] = true;
      }
    },
    removeDislike: (state, action: PayloadAction<string>) => {
      const videoId = action.payload;
      state.dislikedVideos = state.dislikedVideos.filter(
        (v) => v.videoId !== videoId
      );
      delete state.dislikedVideoIds[videoId];
    },
    toggleLike: (state, action: PayloadAction<VideoInteraction>) => {
      const video = action.payload;
      const isCurrentlyLiked = state.likedVideoIds[video.videoId];
      
      if (isCurrentlyLiked) {
        // Unlike
        state.likedVideos = state.likedVideos.filter(
          (v) => v.videoId !== video.videoId
        );
        delete state.likedVideoIds[video.videoId];
      } else {
        // Like (automatically removes dislike if exists)
        state.dislikedVideos = state.dislikedVideos.filter(
          (v) => v.videoId !== video.videoId
        );
        delete state.dislikedVideoIds[video.videoId];
        
        state.likedVideos.push({ ...video, isLiked: true, isDisliked: false, interactedAt: new Date().toISOString() });
        state.likedVideoIds[video.videoId] = true;
      }
    },
    toggleDislike: (state, action: PayloadAction<VideoInteraction>) => {
      const video = action.payload;
      const isCurrentlyDisliked = state.dislikedVideoIds[video.videoId];
      
      if (isCurrentlyDisliked) {
        // Remove dislike
        state.dislikedVideos = state.dislikedVideos.filter(
          (v) => v.videoId !== video.videoId
        );
        delete state.dislikedVideoIds[video.videoId];
      } else {
        // Dislike (automatically removes like if exists)
        state.likedVideos = state.likedVideos.filter(
          (v) => v.videoId !== video.videoId
        );
        delete state.likedVideoIds[video.videoId];
        
        state.dislikedVideos.push({ ...video, isLiked: false, isDisliked: true, interactedAt: new Date().toISOString() });
        state.dislikedVideoIds[video.videoId] = true;
      }
    },
    setLikedVideos: (state, action: PayloadAction<VideoInteraction[]>) => {
      state.likedVideos = action.payload;
      state.likedVideoIds = action.payload.reduce(
        (acc, video) => {
          acc[video.videoId] = video.isLiked;
          return acc;
        },
        {} as Record<string, boolean>
      );
    },
    setDislikedVideos: (state, action: PayloadAction<VideoInteraction[]>) => {
      state.dislikedVideos = action.payload;
      state.dislikedVideoIds = action.payload.reduce(
        (acc, video) => {
          acc[video.videoId] = video.isDisliked;
          return acc;
        },
        {} as Record<string, boolean>
      );
    },
  },
})

export const { 
  likeVideo, 
  unlikeVideo, 
  dislikeVideo, 
  removeDislike,
  toggleLike, 
  toggleDislike,
  setLikedVideos,
  setDislikedVideos,
} = VideoInteractionsSlice.actions

export default VideoInteractionsSlice.reducer
