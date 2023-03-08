import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBlogDetails } from 'interfaces/blog.interface';

export interface IBlogDetailsSlice {
  data: IBlogDetails;
  loading: boolean;
}

const initialState: IBlogDetailsSlice = {
  data: {},
  loading: false,
};

export const blogDetailsSlice = createSlice({
  name: 'blogDetails',
  initialState,
  reducers: {
    fetchBlogDetails: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.data = {};
    },
    fetchBlogDetailsSuccess: (state, action: PayloadAction<IBlogDetails>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchBlogDetailsFailure: (state) => {
      state.loading = false;
      state.data = {};
    },
  },
});

export const { actions: blogDetailsActions, reducer: blogDetailsReducer } =
  blogDetailsSlice;
