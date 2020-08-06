import client from './client';

export const getSkills = () => {
  return client.getEntries({
    'content_type': 'skills',
  });
};