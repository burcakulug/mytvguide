import { createSelector } from 'reselect';

/**
 * Direct selector to the usersPage state domain
 */
const selectUsersPageDomain = (state) => state.get('users');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UsersPage
 */

const makeSelectUsersPage = () => createSelector(
  selectUsersPageDomain,
  (substate) => substate.toJS()
);

const makeSelectUsers = () => createSelector(
  selectUsersPageDomain,
  (substate) => substate.get('all').toJS()
);

const makeSelectSelectedUser = () => createSelector(
  selectUsersPageDomain,
  (substate) => substate.get('selected')
);

export default makeSelectUsersPage;
export {
  selectUsersPageDomain,
  makeSelectUsers,
  makeSelectSelectedUser,
};
