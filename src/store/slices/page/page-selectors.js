export const isPageLoading = state => state.page.loading;
export const isHeaderSticky = state => state.page.sticky;
export const getHomePageSelector = state => {
  return state.page.pages.find(page => page.id === 'home-page');
};
