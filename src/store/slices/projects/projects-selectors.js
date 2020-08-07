import isNumber from 'lodash/isNumber';

export const featuredProjectsResults = state => state.projects.featured.results;
export const featuredProjectsStatus = state => state.projects.featured.status;
export const allProjectsResults = state => state.projects.all.results;
export const allProjectsStatus = state => state.projects.all.status;
export const loadedProjectsSelector = state => state.projects.loaded.results;
export const currentProjectSelector = state => {
  const { activeIndex } = state.projects.loaded;
  let project = null;
  if (isNumber(activeIndex) && activeIndex >= 0) {
    project = state.projects.loaded.results[activeIndex];
  }
  return project;
};
