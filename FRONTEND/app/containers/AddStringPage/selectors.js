/**
 * addStrReducer selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddStr = state => state.addStringPage || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectAddStr,
    addStrState => addStrState.strings,
  );

const makeSelectError = () =>
  createSelector(
    selectAddStr,
    addStrState => addStrState.error,
  );

const makeSelectMsg = () =>
  createSelector(
    selectAddStr,
    addStrState => addStrState.message,
  );

export { selectAddStr, makeSelectLoading, makeSelectError, makeSelectMsg };
