/*
 *
 * Seasons reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_SEASONS,
  GET_SEASONS_SUCCESS,
} from './constants';

const initialState = fromJS({
  showId: null,
  showName: null,
  seasons: [],
});

function seasonsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEASONS:
      return state
        .set('showId', action.showId)
        .set('showName', action.showName);
    case GET_SEASONS_SUCCESS:
      return state
        .set('seasons', fromJS(action.seasons));
    default:
      return state;
  }
}

export default seasonsReducer;
