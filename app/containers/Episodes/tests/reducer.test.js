
import { fromJS } from 'immutable';
import episodesReducer from '../reducer';

describe('episodesReducer', () => {
  it('returns the initial state', () => {
    expect(episodesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
