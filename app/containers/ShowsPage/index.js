/**
 *
 * ShowsPage
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
import { TextField, RaisedButton, List, ListItem } from 'material-ui';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectShowsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { searchShows } from './actions';
import { addShow } from '../MyShows/actions';

export class ShowsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { searchResult } = this.props.showsPage;
    return (
      <div>
        <Helmet>
          <title>ShowsPage</title>
          <meta name="description" content="Description of ShowsPage" />
        </Helmet>
        <h2><FormattedMessage {...messages.header} /></h2>
        <Formik
          onSubmit={(values, actions) => {
            console.log(values);
            this.props.searchShows(values.q);
            actions.setSubmitting(false);
          }
          }
          render={() => (
            <Form>
              <div>
                <Field
                  name="q"
                  render={({ field: { name }, form: { handleChange, setFieldTouched } }) => (
                    <TextField
                      name={name}
                      hintText="Enter show name"
                      onChange={(event) => {
                        handleChange(event);
                        setFieldTouched(name);
                      }}
                    />
                  )}
                />
                <RaisedButton style={{ marginLeft: '20px' }} type="submit" label="Search" />
              </div>
            </Form>
          )}
        />
        <div>
          {searchResult &&
            (<List>
              {searchResult.map((item) => (
                <ListItem key={item.show.id} onClick={() => this.props.addShow(item.show.id)}>
                  {`${item.show.name} (${(item.show.network && item.show.network.name) || 'N/A'})`}
                </ListItem>
              ))}
            </List>)
          }
        </div>
      </div>
    );
  }
}

ShowsPage.propTypes = {
  searchShows: PropTypes.func.isRequired,
  addShow: PropTypes.func.isRequired,
  showsPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  showsPage: makeSelectShowsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    searchShows: (q) => dispatch(searchShows(q)),
    addShow: (id) => dispatch(addShow(id)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'showsPage', reducer });
const withSaga = injectSaga({ key: 'showsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ShowsPage);
