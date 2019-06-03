/*
 * AddStringPage Messages
 *
 * This contains all the text for the AddStringPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.addStringPage';

export default defineMessages({
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Add a message to the database!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Input: ',
  },
  errorMessage: {
    id: `${scope}.tryme.errorMessage`,
    defaultMessage: 'Something has gone wrong. Please try again later.',
  },
  successMessage: {
    id: `${scope}.tryme.successMessage`,
    defaultMessage: 'Message successfully saved!',
  },
});
