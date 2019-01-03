import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { customInput } from '../Field';
import userActions from '../../../redux/user/actions';

import styles from './styles.scss';
import { required, minLength, isEmail } from './validation';

class LoginForm extends Component {
  login = values => {
    const { getUser, history } = this.props;
    getUser(values);
    history.push('/game');
  };

  render() {
    const { handleSubmit, err } = this.props;
    return (
      <div className={styles.login}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit(this.login)}>
          <Field
            name="email"
            component={customInput}
            type="email"
            label="Email"
            validate={[required, isEmail]}
          />
          <Field
            name="password"
            component={customInput}
            type="password"
            label="Password"
            validate={[required, minLength]}
          />
          <button type="submit">Submit</button>
        </form>
        {err && <div className={styles.error}>User-password not found</div>}
      </div>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  getUser: PropTypes.func,
  history: PropTypes.shape(),
  err: PropTypes.string
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
