/*
 *
 * Shows reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_SHOW,
  UPDATE_DETAILS_SUCCESS,
} from './constants';

const initialState = fromJS({
  list: [],
  details: [],
});

function showsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SHOW:
      return state.update('list', (list) => list.push(action.id));
    case UPDATE_DETAILS_SUCCESS:
      return state.set('details', fromJS(action.details));
    default:
      return state;
  }
}

export default showsReducer;
