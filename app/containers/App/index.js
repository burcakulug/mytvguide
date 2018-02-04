/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import HomePage from 'containers/HomePage/Loadable';
import UsersPage from 'containers/UsersPage/Loadable';
import ShowsPage from 'containers/ShowsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import './styles.css';

export default function App() {
  return (
    <div>
      <AppBar
        title={<span>My TV Guide</span>}
        showMenuIconButton={false}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem primaryText="Home" containerElement={<Link to="/" />} />
            <MenuItem primaryText="Users" containerElement={<Link to="/users" />} />
            <MenuItem primaryText="Shows" containerElement={<Link to="/shows" />} />
          </IconMenu>}
      />
      <div style={{ margin: '20px' }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/shows" component={ShowsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}
