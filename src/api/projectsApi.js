import client from './client';

export const getAllProjects = () => {
  return client.getEntries({
    'content_type': 'projects',
  });
}

export const getFeaturedProjects = () => {
  // return contentful.entries('content_type=projects&fields.featured=true&limit=4');
  return client.getEntries({
    'content_type': 'projects',
  });
}

export const getProject = (slug) => {
  // return contentful.entries('content_type=projects&fields.slug='+slug+'&limit=1');
  return client.getEntries({
    'content_type': 'projects',
  });
}
