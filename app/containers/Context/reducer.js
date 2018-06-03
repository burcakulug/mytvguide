/*
 *
 * Context reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USER,
} from './constants';

const initialState = fromJS({ user: null });

function contextReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state.set('user', fromJS(action.user));
    default:
      return state;
  }
}

export default contextReducer;
