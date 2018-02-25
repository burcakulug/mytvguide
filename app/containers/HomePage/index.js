/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Cell } from 'styled-css-grid';
import messages from './messages';

import Shows from '../Shows';
import Seasons from '../Seasons';
import Episodes from '../Episodes';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Grid columns={3}>
          <Cell><Shows /></Cell>
          <Cell><Seasons /></Cell>
          <Cell><Episodes /></Cell>
        </Grid>
      </div>
    );
  }
}
