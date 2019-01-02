import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { customInput } from '../../../../components/Field';
import { required, isEmail } from '../../components/Login/validation';

import styles from './styles.scss';

function UserEditDetails({ onSubmit, ...props }) {
  const { handleSubmit } = props;
  return (
    <div className={styles.desc}>
      <h2 className={styles.title}>Edit</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="username" component={customInput} type="text" label="Username" />
        <Field name="fullname" component={customInput} type="text" label="Fullname" />
        <Field name="gender" component={customInput} type="text" label="Gender" />
        <Field name="country" component={customInput} type="text" label="Country" />
        <Field name="mail" component={customInput} type="text" label="Mail" validate={[required, isEmail]} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

UserEditDetails.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func
};

export default UserEditDetails;
