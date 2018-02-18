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
import { List, ListItem, Subheader } from 'material-ui';

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
    const { seasons, showName } = this.props.seasons;
    return (
      <SeasonsContainer>
        <h2><FormattedMessage {...messages.header} /></h2>
        <List>
          {seasons && seasons.length > 0 && <Subheader>{showName} Seasons</Subheader>}
          {seasons && seasons.sort((a, b) => a.number - b.number).map(({ season }) => (
            <ListItem key={season.number}>Season {season.number}</ListItem>
          ))}
        </List>
      </SeasonsContainer>
    );
  }
}

Seasons.propTypes = {
  dispatch: PropTypes.func.isRequired,
  seasons: PropTypes.shape({
    showId: PropTypes.number,
    showName: PropTypes.string,
    seasons: PropTypes.arrayOf(PropTypes.object),
  }),
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
