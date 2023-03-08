import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import blogDetailsSagas from './blogDetails/saga';
import blogListSagas from './blogList/saga';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(blogListSagas), fork(blogDetailsSagas)]);
}
