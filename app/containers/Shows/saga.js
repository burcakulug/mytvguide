import { take, call, put, select, all } from 'redux-saga/effects';

import request from '../../utils/request';
import makeSelectShows from './selectors';
import { updateShowDataSuccess, updateSeasonDataSuccess } from './actions';

export function* getShowDetailsSaga() {
  try {
    const { list } = yield select(makeSelectShows());
    const showData = yield all(list.map((id) => call(request, `http://api.tvmaze.com/shows/${id}`)));
    console.log('showData', showData);
    // yield put(updateShowDataSuccess(showData));
    // const seasonData = yield all(showData.map(({ id }) => ({ showId: id, data: call(request, `http://api.tvmaze.com/shows/${id}/seasons`), })));
    const seasonData = yield all(showData.map(({ id }) => (call(request, `http://api.tvmaze.com/shows/${id}/seasons`))));
    const seasonDataMap = seasonData.map((season, index) => ({ showId: showData[index].id, seasonData: season }));
    // const details = yield call(request, `http://api.tvmaze.com/shows/${showId}/seasons`);
    console.log('seasonData', seasonData);
    console.log('seasonDataMap', seasonDataMap);
    // yield put(updateSeasonDataSuccess(seasonDataMap));

    const episodeData = yield all(seasonDataMap
      .map((showSeason) => showSeason.seasonData
      .map(() => call(request, `http://api.tvmaze.com/seasons/${showSeason.showId}/episodes`))
    ));
    console.log('episodeData', episodeData);

    const episodeDataMap = episodeData
    .map((seasons, showIndex) => (
      { show: showData[showIndex],
        seasons: seasons
        .map((episodes, seasonIndex) => {
          console.log(`season found ${seasonIndex}: `, seasonData[seasonIndex]);
          return (
          { season: seasonData[showIndex][seasonIndex],
            episodes,
          });
        }
        ),
      }
    )
  );
    console.log('episodeDataMap', episodeDataMap);
    yield put(updateShowDataSuccess(episodeDataMap));
  // // const episodeData = yield all(seasonData.map)
  } catch (err) {
    console.log(err.message);
  }
}

// Individual exports for testing
export default function* rootSaga() {
  yield all([
    getShowDetailsSaga(),
  ]);
}
