import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CategoryState {
  value: string
}

const initialState: CategoryState = {
  value: '',
}

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    SetCategory: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { SetCategory } = CategorySlice.actions

export default CategorySlice.reducer