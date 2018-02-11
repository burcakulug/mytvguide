import { createSelector } from 'reselect';

/**
 * Direct selector to the shows state domain
 */
const selectShowsDomain = (state) => state.get('shows');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Shows
 */

const makeSelectShows = () => createSelector(
  selectShowsDomain,
  (substate) => substate.toJS()
);

export default makeSelectShows;
export {
  selectShowsDomain,
};
