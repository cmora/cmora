import { getMenu } from './menuApi';
import { getPage } from './pageApi';
import { getAllProjects, getFeaturedProjects, getProject } from './projectsApi';

// export const getSections = () => {
//   return client.getEntries({
//     'content_type': 'sections',
//   });
// };

// export const getExperience = () => {
//   return client.getEntries({
//     'content_type': 'experience',
//   });
// };

// export const getProjects = () => {
//   return client.getEntries({
//     'content_type': 'projects',
//   });
// };

// export const getProject = (id) => {
//   return client.getEntry(id);
// };

// export const getSocial = () => {
//   return client.getEntries({
//     'content_type': 'socialNetworks',
//   });
// };


export {
  getMenu,
  getPage,
  getAllProjects,
  getFeaturedProjects,
  getProject,
}