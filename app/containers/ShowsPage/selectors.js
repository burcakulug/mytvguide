import { createSelector } from 'reselect';

/**
 * Direct selector to the showsPage state domain
 */
const selectShowsPageDomain = (state) => state.get('showsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ShowsPage
 */

const makeSelectShowsPage = () => createSelector(
  selectShowsPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectShowsPage;
export {
  selectShowsPageDomain,
};
