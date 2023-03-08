import { blogDetailsReducer } from './blogDetails/slice';
import { blogListReducer } from './blogList/slice';
import { blogListFilterReducer } from './blogListFilter/slice';
import { notificationReducer } from './notifications/slice';

const rootReducer = {
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  blogListFilter: blogListFilterReducer,
  notification: notificationReducer,
};

export default rootReducer;
