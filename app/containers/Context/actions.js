/*
 *
 * Context actions
 *
 */

import {
  SET_USER,
  SET_USER_SUCCESS,
  SET_USER_ERROR,
} from './constants';

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function setUserSuccess() {
  return {
    type: SET_USER_SUCCESS,
  };
}

export function setUserError(error) {
  return {
    type: SET_USER_ERROR,
    error,
  };
}
