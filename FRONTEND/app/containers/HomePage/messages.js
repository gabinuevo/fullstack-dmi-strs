/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'A collection of thoughts and messages from people like you',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      '-- a time capsule for the 21st century',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Input: ',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: ' ',
  },
  errorMessage: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: 'Something has gone wrong. Please try again later.',
  },
});
