import { configureStore } from '@reduxjs/toolkit';

import projectsReducer from './Slices/Projects';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
})