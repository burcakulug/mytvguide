
import { fromJS } from 'immutable';
import seasonsReducer from '../reducer';

describe('seasonsReducer', () => {
  it('returns the initial state', () => {
    expect(seasonsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
