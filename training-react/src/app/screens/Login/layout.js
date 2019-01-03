import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { customInput } from '../../components/Field';

import { required, minLength, isEmail } from './validation';
import styles from './styles.scss';

function LoginDetails({ login, ...props }) {
  const { handleSubmit, err } = props;
  return (
    <div className={styles.login}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit(login)}>
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

LoginDetails.propTypes = {
  handleSubmit: PropTypes.func,
  login: PropTypes.func,
  err: PropTypes.string
};

export default LoginDetails;
