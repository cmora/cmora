import client from './client';

export const getServices = () => {
  return client.getEntries({
    'content_type': 'services',
  });
}
