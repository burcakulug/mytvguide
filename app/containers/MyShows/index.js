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
import { Grid, Cell } from 'styled-css-grid';
import { List, ListItem } from 'material-ui';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMyShows from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MyShows extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { showData } = this.props.myShows;
    return (
      <div>
        <Helmet>
          <title>MyShows</title>
          <meta name="description" content="Description of MyShows" />
        </Helmet>
        <h2><FormattedMessage {...messages.header} /></h2>
        <Grid columns={3}>
          <Cell>
            <h3>Shows</h3>
            <List>
              {showData && showData.map((data) => {
                console.log('data', data);
                return (
                  <ListItem key={data.show.id}>
                    {data.show.id} - {data.show.name}
                  </ListItem>);
              }
              )
              }
            </List>
          </Cell>
          <Cell>
            <h3>Seasons</h3>
          </Cell>
          <Cell>
            <h3>Episodes</h3>
          </Cell>
        </Grid>
      </div>
    );
  }
}

MyShows.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myShows: makeSelectMyShows(),
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