/**
 *
 * Episodes
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
import makeSelectEpisodes from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const EpisodesContainer = styled.div`
  grid-area: episodes;
`;

export class Episodes extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <EpisodesContainer>
        <h2><FormattedMessage {...messages.header} /></h2>
      </EpisodesContainer>
    );
  }
}

Episodes.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  episodes: makeSelectEpisodes(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'episodes', reducer });
const withSaga = injectSaga({ key: 'episodes', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Episodes);
