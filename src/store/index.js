import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/page/page-slice';
import menuReducer from './slices/menu/menu-slice';
import projectsReducer from './slices/projects/projects-slice';
import servicesReducer from './slices/services/services-slice';
import experienceReducer from './slices/experience/experience-slice';
import skillsReduce from './slices/skills/skills-slice';

export default configureStore({
  reducer: {
    page: pageReducer,
    menu: menuReducer,
    projects: projectsReducer,
    services: servicesReducer,
    experience: experienceReducer,
    skills: skillsReduce,
  },
});
