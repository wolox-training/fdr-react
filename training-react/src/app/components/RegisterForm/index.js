import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { customInput } from '../Field';

import styles from './styles.scss';
import { required, minLength, isEmail, matchesPassword } from './validation';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={styles.register}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {/* eslint-disable prettier/prettier */}
          <Field
            name="username"
            component={customInput}
            type="text"
            label="Username"
            validate={[required]}
          />
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
          <Field
            name="confirmPassword"
            component={customInput}
            type="password"
            label="Confirm Password"
            validate={[required, minLength, matchesPassword]}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

RegisterForm = reduxForm({ // eslint-disable-line no-class-assign 
  form: 'register'
})(RegisterForm);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.objectOf()
};

export default RegisterForm;
