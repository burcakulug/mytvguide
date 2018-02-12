/*
 *
 * Seasons actions
 *
 */

import {
  GET_SEASONS,
  GET_SEASONS_SUCCESS,
} from './constants';

export function getSeasons(showId, showName) {
  return {
    type: GET_SEASONS,
    showId,
    showName,
  };
}

export function getSeasonsSuccess(details) {
  return {
    type: GET_SEASONS_SUCCESS,
    details,
  };
}
