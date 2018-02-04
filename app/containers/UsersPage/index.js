/**
*
* UsersPage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Formik, Form, Field } from 'formik';
import { TextField, RaisedButton } from 'material-ui';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUsers, makeSelectSelectedUser } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { createUser, selectUser } from './actions';

export class UsersPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>UsersPage</title>
          <meta name="description" content="Description of UsersPage" />
        </Helmet>
        <h2><FormattedMessage {...messages.header} /></h2>
        <Formik
          onSubmit={(values, actions) => {
            this.props.createUser(values.name);
            actions.setSubmitting(false);
          }
          }
          render={() => (
            <Form>
              <div>
                <Field
                  name="name"
                  render={({ field: { name }, form: { handleChange, setFieldTouched } }) => (
                    <TextField
                      name={name}
                      hintText="Enter user's name"
                      onChange={(event) => {
                        handleChange(event);
                        setFieldTouched(name);
                      }}
                    />
                  )}
                />
                <RaisedButton style={{ marginLeft: '20px' }} type="submit" label="Create" />
              </div>
            </Form>
          )}
        />
        <div>
          <List>
            <Subheader>Current Users</Subheader>
            {this.props.users.map(({ name }) => (
              <ListItem key={name} primaryText={`${name} - ${this.props.selectedUser === name}`} onClick={() => this.props.selectUser(name)} />))}
          </List>
        </div>
      </div>
    );
  }
}

UsersPage.propTypes = {
  createUser: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  selectedUser: makeSelectSelectedUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    createUser: (name) => dispatch(createUser(name)),
    selectUser: (name) => dispatch(selectUser(name)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'users', reducer });
const withSaga = injectSaga({ key: 'users', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UsersPage);
