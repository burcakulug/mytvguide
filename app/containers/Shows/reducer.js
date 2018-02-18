/*
 *
 * Shows reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_SHOW,
  UPDATE_SHOW_DATA_SUCCESS,
  UPDATE_SEASON_DATA_SUCCESS,
} from './constants';

const initialState = fromJS({
  list: [],
  showData: [],
  seasonData: {},
  episodeData: [],
});

function showsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SHOW:
      return state.update('list', (list) => list.push(action.id));
    case UPDATE_SHOW_DATA_SUCCESS:
      return state.set('showData', fromJS(action.showData));
    case UPDATE_SEASON_DATA_SUCCESS:
      return state.set('seasonData', fromJS(action.seasonData));
    default:
      return state;
  }
}

export default showsReducer;
