import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './slices/CategorySlice'
import SubscribeReducer from './slices/SubscribeSlice'
import VideoInteractionsReducer from './slices/VideoInteractionsSlice'

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
    subscribe: SubscribeReducer,
    videoInteractions: VideoInteractionsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { category: CategoryState; subscribe: SubscribeState; videoInteractions: VideoInteractionsState }
export type AppDispatch = typeof store.dispatch