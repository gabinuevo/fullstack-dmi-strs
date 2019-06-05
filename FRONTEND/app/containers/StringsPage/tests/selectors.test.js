/**
 * Tests for StringPage selectors
 * NOTE: Ran out of time and had issues w/ getting the selector tests
 * to work while not compromising functionality. If I had more time,
 * I would do this.
 */

import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from '../selectors';

const mockStrPgState = {
  loading: false,
  error: false,
  strings: [{ id: 1, string: 'TEST1' }, { id: 2, string: 'TEST2' }],
};
const mockState = {
  stringsPage: mockStrPgState,
};

describe('makeSelectStrings', () => {
  it('should return the strings stored in state', () => {
    expect(makeSelectStrings(mockState)).toEqual([
      { id: 1, string: 'TEST1' },
      { id: 2, string: 'TEST2' },
    ]);
  });
});

describe('makeSelectLoading', () => {
  it('should return a boolean stored in state re: loading', () => {
    expect(makeSelectLoading(mockState)).toEqual(false);
  });
});

describe('makeSelectError', () => {
  it('should return a boolean stored in state re: errors', () => {
    expect(makeSelectError(mockState)).toEqual(false);
  });
});
