import client from './client';

export const getAllProjects = limit => {
  return client.getEntries({
    'content_type': 'projects',
    'limit': limit,
  });
}

export const getFeaturedProjects = () => {
  return client.getEntries({
    'content_type': 'projects',
    'fields.featured': 'true',
    'limit': 4,
  });
}

export const getProject = (slug) => {
  return client.getEntries({
    'content_type': 'projects',
    'fields.slug': slug,
    'limit': 1,
  });
}
