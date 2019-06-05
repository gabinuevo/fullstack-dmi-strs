/*
 * StringsPage
 *
 * This is the first thing users see of our App, at the '/' route
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
import H1 from 'components/H1';
import Button from 'components/Button';

import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadStrings } from './actions';

import messages from './messages';
import CenteredSection from './CenteredSection';
import List from './List';
import ListItem from './ListItem';
import reducer from './reducer';
import saga from './saga';

const key = 'stringsPage';

export function StringsPage({ error, sendGetReq, strings }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (strings.length === 0) sendGetReq();
  }, []);

  const stringList = !strings
    ? null
    : strings.map(obj => <ListItem key={`${obj.id}`}>{obj.string}</ListItem>);
  return (
    <div>
      <Helmet>
        <title>Current messages</title>
        <meta name="description" content="Existing messages in DMI Connect" />
      </Helmet>
      <CenteredSection>
        <H1>
          <FormattedMessage {...messages.startProjectHeader} />
        </H1>
        <p>
          <FormattedMessage {...messages.startProjectMessage} />
        </p>
      </CenteredSection>
      <Button id="StringsPage-Button" handleRoute={sendGetReq}>
        Refresh messages
      </Button>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List> {!error ? stringList : 'Something has gone wrong'} </List>
    </div>
  );
}

StringsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  sendGetReq: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    sendGetReq: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadStrings());
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
)(StringsPage);
