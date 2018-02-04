/*
 *
 * UsersPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_USER,
  SELECT_USER,
} from './constants';

const initialState = fromJS({
  selected: '',
  all: [],
});

function usersPageReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return state.set('all', state.get('all').push({ name: action.name }));
    case SELECT_USER:
      return state.set('selected', action.name);
    default:
      return state;
  }
}

export default usersPageReducer;
