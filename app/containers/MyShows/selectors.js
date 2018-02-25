import { createSelector } from 'reselect';

/**
 * Direct selector to the myShows state domain
 */
const selectMyShowsDomain = (state) => state.get('myShows');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MyShows
 */

const makeSelectMyShows = () => createSelector(
  selectMyShowsDomain,
  (substate) => substate.toJS()
);

export default makeSelectMyShows;
export {
  selectMyShowsDomain,
};
