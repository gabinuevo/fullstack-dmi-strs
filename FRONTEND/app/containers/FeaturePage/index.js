/*
 * FeaturePage
 *
 * List all the features
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


import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadStrings } from './actions';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import reducer from './reducer';
import saga from './saga';

const key = 'featurePage';

export function FeaturePage({
  loading,
  error,
  sendGetReq,
  strings
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (strings.length === 0) {
      sendGetReq()
    }
  }, []);

  let stringList = !strings
    ? null
    : strings.map((obj) =>
      <ListItem key={ `${obj.id}` }>
        { obj.string } 
      </ListItem>);
  return (
    <div>
      <Helmet>
        <title>Current messages</title>
        <meta
          name="description"
          content="Existing messages in DMI Connect"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      {!error ? stringList : "Something has gone wrong"}
    </div>
  );
}


FeaturePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  sendGetReq: PropTypes.func,

  onChangeInput: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

// const mapStateToProps = (state) => {
//   return {
//     strings: makeSelectStrings(state)
//   }
// }


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
)(FeaturePage);
