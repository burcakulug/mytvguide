import { put, select, takeLatest, all } from 'redux-saga/effects';
import find from 'lodash/find';

import { GET_SEASONS } from './constants';
import { getSeasonsSuccess } from './actions';
import makeSelectShows from '../Shows/selectors';

export function* getSeasonsSaga({ showId }) {
  const { showData } = yield select(makeSelectShows());
  console.log('showData', showData);
  const show = find(showData, { show: { id: showId } });
  yield put((getSeasonsSuccess(show.show.name, show.seasons)));
}

export function* watchGetSeasonsSaga() {
  yield takeLatest(GET_SEASONS, getSeasonsSaga);
}

export default function* rootSaga() {
  yield all([
    watchGetSeasonsSaga(),
  ]);
}
