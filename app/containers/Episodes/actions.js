/*
 *
 * Episodes actions
 *
 */

import {
  GET_EPISODES,
  GET_EPISODES_SUCCESS,
} from './constants';

export function getEpisodes(showName, seasonId, seasonNumber) {
  return {
    type: GET_EPISODES,
    showName,
    seasonId,
    seasonNumber,
  };
}

export function getEpisodesSuccess(details) {
  return {
    type: GET_EPISODES_SUCCESS,
    details,
  };
}
