import { takeLatest, call, put } from 'redux-saga/effects';
import { SEARCH_SHOWS } from './constants';
import request from '../../utils/request';
import { searchShowsSuccess } from './actions';

export function* searchShows({ query }) {
  const shows = yield call(request, `http://api.tvmaze.com/search/shows?q=${query}`);
  yield put(searchShowsSuccess(shows));
  console.log(shows);
}

// Individual exports for testing
export default function* watchSearchShows() {
  yield takeLatest(SEARCH_SHOWS, searchShows);
}
