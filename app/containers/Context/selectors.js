import { createSelector } from 'reselect';

/**
 * Direct selector to the context state domain
 */
const selectContextDomain = (state) => state.get('context');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Context
 */

const makeSelectContext = () => createSelector(
  selectContextDomain,
  (substate) => substate.toJS()
);

export default makeSelectContext;
export {
  selectContextDomain,
};
