/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.strings,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

export { selectHome, makeSelectLoading, makeSelectError };
