
import { fromJS } from 'immutable';
import myShowsReducer from '../reducer';

describe('myShowsReducer', () => {
  it('returns the initial state', () => {
    expect(myShowsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
