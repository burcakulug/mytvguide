/*
 *
 * ShowsPage actions
 *
 */

import {
  SEARCH_SHOWS,
  SEARCH_SHOWS_SUCCESS,
  SEARCH_SHOWS_ERROR,
} from './constants';

export function searchShows(query) {
  return {
    type: SEARCH_SHOWS,
    query,
  };
}

export function searchShowsSuccess(searchResult) {
  return {
    type: SEARCH_SHOWS_SUCCESS,
    searchResult,
  };
}

export function searchShowsError(error) {
  return {
    type: SEARCH_SHOWS_ERROR,
    error,
  };
}
