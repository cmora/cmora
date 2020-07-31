import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './slices/loader/loader-slice';
import menuReducer from './slices/menu/menu-slice';
import projectsReducer from './slices/projects/projects-slice';

export default configureStore({
  reducer: {
    loader: loaderReducer,
    menu: menuReducer,
    projects: projectsReducer,
  },
});
