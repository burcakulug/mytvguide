import { createSelector } from 'reselect';

/**
 * Direct selector to the seasons state domain
 */
const selectSeasonsDomain = (state) => state.get('seasons');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Seasons
 */

const makeSelectSeasons = () => createSelector(
  selectSeasonsDomain,
  (substate) => substate.toJS()
);

export default makeSelectSeasons;
export {
  selectSeasonsDomain,
};
