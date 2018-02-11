import { take, call, put, select, all } from 'redux-saga/effects';

import request from '../../utils/request';
import makeSelectShows from './selectors';
import { updateDetailsSuccess } from './actions';

export function* getShowDetailsSaga() {
  console.log('getShowDetailsSaga');
  const { list } = yield select(makeSelectShows());
  // const details = list.map((id) => yield call(request, `http://api.tvmaze.com/shows/${id}`));
  const details = yield all(list.map((id) => call(request, `http://api.tvmaze.com/shows/${id}`)));
  yield put(updateDetailsSuccess(details));
}

// Individual exports for testing
export default function* rootSaga() {
  yield all([
    getShowDetailsSaga(),
  ]);
}
