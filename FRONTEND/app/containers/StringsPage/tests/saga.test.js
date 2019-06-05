/**
 * Tests for StringPage saga
 */
import { LOAD_STRINGS_SUCCESS } from '../constants';
import { getStrings } from '../saga';

describe('getStrings', () => {
  it('handles successfully getting strings from db', () => {
    const gen = getStrings('url');
    gen.next();
    expect(gen.next().value.payload.action).toEqual({
      type: LOAD_STRINGS_SUCCESS,
      strings: [],
    });
  });
});
