/*
 * AddStringPage
 *
 * This page allows users to send a new string to the DB
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import Button from 'components/Button';

import { makeSelectLoading, makeSelectError, makeSelectMsg } from './selectors';
import { changeInput, sendString, removeStrMsg } from './actions';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

const key = 'addStringPage';

export function AddStringPage({
  input,
  error,
  message,
  onSubmitForm,
  onChangeInput,
  removeMessage,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (input && input.trim().length > 0) onSubmitForm(input);
  }, []);

  if (message) {
    window.setTimeout(() => removeMessage(), 5000);
  }

  return (
    <article>
      <Helmet>
        <title>Add a Message</title>
        <meta name="description" content="Built with React.js Boilerplate" />
      </Helmet>
      <div>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <p>
            {message && (
              <SuccessMessage>
                <FormattedMessage {...messages.successMessage} />
              </SuccessMessage>
            )}
          </p>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="input">
              <FormattedMessage {...messages.trymeMessage} />
              <Input
                id="string-input"
                type="text"
                placeholder="What's on your mind?"
                value={input}
                onChange={onChangeInput}
              />
            </label>
            <Button handleRoute={onSubmitForm}>Submit Message</Button>
          </Form>
          <p>
            {error && (
              <ErrorMessage>
                <FormattedMessage {...messages.errorMessage} />
              </ErrorMessage>
            )}
          </p>
        </Section>
      </div>
    </article>
  );
}

AddStringPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  onChangeInput: PropTypes.func,
  removeMessage: PropTypes.func,
  message: PropTypes.string,
  input: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  message: makeSelectMsg(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeInput: evt => dispatch(changeInput(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(sendString(document.getElementById('string-input').value));
      document.getElementById('string-input').value = '';
    },
    removeMessage: () => dispatch(removeStrMsg()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddStringPage);
