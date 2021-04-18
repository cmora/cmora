import client from './client';

export const getAllProjects = limit => {
  return client.getEntries({
    'content_type': 'project',
    'limit': limit,
  });
}

export const getFeaturedProjects = () => {
  return client.getEntries({
    'content_type': 'project',
    'fields.featured': 'true',
    'limit': 4,
  });
}

export const getProject = (slug) => {
  console.log(slug)
  return client.getEntries({
    'content_type': 'project',
    'fields.slug': slug,
    'limit': 1,
  });
}
