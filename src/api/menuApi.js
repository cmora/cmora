import client from './client';

export const getMenu = () => {
  return client.getEntries({
    'content_type': 'menu',
  });
};