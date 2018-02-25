/**
 *
 * MyShows
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMyShows from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MyShows extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>MyShows</title>
          <meta name="description" content="Description of MyShows" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

MyShows.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myshows: makeSelectMyShows(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myShows', reducer });
const withSaga = injectSaga({ key: 'myShows', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyShows);
