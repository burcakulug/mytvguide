
import { fromJS } from 'immutable';
import showsReducer from '../reducer';

describe('showsReducer', () => {
  it('returns the initial state', () => {
    expect(showsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
