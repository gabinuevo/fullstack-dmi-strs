/*
 * Reducer for StringsPage.
 */

import produce from 'immer';
import {
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  strings: [],
};

/* eslint-disable default-case, no-param-reassign */
const strPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STRINGS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_STRINGS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.strings = action.strings.result;
        break;
      case LOAD_STRINGS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default strPageReducer;
