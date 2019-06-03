/*
 * AddStringPage Actions
 */

import {
  CHANGE_INPUT,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  REMOVE_STRING_MESSAGE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} input The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_INPUT */
export function changeInput(input) {
  return {
    type: CHANGE_INPUT,
    input,
  };
}

/**
 * Sends new string to the database
 *
 * @param  {string} input The new text of the input field
 *
 * @return {object} An action object with a type of ADD_STRING
 */
export function sendString(input) {
  return {
    type: ADD_STRING,
    input,
  };
}

/**
 * Confirms that string was successfully added to DB.
 *
 * @param  {object} stringData the string + id from server.
 *
 * @return {object} An action object with a type of ADD_STRING_SUCCESS
 */
export function sentString(stringData) {
  return {
    type: ADD_STRING_SUCCESS,
    data: stringData,
  };
}

/**
 * Informs user if attempt to add string to DB is unsuccessful.
 *
 * @param  {object} errData the error from server.
 *
 * @return {object} An action object with a type of ADD_STRING_ERROR
 */
export function sentStringErr(errData) {
  return {
    type: ADD_STRING_ERROR,
    data: errData,
  };
}

/**
 * Removes success message from state.
 * ,
 * @return {object} An action object with a type of REMOVE_STRING_MESSAGE
 */
export function removeStrMsg() {
  return {
    type: REMOVE_STRING_MESSAGE,
  };
}
