/**
 * The StringPage state selectors
 * 
 * NOTE: Ran out of time and had issues w/ getting the selector tests 
 * to work while not compromising functionality. If I had more time, 
 * I would do this.
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMessages = state => state.stringsPage || initialState;

const makeSelectStrings = () =>
  createSelector(
    selectMessages,
    globalState => globalState.strings,
  );

const makeSelectLoading = () =>
  createSelector(
    selectMessages,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectMessages,
    globalState => globalState.error,
  );

export { makeSelectStrings, makeSelectLoading, makeSelectError };
