import { createSelector } from 'reselect';

/**
 * Direct selector to the episodes state domain
 */
const selectEpisodesDomain = (state) => state.get('episodes');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Episodes
 */

const makeSelectEpisodes = () => createSelector(
  selectEpisodesDomain,
  (substate) => substate.toJS()
);

export default makeSelectEpisodes;
export {
  selectEpisodesDomain,
};
