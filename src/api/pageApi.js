import client from './client';

const PAGES_ID = {
  'home': '6iTJ8mOrPsMX8Rm5BON9sS',
  'about': '2shRMmOQSxwo8ecUVhHROG',
  'contact': '52QyCW5YNhO6RHy1xfr6j8',
  'projects': '5xXyTsa24xX3D9SaVchfMw',
};

export const getPage = (page) => {
  return client.getEntry(PAGES_ID[page]);
};