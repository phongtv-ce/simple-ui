import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBlog } from 'interfaces/blog.interface';
import { IBlogListFilter } from 'interfaces/blogListFilter.interface';

export interface IBlogListSlice {
  data: IBlog[];
  loading: boolean;
}

const initialState: IBlogListSlice = {
  data: [],
  loading: false,
};

export const blogListSlice = createSlice({
  name: 'blogList',
  initialState,
  reducers: {
    fetchBlogList: (state, action: PayloadAction<IBlogListFilter>) => {
      state.loading = true;
      state.data = [];
    },
    fetchBlogListSuccess: (state, action: PayloadAction<IBlog[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchBlogListFailure: (state) => {
      state.loading = false;
      state.data = [];
    },
  },
});

export const { actions: blogListActions, reducer: blogListReducer } =
  blogListSlice;
