/*
 *  StringsPage Actions
 */

import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

/**
 * Loads the strings, starts the request saga
 *
 * @return {object} An action with type of LOAD_STRINGS
 */
export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

/**
 * Dispatched when the strings are loaded by the request saga
 *
 * @param  {array} strings The stringsitory data
 *
 * @return {object} An action with type of LOAD_STRINGS_SUCCESS passing the strings
 */
export function stringsLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings: strings || [], // purely for testing purposes
  };
}

/**
 * Dispatched when loading the strings fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_STRINGS_ERROR passing the error
 */
export function stringLoadingError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}
