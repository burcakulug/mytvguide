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
import Subheader from 'material-ui/Subheader';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMyShows from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MyShows extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { show: '', season: '', seasons: [], episodes: [] };
    this.selectSeasons = this.selectSeasons.bind(this);
    this.selectEpisodes = this.selectEpisodes.bind(this);
  }

  selectSeasons(show, seasons) {
    this.setState({ show, seasons, season: '', episodes: [] });
  }

  selectEpisodes(season, episodes) {
    this.setState({ season, episodes });
  }

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
                  <ListItem key={data.show.id} onClick={() => this.selectSeasons(data.show.name, data.seasons)}>
                    {data.show.id} - {data.show.name}
                  </ListItem>);
              }
              )
              }
            </List>
          </Cell>
          <Cell>
            <h3>Seasons</h3>
            <List>
              <Subheader>{this.state.show}</Subheader>
              {this.state.seasons.map((data) => (
                <ListItem key={data.season.id} onClick={() => this.selectEpisodes(data.season.number, data.episodes)}>
                  Season  {data.season.number}
                </ListItem>
              ))}
            </List>
          </Cell>
          <Cell>
            <h3>Episodes</h3>
            <List>
              <Subheader>{this.state.season && `Season ${this.state.season}`}</Subheader>
              {this.state.episodes.map((data) => (
                <ListItem key={data.id}>
                  {data.name} - {data.name}
                </ListItem>
              ))}
            </List>
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
