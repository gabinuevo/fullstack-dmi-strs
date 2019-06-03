/*
 * StringsPage Messages
 *
 * This contains all the text for the StringsPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.StringsPage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage:
      'A collection of thoughts and messages from people like you',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage: '-- a time capsule for the 21st century',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Existing Messages',
  },
});
