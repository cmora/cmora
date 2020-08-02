import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/page/page-slice';
import menuReducer from './slices/menu/menu-slice';
import projectsReducer from './slices/projects/projects-slice';
import servicesReducer from './slices/services/services-slice';

export default configureStore({
  reducer: {
    page: pageReducer,
    menu: menuReducer,
    projects: projectsReducer,
    services: servicesReducer,
  },
});
