/**
 * Tests for StringPage Reducer
 */
import strPageReducer from '../reducer';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

describe('strPageReducer', () => {
  it('returns correct state for LOAD_STRINGS', () => {
    expect(strPageReducer(undefined, { type: LOAD_STRINGS })).toEqual({
      loading: true,
      error: false,
      strings: [],
    });
  });

  it('returns correct state for LOAD_STRINGS_SUCCESS', () => {
    expect(
      strPageReducer(undefined, {
        type: LOAD_STRINGS_SUCCESS,
        strings: {
          result: [{ id: 1, string: 'TEST1' }, { id: 2, string: 'TEST2' }],
        },
      }),
    ).toEqual({
      loading: false,
      error: false,
      strings: [{ id: 1, string: 'TEST1' }, { id: 2, string: 'TEST2' }],
    });
  });

  it('returns correct state for LOAD_STRINGS_ERROR', () => {
    expect(
      strPageReducer(undefined, {
        type: LOAD_STRINGS_ERROR,
        error: {
          message: 'TEST ERROR',
        },
      }),
    ).toEqual({
      loading: false,
      error: {
        message: 'TEST ERROR',
      },
      strings: [],
    });
  });
});
