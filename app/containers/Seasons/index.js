/**
 *
 * Seasons
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
import makeSelectSeasons from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const SeasonsContainer = styled.div`
  grid-area: seasons;
`;

export class Seasons extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SeasonsContainer>
        <h2><FormattedMessage {...messages.header} /></h2>
      </SeasonsContainer>
    );
  }
}

Seasons.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  seasons: makeSelectSeasons(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'seasons', reducer });
const withSaga = injectSaga({ key: 'seasons', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Seasons);
