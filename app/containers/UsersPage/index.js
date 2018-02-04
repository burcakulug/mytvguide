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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUsersPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

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
          onSubmit={(values, actions) => console.log(values, actions)}
          render={() => (
            <Form>
              <div>
                <Field
                  name="q"
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
                <RaisedButton style={{ marginLeft: '20px' }} type="submit" label="Add" />
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}

UsersPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userspage: makeSelectUsersPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'usersPage', reducer });
const withSaga = injectSaga({ key: 'usersPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UsersPage);
