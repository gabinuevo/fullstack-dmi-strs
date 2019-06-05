/**
 * Tests for StringPage Actions
 */
import { loadStrings, stringsLoaded, stringLoadingError } from '../actions';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

describe('loadStrings', () => {
  it('should return an object w/ type LOAD_STRINGS', () => {
    expect(loadStrings()).toEqual({ type: LOAD_STRINGS });
  });
});

describe('stringsLoaded', () => {
  it('should return an object w/ type LOAD_STRINGS_SUCCESS, and an array of strings', () => {
    const testStrings1 = ['TEST1', 'TEST2', 'TEST3'];
    expect(stringsLoaded(testStrings1)).toEqual({
      type: LOAD_STRINGS_SUCCESS,
      strings: ['TEST1', 'TEST2', 'TEST3'],
    });

    const testStrings2 = [];
    expect(stringsLoaded(testStrings2)).toEqual({
      type: LOAD_STRINGS_SUCCESS,
      strings: [],
    });

    const testStrings3 = [
      'TEST MULTI-WORD STRINGS',
      'TEST MORE MULTI-WORD STRINGS',
    ];
    expect(stringsLoaded(testStrings3)).toEqual({
      type: LOAD_STRINGS_SUCCESS,
      strings: ['TEST MULTI-WORD STRINGS', 'TEST MORE MULTI-WORD STRINGS'],
    });
  });
});

describe('stringLoadingError', () => {
  it('should return an object w/ type LOAD_STRINGS_SUCCESS, and an array of strings', () => {
    const testError = { message: 'TEST ERROR' };
    expect(stringLoadingError(testError)).toEqual({
      type: LOAD_STRINGS_ERROR,
      error: { message: 'TEST ERROR' },
    });
  });
});
