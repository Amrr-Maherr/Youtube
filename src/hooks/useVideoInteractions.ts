import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/Store'
import type { VideoInteraction } from '@/store/VideoInteractionsSlice'
import { 
  toggleLike, 
  toggleDislike,
  setLikedVideos,
  setDislikedVideos,
} from '@/store/VideoInteractionsSlice'

export function useVideoInteractions() {
  const dispatch = useDispatch<AppDispatch>()
  const likedVideos = useSelector((state: RootState) => state.videoInteractions.likedVideos)
  const dislikedVideos = useSelector((state: RootState) => state.videoInteractions.dislikedVideos)
  const likedVideoIds = useSelector((state: RootState) => state.videoInteractions.likedVideoIds)
  const dislikedVideoIds = useSelector((state: RootState) => state.videoInteractions.dislikedVideoIds)

  const handleToggleLike = (video: VideoInteraction) => {
    dispatch(toggleLike(video))
  }

  const handleToggleDislike = (video: VideoInteraction) => {
    dispatch(toggleDislike(video))
  }

  const handleSetLikedVideos = (videos: VideoInteraction[]) => {
    dispatch(setLikedVideos(videos))
  }

  const handleSetDislikedVideos = (videos: VideoInteraction[]) => {
    dispatch(setDislikedVideos(videos))
  }

  const isLiked = (videoId: string) => {
    return !!likedVideoIds[videoId]
  }

  const isDisliked = (videoId: string) => {
    return !!dislikedVideoIds[videoId]
  }

  return {
    likedVideos,
    dislikedVideos,
    likedVideoIds,
    dislikedVideoIds,
    toggleLike: handleToggleLike,
    toggleDislike: handleToggleDislike,
    setLikedVideos: handleSetLikedVideos,
    setDislikedVideos: handleSetDislikedVideos,
    isLiked,
    isDisliked,
  }
}
