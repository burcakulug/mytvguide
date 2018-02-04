/*
*
* ShowsPage reducer
*
*/

import { fromJS } from 'immutable';
import {
  SEARCH_SHOWS,
  SEARCH_SHOWS_SUCCESS,
} from './constants';

const initialState = fromJS({
  searchResult: [],
});

function showsPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SHOWS:
      return state;
    case SEARCH_SHOWS_SUCCESS:
      return state.set('searchResult', action.searchResult);
    default:
      return state;
  }
}

export default showsPageReducer;
