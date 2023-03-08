import { put, Effect, ForkEffect, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { blogDetailsActions } from './slice';
import { fetchBlogDetail } from 'api/blog';

export function* watchFetchBlogList(
  action: PayloadAction<any>
): Generator<Effect, void> {
  try {
    const resp:any = yield call(fetchBlogDetail, action.payload);
    yield put(blogDetailsActions.fetchBlogDetailsSuccess(resp.data))
  } catch (error) {
    yield put(blogDetailsActions.fetchBlogDetailsFailure());
  }
}

export function* watchBlogDetailsSagas(): Generator<ForkEffect, void> {
  yield takeLatest(blogDetailsActions.fetchBlogDetails, watchFetchBlogList);
}

const blogDetailsSagas = watchBlogDetailsSagas;

export default blogDetailsSagas;
