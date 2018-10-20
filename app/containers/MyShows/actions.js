/*
 *
 * MyShows actions
 *
 */

 import {
   ADD_SHOW,
   UPDATE_SHOW_DATA_SUCCESS,
   UPDATE_SEASON_DATA_SUCCESS,
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
