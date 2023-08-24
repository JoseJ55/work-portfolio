import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current_skill: '',
}

export const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    set_current_skill: (state, action) => {
        state.current_skill = action.payload;
    },
  },
})

export const { set_current_skill } = skillSlice.actions;

export default skillSlice.reducer;