import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import userActions from '../../../redux/user/actions';

import LoginDetails from './layout';

class LoginForm extends Component {
  login = values => {
    const { getUser, history } = this.props;
    getUser(values);
    history.push('/game');
  };

  render() {
    return <LoginDetails login={this.login} {...this.props} />;
  }
}

LoginForm.propTypes = {
  getUser: PropTypes.func,
  history: PropTypes.shape()
};

const mapStateToProps = state => ({
  user: state.users.user,
  err: state.users.userError
});

const mapDispatchToProps = dispatch => ({
  getUser: values => dispatch(userActions.getUser(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'register'
  })(LoginForm)
);
