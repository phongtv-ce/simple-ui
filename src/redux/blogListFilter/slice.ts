import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBlogListFilter {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
  search?: string;
}

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
    changePageLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    changeOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.order = action.payload;
    },
    changeSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    clearFilter: (state) => initialState,
  },
});

export const {
  actions: blogListFilterActions,
  reducer: blogListFilterReducer,
} = blogListFilterSlice;
