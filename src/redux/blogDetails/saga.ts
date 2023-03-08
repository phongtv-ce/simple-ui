import { put, Effect, ForkEffect, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { blogDetailsActions } from './slice';
import { fetchBlogDetail } from 'api/blog';
import { notificationActions } from 'redux/notifications/slice';

export function* watchFetchBlogList(
  action: PayloadAction<any>
): Generator<Effect, void> {
  try {
    const resp: any = yield call(fetchBlogDetail, action.payload);
    yield put(blogDetailsActions.fetchBlogDetailsSuccess(resp.data));
  } catch (error: any) {
    yield put(blogDetailsActions.fetchBlogDetailsFailure());
    yield put(
      notificationActions.notification({
        type: 'error',
        message: error.message,
      })
    );
  }
}

export function* watchBlogDetailsSagas(): Generator<ForkEffect, void> {
  yield takeLatest(blogDetailsActions.fetchBlogDetails, watchFetchBlogList);
}

const blogDetailsSagas = watchBlogDetailsSagas;

export default blogDetailsSagas;
