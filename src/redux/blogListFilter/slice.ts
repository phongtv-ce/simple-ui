import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBlogListFilter } from 'interfaces/blogListFilter.interface';

const initialState: IBlogListFilter = {
  page: 1,
  limit: 10,
  sortBy: 'id',
  order: 'asc',
  search: '',
};

export const blogListFilterSlice = createSlice({
  name: 'blogListFilter',
  initialState,
  reducers: {
    changePagination: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    paginationNext: (state) => {
      state.page = state.page + 1;
    },
    paginationPrev: (state) => {
      if (state.page > 1) state.page = state.page - 1;
    },
    changePageLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    changeOrder: (state, action: PayloadAction<string>) => {
      state.order = action.payload;
    },
    changeSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    changeSearch: (state, action: PayloadAction<string>) => ({
      ...initialState,
      search: action.payload,
    }),
    clearFilter: (state) => initialState,
  },
});

export const {
  actions: blogListFilterActions,
  reducer: blogListFilterReducer,
} = blogListFilterSlice;
