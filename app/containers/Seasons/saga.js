import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';

import request from '../../utils/request';
import { GET_SEASONS } from './constants';
import { getSeasonsSuccess } from './actions';

export function* getSeasonsSaga({ showId }) {
  const details = yield call(request, `http://api.tvmaze.com/shows/${showId}/seasons`);
  yield put((getSeasonsSuccess(details)));
}

export function* watchGetSeasonsSaga() {
  yield takeLatest(GET_SEASONS, getSeasonsSaga);
}

export default function* rootSaga() {
  yield all([
    watchGetSeasonsSaga(),
  ]);
}
