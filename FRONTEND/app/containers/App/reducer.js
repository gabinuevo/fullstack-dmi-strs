/*
 * AppReducer
 *
 */

import produce from 'immer';

// The initial state of the App
export const initialState = {
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'PLACEHOLDER':
        draft.loading = null;
        break;
    }
  });

export default appReducer;
