import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getServices as getServicesApi } from '../../../api';
import { formatServices } from '../../../api/formatters/';
import { STATUS } from '../../../constants';

const name = 'services';

const servicesCreator = async () => {
  try {
    const response = await getServicesApi();
    return formatServices(response);
  } catch (error) {
    throw error;
  }
}

const getServices = createAsyncThunk(
  `${name}/getServices`,
  servicesCreator,
);

const initialState = {
  status: null,
  services: [],
}

const reducers = {}

const extraReducers = {
  [getServices.fulfilled]: (state, action) => {
    state.services = action.payload;
    state.status = STATUS.SUCCESS;
  },
  [getServices.rejected]: state => {
    state.status = STATUS.ERROR;
  },
  [getServices.pending]: state => {
    state.status = STATUS.LOADING;
  },
}

export const servicesSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});

/**
 * Export all async action creators
 */
export {
  getServices,
};

export default servicesSlice.reducer;
