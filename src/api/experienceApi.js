import client from './client';

export const getExperience = () => {
  return client.getEntries({
    'content_type': 'experience',
  });
}
