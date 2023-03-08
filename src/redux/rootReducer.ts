import { blogDetailsReducer } from './blogDetails/slice';
import { blogListReducer } from './blogList/slice';
import { blogListFilterReducer } from './blogListFilter/slice';

const rootReducer = {
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  blogListFilter: blogListFilterReducer,
};

export default rootReducer;
