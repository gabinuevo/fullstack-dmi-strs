/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_INPUT, ADD_STRING, ADD_STRING_SUCCESS, ADD_STRING_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  input: '',
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_INPUT:
        draft.input = action.input;
        break;
      case ADD_STRING:
        draft.input = '';
        break;
      case ADD_STRING_SUCCESS:
        const strData = action.data.result
        var test = state
        // debugger;
        draft.featurePage.strings = draft.featurePage.strings.push(strData)
        break;
      case ADD_STRING_ERROR:
        const errData = action.data
        draft.featurePage.error = errData;
        // debugger;
        break;
    }
  });

export default homeReducer;
