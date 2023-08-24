import { configureStore } from '@reduxjs/toolkit';

import projectsReducer from './Slices/Projects';
import skillsReducer from './Slices/Skills';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    skills: skillsReducer,
  },
})