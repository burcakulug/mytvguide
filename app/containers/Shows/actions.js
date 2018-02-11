/*
 *
 * Shows actions
 *
 */

import {
  ADD_SHOW,
  UPDATE_DETAILS_SUCCESS
} from './constants';

export function addShow(id) {
  return {
    type: ADD_SHOW,
    id,
  };
}

export function updateDetailsSuccess(details) {
  return {
    type: UPDATE_DETAILS_SUCCESS,
    details,
  };
}
