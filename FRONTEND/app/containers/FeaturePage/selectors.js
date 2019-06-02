/**
 * The Feature Page state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMessages = state => state.featurePage || initialState;

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



export {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError
};
