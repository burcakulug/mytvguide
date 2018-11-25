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
import makeSelectContext from 'containers/Context/selectors';
import makeSelectMyShows from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { addWatchedEpisode, removeWatchedEpisode } from './actions';

export class MyShows extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: { id: '', name: '' }, season: '', seasons: [], episodes: [] };
    this.selectSeasons = this.selectSeasons.bind(this);
    this.selectEpisodes = this.selectEpisodes.bind(this);
    this.isEpisodeWatched = this.isEpisodeWatched.bind(this);
    this.renderUnwatchedEpisodesLabel = this.renderUnwatchedEpisodesLabel.bind(this);
    this.renderUnwatchedEpisodesInShowLabel = this.renderUnwatchedEpisodesInShowLabel.bind(this);
    this.renderUnwatchedEpisodesInSeasonLabel = this.renderUnwatchedEpisodesInSeasonLabel.bind(this);
  }

  selectSeasons(id, name, seasons) {
    this.setState({ show: { id, name }, seasons, season: '', episodes: [] });
  }

  selectEpisodes(season, episodes) {
    this.setState({ season, episodes });
  }

  toggleEpisodeWatched(episodeId) {
    if (this.isEpisodeWatched(episodeId)) {
      this.props.dispatch(removeWatchedEpisode(episodeId));
    } else {
      this.props.dispatch(addWatchedEpisode(episodeId));
    }
  }

  isEpisodeWatched(episodeId) {
    return this.props.myShows.watchedEpisodes.includes(episodeId);
  }

  countUnwatchedEpisodesInShow(showId) {
    const { showData } = this.props.myShows;
    const show = showData.find(({ show: { id } }) => id === showId);
    let count = 0;
    if (show) {
      show.seasons.forEach((season) => season.episodes.filter(({ id }) => !this.isEpisodeWatched(id)).forEach(() => count += 1));
    }
    return count;
  }

  countUnwatchedEpisodesInSeason(showId, seasonId) {
    const { showData } = this.props.myShows;
    const show = showData.find(({ show: { id } }) => id === showId);
    let count = 0;
    if (show) {
      const season = show.seasons.find(({ season : { id } }) => id === seasonId);
      if (season) {
        season.episodes.filter(({ id }) => !this.isEpisodeWatched(id)).forEach(() => count += 1);
      }
    }
    return count;
  }

  renderUnwatchedEpisodesInShowLabel(showId) {
    const count = this.countUnwatchedEpisodesInShow(showId);
    return this.renderUnwatchedEpisodesLabel(count);
  }

  renderUnwatchedEpisodesInSeasonLabel(showId, seasonId) {
    const count = this.countUnwatchedEpisodesInSeason(showId, seasonId);
    return this.renderUnwatchedEpisodesLabel(count);
  }

  renderUnwatchedEpisodesLabel(count) {
    return count ? (<strong>({count})</strong>) : '';
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
                  <ListItem key={data.show.id} onClick={() => this.selectSeasons(data.show.id, data.show.name, data.seasons)}>
                    {data.show.id} - {data.show.name} {this.renderUnwatchedEpisodesInShowLabel(data.show.id)}
                  </ListItem>);
              }
              )
              }
            </List>
          </Cell>
          <Cell>
            <h3>Seasons</h3>
            <List>
              <Subheader>{this.state.show.name}</Subheader>
              {this.state.seasons.map((data) => (
                <ListItem key={data.season.id} onClick={() => this.selectEpisodes(data.season.number, data.episodes)}>
                  Season  {data.season.number} {this.renderUnwatchedEpisodesInSeasonLabel(this.state.show.id, data.season.id)}
                </ListItem>
              ))}
            </List>
          </Cell>
          <Cell>
            <h3>Episodes</h3>
            <List>
              <Subheader>{this.state.season && `Season ${this.state.season}`}</Subheader>
              {this.state.episodes.map((data) => (
                <ListItem key={data.id} onClick={() => this.toggleEpisodeWatched(data.id)}>
                  {data.name} - {data.name} {this.isEpisodeWatched(data.id) ? (<strong>(watched)</strong>) : ''}
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
  context: makeSelectContext(),
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
