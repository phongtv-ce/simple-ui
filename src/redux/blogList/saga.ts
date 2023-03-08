import { put, Effect, ForkEffect, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { blogListActions } from './slice';
import { fetchBlog } from 'api/blog';
import { notificationActions } from 'redux/notifications/slice';

export function* watchFetchBlogList(
  action: PayloadAction<any>
): Generator<Effect, void> {
  try {
    const resp: any = yield call(fetchBlog, action.payload);
    yield put(blogListActions.fetchBlogListSuccess(resp.data));
  } catch (error: any) {
    yield put(blogListActions.fetchBlogListFailure());
    yield put(
      notificationActions.notification({
        type: 'error',
        message: error.message,
      })
    );
  }
}

export function* watchBlogListSagas(): Generator<ForkEffect, void> {
  yield takeLatest(blogListActions.fetchBlogList, watchFetchBlogList);
}

const blogListSagas = watchBlogListSagas;

export default blogListSagas;
