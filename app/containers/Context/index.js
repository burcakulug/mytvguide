/**
 *
 * Context
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContext from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Context extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, ...rest } = this.props;
    return (
      <div {...rest}>
        {children}
      </div>
    );
  }
}

Context.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  context: makeSelectContext(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'context', reducer });
const withSaga = injectSaga({ key: 'context', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Context);
