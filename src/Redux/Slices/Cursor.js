import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cursorProgress: 565,
    needUpdateProgress: false,
}

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    set_progress: (state, action) => {
        state.cursorProgress = action.payload;
    },
    update_progress: (state) => {
        state.needUpdateProgress = true;
    },
    updated_progress: (state) => {
        state.needUpdateProgress = false;
    }
  },
})

export const { 
    set_progress,
    update_progress,
    updated_progress,
} = cursorSlice.actions;

export default cursorSlice.reducer;