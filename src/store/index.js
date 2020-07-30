import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './slices/loader/loader-slice';
import menuReducer from './slices/menu/menu-slice';

export default configureStore({
  reducer: {
    loader: loaderReducer,
    menu: menuReducer,
  },
});
