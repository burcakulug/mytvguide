
import { fromJS } from 'immutable';
import showsPageReducer from '../reducer';

describe('showsPageReducer', () => {
  it('returns the initial state', () => {
    expect(showsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
