import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBlog {
  "createdAt": string;
  "title": string;
  "image": string;
  "content": string;
  "id": string;
}

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
    fetchBlogList: (state) => {
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
