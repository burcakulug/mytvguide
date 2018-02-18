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
import { List, ListItem } from 'material-ui';
import find from 'lodash/find';
import get from 'lodash/get';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectShows from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getSeasons } from '../Seasons/actions';

const ShowsContainer = styled.div`
  grid-area: shows;
`;

export class Shows extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { list, showData } = this.props.shows;
    return (
      <ShowsContainer>
        <h2><FormattedMessage {...messages.header} /></h2>
        <List>
          {list && list.map((id) => {
            const name = get(find(showData, { show: { id } }), 'show.name');
            return (
              <ListItem key={id} onClick={() => this.props.getSeasons(id, name)}>
                {id} - {name}
              </ListItem>
            );
          })}
        </List>

      </ShowsContainer>
    );
  }
}

Shows.propTypes = {
  getSeasons: PropTypes.func.isRequired,
  shows: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.number),
    details: PropTypes.arrayOf(PropTypes.object),
  }),
};

const mapStateToProps = createStructuredSelector({
  shows: makeSelectShows(),
});

function mapDispatchToProps(dispatch) {
  return {
    getSeasons: (showId, showName) => dispatch(getSeasons(showId, showName)),
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
