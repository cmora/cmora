import client from './client';

const PAGES_ID = {
  'home': '7s3E4u7IQg0w6YeQMS2eO8',
  'about': '6J7fBuzqY8QW2e8Im0SYqU',
  'contact': '7tp4JrfKeI6I2IME8gceS2',
  'works': '60KJAaHVjaE2UqUouA2gcg',
};

export const getPage = (page) => {
  return client.getEntry(PAGES_ID[page]);
};