/*
*
* MyShows reducer
*
*/

import { fromJS } from 'immutable';
import {
  ADD_SHOW,
  UPDATE_SHOW_DATA_SUCCESS,
  UPDATE_SEASON_DATA_SUCCESS,
  ADD_WATCHED_EPISODE,
  REMOVE_WATCHED_EPISODE,
} from './constants';

const initialState = fromJS({
  users: {},
  showData: [],
  seasonData: {},
  episodeData: [],
  watchedEpisodes: [],
});

function myShowsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SHOW: {
      let copyState = state;
      if (!copyState.getIn(['users', action.user])) {
        copyState = copyState.setIn(['users', action.user], fromJS({ list: [] }));
      }
      return copyState.updateIn(['users', action.user, 'list'], (list) => list.push(action.id));
    }
    case UPDATE_SHOW_DATA_SUCCESS:
      return state.set('showData', fromJS(action.showData));
    case UPDATE_SEASON_DATA_SUCCESS:
      return state.set('seasonData', fromJS(action.seasonData));
    case ADD_WATCHED_EPISODE:
      return state.update('watchedEpisodes', (watchedEpisodes) => watchedEpisodes.push(action.episodeId));
    case REMOVE_WATCHED_EPISODE:
      return state.update('watchedEpisodes', (watchedEpisodes) => watchedEpisodes.filter((item) => item !== action.episodeId));
    default:
      return state;
  }
}

export default myShowsReducer;
