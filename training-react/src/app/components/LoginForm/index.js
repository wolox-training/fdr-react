import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { customInput } from '../Field';

import styles from './styles.scss';
import { required, minLength, isEmail } from './validation';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={styles.register}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* eslint-disable prettier/prettier */}
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
      </div>
    );
  }
}

LoginForm = reduxForm({ // eslint-disable-line no-class-assign 
  form: 'register'
})(LoginForm);

LoginForm.propTypes = {
  handleSubmit: PropTypes.objectOf()
};

export default LoginForm;
