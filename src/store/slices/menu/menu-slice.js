import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMenu } from '../../../api';
import { formatMenu } from '../../../api/formatters/';
import { STATUS } from '../../../constants';

const name = 'menu';

const getMenuItemsCreator = async () => {
  try {
    const response = await getMenu();
    return formatMenu(response);
  } catch (error) {
    throw error;
  }
}

const getMenuItems = createAsyncThunk(
  `${name}/getMenuItems`,
  getMenuItemsCreator,
);

const initialState = {
  items: [],
  status: null,
}

const reducers = {}

const extraReducers = {
  [getMenuItems.fulfilled]: (state, action) => {
    state.items = action.payload;
    state.status = STATUS.SUCCESS;
  },
  [getMenuItems.rejected]: state => {
    state.status = STATUS.ERROR;
  },
  [getMenuItems.pending]: state => {
    state.status = STATUS.LOADING;
  },
}

export const menuSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});

/**
 * Export all async action creators
 */
export {
  getMenuItems,
};

export default menuSlice.reducer;
