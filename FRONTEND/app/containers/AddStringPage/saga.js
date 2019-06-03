import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { ADD_STRING } from './constants';
import { sentString, sentStringErr } from './actions';

/**
 * request/response handler for adding a string to db
 */
export function* addString(action) {
  const requestURL = `http://localhost:3001`;
  try {
    const strData = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: action.input }),
    });
    yield put(sentString(strData));
  } catch (err) {
    yield put(sentStringErr(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringData() {
  // Watches for LOAD_STRINGS actions and calls addString when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_STRING, addString);
}
