import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './CategorySlice'
import SubscribeReducer from './SubscribeSlice'

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
    subscribe: SubscribeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { category: CategoryState; subscribe: SubscribeState }
export type AppDispatch = typeof store.dispatch