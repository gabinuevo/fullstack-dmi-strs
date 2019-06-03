/*
 * AddStringPage Reducer
 */

import produce from 'immer';
import {
  CHANGE_INPUT,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  REMOVE_STRING_MESSAGE,
} from './constants';

// The initial state of the AddStringPage
export const initialState = {
  input: '',
  error: null,
  message: '',
};

/* eslint-disable default-case, no-param-reassign */
const addStrReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_INPUT:
        draft.input = action.input;
        break;

      case ADD_STRING:
        draft.input = '';
        break;

      case ADD_STRING_SUCCESS:
        draft.input = '';
        draft.error = null;
        draft.message = 'Success!';
        break;

      case ADD_STRING_ERROR:
        draft.error = action.data;
        draft.message = '';
        break;
      case REMOVE_STRING_MESSAGE:
        draft.message = '';
    }
  });

export default addStrReducer;
