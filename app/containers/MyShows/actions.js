/*
 *
 * MyShows actions
 *
 */

import {
  ADD_SHOW,
  UPDATE_SHOW_DATA_SUCCESS,
  UPDATE_SEASON_DATA_SUCCESS,
  ADD_WATCHED_EPISODE,
  REMOVE_WATCHED_EPISODE,
} from './constants';

export function addShow(user, id) {
  return {
    type: ADD_SHOW,
    user,
    id,
  };
}

export function updateShowDataSuccess(showData) {
  return {
    type: UPDATE_SHOW_DATA_SUCCESS,
    showData,
  };
}

export function updateSeasonDataSuccess(seasonData) {
  return {
    type: UPDATE_SEASON_DATA_SUCCESS,
    seasonData,
  };
}

export function addWatchedEpisode(episodeId) {
  return {
    type: ADD_WATCHED_EPISODE,
    episodeId,
  };
}

export function removeWatchedEpisode(episodeId) {
  return {
    type: REMOVE_WATCHED_EPISODE,
    episodeId,
  };
}
