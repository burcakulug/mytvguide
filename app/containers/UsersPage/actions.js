/*
 *
 * UsersPage actions
 *
 */

import {
  CREATE_USER,
  SELECT_USER,
} from './constants';

export function createUser(name) {
  return {
    type: CREATE_USER,
    name,
  };
}

export function selectUser(name) {
  return {
    type: SELECT_USER,
    name,
  };
}
