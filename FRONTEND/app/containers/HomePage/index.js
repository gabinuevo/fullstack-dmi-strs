/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';


import {
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { sendString } from './actions';

import H2 from 'components/H2';
import Button from 'components/Button';
import AddButtonStyle from './AddButtonStyle'
import ErrorMessage from './ErrorMessage';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { changeInput } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  input,
  onSubmitForm,
  onChangeInput,
  error
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (input && input.trim().length > 0) onSubmitForm(input);
  }, []);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Built with React.js Boilerplate"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="input">
              <FormattedMessage {...messages.trymeMessage} />
              <FormattedMessage {...messages.trymeAtPrefix} />
              <Input
                id="string-input"
                type="text"
                placeholder="What's on your mind?"
                value={input}
                onChange={onChangeInput}
              />
            </label>
            {/* <AddButtonStyle> */}
              <Button handleRoute={onSubmitForm}>Submit Message</Button>
            {/* </AddButtonStyle> */}
          </Form>
          <p>
            {error && <ErrorMessage>
              <FormattedMessage {...messages.errorMessage} />
            </ErrorMessage>}
          </p>
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  onChangeInput: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeInput: evt => dispatch(changeInput(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(sendString(document.getElementById("string-input").value));
      document.getElementById("string-input").value = '';
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
