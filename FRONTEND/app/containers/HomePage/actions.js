/*
 * Home Actions
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_INPUT, ADD_STRING, ADD_STRING_SUCCESS, ADD_STRING_ERROR } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} input The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_INPUT
 */
export function changeInput(input) {
  return {
    type: CHANGE_INPUT,
    input,
  };
}


/**
 * Changes the input field of the form
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
 * Changes the input field of the form
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
 * Changes the input field of the form
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
