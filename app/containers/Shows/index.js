/**
 *
 * Shows
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectShows from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const ShowsContainer = styled.div`
  grid-area: shows;
`;

export class Shows extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ShowsContainer>
        <FormattedMessage {...messages.header} />
      </ShowsContainer>
    );
  }
}

Shows.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  shows: makeSelectShows(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'shows', reducer });
const withSaga = injectSaga({ key: 'shows', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Shows);
